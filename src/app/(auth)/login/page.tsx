'use client';

import { useState } from 'react';
import { Truck, ShieldCheck, Eye, Sparkles, KeyRound, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const performLogin = async (email: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Immediate client navigation to vehicles with active cookie session
        window.location.href = '/vehicles';
        return;
      }

      setErrorMessage(data.error || 'Failed to authenticate');
      setIsLoading(false);
    } catch {
      setErrorMessage('Network error during authentication. Please retry.');
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string)?.trim() || 'alex.rivera@fleetpulse.io';
    performLogin(email);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden selection:bg-emerald-500 selection:text-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:border-slate-700 transition">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FleetPulse Telemetry Hub</span>
          </Link>
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10">
              <Truck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">FleetPulse</h1>
          </div>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Sign in to access real-time fleet operations, telemetry & expense logs
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Quick Demo Logins Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Instant 1-Click Demo Profiles
              </span>
              <span className="text-[0.65rem] text-emerald-400 font-medium">Ready</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {/* Admin Button */}
              <button
                type="button"
                onClick={() => performLogin('alex.rivera@fleetpulse.io')}
                disabled={isLoading}
                className="group p-3 rounded-2xl bg-slate-950/70 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all text-left flex items-start justify-between cursor-pointer disabled:opacity-50"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Alex Rivera</span>
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                        ADMIN
                      </span>
                    </div>
                    <p className="text-[0.7rem] text-slate-400 mt-0.5">
                      Full fleet CRUD, decommission vehicles, expense creation
                    </p>
                  </div>
                </div>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-emerald-400 animate-spin mt-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                )}
              </button>

              {/* Viewer Button */}
              <button
                type="button"
                onClick={() => performLogin('sarah.chen@fleetpulse.io')}
                disabled={isLoading}
                className="group p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 hover:bg-sky-950/20 transition-all text-left flex items-start justify-between cursor-pointer disabled:opacity-50"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Sarah Chen</span>
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30">
                        VIEWER
                      </span>
                    </div>
                    <p className="text-[0.7rem] text-slate-400 mt-0.5">
                      Read-only fleet monitoring, live telemetry & stats
                    </p>
                  </div>
                </div>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-sky-400 animate-spin mt-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                )}
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-800 w-full" />
            <span className="bg-slate-900 px-3 text-[0.65rem] text-slate-500 uppercase tracking-widest absolute">
              or sign in with any email
            </span>
          </div>

          {/* Email input form */}
          <form onSubmit={handleFormSubmit} className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Any Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="alex.rivera@fleetpulse.io or your own email"
                  defaultValue="alex.rivera@fleetpulse.io"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>Sign In (Auto-Accept Any Email)</span>
                </>
              )}
            </button>
          </form>

          {/* Native stack note */}
          <div className="pt-2 border-t border-slate-800/80 text-center">
            <p className="text-[0.65rem] text-slate-500 leading-relaxed">
              🔐 Protected by Native Next.js Cookie Session & Middleware Proxy. Zero external 3rd-party auth services required.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link href="/" className="text-xs text-slate-400 hover:text-slate-200 transition">
            ← Back to FleetPulse Welcome Screen
          </Link>
        </div>
      </div>
    </div>
  );
}
