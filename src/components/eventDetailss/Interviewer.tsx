"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface Axis {
  title: string;
  description: string;
}

interface InterviewerProps {
  axes: Axis[];
}

const Interviewer: React.FC<InterviewerProps> = ({ axes }) => {
  const t = useTranslations();

  const [selectedItem, setSelectedItem] = useState<Axis | null>(null);

  const items = axes;

  useEffect(() => {
    if (items?.length > 0) {
      setSelectedItem(items[0]); // Set default selected item after data loads
    }
  }, [items]);

  return (
    <>
      <div className="mt-8">
        <h3 className="font-bold text-xl lg:text-3xl text-right">{t('Event Axises')}</h3>
        {/* Large Display Box */}
        <div className="p-6 rounded-xl mt-6 shadow-md bg-[linear-gradient(293.41deg,_rgba(237,221,197,0.2)_15.1%,_rgba(204,173,122,0.174)_99.94%)]">
          <h4 className="font-bold text-lg lg:text-2xl text-[#8b6f4b]">{t('Event Axis')}</h4>
          <h4 className="font-bold text-lg lg:text-xl mt-2">{selectedItem?.title}</h4>
          <p className="mt-2 text-gray-700">{selectedItem?.description}</p>
        </div>

        {/* Small Clickable Boxes */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {items?.map((item, index) => (
            <div
              key={index}
              className={`z-50 p-5 rounded-xl h-[150px] md:h-[200px] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md ${
                selectedItem?.title === item.title
                  ? "bg-[linear-gradient(293.41deg,_rgba(237,221,197,1)_15.1%,_rgba(204,173,122,1)_99.94%)] text-[#53432e] font-bold"
                  : "bg-[#f3e7d6] hover:bg-[#e2d0b9]"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviewer;