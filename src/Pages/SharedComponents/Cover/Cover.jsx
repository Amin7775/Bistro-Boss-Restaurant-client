import { Parallax } from 'react-parallax';


const Cover = ({img,heading, description}) => {
  return (
    <Parallax
    blur={{ min: -20, max: 20 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className="hero h-[700px] font-customCinzel"
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 w-[85%] mx-auto py-20">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-8xl font-light text-white">{heading}</h1>
          <p className="mb-5 text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
</Parallax>
    
  );
};

export default Cover;
