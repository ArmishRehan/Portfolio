import { useState } from "react";
import { ArrowRightCircle, Github, Video } from "lucide-react";

export const FlipCard = ({ imageSrc, heading, backText, link, video }) => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped(!flipped);

  return (
    <section id="projects">
      <div
        className="
          w-full 
          max-w-[340px] 
          sm:max-w-[360px] 
          md:max-w-[380px]
          h-[340px] 
          sm:h-[370px] 
          md:h-[400px] 
          cursor-pointer 
          mx-auto
        "
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="
              absolute w-full h-full rounded-2xl shadow-lg overflow-hidden
              bg-white dark:bg-gray-900
            "
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={imageSrc}
              alt={heading}
              className="w-full h-2/3 object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="p-3 flex flex-col items-center justify-center h-1/3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
              <h3 className="text-base sm:text-lg font-semibold text-center">
                {heading}
              </h3>
              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-1">
                <span>Tap to see more</span>
                <ArrowRightCircle size={16} className="ml-1 text-primary" />
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="
              absolute w-full h-full rounded-2xl shadow-lg 
              bg-gradient-to-b from-gray-900 to-gray-700 
              text-white p-4 sm:p-5 
              flex flex-col justify-between
              text-center
            "
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <p className="text-xs sm:text-sm mt-5">
              {backText}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-15">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    flex items-center justify-center gap-2 
                    px-3 py-1.5 
                    bg-gray-800/80 rounded-md 
                    hover:bg-primary transition 
                    text-white text-xs sm:text-sm font-medium
                  "
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}
              {video && (
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    flex items-center justify-center gap-2 
                    px-3 py-1.5 
                    bg-gray-800/80 rounded-md 
                    hover:bg-primary transition 
                    text-white text-xs sm:text-sm font-medium
                  "
                >
                  <Video size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
