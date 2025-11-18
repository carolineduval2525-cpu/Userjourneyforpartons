import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { MapPin, Users, TrendingUp, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';

interface DestinationValidatedScreenProps {
  onNavigate: (screen: string) => void;
}

export function DestinationValidatedScreen({ onNavigate }: DestinationValidatedScreenProps) {
  // Données de la destination gagnante
  const winningDestination = {
    name: 'Bali, Indonésie',
    image: 'https://images.unsplash.com/photo-1648999637610-a0604610e23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwYmVhY2h8ZW58MXx8fHwxNzYzMzMwMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Plages paradisiaques, temples mystiques et rizières en terrasse. Une destination parfaite pour se ressourcer.',
    compatibility: 95,
    votes: 4,
    totalVoters: 5,
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Confetti Animation Header */}
        <div className="text-center mb-6 animate-in fade-in zoom-in duration-500">
          <div className="inline-block mb-4 relative">
            <Logo size={70} />
            <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
              🎉
            </div>
          </div>
          <h1 className="text-[#1e3a5f] mb-2 text-[20px]">
            C'est décidé !
          </h1>
          <p className="text-gray-600 text-[16px]">
            Votre groupe a choisi sa destination
          </p>
        </div>

        {/* Winning Destination Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full bg-white rounded-3xl overflow-hidden border-4 border-[#4ECDC4] shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
            {/* Winner Badge */}
            <div className="bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] text-white py-3 px-4 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Destination Gagnante</span>
              <Sparkles className="w-5 h-5" />
            </div>

            {/* Image */}
            <div className="relative h-64">
              <ImageWithFallback
                src={winningDestination.image}
                alt={winningDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-[#4ECDC4]" />
                  <span className="text-[#4ECDC4]">{winningDestination.compatibility}%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-[#4ECDC4]" />
                <h2 className="text-[#1e3a5f]">{winningDestination.name}</h2>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {winningDestination.description}
              </p>

              {/* Vote Stats */}
              <div className="bg-gradient-to-r from-[#4ECDC4]/10 to-cyan-50 rounded-xl p-4 border border-[#4ECDC4]/20">
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5 text-[#4ECDC4]" />
                  <span className="text-[#1e3a5f]">
                    {winningDestination.votes} votes sur {winningDestination.totalVoters}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl my-6 border border-green-200 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <p className="text-sm text-green-900 text-center">
            🎊 <span className="font-medium">Bravo !</span> Place maintenant à la planification de votre voyage.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => onNavigate('flight-proposals')}
          className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-14 rounded-full shadow-lg transition-all transform active:scale-95"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Suivant : Planifier les vols
        </Button>
      </div>
    </MobileLayout>
  );
}