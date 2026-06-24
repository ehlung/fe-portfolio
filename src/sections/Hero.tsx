export default function Hero() {
  return (
    <section className="mx-auto flex h-dvh min-h-dvh w-full max-w-250 flex-col items-start justify-center p-0 max-[360px]:h-auto max-[360px]:pt-25 min-[700px]:max-h-[700px]:h-auto min-[700px]:max-h-[700px]:pt-25">
      <h1
        className="mb-7 ml-1 font-mono text-[clamp(14px,5vw,16px)] font-normal text-teal max-[480px]:mb-5 max-[480px]:ml-0.5"
        style={{ animation: "heroFadeUp 0.5s ease 0.05s both" }}
      >
        PORTFOLIO - 강예령 / FRONTEND
      </h1>

      <h2
        className="font-korean m-0 text-[clamp(34px,6vw,64px)] font-bold leading-[1.16] text-slate-main text-balance tracking-[0.024em]"
        style={{ animation: "heroFadeUp 0.5s ease 0.15s both" }}
      >
        사용자를 생각하는 화면을 만드는
      </h2>

      <h3
        className="font-korean mt-1 text-[clamp(34px,6vw,64px)] font-bold leading-[1.08] text-slate-main text-balance tracking-[0.024em]"
        style={{ animation: "heroFadeUp 0.5s ease 0.25s both" }}
      >
        <span className="text-teal">프론트엔드 개발자,</span>
        <br />
        강예령입니다.
      </h3>

      <div
        className="font-korean mt-8 max-w-165 text-[19px] leading-[1.65] text-slate-muted text-pretty max-[480px]:text-[16px]"
        style={{ animation: "heroFadeUp 0.5s ease 0.35s both" }}
      >
        <p>
          서비스의 흐름을 이해하고, 목적에 맞는 화면을 안정적으로 구현합니다.
        </p>
      </div>
    </section>
  );
}
