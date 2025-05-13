import Marquee from "@/components/UpperText";

export default function Home() {
  return (
    <div>
       <div className="relative h-[25px] overflow-hidden bg-red-500 flex justify-between">
       <Marquee
        items={[
          'Frontend Developer',
          'Beyza Özer',
          'Frontend Developer',
          'Beyza Özer',
          'Frontend Developer',
          'Beyza Özer',
          'Frontend Developer',
          'Beyza Özer',
          'Frontend Developer',
          'Beyza Özer',
          'Frontend Developer',
          'Beyza Özer',
        ]}
        speed={24}  // istersen döngüyü 12s yap
      />
      </div>
    </div>
  );
}
