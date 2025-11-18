import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Bike, Utensils, Camera, Music, ShoppingBag, Gamepad2, Palmtree, BookOpen, ChevronLeft } from 'lucide-react';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';

interface ActivitiesScreenProps {
  onNavigate: (screen: string) => void;
}

const activities = [
  { id: 'sports', label: 'Sports & Activités', icon: Bike },
  { id: 'food', label: 'Gastronomie', icon: Utensils },
  { id: 'photo', label: 'Photographie', icon: Camera },
  { id: 'music', label: 'Musique & Concerts', icon: Music },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
  { id: 'games', label: 'Jeux & Fun', icon: Gamepad2 },
  { id: 'beach', label: 'Plage & Mer', icon: Palmtree },
  { id: 'culture', label: 'Musées & Culture', icon: BookOpen },
];

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function ActivitiesScreen({ onNavigate }: ActivitiesScreenProps) {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('mood')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Progress Bar */}
        <ProgressBar currentStep={4} totalSteps={7} stepNames={stepNames} />

        <div className="mb-6 relative z-10">
          <h1 className="text-[#1e3a5f] mb-2 text-2xl font-bold">
            Quelles activités ?
          </h1>
          <p className="text-gray-600">
            Sélectionne tout ce qui te fait envie
          </p>
          {selectedActivities.length > 0 && (
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-full text-sm">
              <span>{selectedActivities.length} sélectionné{selectedActivities.length > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3">
          {activities.map((activity) => {
            const Icon = activity.icon;
            const isSelected = selectedActivities.includes(activity.id);
            return (
              <button
                key={activity.id}
                onClick={() => toggleActivity(activity.id)}
                className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                  isSelected
                    ? 'border-[#4ECDC4] bg-[#4ECDC4]/10 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 transition-all ${
                    isSelected ? 'bg-[#4ECDC4] scale-110' : 'bg-gray-100'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <p className={`text-sm text-center ${isSelected ? 'text-[#4ECDC4]' : 'text-gray-700'}`}>
                  {activity.label}
                </p>
              </button>
            );
          })}
        </div>

        <Button
          onClick={() => onNavigate('dates')}
          disabled={selectedActivities.length === 0}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Suivant
        </Button>
      </div>
    </MobileLayout>
  );
}