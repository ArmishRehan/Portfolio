import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaBootstrap,FaNodeJs,FaGithub,FaCode} from "react-icons/fa";
import {SiTailwindcss,SiExpress,SiMongodb,SiMysql,SiGit,SiVercel} from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import ElectricBorder from '../components/ElectricBorder';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: "REST APIs", icon: <IoSettingsOutline className="text-gray-400 text-4xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: <SiGit className="text-red-500 text-4xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-400 text-4xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, idx) => (
            <ElectricBorder
              key={idx}
              color="#8F73D6"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className="relative p-6 rounded-2xl bg-dark/10d"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center relative z-10">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-3 gap-6 relative z-10">
                  {skillGroup.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2 transition-all duration-200"
                    >
                      {item.icon}
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

