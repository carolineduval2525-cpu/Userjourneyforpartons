import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';
import mascotImage from 'figma:asset/1873447990cd9d63141b1a42a26f5e3f5b067e6b.png';

interface MoodScreenProps {
  onNavigate: (screen: string) => void;
}

const moods = [
  { 
    id: 'adventure', 
    label: 'Aventure', 
    image: 'https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGhpa2luZ3xlbnwxfHx8fDE3NjMzMjM1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    emoji: '🏔️'
  },
  { 
    id: 'relax', 
    label: 'Détente', 
    image: 'https://images.unsplash.com/photo-1557447504-a2bd91cd92c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwYmVhY2glMjBwYXJhZGlzZXxlbnwxfHx8fDE3NjM1MDQyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    emoji: '🌴'
  },
  { 
    id: 'city', 
    label: 'Urbain', 
    image: 'https://images.unsplash.com/photo-1689972206020-37e0e8cf93ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzMzI2MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    emoji: '🏙️'
  },
  { 
    id: 'party', 
    label: 'Festif', 
    image: 'https://images.unsplash.com/photo-1683582544815-66d1ea55d3c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMG5pZ2h0bGlmZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2MzMyNjMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    emoji: '🎉'
  },
  { 
    id: 'nature', 
    label: 'Nature', 
    image: 'https://images.unsplash.com/photo-1690279844829-c5e3cb643d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB3aWxkbGlmZSUyMHNhZmFyaXxlbnwxfHx8fDE3NjMzMjYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    emoji: '🦁'
  },
  { 
    id: 'culture', 
    label: 'Culture', 
    image: 'https://images.unsplash.com/photo-1654738763601-59b59ada3b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjMzMjYzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    emoji: '🎨'
  },
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
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-[#1e3a5f] text-2xl font-bold">
              Quel est le mood ?
            </h1>
            <img src={mascotImage} alt="Mascotte Partons" className="w-15 h-15 object-contain" />
          </div>
          <p className="text-gray-600">
            Choisis l'ambiance qui te correspond
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {moods.map((mood) => {
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`relative rounded-2xl border-3 transition-all transform hover:scale-105 overflow-hidden ${
                  selectedMood === mood.id
                    ? 'border-[#4ECDC4] ring-4 ring-[#4ECDC4]/30 scale-105 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                {/* Image Background */}
                <div className="relative h-32">
                  <ImageWithFallback
                    src={mood.image}
                    alt={mood.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Check Icon */}
                  {selectedMood === mood.id && (
                    <div className="absolute top-2 right-2 w-7 h-7 bg-[#4ECDC4] rounded-full flex items-center justify-center animate-in zoom-in shadow-lg">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-5 h-5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  )}
                  
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-center">{mood.label}</p>
                  </div>
                </div>
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