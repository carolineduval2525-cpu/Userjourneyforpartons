import { MobileLayout } from './MobileLayout';
import { Plus, TrendingUp, MapPin, Users, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Logo } from './Logo';
import type { Trip } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  trips: Trip[];
}

export function HomeScreen({ onNavigate, trips }: HomeScreenProps) {
  const trendingDestinations = [
    { 
      name: 'Santorin', 
      country: 'Grèce', 
      image: 'https://images.unsplash.com/photo-1737891681043-435b34d9c8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYzMjUyNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      trend: '+15%' 
    },
    { 
      name: 'Tokyo', 
      country: 'Japon', 
      image: 'https://images.unsplash.com/photo-1583915223588-7d88ebf23414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwbmlnaHR8ZW58MXx8fHwxNzYzMzI1NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      trend: '+12%' 
    },
    { 
      name: 'Maldives', 
      country: 'Océan Indien', 
      image: 'https://images.unsplash.com/photo-1698726654862-377c0218dfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2MzMyNTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', 
      trend: '+10%' 
    },
  ];

  return (
    <MobileLayout activeTab="home" onNavigate={onNavigate} showHeader={true}>
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-[#1e3a5f] mb-2">
            Salut Sophie ! 👋
          </h1>
          <p className="text-gray-600">
            Prête pour ta prochaine aventure ?
          </p>
        </div>

        {/* Quick Action */}
        <Button
          onClick={() => onNavigate('travel-choice')}
          className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-14 rounded-2xl mb-8 flex items-center justify-center gap-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Organiser un nouveau voyage
        </Button>

        {/* Active Trips - Show user created trips if they exist */}
        {trips.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#4ECDC4]" />
              <h2 className="text-[#1e3a5f]">Tes voyages</h2>
            </div>
            
            <div className="space-y-3">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  onClick={() => onNavigate('details')}
                  className="bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 rounded-2xl p-5 border border-[#4ECDC4]/20 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[#1e3a5f] mb-1">{trip.destination}, {trip.country}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{trip.members} {trip.members > 1 ? 'membres' : 'membre'}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      trip.status === 'Confirmé'
                        ? 'bg-green-500 text-white'
                        : 'bg-[#4ECDC4] text-white'
                    }`}>
                      {trip.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{trip.dates.start} - {trip.dates.end}</p>
                  {trip.flight?.confirmationNumber && trip.accommodation?.confirmationNumber && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>Vol et hébergement confirmés</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trending Destinations */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#4ECDC4]" />
            <h2 className="text-[#1e3a5f]">Destinations tendances</h2>
          </div>
          
          <div className="space-y-3">
            {trendingDestinations.map((dest) => (
              <div
                key={dest.name}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 flex-shrink-0">
                    <ImageWithFallback
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 pr-4">
                    <h3 className="text-[#1e3a5f] mb-1">{dest.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{dest.country}</p>
                    <div className="flex items-center gap-1 text-sm text-[#4ECDC4]">
                      <TrendingUp className="w-4 h-4" />
                      <span>{dest.trend}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Default Active Trip (if no user trips) */}
        {trips.length === 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#4ECDC4]" />
              <h2 className="text-[#1e3a5f]">Tes voyages en cours</h2>
            </div>
            
            <div
              onClick={() => onNavigate('details')}
              className="bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 rounded-2xl p-5 border border-[#4ECDC4]/20 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[#1e3a5f] mb-1">Bali, Indonésie</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Les Aventuriers • 4 membres</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#4ECDC4] text-white rounded-full text-xs">
                  75% votes
                </span>
              </div>
              <p className="text-sm text-gray-600">Vote en cours • Été 2025</p>
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}