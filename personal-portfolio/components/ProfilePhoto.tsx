import Image from 'next/image'

const ProfilePhoto = () => {
  return (
    <div className="w-56 h-56 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden relative bg-red-200">
      sdfoasdkf
      <Image
        src="/assets/beyzaozer.png"
        alt="Picture of the author"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 160px,
               (max-width: 768px) 160px,
               (max-width: 1024px) 224px,
               288px"
      />
    </div>
  );
};

export default ProfilePhoto;
