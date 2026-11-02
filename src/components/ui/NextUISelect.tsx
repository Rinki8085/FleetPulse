'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  subLabel?: string;
  badge?: string;
  badgeColor?: string;
  icon?: React.ReactNode;
}

interface NextUISelectProps {
  name?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  icon?: React.ReactNode;
  className?: string;
  width?: string;
  disabled?: boolean;
}

export default function NextUISelect({
  name,
  options,
  value,
  defaultValue,
  placeholder = 'Select an option...',
  onChange,
  icon,
  className = '',
  width = 'w-full',
  disabled = false,
}: NextUISelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(
    value !== undefined ? value : defaultValue !== undefined ? defaultValue : (options[0]?.value ?? '')
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync if value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = options.find((o) => o.value === internalValue);

  const handleSelect = (optionValue: string) => {
    setInternalValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${width} ${className}`}>
      {/* Hidden input for HTML form submission (Server Actions & GET filters) */}
      {name && <input type="hidden" name={name} value={internalValue} />}

      {/* Trigger Button (NextUI / HeroUI styled) */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border transition-all flex items-center justify-between gap-2.5 text-xs text-left cursor-pointer focus:outline-none ${
          isOpen
            ? 'border-emerald-500/80 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/10'
            : 'border-slate-800 hover:border-slate-700'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {icon && <span className="text-slate-400 shrink-0">{icon}</span>}
          {selectedOption?.icon && <span className="shrink-0">{selectedOption.icon}</span>}

          <div className="truncate flex items-center gap-2">
            <span className={selectedOption ? 'font-medium text-white' : 'text-slate-500'}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.subLabel && (
              <span className="text-[0.65rem] text-slate-400 truncate hidden sm:inline">
                {selectedOption.subLabel}
              </span>
            )}
            {selectedOption?.badge && (
              <span
                className={`px-1.5 py-0.5 rounded text-[0.6rem] font-mono font-bold shrink-0 ${
                  selectedOption.badgeColor || 'bg-slate-800 text-slate-300'
                }`}
              >
                {selectedOption.badge}
              </span>
            )}
          </div>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-emerald-400' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu (NextUI Floating Popover) */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full min-w-[240px] max-w-sm sm:max-w-md bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-1.5 max-h-72 overflow-y-auto space-y-1 divide-y divide-slate-800/40">
            {options.map((opt) => {
              const isSelected = opt.value === internalValue;

              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full px-3 py-2.5 rounded-xl text-xs flex items-center justify-between gap-3 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate">{opt.label}</span>
                        {opt.badge && (
                          <span
                            className={`px-1.5 py-0.5 rounded text-[0.6rem] font-mono font-bold shrink-0 ${
                              opt.badgeColor || 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      {opt.subLabel && (
                        <div className="text-[0.65rem] text-slate-400 truncate mt-0.5">
                          {opt.subLabel}
                        </div>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}