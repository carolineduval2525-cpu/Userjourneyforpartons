import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { ChevronLeft, User, Users } from 'lucide-react';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';

interface TravelChoiceScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function TravelChoiceScreen({ onNavigate }: TravelChoiceScreenProps) {
  const [selectedType, setSelectedType] = useState<'solo' | 'duo' | 'group' | null>(null);
  const [groupName, setGroupName] = useState('');

  const handleNext = () => {
    if (selectedType === 'solo') {
      onNavigate('mood');
    } else {
      onNavigate('invitation');
    }
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Progress Bar */}
        <ProgressBar currentStep={1} totalSteps={7} stepNames={stepNames} />

        <div className="mb-6 relative z-10">
          <h1 className="text-[#1e3a5f] mb-2 text-2xl font-bold">
            Qui est de la Partie ?
          </h1>
          <p className="text-gray-600">
            Choisis ton mode de voyage pour commencer
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Options en cercles */}
          <div className="grid grid-cols-3 gap-6 mb-8 w-full max-w-sm">
            {/* Solo */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedType('solo')}
                className={`relative w-24 h-24 rounded-full border-4 transition-all transform hover:scale-105 ${
                  selectedType === 'solo'
                    ? 'border-[#4ECDC4] bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-3">
                  {/* 1 personne */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </div>
                {selectedType === 'solo' && (
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#4ECDC4] rounded-full flex items-center justify-center animate-in zoom-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                )}
              </button>
              <p className="text-[#1e3a5f] mt-3 text-center text-sm">
                Seul (Solo)
              </p>
            </div>

            {/* Duo */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedType('duo')}
                className={`relative w-24 h-24 rounded-full border-4 transition-all transform hover:scale-105 ${
                  selectedType === 'duo'
                    ? 'border-[#4ECDC4] bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center gap-1 p-2">
                  {/* 2 personnes */}
                  <div className="w-9 h-9 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-[#4ECDC4] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
                {selectedType === 'duo' && (
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#4ECDC4] rounded-full flex items-center justify-center animate-in zoom-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                )}
              </button>
              <p className="text-[#1e3a5f] mt-3 text-center text-sm">
                En couple<br />Duo
              </p>
            </div>

            {/* Groupe */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedType('group')}
                className={`relative w-24 h-24 rounded-full border-4 transition-all transform hover:scale-105 ${
                  selectedType === 'group'
                    ? 'border-[#4ECDC4] bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-2">
                  {/* 3 personnes */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex gap-1">
                      <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-[#4ECDC4] rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-7 h-7 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                {selectedType === 'group' && (
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#4ECDC4] rounded-full flex items-center justify-center animate-in zoom-in">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                )}
              </button>
              <p className="text-[#1e3a5f] mt-3 text-center text-sm">
                Groupe d'amis
              </p>
            </div>
          </div>

          {/* Group Name Input - Shown only for duo or group */}
          {(selectedType === 'duo' || selectedType === 'group') && (
            <div className="w-full max-w-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <label className="block text-sm text-gray-600 mb-2">
                Donne un nom à ton groupe
              </label>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder={selectedType === 'duo' ? 'Ex: Les Tourtereaux ❤️' : 'Ex: Les Aventuriers 🌍'}
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent text-[#1e3a5f] placeholder:text-gray-400"
                autoFocus
              />
            </div>
          )}
        </div>

        <Button
          onClick={handleNext}
          disabled={!selectedType || ((selectedType === 'duo' || selectedType === 'group') && !groupName.trim())}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Suivant
        </Button>
      </div>
    </MobileLayout>
  );
}