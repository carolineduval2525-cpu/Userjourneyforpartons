import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { ChevronLeft, Users } from 'lucide-react';
import { SmilingLuggage } from './SmilingLuggage';
import { ProgressBar } from './ProgressBar';

interface TravelChoiceScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function TravelChoiceScreen({ onNavigate }: TravelChoiceScreenProps) {
  const [selectedType, setSelectedType] = useState<'solo' | 'duo' | 'group' | null>(null);

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

        <div className="mb-6 text-center relative z-10">
          <div className="inline-block mb-3">
            <SmilingLuggage size={50} />
          </div>
          <h1 className="text-[#1e3a5f] mb-2">
            Qui est de la Partie ?
          </h1>
          <p className="text-gray-600 text-sm">
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
                    ? 'border-[#4ECDC4] bg-white shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-3">
                  <SmilingLuggage size={40} />
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
                    ? 'border-[#4ECDC4] bg-white shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center relative p-2">
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-12">
                    <SmilingLuggage size={28} />
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-12">
                    <SmilingLuggage size={28} />
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
                    ? 'border-[#4ECDC4] bg-white shadow-lg scale-105'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center relative p-2">
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-10">
                    <SmilingLuggage size={22} />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-10">
                    <SmilingLuggage size={22} />
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-10">
                    <SmilingLuggage size={22} />
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
        </div>

        <Button
          onClick={handleNext}
          disabled={!selectedType}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Suivant
        </Button>
      </div>
    </MobileLayout>
  );
}