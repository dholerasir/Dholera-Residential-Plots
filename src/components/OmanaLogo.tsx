import React from 'react';

interface OmanaLogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark' | 'full';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  useImgTag?: boolean;
}

export const OmanaLogo: React.FC<OmanaLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  size = 'md',
  useImgTag = false,
}) => {
  const isDark = theme === 'dark';

  // Mark SVG graphic matching the official Omana Projects brand emblem
  const renderMarkSvg = (markClass = '') => (
    <svg
      viewBox="210 195 580 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${markClass}`}
      aria-label="Omana Projects Mark"
    >
      <defs>
        <linearGradient id="omanaArchGradMark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A8FF" />
          <stop offset="50%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="#00A8FF" />
        </linearGradient>
      </defs>

      {/* 1. Left Orange Building */}
      <polygon
        points="328,518 465,440 465,666 328,666"
        fill="#FF7300"
      />

      {/* 2. Center Red "1" Skyscraper Tower */}
      <polygon
        points="433,292 588,204 588,510 518,549 518,646 483,646 483,405 433,435"
        fill="#E60026"
      />

      {/* 3. Right Purple Building */}
      <polygon
        points="537,560 672,485 672,666 537,666"
        fill="#9400A8"
      />

      {/* 4. Sweeping Blue Arch Horizon */}
      <path
        d="M 218 725 Q 500 666 782 725 Q 500 681 218 725 Z"
        fill="url(#omanaArchGradMark)"
      />
    </svg>
  );

  // Size mapping
  const sizeClasses = {
    xs: {
      mark: 'w-5 h-5',
      title: 'text-xs tracking-wider',
      subtitle: 'text-[8px] tracking-widest',
      container: 'gap-1.5',
      fullSize: 'w-20',
    },
    sm: {
      mark: 'w-7 h-7',
      title: 'text-sm tracking-wider',
      subtitle: 'text-[9px] tracking-widest',
      container: 'gap-2',
      fullSize: 'w-28',
    },
    md: {
      mark: 'w-10 h-10',
      title: 'text-lg tracking-wider',
      subtitle: 'text-[11px] tracking-widest',
      container: 'gap-2.5',
      fullSize: 'w-36',
    },
    lg: {
      mark: 'w-14 h-14',
      title: 'text-2xl tracking-widest',
      subtitle: 'text-xs tracking-widest',
      container: 'gap-3',
      fullSize: 'w-48',
    },
    xl: {
      mark: 'w-20 h-20',
      title: 'text-3xl tracking-widest',
      subtitle: 'text-sm tracking-widest',
      container: 'gap-4',
      fullSize: 'w-64',
    },
  }[size];

  if (variant === 'full') {
    if (useImgTag) {
      return (
        <img
          src="/omana-logo.svg"
          alt="Omana Projects - One Dholera So Many Cities"
          className={`${sizeClasses.fullSize} h-auto object-contain ${className}`}
        />
      );
    }

    return (
      <svg
        viewBox="0 0 1000 840"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses.fullSize} h-auto object-contain shrink-0 ${className}`}
        aria-label="Omana Projects - One Dholera So Many Cities"
      >
        <defs>
          <linearGradient id="omanaArchFullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00A8FF" />
            <stop offset="50%" stopColor="#0088FF" />
            <stop offset="100%" stopColor="#00A8FF" />
          </linearGradient>
        </defs>

        {/* 1. Left Orange Building */}
        <polygon points="328,518 465,440 465,666 328,666" fill="#FF7300" />

        {/* 2. Center Red "1" Skyscraper Tower */}
        <polygon
          points="433,292 588,204 588,510 518,549 518,646 483,646 483,405 433,435"
          fill="#E60026"
        />

        {/* 3. Right Purple Building */}
        <polygon points="537,560 672,485 672,666 537,666" fill="#9400A8" />

        {/* 4. Sweeping Blue Arch Horizon */}
        <path
          d="M 218 725 Q 500 666 782 725 Q 500 681 218 725 Z"
          fill="url(#omanaArchFullGrad)"
        />

        {/* 5. Typography: OMANA PROJECTS */}
        <text
          x="500"
          y="752"
          fontFamily="'Impact', 'Arial Black', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="46"
          fontWeight="900"
          letterSpacing="5"
          fill={isDark ? '#FFFFFF' : '#000000'}
          textAnchor="middle"
        >
          OMANA PROJECTS
        </text>

        {/* 6. Tagline: One Dholera So Many Cities */}
        <text
          x="500"
          y="784"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="19"
          fontWeight="600"
          letterSpacing="2.5"
          textAnchor="middle"
        >
          <tspan fill={isDark ? '#E2E8F0' : '#000000'}>One </tspan>
          <tspan fill="#E60026" fontWeight="800">Dholera</tspan>
          <tspan fill={isDark ? '#E2E8F0' : '#000000'}> So Many Cities</tspan>
        </text>
      </svg>
    );
  }

  if (variant === 'mark') {
    return renderMarkSvg(`${sizeClasses.mark} ${className}`);
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        {renderMarkSvg(sizeClasses.mark)}
        <div className="mt-2">
          <span
            className={`block font-black uppercase font-['Plus_Jakarta_Sans'] leading-none ${sizeClasses.title} ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            OMANA PROJECTS
          </span>
          <p
            className={`font-semibold uppercase tracking-wider mt-1 ${sizeClasses.subtitle} ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            <span>One </span>
            <span className="text-[#E60026] font-extrabold">Dholera</span>
            <span> So Many Cities</span>
          </p>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center ${sizeClasses.container} ${className}`}>
      {renderMarkSvg(sizeClasses.mark)}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-black uppercase font-['Plus_Jakarta_Sans'] leading-tight tracking-wider ${sizeClasses.title} ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          OMANA PROJECTS
        </span>
        <span
          className={`font-medium tracking-wide leading-tight mt-0.5 whitespace-nowrap ${sizeClasses.subtitle} ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          <span>One </span>
          <span className="text-[#E60026] font-bold">Dholera</span>
          <span> So Many Cities</span>
        </span>
      </div>
    </div>
  );
};
