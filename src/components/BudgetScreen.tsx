import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Euro, Hotel, Home, Building2, ChevronLeft } from 'lucide-react';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';
import mascotImage from 'figma:asset/1873447990cd9d63141b1a42a26f5e3f5b067e6b.png';

interface BudgetScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function BudgetScreen({ onNavigate }: BudgetScreenProps) {
  const [budget, setBudget] = useState([1000]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<string | null>(null);

  const accommodations = [
    { id: 'hostel', label: 'Auberge de jeunesse', icon: Home, desc: 'Économique et convivial' },
    { id: 'airbnb', label: 'Airbnb', icon: Building2, desc: 'Comme à la maison' },
    { id: 'hotel', label: 'Hôtel', icon: Hotel, desc: 'Confort et services' },
  ];

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('dates')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Progress Bar */}
        <ProgressBar currentStep={6} totalSteps={7} stepNames={stepNames} />

        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-[#1e3a5f] text-2xl font-bold">
              Quel budget ?
            </h1>
            <img src={mascotImage} alt="Mascotte Partons" className="w-15 h-15 object-contain" />
          </div>
          <p className="text-gray-600">
            Définis ton budget et ton hébergement
          </p>
        </div>

        <div className="flex-1 space-y-8">
          {/* Budget Slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Euro className="w-5 h-5 text-[#4ECDC4]" />
                <h3 className="text-[#1e3a5f]">Budget par personne</h3>
              </div>
              <div className="bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] text-white px-4 py-2 rounded-full shadow-md">
                {budget[0]} €
              </div>
            </div>
            
            <Slider
              value={budget}
              onValueChange={setBudget}
              min={100}
              max={5000}
              step={50}
              className="w-full"
            />
            
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>100 €</span>
              <span>5000 €</span>
            </div>
          </div>

          {/* Accommodation Selection */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="w-5 h-5 text-[#4ECDC4]" />
              <h3 className="text-[#1e3a5f]">Type d'hébergement</h3>
            </div>
            
            <div className="space-y-3">
              {accommodations.map((acc) => {
                const Icon = acc.icon;
                return (
                  <button
                    key={acc.id}
                    onClick={() => setSelectedAccommodation(acc.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                      selectedAccommodation === acc.id
                        ? 'border-[#4ECDC4] bg-[#4ECDC4]/5 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          selectedAccommodation === acc.id ? 'bg-[#4ECDC4] scale-110' : 'bg-gray-100'
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            selectedAccommodation === acc.id ? 'text-white' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-[#1e3a5f]">{acc.label}</p>
                        <p className="text-sm text-gray-600">{acc.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <Button
          onClick={() => onNavigate('loading')}
          disabled={!selectedAccommodation}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Voir les résultats
        </Button>
      </div>
    </MobileLayout>
  );
}