import ProfilePhoto from "@/components/ProfilePhoto";

export default function Home() {
  return (
    <div className="z-10 relative flex flex-col items-center justify-start min-h-screen px-4 py-16">
      <ProfilePhoto />
      <div className="h-6 sm:h-8 md:h-12" />
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-center mb-4 pixel typing max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] leading-tight">
        Frontend Developer.
      </h1>
    </div>
  );
}
