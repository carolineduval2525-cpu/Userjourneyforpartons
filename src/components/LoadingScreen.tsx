import { useEffect, useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Logo } from './Logo';
import { Sparkles, MapPin, TrendingUp, Users, Check } from 'lucide-react';

interface LoadingScreenProps {
  onNavigate: (screen: string) => void;
}

const loadingSteps = [
  { 
    id: 1, 
    text: 'Analyse de vos préférences...', 
    icon: Sparkles,
    duration: 1500 
  },
  { 
    id: 2, 
    text: 'Recherche des meilleures destinations...', 
    icon: MapPin,
    duration: 2000 
  },
  { 
    id: 3, 
    text: 'Calcul de compatibilité...', 
    icon: TrendingUp,
    duration: 1800 
  },
  { 
    id: 4, 
    text: 'Optimisation pour votre groupe...', 
    icon: Users,
    duration: 1500 
  },
];

export function LoadingScreen({ onNavigate }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(prev => prev + 1);
      }, loadingSteps[currentStep].duration);

      return () => clearTimeout(timer);
    } else {
      // Toutes les étapes terminées, rediriger vers les résultats
      const finalTimer = setTimeout(() => {
        onNavigate('results');
      }, 800);

      return () => clearTimeout(finalTimer);
    }
  }, [currentStep, onNavigate]);

  const progress = ((currentStep) / loadingSteps.length) * 100;

  return (
    <MobileLayout activeTab="home" showNavbar={false} onNavigate={onNavigate}>
      <div className="min-h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#4ECDC4]/5 via-white to-cyan-50">
        {/* Logo animé */}
        <div className="mb-12 animate-in zoom-in duration-500">
          <div className="relative">
            <Logo size={80} />
            {/* Cercles animés autour du logo */}
            <div className="absolute inset-0 -m-4">
              <div className="w-full h-full border-4 border-[#4ECDC4]/20 rounded-full animate-ping" />
            </div>
            <div className="absolute inset-0 -m-8">
              <div className="w-full h-full border-4 border-[#4ECDC4]/10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Titre principal */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h1 className="text-[#1e3a5f] text-2xl mb-3">
            Génération de vos résultats...
          </h1>
          <p className="text-gray-600">
            Notre IA analyse vos préférences
          </p>
        </div>

        {/* Barre de progression */}
        <div className="w-full max-w-sm mb-8">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-[#4ECDC4] mt-2">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Étapes de chargement */}
        <div className="w-full max-w-sm space-y-4">
          {loadingSteps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(index);
            const isCurrent = currentStep === index;
            const isPending = currentStep < index;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                  isCompleted
                    ? 'bg-[#4ECDC4]/10 border-2 border-[#4ECDC4] scale-100'
                    : isCurrent
                    ? 'bg-white border-2 border-[#4ECDC4] shadow-lg scale-105 animate-pulse'
                    : 'bg-gray-50 border-2 border-gray-200 scale-95 opacity-50'
                }`}
              >
                {/* Icône */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isCompleted
                      ? 'bg-[#4ECDC4]'
                      : isCurrent
                      ? 'bg-[#4ECDC4] animate-spin'
                      : 'bg-gray-200'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />
                  )}
                </div>

                {/* Texte */}
                <p
                  className={`flex-1 transition-all duration-300 ${
                    isCompleted
                      ? 'text-[#4ECDC4]'
                      : isCurrent
                      ? 'text-[#1e3a5f]'
                      : 'text-gray-400'
                  }`}
                >
                  {step.text}
                </p>

                {/* Checkmark pour complété */}
                {isCompleted && (
                  <div className="animate-in zoom-in duration-300">
                    <Check className="w-5 h-5 text-[#4ECDC4]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Message de fin */}
        {currentStep >= loadingSteps.length && (
          <div className="mt-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] text-white rounded-full shadow-lg">
              <Check className="w-5 h-5" />
              <span>Analyse terminée !</span>
            </div>
          </div>
        )}

        {/* Spinner décoratif en bas */}
        <div className="mt-12 flex gap-2">
          <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </MobileLayout>
  );
}