import { useState } from "react";
import { ArrowRightCircle, Github } from "lucide-react";
import { section } from "framer-motion/client";

export const FlipCard = ({ imageSrc, heading, backText, link }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <section id="projects">
    <div
      className="w-78 h-96 cursor-pointer"
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
          className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={imageSrc}
            alt={heading}
            className="w-full h-3/4 object-cover"
          />
          <div className="p-3 flex flex-col items-center justify-center h-1/4 backdrop-blur-md bg-white/5">
            <h3 className="text-lg font-semibold">{heading}</h3>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <span>Click to see more</span>
              <ArrowRightCircle size={18} className="ml-2 hover:text-primary" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-lg backdrop-blur-md bg-white/5 text-white p-4 flex flex-col items-center justify-center gap-3"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-center text-sm leading-relaxed">{backText}</p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 text-white hover:text-primary transition"
              onClick={(e) => e.stopPropagation()} // stops flip when clicking
            >
              <Github size={22} />
              <span className="text-sm font-medium">View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};
