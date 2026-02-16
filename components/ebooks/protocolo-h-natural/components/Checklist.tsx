'use client';

import React, { useState } from 'react';
import { clsx } from 'clsx';

interface ChecklistProps {
  items: string[];
}

export const Checklist = ({ items }: ChecklistProps) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const totalChecked = checkedState.filter(Boolean).length;

  return (
    <div className="my-8 bg-black/30 p-6 border border-slate-800 rounded-lg break-inside-avoid">
      <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-2">
         <span className="font-jetbrains text-xs text-slate-500 uppercase tracking-widest">
           MARQUE AS CAIXAS QUE SE APLICAM
         </span>
         <span className="font-oswald text-brand-red text-xl">
           {totalChecked} / {items.length}
         </span>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <label 
            key={index} 
            className="flex items-start gap-4 cursor-pointer group hover:bg-slate-900/50 p-2 rounded transition-colors"
          >
            <div className="relative flex items-center mt-1">
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-slate-600 transition-all checked:border-brand-red checked:bg-brand-red hover:border-brand-red"
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <svg
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className={clsx(
              "font-inter text-sm leading-relaxed transition-colors select-none",
              checkedState[index] ? "text-white" : "text-slate-400 group-hover:text-slate-300"
            )}>
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
