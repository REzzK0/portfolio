type FlowDividerProps = {
  label: string;
  side?: "left" | "right";
};

export function FlowDivider({ label, side = "right" }: FlowDividerProps) {
  const isRight = side === "right";

  return (
    <div className="pointer-events-none px-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center gap-5 py-2">
        <div
          className={`hidden h-px flex-1 bg-[#1C120A]/10 sm:block ${
            isRight ? "order-1" : "order-3"
          }`}
        />
        <div className="order-2 flex flex-1 items-center justify-center sm:flex-none">
          <div className="scroll-drift w-full max-w-[360px] sm:w-[360px]">
            <div className="flow-divider reveal-scale relative h-28 w-full">
              <svg
                className={`absolute inset-0 h-full w-full ${
                  isRight ? "" : "-scale-x-100"
                }`}
                fill="none"
                viewBox="0 0 360 112"
                aria-hidden="true"
              >
                <path
                  className="flow-path"
                  d="M18 72C76 4 126 110 176 54C205 22 231 18 249 34C268 51 255 79 232 75C205 70 207 26 251 21C291 17 320 39 341 68"
                  stroke="#FF7A00"
                  strokeLinecap="round"
                  strokeWidth="2.2"
                />
                <path
                  d="M331 46L343 69L318 68"
                  stroke="#FF7A00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                />
              </svg>
              <span className="absolute left-1/2 top-1/2 rounded-full border border-[#1C120A]/10 bg-[#FFF7EC]/86 px-4 py-2 text-sm font-semibold text-[#7A4B22] shadow-[0_18px_60px_rgba(28,18,10,0.08)] backdrop-blur-sm -translate-x-1/2 -translate-y-1/2">
                {label}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`hidden h-px flex-1 bg-[#1C120A]/10 sm:block ${
            isRight ? "order-3" : "order-1"
          }`}
        />
      </div>
    </div>
  );
}
