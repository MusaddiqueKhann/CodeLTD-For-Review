const ANIMATION_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap');

  @keyframes cb-pop-in {
    0%   { opacity: 0; transform: scale(0.88) translateY(12px); }
    65%  { transform: scale(1.02) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes cb-slide-up {
    0%   { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes cb-slide-left {
    0%   { opacity: 0; transform: translateX(12px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes cb-slide-right {
    0%   { opacity: 0; transform: translateX(-12px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes cb-bounce-dot {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
    40% { transform: translateY(-5px); opacity: 1; }
  }
  @keyframes cb-shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes cb-glow-pulse {
    0%, 100% { box-shadow: 0 0 18px rgba(241,90,41,0.45), 0 4px 20px rgba(241,90,41,0.2); }
    50%       { box-shadow: 0 0 30px rgba(241,90,41,0.70), 0 4px 28px rgba(241,90,41,0.35); }
  }
  @keyframes cb-status-ping {
    0%   { transform: scale(1); opacity: 0.8; }
    75%  { transform: scale(2.2); opacity: 0; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes cb-window-in {
    0%   { opacity: 0; transform: scale(0.92) translateY(16px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes cb-badge-pop {
    0%   { transform: scale(0); }
    70%  { transform: scale(1.25); }
    100% { transform: scale(1); }
  }
  @keyframes cb-rotate-in {
    0%   { transform: rotate(-180deg) scale(0.5); opacity: 0; }
    100% { transform: rotate(0deg)    scale(1);   opacity: 1; }
  }
  @keyframes cb-rotate-out {
    0%   { transform: rotate(0deg)   scale(1);   opacity: 1; }
    100% { transform: rotate(180deg) scale(0.5); opacity: 0; }
  }
  @keyframes noise-move {
    0%   { transform: translate(0,0); }
    20%  { transform: translate(-2px, 2px); }
    40%  { transform: translate(2px,-2px); }
    60%  { transform: translate(-1px, 3px); }
    80%  { transform: translate(3px,-1px); }
    100% { transform: translate(0,0); }
  }
  @keyframes cb-header-shimmer {
    0%   { opacity: 0.5; }
    50%  { opacity: 1; }
    100% { opacity: 0.5; }
  }

  .animate-cb-pop    { animation: cb-pop-in     0.35s cubic-bezier(.34,1.56,.64,1) both; }
  .animate-cb-slide-up    { animation: cb-slide-up   0.28s ease both; }
  .animate-cb-slide-left  { animation: cb-slide-left 0.30s cubic-bezier(.25,.46,.45,.94) both; }
  .animate-cb-slide-right { animation: cb-slide-right 0.30s cubic-bezier(.25,.46,.45,.94) both; }
  .animate-cb-dot    { animation: cb-bounce-dot 1.4s ease infinite; }
  .animate-shimmer-label {
    background: linear-gradient(90deg,#1c1b18 0%,#3d3b36 40%,#1c1b18 100%);
    background-size: 200% 100%;
    animation: cb-shimmer 2.8s infinite linear;
  }
  .animate-glow      { animation: cb-glow-pulse 2.4s ease-in-out infinite; }
  .animate-badge     { animation: cb-badge-pop 0.4s cubic-bezier(.34,1.56,.64,1) both; }
  .animate-window-in { animation: cb-window-in 0.36s cubic-bezier(.25,.46,.45,.94) both; }

  /* Custom scrollbar */
  .cb-scroll::-webkit-scrollbar       { width: 3px; }
  .cb-scroll::-webkit-scrollbar-track { background: transparent; }
  .cb-scroll::-webkit-scrollbar-thumb { background: rgba(241,90,41,0.25); border-radius: 99px; }
  .cb-scroll::-webkit-scrollbar-thumb:hover { background: rgba(241,90,41,0.5); }

  /* Glass utility */
  .cb-glass {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
`;

export default ANIMATION_STYLES;
