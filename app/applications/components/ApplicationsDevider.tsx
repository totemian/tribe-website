export function ApplicationsDevider({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V100H0V50Z"
          fill="currentColor"
          className="text-[#F8FAF4]"
        />
      </svg>
    </div>
  );
}

export function CurvedDivider({
  flip = false,
  color = "#F8FAF4",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80V40C360 0 720 60 1080 40C1260 30 1380 45 1440 50V80H0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function OrbitalDivider() {
  return (
    <div className="relative py-12 overflow-hidden">
      {/* Orbital path lines */}
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto absolute inset-0"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 60C200 20 400 100 720 60C1040 20 1240 100 1540 60"
          stroke="#CFFF5E"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.5"
        />
        <path
          d="M-100 80C300 40 500 120 820 80C1140 40 1300 100 1540 70"
          stroke="#CFFF5E"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>

      {/* Floating elements along the path */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2">
        <div className="h-3 w-3 rounded-full bg-[#CFFF5E] shadow-lg shadow-[#CFFF5E]/30" />
      </div>
      <div className="absolute left-[45%] top-1/3 -translate-y-1/2">
        <div className="h-2 w-2 rounded-full bg-[#CFFF5E]/60" />
      </div>
      <div className="absolute right-[25%] top-2/3 -translate-y-1/2">
        <div className="h-4 w-4 rounded-full bg-[#CFFF5E]/40" />
      </div>
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#CFFF5E] shadow-md shadow-[#CFFF5E]/20" />
      </div>
    </div>
  );
}

export function FloatingTilesDivider() {
  return (
    <div className="relative py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 relative">
        {/* Floating tiles */}
        <div className="flex justify-center items-center gap-3">
          <div className="h-2 w-8 rounded-full bg-[#CFFF5E]/30" />
          <div className="h-2 w-2 rounded-full bg-[#CFFF5E]" />
          <div className="h-2 w-16 rounded-full bg-[#E8EBE4]" />
          <div className="h-2 w-2 rounded-full bg-[#CFFF5E]/60" />
          <div className="h-2 w-8 rounded-full bg-[#CFFF5E]/30" />
        </div>
      </div>
    </div>
  );
}

export function GradientBand({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#FDFEFB] to-transparent pointer-events-none z-10" />
      {children}
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#FDFEFB] to-transparent pointer-events-none z-10" />
    </div>
  );
}
