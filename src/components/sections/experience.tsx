"use client";

import Image from "next/image";
import experiences from "@/data/experience";
import SmoothScroll from "../smooth-scroll";
import Link from "next/link";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto md:h-[110vh]">
      <h2
        className={cn(
          "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
          "bg-gradient-to-b from-black/80 to-black/50",
          "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
        )}
      >
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }: any) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[420px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={exp.src}
              alt={exp.role}
              width={400}
              height={260}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left">{exp.role}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {exp.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>

        <ModalBody className="md:max-w-3xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ExperienceModalContent exp={exp} />
            </ModalContent>
          </SmoothScroll>

          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Close
            </button>

            {exp.link && exp.link !== "#" && (
              <Link href={exp.link} target="_blank">
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                  Visit
                </button>
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ExperienceModalContent = ({ exp }: any) => {
  return (
    <div className="pb-10">
      <h4 className="text-lg md:text-2xl font-bold text-center mb-1">
        {exp.role}
      </h4>

      <p className="text-xs opacity-70 text-center mb-4">
        {exp.organization} • {exp.duration}
      </p>

      {/* Carousel */}
      {exp.screenshots?.length > 0 && (
        <div className="relative w-full max-w-2xl mx-auto mb-6 select-none">
          <div className="flex overflow-x-auto snap-x snap-mandatory rounded-lg border border-neutral-800 scrollbar-hide">
            {exp.screenshots.map((img: string, idx: number) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full snap-start rounded-lg"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={`/assets/experience/${exp.id}/${img}`}
                  alt="experience-image"
                  width={900}
                  height={700}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const container =
                  (e.currentTarget.parentElement
                    ?.previousElementSibling as HTMLDivElement) || null;
                container?.scrollBy({ left: -500, behavior: "smooth" });
              }}
              className="pointer-events-auto bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs"
            >
              ◀
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                const container =
                  (e.currentTarget.parentElement
                    ?.previousElementSibling as HTMLDivElement) || null;
                container?.scrollBy({ left: 500, behavior: "smooth" });
              }}
              className="pointer-events-auto bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs"
            >
              ▶
            </button>
          </div>
        </div>
      )}

      <p className="font-mono opacity-90 mb-6 text-sm">{exp.description}</p>

      {exp.skills?.length > 0 && (
        <div className="flex flex-col justify-center items-center gap-2 text-3xl">
          <p className="text-sm opacity-70">Skills Used</p>
          <FloatingDock items={exp.skills} />
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
