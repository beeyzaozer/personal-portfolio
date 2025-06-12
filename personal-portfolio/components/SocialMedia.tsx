import { Mail, Linkedin, Github } from 'lucide-react';
import { JSX } from 'react';

type CardProps = {
  socialMedia: {
    title: string;
    description: string;
  };
};

function SocialMedia({ socialMedia }: CardProps) {
  const iconMap: Record<string, JSX.Element> = {
    Linkedin: <Linkedin />,
    Github: <Github />,
    Email: <Mail />,
  };

  const Icon = iconMap[socialMedia.title] || <Mail />; 

  return (
    <div className="flex items-center gap-4 border-2 border-red-200 bg-zinc-900 rounded-2xl px-3 py-2">
      <div className="bg-red-300 p-2 rounded-xl">{Icon}</div>
      <div className="flex flex-col items-start">
        <h4 className="text-red-300 font-bold">{socialMedia.title}</h4>
        <p>{socialMedia.description}</p>
      </div>
    </div>
  );
}

export default SocialMedia;
