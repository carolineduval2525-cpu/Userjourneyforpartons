import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Heart, TrendingUp, Users, ChevronLeft, Sparkles, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';
import mascotImage from 'figma:asset/1873447990cd9d63141b1a42a26f5e3f5b067e6b.png';

interface ResultsScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

const destinations = [
  {
    id: 1,
    name: 'Bali',
    country: 'Indonésie',
    image: 'https://images.unsplash.com/photo-1648999637610-a0604610e23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwYmVhY2h8ZW58MXx8fHwxNzYzMzMwMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '1200€',
    compatibility: 95,
    highlights: ['Plages', 'Temples', 'Surf'],
    likes: 234,
    travelers: 45,
    votes: 3,
    totalVotes: 4,
  },
  {
    id: 2,
    name: 'Lisbonne',
    country: 'Portugal',
    image: 'https://images.unsplash.com/photo-1648137793374-13a85c6cc59e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBwb3J0dWdhbCUyMHRyYW13YXl8ZW58MXx8fHwxNzYzMzMwMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '800€',
    compatibility: 88,
    highlights: ['Ville', 'Culture', 'Gastronomie'],
    likes: 189,
    travelers: 38,
    votes: 2,
    totalVotes: 4,
  },
  {
    id: 3,
    name: 'Thaïlande',
    country: 'Asie',
    image: 'https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYzMzMwMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '1100€',
    compatibility: 82,
    highlights: ['Nature', 'Aventure', 'Plages'],
    likes: 156,
    travelers: 29,
    votes: 1,
    totalVotes: 4,
  },
];

export function ResultsScreen({ onNavigate }: ResultsScreenProps) {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (destId: number) => {
    setSelectedDestination(destId);
    setHasVoted(true);
  };

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
              <h1 className="text-[#1e3a5f] text-[20px] font-bold">
                Vote pour ta destination !
              </h1>
              <img src={mascotImage} alt="Mascotte Partons" className="w-15 h-15 object-contain" />
            </div>
            <p className="text-gray-600">
              Choisis ta destination préférée parmi nos meilleures recommandations
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="space-y-4">
            {destinations.map((dest, index) => {
              const votePercentage = Math.round((dest.votes / dest.totalVotes) * 100);
              const isSelected = selectedDestination === dest.id;
              
              return (
                <div
                  key={dest.id}
                  className={`bg-white rounded-2xl overflow-hidden border-2 transition-all ${
                    isSelected
                      ? 'border-[#4ECDC4] shadow-xl scale-[1.02]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={dest.image}
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
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#4ECDC4]/10 flex items-center justify-center">
                        <div className="bg-[#4ECDC4] rounded-full p-4 shadow-lg animate-in zoom-in">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-left">
                        <h3 className="text-[#1e3a5f] mb-1">{dest.name}, {dest.country}</h3>
                        <p className="text-gray-600">À partir de {dest.price}</p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
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

                    {/* Vote Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">{dest.votes}/{dest.totalVotes} votes</span>
                        <span className="text-[#4ECDC4]">{votePercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] h-full transition-all duration-500"
                          style={{ width: `${votePercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Vote Button */}
                    <Button
                      onClick={() => handleVote(dest.id)}
                      disabled={hasVoted && !isSelected}
                      className={`w-full h-10 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-[#4ECDC4] hover:bg-[#3db8af] text-white'
                          : hasVoted
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/5'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Mon choix
                        </>
                      ) : hasVoted ? (
                        'Déjà voté'
                      ) : (
                        'Voter pour cette destination'
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fixed bottom-[100px] left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
          <Button 
            onClick={() => onNavigate('destination-validated')}
            disabled={!hasVoted}
            className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-12 rounded-full shadow-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-center pt-[1px] pr-[12px] pb-[8px] pl-[12px]"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Valider mon vote
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}