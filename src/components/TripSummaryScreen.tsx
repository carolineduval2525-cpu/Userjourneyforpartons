import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Plane, Hotel, Users, Trophy, ExternalLink, ChevronLeft, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface TripSummaryScreenProps {
  onNavigate: (screen: string) => void;
}

export function TripSummaryScreen({ onNavigate }: TripSummaryScreenProps) {
  // Données gagnantes
  const winningFlight = {
    airline: 'Air France',
    logo: '✈️',
    departure: '18:00',
    arrival: '22:30',
    duration: '4h30',
    price: 780,
    stops: 'Direct',
    votes: 4,
    totalVoters: 5,
  };

  const winningAccommodation = {
    title: 'Villa avec piscine privée',
    type: 'Villa entière',
    pricePerNight: 120,
    location: 'Seminyak, Bali',
    votes: 3,
    totalVoters: 5,
    totalNights: 7,
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col pb-32">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('accommodation-proposals')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block mb-3">
            <Logo size={50} />
          </div>
          <h1 className="text-[#1e3a5f] mb-2 text-left text-[24px] font-bold">
            Votre Voyage
          </h1>
          <p className="text-gray-600 text-left">
            Résumé des choix validés par le groupe
          </p>
        </div>

        {/* Success Badge */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-6 border border-green-200 animate-in fade-in slide-in-from-top-2">
          <p className="text-sm text-green-900 text-center">
            🎊 <span className="font-medium">Votes terminés !</span> Voici les résultats.
          </p>
        </div>

        <div className="flex-1 space-y-4">
          {/* Winning Flight Card */}
          <div className="bg-white rounded-2xl p-5 border-2 border-[#4ECDC4] shadow-lg">
            {/* Winner Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4ECDC4] to-[#3db8af] rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[#1e3a5f]">Vol Validé</h3>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{winningFlight.votes} votes</span>
              </div>
            </div>

            {/* Flight Details */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-4 border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{winningFlight.logo}</div>
                <div>
                  <p className="text-[#1e3a5f]">{winningFlight.airline}</p>
                  <p className="text-xs text-gray-600">{winningFlight.stops}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-[#1e3a5f]">{winningFlight.departure}</p>
                  <p className="text-xs text-gray-500">Paris CDG</p>
                </div>
                <div className="flex flex-col items-center">
                  <Plane className="w-5 h-5 text-[#4ECDC4]" />
                  <p className="text-xs text-gray-500 mt-1">{winningFlight.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-[#1e3a5f]">{winningFlight.arrival}</p>
                  <p className="text-xs text-gray-500">Bali DPS</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Prix par personne</p>
                <p className="text-[#4ECDC4] text-xl">{winningFlight.price}€</p>
              </div>
              <Button
                className="bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-10 px-6 rounded-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Réserver le Vol
              </Button>
            </div>
          </div>

          {/* Winning Accommodation Card */}
          <div className="bg-white rounded-2xl p-5 border-2 border-[#4ECDC4] shadow-lg">
            {/* Winner Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4ECDC4] to-[#3db8af] rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[#1e3a5f]">Hébergement Validé</h3>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{winningAccommodation.votes} votes</span>
              </div>
            </div>

            {/* Accommodation Details */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-4 border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center">
                  <Hotel className="w-5 h-5 text-[#4ECDC4]" />
                </div>
                <div>
                  <p className="text-[#1e3a5f]">{winningAccommodation.title}</p>
                  <p className="text-xs text-gray-600">{winningAccommodation.type}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-gray-600">{winningAccommodation.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{winningAccommodation.totalNights} nuits</p>
                </div>
                <div className="text-right">
                  <p className="text-[#4ECDC4]">{winningAccommodation.pricePerNight}€</p>
                  <p className="text-xs text-gray-500">/ nuit</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total {winningAccommodation.totalNights} nuits</p>
                <p className="text-[#4ECDC4] text-xl">{winningAccommodation.pricePerNight * winningAccommodation.totalNights}€</p>
              </div>
              <Button
                className="bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-10 px-6 rounded-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Réserver l'Hôtel
              </Button>
            </div>
          </div>

          {/* Total Cost Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-5 border-2 border-gray-200">
            <h3 className="text-[#1e3a5f] mb-3">Coût Total Estimé</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Vol</span>
                <span className="text-gray-800">{winningFlight.price}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hébergement (7 nuits)</span>
                <span className="text-gray-800">{winningAccommodation.pricePerNight * winningAccommodation.totalNights}€</span>
              </div>
              <div className="h-px bg-gray-300 my-2"></div>
              <div className="flex justify-between">
                <span className="text-[#1e3a5f]">Total par personne</span>
                <span className="text-[#4ECDC4] text-xl">{winningFlight.price + (winningAccommodation.pricePerNight * winningAccommodation.totalNights)}€</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
          <Button
            onClick={() => onNavigate('itinerary-confirmed')}
            className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-12 rounded-full shadow-lg transition-all transform active:scale-95"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Finaliser mon itinéraire
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}