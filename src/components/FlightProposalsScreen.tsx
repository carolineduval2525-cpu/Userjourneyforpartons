import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Plane, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface FlightProposalsScreenProps {
  onNavigate: (screen: string) => void;
}

interface Flight {
  id: number;
  airline: string;
  logo: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  stops: string;
  votes: number;
}

const flights: Flight[] = [
  {
    id: 1,
    airline: 'Air France',
    logo: '✈️',
    departure: '18:00',
    arrival: '22:30',
    duration: '4h30',
    price: 780,
    stops: 'Direct',
    votes: 0,
  },
  {
    id: 2,
    airline: 'Emirates',
    logo: '🛫',
    departure: '09:15',
    arrival: '15:45',
    duration: '6h30',
    price: 650,
    stops: '1 escale',
    votes: 0,
  },
  {
    id: 3,
    airline: 'KLM',
    logo: '✈️',
    departure: '14:30',
    arrival: '19:00',
    duration: '4h30',
    price: 820,
    stops: 'Direct',
    votes: 0,
  },
  {
    id: 4,
    airline: 'Qatar Airways',
    logo: '🛫',
    departure: '22:45',
    arrival: '06:30+1',
    duration: '7h45',
    price: 590,
    stops: '1 escale',
    votes: 0,
  },
  {
    id: 5,
    airline: 'Lufthansa',
    logo: '✈️',
    departure: '11:00',
    arrival: '16:15',
    duration: '5h15',
    price: 710,
    stops: '1 escale',
    votes: 0,
  },
];

export function FlightProposalsScreen({ onNavigate }: FlightProposalsScreenProps) {
  const [selectedFlights, setSelectedFlights] = useState<number[]>([]);

  const toggleSelection = (flightId: number) => {
    setSelectedFlights(prev => 
      prev.includes(flightId) 
        ? prev.filter(id => id !== flightId)
        : [...prev, flightId]
    );
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col pb-32">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('destination-validated')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#4ECDC4]/10 rounded-xl flex items-center justify-center">
              <Plane className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <h1 className="text-[#1e3a5f] text-[24px] font-bold">
              Choix du Vol
            </h1>
          </div>
          <p className="text-gray-600">
            Sélectionne les vols qui te conviennent
          </p>
        </div>

        {/* Vote Instructions */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl mb-4 border border-amber-100">
          <p className="text-xs text-amber-900">
            💡 Clique sur une carte pour la sélectionner (tu peux en choisir plusieurs)
          </p>
        </div>

        {/* Flight List */}
        <div className="flex-1 space-y-3">
          {flights.map((flight) => (
            <button
              key={flight.id}
              onClick={() => toggleSelection(flight.id)}
              className={`relative w-full bg-white rounded-2xl p-4 transition-all transform hover:scale-[1.01] ${
                selectedFlights.includes(flight.id)
                  ? 'border-4 border-[#4ECDC4] shadow-xl ring-4 ring-[#4ECDC4]/20'
                  : 'border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Selected Indicator */}
              {selectedFlights.includes(flight.id) && (
                <div className="absolute top-3 right-3">
                  <div className="bg-[#4ECDC4] p-2 rounded-full shadow-lg animate-in zoom-in">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
              )}

              {/* Airline Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">{flight.logo}</div>
                  <div className="text-left">
                    <p className="text-[#1e3a5f]">{flight.airline}</p>
                    <p className="text-xs text-gray-500">{flight.stops}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#4ECDC4] text-xl">{flight.price}€</p>
                  <p className="text-xs text-gray-500">par personne</p>
                </div>
              </div>

              {/* Flight Details */}
              <div className="flex items-center justify-between mb-3 bg-gray-50 rounded-xl p-3">
                <div className="text-center">
                  <p className="text-[#1e3a5f]">{flight.departure}</p>
                  <p className="text-xs text-gray-500">CDG</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-8 h-px bg-gray-300"></div>
                    <Plane className="w-4 h-4" />
                    <div className="w-8 h-px bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{flight.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-[#1e3a5f]">{flight.arrival}</p>
                  <p className="text-xs text-gray-500">DPS</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-gray-100">
                <Clock className="w-4 h-4" />
                <span>{flight.stops}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-[100px] left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
          <Button
            onClick={() => onNavigate('accommodation-proposals')}
            className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Suivant : Choisir l'hébergement</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}