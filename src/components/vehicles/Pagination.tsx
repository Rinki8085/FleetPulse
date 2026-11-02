'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  search?: string;
  status?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  limit,
  search,
  status,
}: PaginationProps) {
  if (totalItems === 0) return null;

  const startIndex = Math.min((currentPage - 1) * limit + 1, totalItems);
  const endIndex = Math.min(currentPage * limit, totalItems);

  function createPageUrl(page: number) {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (status) params.set('status', status);
    if (page > 1) params.set('page', String(page));
    const qs = params.toString();
    return `/vehicles${qs ? `?${qs}` : ''}`;
  }

  // Generate page numbers array (showing up to 5 surrounding pages)
  const pages: number[] = [];
  const maxButtons = 5;
  let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let end = Math.min(totalPages, start + maxButtons - 1);
  if (end - start + 1 < maxButtons) {
    start = Math.max(1, end - maxButtons + 1);
  }
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-slate-800 bg-slate-950/40 text-xs text-slate-400">
      <div>
        Showing <span className="font-semibold text-white">{startIndex}</span> to{' '}
        <span className="font-semibold text-white">{endIndex}</span> of{' '}
        <span className="font-semibold text-white">{totalItems}</span> assets
      </div>

      <div className="flex items-center gap-1.5">
        {/* Previous Button */}
        {currentPage > 1 ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 hover:text-white transition flex items-center justify-center cursor-pointer"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </Link>
        ) : (
          <span className="p-1.5 rounded-lg border border-slate-800/40 bg-slate-900/40 text-slate-600 cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" />
          </span>
        )}

        {/* Page Number Buttons */}
        {start > 1 && (
          <>
            <Link
              href={createPageUrl(1)}
              className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition"
            >
              1
            </Link>
            {start > 2 && <span className="px-1 text-slate-600">...</span>}
          </>
        )}

        {pages.map((p) => {
          const isActive = p === currentPage;
          return isActive ? (
            <span
              key={p}
              className="px-2.5 py-1 rounded-lg bg-emerald-500 font-bold text-slate-950 shadow-sm shadow-emerald-500/20"
            >
              {p}
            </span>
          ) : (
            <Link
              key={p}
              href={createPageUrl(p)}
              className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition"
            >
              {p}
            </Link>
          );
        })}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <span className="px-1 text-slate-600">...</span>}
            <Link
              href={createPageUrl(totalPages)}
              className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition"
            >
              {totalPages}
            </Link>
          </>
        )}

        {/* Next Button */}
        {currentPage < totalPages ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 hover:text-white transition flex items-center justify-center cursor-pointer"
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <span className="p-1.5 rounded-lg border border-slate-800/40 bg-slate-900/40 text-slate-600 cursor-not-allowed">
            <ChevronRight className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  );
}
