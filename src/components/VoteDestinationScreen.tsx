import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { TrendingUp, Users, MapPin, ChevronLeft, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SmilingLuggage } from './SmilingLuggage';

interface VoteDestinationScreenProps {
  onNavigate: (screen: string) => void;
}

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonésie',
    image: 'https://images.unsplash.com/photo-1669545192473-f4d88714fe2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwc3Vuc2V0fGVufDF8fHx8MTc2MzMwODQzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Plages paradisiaques, temples mystiques et rizières en terrasse. Une destination parfaite pour se ressourcer.',
    compatibility: 95,
    votes: 0,
  },
  {
    id: 2,
    name: 'Tokyo, Japon',
    image: 'https://images.unsplash.com/photo-1583915223588-7d88ebf23414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NjMzMDE1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Culture traditionnelle et modernité ultraconnectée. Une aventure urbaine fascinante entre temples et néons.',
    compatibility: 88,
    votes: 0,
  },
  {
    id: 3,
    name: 'Lisbonne, Portugal',
    image: 'https://images.unsplash.com/photo-1604400555082-b6131dfc4d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjB0cmFtd2F5JTIwc3RyZWV0fGVufDF8fHx8MTc2MzMwODQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-block mb-3">
            <SmilingLuggage size={50} />
          </div>
          <h1 className="text-[#1e3a5f] mb-2">
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
        <div className="flex-1 space-y-4">
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
              <div className="relative h-40">
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

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {dest.description}
                </p>

                <div
                  className={`px-4 py-2.5 rounded-full text-center transition-all font-medium ${
                    selectedDestination === dest.id
                      ? 'bg-[#4ECDC4] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {selectedDestination === dest.id ? `✓ Sélectionné` : `Sélectionner ${dest.name.split(',')[0]}`}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
          <Button
            onClick={confirmVote}
            disabled={!selectedDestination || voted}
            className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
          >
            {voted ? 'Vote enregistré ✓' : 'Confirmer mon vote'}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}