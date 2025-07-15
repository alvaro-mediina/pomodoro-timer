interface logoProps {
  offEmogis?: boolean;
}

function Logo({ offEmogis = false }: logoProps) {
  return (
    <div className="h-20 flex flex-col justify-center select-none text-white">
      <h1 className="extrabold text-3xl leading-none mt-0 mb-0">POMODORO</h1>
      <div
        className={`w-full light text-xl flex flex-row items-center gap-3 ${
          offEmogis ? 'justify-center' : 'justify-between'
        }`}
      >
        {!offEmogis && (
          <>
            <h2>🍅</h2>
            <h2 className="tracking-[.5em]">TIMER</h2>
            <h2>⏰</h2>
          </>
        )}
        {offEmogis && <h2 className="tracking-[.5em]">TIMER</h2>}
      </div>
    </div>
  );
}

export default Logo;
