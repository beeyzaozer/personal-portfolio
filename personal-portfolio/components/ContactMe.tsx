import SocialMedia from "./SocialMedia";

type SocialMedias = {
  title: string;
  description: string;
};

const socialMedias: SocialMedias[] = [
  { title: "Linkedin", description: "beeyzaozer" },
  { title: "Github", description: "Beyza Özer" },
  { title: "Email", description: "beeyzaozer@gmail.com" },
];

function ContactMe() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 mt-6">
        {socialMedias.map((socialMedia, index) => (
          <SocialMedia key={index} socialMedia={socialMedia} />
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
