import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Heart, TrendingUp, Users, ChevronLeft, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SmilingLuggage } from './SmilingLuggage';
import { ProgressBar } from './ProgressBar';

interface ResultsScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonésie',
    image: 'bali,indonesia',
    price: '1200€',
    compatibility: 95,
    highlights: ['Plages', 'Temples', 'Surf'],
    likes: 234,
    travelers: 45,
  },
  {
    id: 2,
    name: 'Lisbonne, Portugal',
    image: 'lisbon,portugal',
    price: '800€',
    compatibility: 88,
    highlights: ['Ville', 'Culture', 'Gastronomie'],
    likes: 189,
    travelers: 38,
  },
  {
    id: 3,
    name: 'Thaïlande',
    image: 'thailand',
    price: '1100€',
    compatibility: 82,
    highlights: ['Nature', 'Aventure', 'Plages'],
    likes: 156,
    travelers: 29,
  },
];

export function ResultsScreen({ onNavigate }: ResultsScreenProps) {
  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="min-h-full pb-32">
        <div className="p-6">
          {/* Back Button */}
          <button
            onClick={() => onNavigate('budget')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Retour</span>
          </button>

          {/* Progress Bar */}
          <ProgressBar currentStep={7} totalSteps={7} stepNames={stepNames} />

          {/* Header */}
          <div className="mb-6 relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4ECDC4] to-[#3db8af] rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-[#1e3a5f]">
                Tes destinations
              </h1>
            </div>
            <p className="text-gray-600">
              Basées sur tes préférences, voici nos meilleures recommandations !
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="space-y-4">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                onClick={() => onNavigate('details')}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#4ECDC4] hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-48">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${dest.image}`}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-[#4ECDC4]" />
                      <span className="text-[#4ECDC4]">{dest.compatibility}%</span>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] text-white px-3 py-1 rounded-full shadow-md animate-in fade-in zoom-in">
                      ⭐ Meilleur match
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-left">
                      <h3 className="text-[#1e3a5f] mb-1">{dest.name}</h3>
                      <p className="text-gray-600">À partir de {dest.price}</p>
                    </div>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {dest.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{dest.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{dest.travelers} voyageurs</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
          <Button 
            onClick={() => onNavigate('vote-destination')}
            className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-12 rounded-full shadow-lg transition-all transform active:scale-95"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Voter pour ma destination
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}