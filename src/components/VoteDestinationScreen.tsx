import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { TrendingUp, Users, MapPin, ChevronLeft, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';

interface VoteDestinationScreenProps {
  onNavigate: (screen: string) => void;
}

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonésie',
    image: 'https://images.unsplash.com/photo-1648999637610-a0604610e23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwYmVhY2h8ZW58MXx8fHwxNzYzNDg3MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Plages paradisiaques, temples mystiques et rizières en terrasse. Une destination parfaite pour se ressourcer.',
    compatibility: 95,
    votes: 0,
  },
  {
    id: 2,
    name: 'Tokyo, Japon',
    image: 'https://images.unsplash.com/photo-1648871647634-0c99b483cb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc2MzQ2MzUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Culture traditionnelle et modernité ultraconnectée. Une aventure urbaine fascinante entre temples et néons.',
    compatibility: 88,
    votes: 0,
  },
  {
    id: 3,
    name: 'Lisbonne, Portugal',
    image: 'https://images.unsplash.com/photo-1664186433986-000b86bebbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBwb3J0dWdhbCUyMHRyYW18ZW58MXx8fHwxNzYzNDg3MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Ruelles colorées, tramways vintage et gastronomie délicieuse. Le charme méditerranéen à l\'état pur.',
    compatibility: 82,
    votes: 0,
  },
];

export function VoteDestinationScreen({ onNavigate }: VoteDestinationScreenProps) {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);

  const handleVote = (destId: number) => {
    if (!voted) {
      setSelectedDestination(destId);
    }
  };

  const confirmVote = () => {
    if (selectedDestination) {
      setVoted(true);
      setTimeout(() => {
        onNavigate('destination-validated');
      }, 1500);
    }
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col pb-32">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('results')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors min-h-[44px] min-w-[44px]"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[#1e3a5f] mb-2 text-2xl font-bold">
            Où partons-nous ?
          </h1>
          <p className="text-gray-600">
            Sélectionne ta destination préférée
          </p>
        </div>

        {/* Vote Instructions */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl mb-6 border border-blue-100">
          <p className="text-sm text-blue-900">
            💡 <span className="font-medium">Info :</span> Clique sur une carte pour la sélectionner, puis confirme ton vote !
          </p>
        </div>

        {/* Destinations */}
        <div className="flex-1 space-y-4 mb-6">
          {destinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => handleVote(dest.id)}
              disabled={voted}
              className={`w-full bg-white rounded-2xl overflow-hidden transition-all transform ${
                selectedDestination === dest.id
                  ? 'border-4 border-[#4ECDC4] shadow-xl scale-[1.02] ring-4 ring-[#4ECDC4]/20'
                  : 'border-2 border-gray-200 hover:border-gray-300 hover:scale-[1.01] hover:shadow-md'
              } ${voted ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {/* Image */}
              <div className="relative h-32">
                <ImageWithFallback
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-[#4ECDC4]" />
                    <span className="text-[#4ECDC4] text-sm">{dest.compatibility}%</span>
                  </div>
                </div>
                {selectedDestination === dest.id && (
                  <div className="absolute top-3 left-3 bg-[#4ECDC4] p-2.5 rounded-full shadow-lg animate-in zoom-in">
                    <CheckCircle className="w-6 h-6 text-white fill-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#4ECDC4]" />
                    <h3 className="text-[#1e3a5f]">{dest.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{dest.votes}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-[100px] left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4 z-40">
          <Button
            onClick={confirmVote}
            disabled={!selectedDestination || voted}
            className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#2da89f] text-white h-14 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-xl text-lg font-semibold min-h-[44px]"
          >
            {voted ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Vote enregistré ✓
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                ✨ Valider mon vote
              </span>
            )}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}