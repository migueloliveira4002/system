import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Wrapper de Página/Seção
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("page-container break-before-page flex flex-col print:block print:h-auto print:min-h-0 print:w-full print:border-none print:shadow-none print:m-0 print:p-0 print:relative-none", className)}
    >
      {children}
    </section>
  );
};

// Card de Suplementação
interface SupplementCardProps {
  title: string;
  dosage: string;
  description: string;
  timing?: string;
}

export const SupplementCard = ({ title, dosage, description, timing }: SupplementCardProps) => {
  return (
    <div className="border border-slate-800 bg-black/50 p-6 grid gap-4 relative overflow-hidden group break-inside-avoid print:break-inside-avoid">
      <div className="absolute top-0 left-0 w-[2px] h-full bg-slate-800 group-hover:bg-brand-red transition-colors duration-300" />
      
      <div className="flex justify-between items-baseline border-b border-slate-800 pb-2">
        <h3 className="font-oswald font-bold text-xl text-brand-red uppercase tracking-wide">
          {title}
        </h3>
        {/* Agrupamento visual de dosagem e timing para o Zinco (e outros) */}
        <div className="flex flex-col items-end">
             <span className="font-jetbrains text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded mb-1">
              {dosage}
            </span>
            {timing && (
                <span className="font-jetbrains text-[10px] text-slate-500 uppercase tracking-wider">
                {timing}
                </span>
            )}
        </div>
      </div>
      
      <p className="font-inter text-slate-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Box de Atenção/Biohacking
interface BiohackBoxProps {
  title: string;
  children: React.ReactNode;
  type?: 'warning' | 'info' | 'synergy' | 'alert';
}

export const BiohackBox = ({ title, children, type = 'info' }: BiohackBoxProps) => {
  const borderColor = type === 'synergy' ? 'border-brand-red border-l-[6px]' : 'border-brand-red border-l-4';
  
  return (
    <div className={cn("my-8 bg-brand-dark p-6 relative shadow-lg break-inside-avoid print:break-inside-avoid", borderColor)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 flex items-center justify-center border border-brand-red rounded-full">
          <span className="text-brand-red font-bold text-xs">!</span>
        </div>
        <h4 className="font-oswald font-bold text-lg text-white uppercase tracking-wider">
          {title}
        </h4>
      </div>
      <div className="font-inter text-slate-300 text-sm leading-relaxed pl-9 border-l border-slate-700/50">
        {children}
      </div>
    </div>
  );
};

// Tipografia para Conteúdo
export const ChapterTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("font-oswald font-bold text-4xl text-white uppercase tracking-tight mb-8 border-b-2 border-brand-red pb-4 inline-block", className)}>
    {children}
  </h2>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <div className="font-inter text-slate-300 leading-relaxed mb-6 text-justify">
    {children}
  </div>
);

export const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-oswald font-bold text-2xl text-white uppercase tracking-wide mb-4 mt-6 border-l-4 border-brand-red pl-4">
    {children}
  </h3>
);

export const MonoSubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-jetbrains font-bold text-lg text-white uppercase tracking-wider mb-4 mt-6 border-l-4 border-brand-red pl-4">
    {children}
  </h3>
);

export const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="mb-6 space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex gap-3 items-start">
        <span className="text-brand-red font-bold mt-1">›</span>
        <span className="font-inter text-slate-300 text-sm leading-relaxed text-justify">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

// Comparação Mito vs Realidade
interface ComparisonBoxProps {
  items: {
    myth: string;
    reality: string;
  }[];
}

export const ComparisonBox = ({ items }: ComparisonBoxProps) => {
  return (
    <div className="my-8 break-inside-avoid">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 flex items-center justify-center bg-brand-red rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h4 className="font-oswald font-bold text-lg text-white uppercase tracking-wider">
          RAIO-X: MITO VS. REALIDADE
        </h4>
      </div>
      
      <div className="grid gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg">
            <div className="mb-2">
              <span className="font-oswald text-red-500 uppercase text-sm font-bold tracking-wide block mb-1">Mito</span>
              <p className="font-inter text-slate-400 text-sm italic">"{item.myth}"</p>
            </div>
            <div className="pt-2 border-t border-slate-800">
              <span className="font-oswald text-green-500 uppercase text-sm font-bold tracking-wide block mb-1">Realidade</span>
              <p className="font-inter text-slate-200 text-sm">{item.reality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Níveis de Implementação
interface ImplementationLevelsProps {
  levels: {
    title: string;
    subtitle: string;
    action: string;
    focus: string;
    colorClass?: string;
  }[];
}

export const ImplementationLevels = ({ levels }: ImplementationLevelsProps) => {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 break-inside-avoid">
      {levels.map((level, idx) => (
        <div key={idx} className="border border-slate-800 bg-black/30 flex flex-col h-full relative group">
           <div className={cn("absolute top-0 left-0 w-full h-1", level.colorClass || "bg-brand-red")} />
           <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-oswald text-white font-bold text-lg uppercase mb-1">{level.title}</h4>
              <span className="font-jetbrains text-xs text-slate-500 uppercase tracking-wider mb-4 block">{level.subtitle}</span>
              
              <div className="mt-auto space-y-3">
                <div>
                  <span className="text-brand-red font-bold text-xs uppercase block mb-1">Ação</span>
                  <p className="font-inter text-slate-300 text-xs leading-relaxed">{level.action}</p>
                </div>
                <div>
                  <span className="text-brand-red font-bold text-xs uppercase block mb-1">Foco</span>
                  <p className="font-inter text-slate-300 text-xs leading-relaxed">{level.focus}</p>
                </div>
              </div>
           </div>
        </div>
      ))}
    </div>
  );
};

// Tabela Simples
interface SimpleTableProps {
  headers: string[];
  rows: string[][];
}

export const SimpleTable = ({ headers, rows }: SimpleTableProps) => {
  return (
    <div className="my-8 overflow-hidden border border-slate-800 rounded-lg break-inside-avoid">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-900/80">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="p-3 font-oswald text-brand-red uppercase tracking-wide font-bold border-b border-slate-800">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-black/30 divide-y divide-slate-800">
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 font-inter text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const PageFooter = ({ pageNumber }: { pageNumber: string }) => (
    <div className="mt-auto pt-8 border-t border-slate-800 flex justify-between items-center font-jetbrains text-xs text-slate-500 print:hidden">
        <span>Página {pageNumber}</span>
        <span>Miguel Oliveira | Protocolo H-Natural © 2026</span>
    </div>
);

type TableOfContentsItem = {
  label: string;
  href?: string;
};

interface TableOfContentsProps {
  title?: string;
  items?: TableOfContentsItem[];
  children?: React.ReactNode;
}

export const TableOfContents = ({ title = 'Sumário', items, children }: TableOfContentsProps) => {
  const hasItems = Array.isArray(items) && items.length > 0;
  return (
    <div className="my-8 border border-slate-800 bg-black/40 p-6 rounded-lg break-inside-avoid">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
        <h2 className="font-oswald text-white text-lg uppercase tracking-wide">
          {title}
        </h2>
        <span className="font-jetbrains text-xs text-slate-500 uppercase tracking-wider">
          Conteúdo
        </span>
      </div>
      {hasItems ? (
        <ol className="space-y-2 font-inter text-slate-300 text-sm">
          {items!.map((item, index) => (
            <li key={index} className="flex items-baseline gap-2">
              <span className="text-brand-red text-xs font-bold">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.href ? (
                <a href={item.href} className="hover:text-brand-red transition-colors">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      ) : (
        <div className="font-inter text-slate-400 text-sm leading-relaxed space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};
