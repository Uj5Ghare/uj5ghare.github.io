import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn('relative space-y-8', className)}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  date: string;
  description?: string | string[];
  icon?: React.ReactNode;
  technologies?: string[];
  className?: string;
  active?: boolean;
}

export function TimelineItem({
  title,
  subtitle,
  date,
  description,
  icon,
  technologies,
  className,
  active = false,
}: TimelineItemProps) {
  return (
    <div className={cn('relative pl-12 pb-8', className)}>
      {/* Icon/Dot */}
      <div
        className={cn(
          'absolute left-0 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white transition-all duration-300',
          active
            ? 'bg-blue-600 shadow-lg shadow-blue-200 scale-110'
            : 'bg-slate-200 hover:bg-blue-100'
        )}
      >
        {icon ? (
          <span className="text-white text-xs">{icon}</span>
        ) : (
          <span className="w-2 h-2 bg-white rounded-full" />
        )}
      </div>

      {/* Content Card */}
      <div className="group">
        <div
          className={cn(
            'p-6 rounded-xl border-2 transition-all duration-300',
            active
              ? 'bg-blue-50 border-blue-200 shadow-md'
              : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
          )}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
              )}
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 whitespace-nowrap">
              {date}
            </span>
          </div>

          {/* Description */}
          {description && (
            <div className="text-slate-700 space-y-2 mb-4">
              {Array.isArray(description) ? (
                <ul className="space-y-1.5">
                  {description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">▹</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">{description}</p>
              )}
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
