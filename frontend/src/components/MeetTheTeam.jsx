import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Member = ({ frontText, backText, imageSrc, socialLink }) => {
  return (
    <div className="group w-80 h-80 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary text-white font-semibold text-xl rounded-lg [backface-visibility:hidden] p-6">
          <img src={imageSrc} alt="Profile" className="w-36 h-36 rounded-full mb-4 border-4 border-white object-cover" />
          <p className="text-secondary font-merienda font-bold text-2xl">{frontText.Name}</p>
          <p className="text-gray-200 text-lg italic">{frontText.Role}</p>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center bg-secondary text-white font-semibold text-xl rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-6">
          <p>{backText}</p>
          {socialLink && (
            <a href={socialLink} target="_blank" rel="noopener noreferrer" className="mt-2 text-3xl text-white hover:text-primary">
              {frontText.Role.includes("Videographer") ? <FaInstagram /> : <FaLinkedin />}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const MeetTheTeam = () => {
  return (
<section className="p-1">
<h2 className="text-5xl font-bold text-secondary text-center sm:p-6 font-breathney mb-2">Meet the Team</h2>
<h2 className="text-sm sm:text-xl font-bold text-slate-600 text-center sm:p-3 font-oxygen mb-">"We are the backbone of Vedha Clothing, ensuring everything runs smoothly behind the scenes!"</h2>
<div className="flex sm:gap-8 p-3 gap-4 sm:p-12 flex-wrap justify-center">
      <Member frontText={{ Name: "Kishore VK", Role: "Videographer/Editor" }} backText="Capturing every detail of our products with style to showcase the beauty of our clothing." imageSrc="/team/Kishore.webp" socialLink="https://www.instagram.com/kishore_._vk/?igsh=MXdyNmozc3hhZzJ2Zw%3D%3D#" />
      <Member frontText={{ Name: "Krish", Role: "Website Developer" }} backText="I design and develop visually appealing, high-performance websites that strengthen our brand's online presence." imageSrc="/team/Krish.webp" socialLink="https://www.linkedin.com/in/krish" />
      <Member frontText={{ Name: "Rathina Cholan", Role: "Videographer/Editor" }} backText="Ensuring our videos are top-notch to bring out the vibrance of our designs." imageSrc="/team/Kishore1.webp" socialLink="https://www.instagram.com/rathina_cholas/?igsh=MW1nbHdsNmlkejBvaQ%3D%3D#" />
      <Member frontText={{ Name: "Raj", Role: "Website Developer" }} backText="I create user-friendly and visually compelling websites that drive engagement and growth." imageSrc="/team/raj.png" socialLink="https://www.linkedin.com/in/raj-rathinam-s-55b09530a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " />
    </div>
</section>
  );
};

export default MeetTheTeam;