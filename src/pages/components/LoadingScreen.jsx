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

      <p
        className="mb-6 text-[15px] lg:text-lg md:text-xl sm:text-sm tracking-[0.1em] lg:tracking[0.4em] mg:tracking[0.3em] font-mono text-cyan-300 animate-pulse"
        style={{
          textShadow: `
            0 0 4px #00ffff,
            0 0 8px #00ffff,
            0 0 12px #00ffff,
            0 0 20px #00ffff
          `,
        }}
      >
        L O A D I N G&nbsp;.&nbsp;.&nbsp;.
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
        <span
          className="font-extrabold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-shadow-lg"
          style={{
            color: progress >= 53 ? "black" : "#9CA3AF",  // Change color when progress reaches 60%
          }}
        >
          {progress}%
        </span>

      </div>

      <div className="space-y-5">
        <p
          className="text-center text-sm font-mono mt-5 leading-[22px] text-cyan-400 
          animate-fadeIn tracking-wide transform transition-all duration-300 "
          style={{
            textShadow: '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.7), 0 0 15px rgba(0, 255, 255, 0.7)',
            letterSpacing: '0.1em',
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Hang tight, <br />
          we're fetching some data ... <br />
          Grab a snack, <br />
          this might take a sec. 😎
        </p>
      </div>

    </div>
  );
}
