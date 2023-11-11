import Image from "next/image";
import pc from "../../../public/assets/images/image-retro-pcs.jpg";

export const Article = ({ image, numero, title, text }) => {
  return (
    <article className="flex h-[162px] md:w-[350px] md:flex-grow">
      <div className="w-[100px] flex-none">
        <Image src={image} />
      </div>
      <div className="pl-6">
        <p className="text-GrayishBlue text-3xl font-bold">{numero}</p>
        <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer">
          {title}
        </h2>
        <p className="text-DarkGrayishBlue text-[16px]">{text}</p>
      </div>
    </article>
  );
};

//
