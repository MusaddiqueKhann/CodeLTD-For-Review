import React, { useState, useRef, useEffect } from "react";
import { useLang } from "../../context/LanguageContext";
import chatbotEnData from "../../data/english/chatbot";
import chatbotArData from "../../data/arabic/chatbot";

// ============================
// GEMINI REST API HELPER
// ============================
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL   = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

import ANIMATION_STYLES from "./chatbotStyles";
import { getTime }      from "./chatbotUtils";
import BotAvatar        from "./BotAvatar";
import MessageBubble    from "./MessageBubble";
import TypingIndicator  from "./TypingIndicator";
import QuickReplies     from "./QuickReplies";

/**
 * Calls the Gemini REST API with the full conversation history.
 */
async function callGemini(apiKey, systemPrompt, history, userMessage) {
  const contents = [
    ...history,
    { role: "user", parts: [{ text: userMessage }] },
  ];

  const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

// ============================
// MAIN CHATBOT COMPONENT
// ============================
export default function Chatbot({ navigate }) {
  const { isAr } = useLang();
  const data = isAr ? chatbotArData : chatbotEnData;
  const rtl  = isAr;
  const mainMenuLabel = isAr ? "القائمة الرئيسية" : "Main Menu";

  const [open, setOpen]                 = useState(false);
  const [messages, setMessages]         = useState([]);
  const [input, setInput]               = useState("");
  const [typing, setTyping]             = useState(false);
  const [hasUnread, setHasUnread]       = useState(false);
  const [userName, setUserName]         = useState(null);
  const [awaitingName, setAwaitingName] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);

  const bottomRef    = useRef(null);
  const inputRef     = useRef(null);

  const historyRef      = useRef([]);
  const systemPromptRef = useRef("");

  const SESSION_KEY = "codeChatSession";
  const ONE_HOUR    = 60 * 60 * 1000;

  const addBotMessage = (text, quickReplies = []) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now() + Math.random(), role: "bot", text, quickReplies, time: getTime() },
    ]);
  };

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY);
    const now    = Date.now();

    if (stored) {
      const { name, timestamp, refreshCount = 0 } = JSON.parse(stored);
      if (now - timestamp < ONE_HOUR) {
        const next = refreshCount + 1;
        if (next >= 2) {
          localStorage.removeItem(SESSION_KEY);
        } else {
          localStorage.setItem(
            SESSION_KEY,
            JSON.stringify({ name, timestamp, refreshCount: next })
          );
          setUserName(name);
          setAwaitingName(false);
          setMessages([{
            id: Date.now(), role: "bot", time: getTime(),
            text: isAr
              ? `مرحباً بعودتك يا **${name}**! يسعدني خدمتك مجدداً. \n\n${data.greeting}`
              : `Welcome back, **${name}**! Great to see you again. \n\n${data.greeting}`,
            quickReplies: data.categories.map(c => c.label),
          }]);
          return;
        }
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    }

    setAwaitingName(true);
    setMessages([{
      id: Date.now(), role: "bot", time: getTime(),
      text: isAr
        ? "مرحباً بك في CODE LTD! أنا المساعد الذكي الخاص بك، هنا لتقديم الدعم السريع والإجابة على كافة استفساراتك حول خدماتنا وحلولنا الرقمية.\n\nلتجربة أفضل، هل يمكنني معرفة اسمك الكريم؟"
        : "Welcome to **CODE LTD**! I'm your AI-powered assistant — here to provide seamless support and answer any questions about our digital solutions.\n\nTo personalise your experience, may I ask for your name?",
      quickReplies: [],
    }]);
  }, [isAr]);

  useEffect(() => {
    if (awaitingName) return;
    systemPromptRef.current = isAr
      ? `أنت مساعد ذكي واحترافي لشركة CODE LTD. أنت تتحدث الآن مع مستخدم اسمه "${userName}". استخدم هذه البيانات للإجابة على الأسئلة إن أمكن: ${JSON.stringify(data)}. أجب بوضوح وإيجاز واحترافية وبنبرة مهذبة ومرحبة. لا تستخدم الجداول (Tables) أبداً. استخدم فقرات قصيرة ونقاط (Bullet points) عند الحاجة لتكون القراءة سهلة كالمحادثات النصية.`
      : `You are a professional AI assistant for CODE LTD. You are speaking with "${userName}". Use this data to answer questions: ${JSON.stringify(data)}. Be clear, concise, warm. Never use markdown tables. Use short paragraphs and bullets only when helpful.`;
    historyRef.current = [];
  }, [isAr, userName, awaitingName, data]);

  useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (text) => {
    const userText = text.trim();
    if (!userText) return;

    setMessages(prev => [
      ...prev,
      { id: Date.now(), role: "user", text: userText, time: getTime() },
    ]);
    setInput("");
    setTyping(true);

    if (!awaitingName && userName) {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) || "{}");
      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ name: userName, timestamp: Date.now(), refreshCount: s.refreshCount || 0 })
      );
    }

    if (awaitingName) {
      setTimeout(() => {
        setUserName(userText);
        setAwaitingName(false);
        localStorage.setItem(
          SESSION_KEY,
          JSON.stringify({ name: userText, timestamp: Date.now(), refreshCount: 0 })
        );
        setTyping(false);
        addBotMessage(
          isAr
            ? `تشرفنا بك يا **${userText}**! \n\n${data.greeting}`
            : `A pleasure to meet you, **${userText}**! \n\n${data.greeting}`,
          data.categories.map(c => c.label)
        );
        if (!open) setHasUnread(true);
      }, 700);
      return;
    }

    if (userText === mainMenuLabel) {
      setTimeout(() => {
        setTyping(false);
        addBotMessage(
          isAr
            ? `كيف يمكنني مساعدتك اليوم يا **${userName}**؟`
            : `What can I help you with today, **${userName}**?`,
          data.categories.map(c => c.label)
        );
      }, 500);
      return;
    }

    if (userText === data.contactLabel) {
      setTimeout(() => {
        setTyping(false);
        addBotMessage(
          isAr
            ? "سيتم تحويلك لصفحة التواصل في الحال..."
            : "Taking you to our contact page now...",
          [mainMenuLabel]
        );
        if (navigate) setTimeout(() => navigate("contact"), 900);
      }, 800);
      return;
    }

    const cat = data.categories.find(c => c.label === userText);
    if (cat) {
      setTimeout(() => {
        setTyping(false);
        addBotMessage(
          isAr
            ? `إليك بعض الأسئلة الشائعة حول **${cat.label}** يا **${userName}**. يمكنك سؤالي أي شيء آخر!`
            : `Here are some common questions about **${cat.label}**, **${userName}**. Feel free to ask anything else!`,
          [...cat.questions.map(q => q.q), mainMenuLabel]
        );
      }, 600);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing VITE_GEMINI_API_KEY");

      const replyText = await callGemini(
        apiKey,
        systemPromptRef.current,
        historyRef.current,
        userText
      );

      historyRef.current = [
        ...historyRef.current,
        { role: "user",  parts: [{ text: userText }] },
        { role: "model", parts: [{ text: replyText }] },
      ];

      setTyping(false);
      addBotMessage(replyText, [mainMenuLabel, data.contactLabel]);
      if (!open) setHasUnread(true);

    } catch (e) {
      console.error("Gemini REST error:", e);
      setTyping(false);
      addBotMessage(
        isAr
          ? "عذراً، أواجه صعوبة في الاتصال. يرجى المحاولة مجدداً."
          : "I'm having trouble connecting right now. Please try again.",
        [mainMenuLabel, data.contactLabel]
      );
    }
  };

  const latestMsgId = messages[messages.length - 1]?.id;
  const lastBotMsg  = [...messages].reverse().find(m => m.role === "bot");

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="font-['Cairo',sans-serif]">
      <style>{ANIMATION_STYLES}</style>

      {/* ======== FAB AREA ======== */}
      <div
        className={`fixed bottom-4 z-[9999] flex flex-col items-center gap-2 ${
          rtl ? "left-4" : "right-4"
        }`}
      >
        {/* Helper label — Hidden on mobile, visible on medium screens+ */}
        {!open && (
          <div 
            onClick={() => setOpen(true)} 
            className="hidden md:block cursor-pointer animate-cb-pop"
          >
            <div
              className={`
                animate-shimmer-label text-white/85 border border-white/10
                px-2.5 py-1 rounded-lg text-[9.5px] font-medium tracking-wide
                flex items-center gap-1 shadow-lg hover:scale-105 active:scale-95
                transition-transform duration-200
                ${rtl ? "flex-row-reverse" : ""}
              `}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span>{isAr ? "نحن هنا للمساعدة" : "We're here to help"}</span>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen(o => !o)}
          className={`
            relative w-[48px] h-[48px] rounded-full
            bg-gradient-to-br from-[#F15A29] via-[#e84e1e] to-[#b83710]
            flex items-center justify-center
            shadow-lg shadow-orange-600/40
            hover:scale-110 active:scale-95 transition-transform duration-200
            ${!open ? "animate-glow" : ""}
          `}
          aria-label="Toggle chat"
        >
          {hasUnread && !open && (
            <span className="animate-badge absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full text-[8px] text-white font-bold flex items-center justify-center">
              1
            </span>
          )}
          <span className="absolute inset-0 rounded-full border-2 border-white/10" />
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              open ? "opacity-0 scale-50 rotate-180" : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h8M8 13h5" strokeWidth="1.4" />
            </svg>
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-180"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>

      {/* ======== CHAT WINDOW ======== */}
      <div
        className={`
          fixed z-[9998] flex flex-col overflow-hidden
          w-[calc(100vw-2rem)] md:w-[340px] rounded-[20px]
          shadow-[0_32px_80px_rgba(0,0,0,0.28),0_8px_32px_rgba(241,90,41,0.12)]
          border border-white/[0.06]
          transition-all duration-350 ease-out
          ${rtl ? "left-4" : "right-4"}
          bottom-[76px]
          ${open
            ? "opacity-100 scale-100 translate-y-0 h-[500px] pointer-events-auto animate-window-in"
            : "opacity-0 scale-90 translate-y-6 h-0 pointer-events-none"
          }
        `}
      >
        <div className="relative flex-shrink-0 overflow-hidden bg-[#111010]">
          <div className="absolute top-0 left-1/4 w-40 h-20 bg-[#F15A29]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0   w-24 h-16 bg-[#F15A29]/10 rounded-full blur-2xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className={`relative z-10 flex items-center gap-2.5 px-3 py-3 ${rtl ? "flex-row-reverse" : ""}`}>
            <div className="relative">
              <BotAvatar size="w-9 h-9" />
              <span className={`absolute bottom-0 ${rtl ? "left-0" : "right-0"} w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#111010]`}>
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" style={{ animationDuration: "2s" }} />
              </span>
            </div>
            <div className={`flex-1 ${rtl ? "text-right" : ""}`}>
              <h3 className="m-0 text-white font-semibold text-[13px] tracking-tight leading-tight">
                {isAr ? "مساعد كود الذكي" : "CODE AI Assistant"}
              </h3>
              <div className={`flex items-center gap-1 mt-0.5 ${rtl ? "justify-end" : ""}`}>
                <span className="inline-block w-1 h-1 rounded-full bg-emerald-400" />
                <p className="m-0 text-white/45 text-[9px] tracking-wide uppercase font-medium">
                  {isAr ? "متصل الآن" : "Online"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/[0.08]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#F15A29]/60 to-transparent" />
        </div>

        <div
          className="cb-scroll flex-1 overflow-y-auto p-3 flex flex-col gap-2"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(241,90,41,0.06) 0%, transparent 65%), #f7f5f2",
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(241,90,41,0.06) 0%, transparent 65%), repeating-linear-gradient(0deg,transparent,transparent 23px,rgba(0,0,0,0.025) 23px,rgba(0,0,0,0.025) 24px), repeating-linear-gradient(90deg,transparent,transparent 23px,rgba(0,0,0,0.025) 23px,rgba(0,0,0,0.025) 24px)",
          }}
        >
          <div className={`flex items-center gap-2 py-1 ${rtl ? "flex-row-reverse" : ""}`}>
            <div className="flex-1 h-px bg-black/[0.06]" />
            <span className="text-[9px] text-gray-400 font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/80 border border-black/[0.06] shadow-sm">
              {isAr ? "اليوم" : "Today"}
            </span>
            <div className="flex-1 h-px bg-black/[0.06]" />
          </div>

          {messages.map((msg) => (
            <div key={msg.id}>
              <MessageBubble msg={msg} rtl={rtl} isLatest={msg.id === latestMsgId} />
            </div>
          ))}

          {typing && <TypingIndicator rtl={rtl} />}

          {!typing && lastBotMsg && lastBotMsg.quickReplies?.length > 0 && (
            <QuickReplies
              replies={lastBotMsg.quickReplies}
              onSend={sendMessage}
              rtl={rtl}
              mainMenuLabel={mainMenuLabel}
            />
          )}

          <div ref={bottomRef} className="h-1" />
        </div>

        <div
          className={`
            flex-shrink-0 px-2.5 py-2 flex items-center gap-1.5
            bg-white border-t border-black/[0.06]
            transition-all duration-200
            ${inputFocused ? "shadow-[0_-4px_20px_rgba(241,90,41,0.08)]" : ""}
          `}
        >
          <div
            className={`
              flex-1 flex items-center gap-2
              bg-[#f4f2ef] rounded-2xl px-3 py-2
              border transition-all duration-200
              ${inputFocused ? "border-[#F15A29]/40 bg-white shadow-sm" : "border-transparent"}
            `}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage(input)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder={data.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-[12px] text-[#1c1b18] placeholder-gray-400"
            />
          </div>

          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || typing}
            className={`
              w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center
              transition-all duration-200 active:scale-90
              ${input.trim() && !typing
                ? "bg-gradient-to-br from-[#F15A29] to-[#c94519] shadow-lg shadow-orange-500/35 hover:shadow-orange-500/50 hover:scale-105"
                : "bg-gray-100 cursor-not-allowed"
              }
            `}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={rtl ? "rotate-180" : ""}>
              <path
                d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"
                stroke={input.trim() && !typing ? "white" : "#aaa"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex-shrink-0 py-1.5 px-3 bg-white border-t border-black/[0.04] flex items-center justify-center gap-1">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
            <path d="M12 1L3 5v6c0 5.25 3.75 10.14 9 11.25C17.25 21.14 21 16.25 21 11V5l-9-4z" fill="#F15A29" fillOpacity="0.7" />
          </svg>
          <span className="text-[8px] text-gray-400 uppercase tracking-[0.12em] font-semibold">
            Powered by AI · CODE LTD
          </span>
        </div>
      </div>
    </div>
  );
}