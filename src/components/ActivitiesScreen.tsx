import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';
import mascotImage from 'figma:asset/1873447990cd9d63141b1a42a26f5e3f5b067e6b.png';

interface ActivitiesScreenProps {
  onNavigate: (screen: string) => void;
}

const activities = [
  { id: 'sports', label: 'Sports & Activités', image: 'https://images.unsplash.com/photo-1603475429038-44361bcde123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHRyYWlsfGVufDF8fHx8MTc2MzQwNTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'food', label: 'Gastronomie', image: 'https://images.unsplash.com/photo-1717158776685-d4b7c346e1a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZ2FzdHJvbm9teSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYzNDk0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'photo', label: 'Photographie', image: 'https://images.unsplash.com/photo-1684920333013-e43f9fb0e9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMHRyYXZlbHxlbnwxfHx8fDE3NjM0OTQ0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'music', label: 'Musique & Concerts', image: 'https://images.unsplash.com/photo-1557750674-5e01bafc85c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjM0MDQzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'shopping', label: 'Shopping', image: 'https://images.unsplash.com/photo-1558898467-676fb31e1738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJvdXRpcXVlJTIwc3RvcmV8ZW58MXx8fHwxNzYzNDEyOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'beach', label: 'Plage & Mer', image: 'https://images.unsplash.com/photo-1631535152690-ba1a85229136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMG9jZWFuJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYzNDc2NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'culture', label: 'Musées & Culture', image: 'https://images.unsplash.com/photo-1648026141691-96be4a41b687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBjdWx0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MzQ5NDUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
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
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-[#1e3a5f] text-2xl font-bold">
              Quelles activités ?
            </h1>
            <img src={mascotImage} alt="Mascotte Partons" className="w-15 h-15 object-contain" />
          </div>
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
            const isSelected = selectedActivities.includes(activity.id);
            return (
              <button
                key={activity.id}
                onClick={() => toggleActivity(activity.id)}
                className={`relative rounded-xl border-3 transition-all transform hover:scale-105 overflow-hidden ${
                  isSelected
                    ? 'border-[#4ECDC4] ring-4 ring-[#4ECDC4]/30 scale-105 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                {/* Image Background */}
                <div className="relative h-28">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Check Icon */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#4ECDC4] p-1.5 rounded-full shadow-lg animate-in zoom-in">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  )}
                  
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-white text-center text-sm">{activity.label}</p>
                  </div>
                </div>
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