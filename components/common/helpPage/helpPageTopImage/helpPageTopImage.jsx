import Image from "next/image";

let imagePathAlternate =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAACAwQBAAf/xAAdEAADAAIDAQEAAAAAAAAAAAAAAQIDEhEhYRMx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAwIEBQEA/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAECAxIRE//aAAwDAQACEQMRAD8A9NkdLESxssSqCiR8jpYiWNlhdDqR8hoTLGJnlR3kYjmweTuSaaIOTKFUMbFUxZCcirEv9HWIb7GQNImljJZMqDmjMvQ04yKpobNEk2MVgPQdZFc0MVEc2Gsh1aHnmVqjtiZZDdxJ0DeY90KqgHYFWWJsKszroS67NqxLrsebBeZIqCVk25qsx9KNmcypWGshGrCVlV2L8y1ZAlkIlYSyHVZF5lyyGrIRrIasg02QeZW8gFWTvJ6C8hZigqzG1Yp2LrILeTsszRXqCXc1WT7G7FC5ZrSihWarJtjVRXebFKlYSsk3C+h5Zs40itZDfp6SbnfQeM2QaKvp6C8hM8gLyFqIK9IorILd9iHkAdlmYK1A7HbCkzuQnmX/AEdsdsK5O5OfEl0N3O3FcmbEpwPdD9zNxDox2NOJBse79Bd+iHZm405AVQ52C79EujNhlmVLocjuTEcV/DQYXJnJxjJJHPTmzOTmCyak96c6BbOZjGSRFs5sHY5sFiqQbZroHY5mEkinoz//2Q==";

const HelpPageTopImage = ({ imagePath, altName, headerInImage }) => {
  return (
    <div>
      <div className="relative  ">
        <Image
          alt={altName}
          priority
          src={imagePath}
          placeholder="blur"
          blurDataURL={imagePath || imagePathAlternate}
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
