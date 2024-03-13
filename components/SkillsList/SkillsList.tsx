'use client';

import { useState } from 'react';

export type SkillType = {
  name: string;
  list: string[];
};

type SkillsListProps = {
  skills: SkillType[];
};

function AccordionSkill(props: { skill: SkillType; index: number }) {
  const { skill, index } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex items-center gap-6 lg:gap-12 cursor-pointer hover:text-f-secondary/75 transition-all duration-300"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="font-Gotham text-[10px] lg:text-[15px] text-right w-8">
          {`0${index + 1}.`}
        </div>
        <div className="aqua-big-caption text-[12px] lg:text-[25px]">
          {skill.name}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="list-disc ml-16 lg:mt-2 lg:ml-24 mb-3">
          {skill.list.map((item, itemIdx) => (
            <li
              key={itemIdx}
              className="aqua-caption text-[10px] lg:text-[16px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function SkillsList(props: SkillsListProps) {
  const { skills } = props;

  return (
    <div className="ml-auto flex flex-col gap-1.5 lg:gap-3 w-full max-w-48 lg:max-w-96">
      {skills.map((skill, index) => (
        <AccordionSkill key={index} skill={skill} index={index} />
      ))}
    </div>
  );
}
