
// react parallax
import { Parallax } from 'react-parallax';

const MenuCover = ({img,heading, description}) => {
    return (
      <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
  >
      <div
          className="hero h-[450px] font-customCinzel"
          
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 w-[85%] mx-auto py-12">
            <div className="max-w-xl">
              <h1 className="mb-5 text-7xl font-light text-white mt-5">{heading}</h1>
              <p className="mb-5 text-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
  </Parallax>
        
      );
    };
    ;

export default MenuCover;