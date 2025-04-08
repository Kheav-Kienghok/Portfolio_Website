import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (paused) return;

      setProgress((prev) => {
        const next = prev + 1;

        // Pause at 90%
        if (next === 90) {
          setPaused(true);
          setTimeout(() => setPaused(false), 1000); // Pause for 1s
        }

        // Finish at 100%
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 1000);
        }

        return next;
      });
    }, 60); // control speed here
    return () => clearInterval(interval);
  }, [paused, onFinish]);

  return (
    <div className="font-[Lato-thin] flex flex-col items-center justify-center w-screen h-screen bg-black text-white transition-opacity duration-1000"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <p className="font-funnel mb-6 text-sm tracking-widest text-gray-400 animate-pulse"
        style={{ color: "#9CA3AF" }}
      >
        L O A D I N G . . .
      </p>

      <div className="w-4/5 md:w-2/3 h-5 bg-[#222] rounded-full shadow-inner overflow-hidden relative"
        style={{ backgroundColor: "#222" }}
      >
        <div
          className="h-full bg-white shadow-[0_0_12px_#00ffff] transition-all duration-200 ease-out"
          style={{
            backgroundColor: "white",
            boxShadow: "0 0 12px #00ffff",
            width: `${progress}%`,
          }}
        ></div>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400"
          style={{ color: "#9CA3AF" }}
        >
          {progress}%
        </span>
      </div>

      <p className="mt-6 text-xs text-gray-500 italic opacity-70"
        style={{ color: "#6B7280" }}
      >
        Initial boot sequence...
      </p>
    </div>
  );
}
