'use client';

import { useState } from 'react';

export interface TabConfig {
  label: string;
  content: string;
}

export interface TabsProps {
  tabsConfig: TabConfig[];
}

export function Tabs({ ...props }) {
  const { tabsConfig, defaultIndex, customClass, ...rest } = props;

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);
  const [ishover, setIshover] = useState<boolean>(false);

  function isActiveTab(index: number) {
    return index === selectedIndex && !ishover;
  }

  function handleClick(index: number) {
    const { onClickTab } = tabsConfig[index];

    setSelectedIndex(index);
    onClickTab?.();
  }

  return (
    <div {...rest}>
      <div className={`flex items-center gap-[18px] lg:gap-11 ${customClass}`}>
        {tabsConfig.map((tab: TabConfig, index: number) => (
          <div
            className={`default-tab
              ${isActiveTab(index) && 'default-tab-active'}`}
            tabIndex={-1}
            key={index}
            onClick={() => handleClick(index)}
            onMouseOver={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>
        {tabsConfig.map((tab: TabConfig, index: number) => (
          <section key={`tabpanel-${index}`} hidden={selectedIndex !== index}>
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  );
}
