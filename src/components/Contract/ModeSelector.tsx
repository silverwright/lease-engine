import React from 'react';
import { FileText, File } from 'lucide-react';

interface ModeSelectorProps {
  currentMode: 'MINIMAL' | 'FULL';
  onModeChange: (mode: 'MINIMAL' | 'FULL') => void;
}

export function ModeSelector({ currentMode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="bg-[#004478] rounded-lg border border-[#005596]/40 p-8 shadow-2xl">
      <h3 className="text-xl font-semibold text-white mb-6">Select Contract Mode</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => onModeChange('MINIMAL')}
          className={`
            p-8 rounded-lg border-2 text-left transition-all duration-300 hover:shadow-xl hover:scale-105
            ${currentMode === 'MINIMAL'
              ? 'border-[#005596] bg-gradient-to-br from-[#005596] to-[#004478] shadow-lg'
              : 'border-[#005596]/30 bg-[#00223c]/50 hover:border-[#005596]/60 hover:bg-[#00223c]'
            }
          `}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
              currentMode === 'MINIMAL' ? 'bg-white/20 text-white' : 'bg-[#004478] text-gray-300'
            }`}>
              <File className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-white text-lg">Minimal Mode</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Core IFRS 16 inputs with concise contract generation. Perfect for standard leases.
          </p>
          {currentMode === 'MINIMAL' && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <span className="text-xs text-white/80 font-medium">✓ Selected</span>
            </div>
          )}
        </button>

        <button
          onClick={() => onModeChange('FULL')}
          className={`
            p-8 rounded-lg border-2 text-left transition-all duration-300 hover:shadow-xl hover:scale-105
            ${currentMode === 'FULL'
              ? 'border-[#005596] bg-gradient-to-br from-[#005596] to-[#004478] shadow-lg'
              : 'border-[#005596]/30 bg-[#00223c]/50 hover:border-[#005596]/60 hover:bg-[#00223c]'
            }
          `}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
              currentMode === 'FULL' ? 'bg-white/20 text-white' : 'bg-[#004478] text-gray-300'
            }`}>
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-white text-lg">Full Mode</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Comprehensive commercial and legal dataset with robust contract features.
          </p>
          {currentMode === 'FULL' && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <span className="text-xs text-white/80 font-medium">✓ Selected</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}