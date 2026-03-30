"use client";

import Select from 'react-select';
import { useCallback, useMemo } from 'react';
import { Noto_Sans_Arabic } from 'next/font/google';

const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'] });

export default function ResourceHeader({ lang = 'en', onLangChange }) {
  const showSwitcher = typeof onLangChange === 'function';
  const languageOptions = useMemo(() => ([
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' },
  ]), []);
  const renderLanguageOption = useCallback((option) => (
    option.value === 'ar' ? <span className={notoArabic.className}>{option.label}</span> : option.label
  ), []);

  return (
    <header
      className="shadow-md border-b border-gray-200 dark:border-zinc-800 px-2 sm:px-6 py-2"
      style={{ backgroundColor: '#1b1464' }}
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full max-w-6xl mx-auto">
        <img src="/acted-logo.png" alt="ACTED Logo" className="h-10 sm:h-16 w-auto flex-shrink-0" />
        <h1 className="flex-1 text-center text-base sm:text-2xl font-bold text-white truncate">
          {lang === 'ar' ? 'بوابة الموارد' : 'Resources Hub'}
        </h1>
        {showSwitcher ? (
          <div className="flex-shrink-0 w-[110px] sm:w-[170px]">
            <Select
              value={languageOptions.find(option => option.value === lang)}
              onChange={option => onLangChange(option?.value || 'en')}
              options={languageOptions}
              formatOptionLabel={renderLanguageOption}
              classNamePrefix="resource-lang"
              isRtl={lang === 'ar'}
              styles={{
                control: (base, state) => ({
                  ...base,
                  backgroundColor: '#fff',
                  color: '#1b1464',
                  border: 'none',
                  minHeight: 34,
                  boxShadow: state.isFocused ? '0 0 0 1px #1b1464' : base.boxShadow,
                  fontSize: '0.85rem',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#1b1464',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: '0 6px',
                }),
                menu: (base) => ({ ...base, zIndex: 50 }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isSelected ? '#1b1464' : state.isFocused ? '#e0e7ff' : '#fff',
                  color: state.isSelected ? '#fff' : '#1b1464',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                }),
                indicatorsContainer: (base) => ({ ...base, color: '#1b1464' }),
                dropdownIndicator: (base) => ({ ...base, color: '#1b1464', padding: '4px' }),
              }}
              instanceId="resource-lang-select"
              aria-label={lang === 'ar' ? 'تغيير اللغة' : 'Language Switch'}
              isSearchable={false}
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-[110px] sm:w-[170px]" />
        )}
      </div>
    </header>
  );
}
