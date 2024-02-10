import Image from "next/image";

const HelpPageTopImage = ({ imagePath, altName, headerInImage }) => {
  return (
    <div className="   ">
      <div className="relative  ">
        <Image
          alt={altName}
          priority
          src={imagePath}
          placeholder="blur"
          blurDataURL={imagePath}
          width={2500}
          height={310}
        />
      </div>
      <div className="absolute sm:text-base text-[30px] font-bold  ml-auto mr-auto right-0 left-0 text-center sm:top-[50%] top-[50%] text-white uppercase ">
        {headerInImage}
      </div>
    </div>
  );
};

export default HelpPageTopImage;
