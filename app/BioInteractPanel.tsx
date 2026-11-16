// app/BioInteractPanel.tsx
"use client";

import React, { useEffect } from "react";
import { BIOINTERACT_DATABASE, BioInteractProfile } from "./biointeract-data";

interface BioInteractPanelProps {
  fmaId: string | null;
  conceptName: string | null;
  onClose?: () => void;
}

export const BioInteractPanel: React.FC<BioInteractPanelProps> = ({
  fmaId,
  conceptName,
  onClose,
}) => {
  if (!fmaId) return null;

  // Lookup in database (or fallback if it's a minor sub-branch mesh)
  const profile: BioInteractProfile | undefined = BIOINTERACT_DATABASE[fmaId];

  // Optional: Post message to parent window if embedded in Blogger iframe
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      window.parent.postMessage({ fmaId, name: conceptName }, "*");
    }
  }, [fmaId, conceptName]);

  return (
    <div className="rounded-xl border border-cyan-500/40 bg-slate-950/90 backdrop-blur-md p-4 text-slate-100 shadow-2xl transition-all duration-300">
      {/* Header with Flashing FMA Beacon */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-950 px-3 py-1 text-xs font-bold text-cyan-400 border border-cyan-500/50 animate-pulse">
            <span>⚡</span>
            <span>{fmaId} IDENTIFIED</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1.5">
            {profile ? profile.name : conceptName || "Anatomical Structure"}
          </h3>
          <span className="text-xs text-slate-400">
            BodyParts3D Node • {profile?.system || "Human Anatomy"}
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-slate-400 hover:bg-rose-950 hover:text-rose-300 transition"
          >
            ✕ Close
          </button>
        )}
      </div>

      {profile ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {/* Pillar 1: Toxicology */}
          <div className="rounded-lg border-l-4 border-l-rose-500 bg-rose-950/20 p-3 border border-rose-900/30">
            <h4 className="font-bold uppercase tracking-wider text-rose-400 mb-1.5 flex items-center gap-1">
              ⚠️ 1. Toxicological Profile (ISO 10993)
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-300">
              {profile.toxicology.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Immune & Foreign Body Reaction */}
          <div className="rounded-lg border-l-4 border-l-purple-500 bg-purple-950/20 p-3 border border-purple-900/30">
            <h4 className="font-bold uppercase tracking-wider text-purple-400 mb-1.5 flex items-center gap-1">
              🛡️ 2. Host Immune & Foreign Body Reaction
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-300">
              {profile.immune.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>

          {/* Pillar 3: Medical Devices */}
          <div className="rounded-lg border-l-4 border-l-cyan-500 bg-cyan-950/20 p-3 border border-cyan-900/30">
            <h4 className="font-bold uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-1">
              🩺 3. Medical Device Interactions
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-300">
              {profile.devices.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>

          {/* Pillar 4: Drugs */}
          <div className="rounded-lg border-l-4 border-l-emerald-500 bg-emerald-950/20 p-3 border border-emerald-900/30">
            <h4 className="font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1">
              💊 4. Pharmacological & Drug Interactions
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-300">
              {profile.drugs.map((dr, idx) => (
                <li key={idx}>{dr}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-slate-900/50 rounded-lg text-slate-400 text-xs">
          💡 Sub-structure of the anatomical hierarchy. Primary parent organ holds the aggregate toxicological evaluation.
        </div>
      )}
    </div>
  );
};
