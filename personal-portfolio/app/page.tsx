import Marquee from "@/components/UpperText";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black-400 via-black to-black text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0 pointer-events-none" />
      <div className="absolute top-10 right-2/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse pointer-events-none" />

      <div className="z-10 relative">
        <div className="h-[25px] w-full overflow-hidden">
          <Marquee
            items={[
              "HTML5",
              "CSS3",
              "Javascript",
              "React",
              "Redux Toolkit",
              "Next.js",
              "TailwindCss",
              "HTML5",
              "CSS3",
              "Javascript",
              "React",
              "Redux Toolkit",
              "Next.js",
              "TailwindCss",
            ]}
            speed={52}
          />
        </div>
      </div>

      <div className="z-10 relative flex flex-col items-center justify-center min-h-[calc(100vh-25px)] px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 pixel typing">
          Hi, I am Beyza.
        </h1>
        <p className="text-center max-w-xl text-lg text-white/80">
           ben fe asdfjoa aodsfkoadf aosdfkoasdfk aodskfoskdf
        </p>
      </div>
    </main>
  );
}
