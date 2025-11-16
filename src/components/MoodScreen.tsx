import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Mountain, Waves, Building2, Sparkles, TreePine, Coffee, ChevronLeft } from 'lucide-react';
import { SmilingLuggage } from './SmilingLuggage';
import { ProgressBar } from './ProgressBar';

interface MoodScreenProps {
  onNavigate: (screen: string) => void;
}

const moods = [
  { id: 'adventure', label: 'Aventure', icon: Mountain, color: 'from-orange-500 to-red-500' },
  { id: 'relax', label: 'Détente', icon: Waves, color: 'from-blue-400 to-cyan-400' },
  { id: 'city', label: 'Urbain', icon: Building2, color: 'from-gray-600 to-gray-800' },
  { id: 'party', label: 'Festif', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
  { id: 'nature', label: 'Nature', icon: TreePine, color: 'from-green-600 to-emerald-600' },
  { id: 'culture', label: 'Culture', icon: Coffee, color: 'from-amber-600 to-yellow-600' },
];

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function MoodScreen({ onNavigate }: MoodScreenProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('invitation')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Progress Bar */}
        <ProgressBar currentStep={3} totalSteps={7} stepNames={stepNames} />

        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <SmilingLuggage size={40} />
            <h1 className="text-[#1e3a5f]">
              Quel est le mood ?
            </h1>
          </div>
          <p className="text-gray-600">
            Choisis l'ambiance qui te correspond
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                  selectedMood === mood.id
                    ? 'border-[#4ECDC4] bg-[#4ECDC4]/5 scale-95 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${mood.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#1e3a5f] text-center">{mood.label}</p>
              </button>
            );
          })}
        </div>

        <Button
          onClick={() => onNavigate('activities')}
          disabled={!selectedMood}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Suivant
        </Button>
      </div>
    </MobileLayout>
  );
}