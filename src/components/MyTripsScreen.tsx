import { useState, useEffect } from 'react';
import { MobileLayout } from './MobileLayout';
import { Users, Calendar, MapPin, Plane, Hotel, Filter, Search, CheckCircle } from 'lucide-react';
import type { Trip } from '../App';

interface MyTripsScreenProps {
  onNavigate: (screen: string, groupId?: string | number) => void;
  trips: Trip[];
  showSuccessMessage?: boolean;
}

export function MyTripsScreen({ onNavigate, trips, showSuccessMessage = false }: MyTripsScreenProps) {
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'upcoming' | 'past'>('all');
  const [showNotification, setShowNotification] = useState(showSuccessMessage);

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  // Groupes/voyages par défaut
  const defaultTrips = [
    {
      id: 1,
      name: 'Les Aventuriers',
      destination: 'Bali, Indonésie',
      image: 'https://images.unsplash.com/photo-1669545192473-f4d88714fe2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwc3Vuc2V0fGVufDF8fHx8MTc2MzMwODQzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Été 2025',
      dateDetails: '15 juin - 22 juin 2025',
      members: 4,
      status: 'En cours',
      category: 'ongoing',
    },
    {
      id: 2,
      name: 'Trip Portugal',
      destination: 'Lisbonne, Portugal',
      image: 'https://images.unsplash.com/photo-1604400555082-b6131dfc4d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjB0cmFtd2F5JTIwc3RyZWV0fGVufDF8fHx8MTc2MzMwODQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Printemps 2025',
      dateDetails: '10 avril - 17 avril 2025',
      members: 3,
      status: 'Vote en cours',
      category: 'upcoming',
    },
  ];

  const allTrips = [
    ...defaultTrips,
    ...trips.map((trip) => ({
      id: trip.id,
      name: `Voyage ${trip.destination}`,
      destination: `${trip.destination}, ${trip.country}`,
      image: trip.image,
      date: `${trip.dates.start} - ${trip.dates.end}`,
      dateDetails: `${trip.dates.start} - ${trip.dates.end}`,
      members: trip.members,
      status: trip.status,
      category: 'ongoing',
      trip: trip,
    })),
  ];

  const filteredTrips = filter === 'all' 
    ? allTrips 
    : allTrips.filter(t => t.category === filter);

  return (
    <MobileLayout activeTab="travels" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 pb-32">
        {/* Success Notification */}
        {showNotification && (
          <div className="fixed top-6 left-4 right-4 max-w-md mx-auto z-50 animate-in slide-in-from-top-4 fade-in duration-500">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Voyage créé avec succès !</p>
                <p className="text-sm text-white/90">Ton itinéraire est prêt 🎉</p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[#1e3a5f] mb-2">
            Mes Voyages
          </h1>
          <p className="text-gray-600">
            Tous tes voyages en un seul endroit
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une destination..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              filter === 'all'
                ? 'bg-[#4ECDC4] text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              filter === 'ongoing'
                ? 'bg-[#4ECDC4] text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            En cours
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              filter === 'upcoming'
                ? 'bg-[#4ECDC4] text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            À venir
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              filter === 'past'
                ? 'bg-[#4ECDC4] text-white'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            Passés
          </button>
        </div>

        {/* Trips Grid */}
        {filteredTrips.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-[#1e3a5f] mb-2">Aucun voyage</h3>
            <p className="text-gray-600 text-sm mb-6">
              Commence à planifier ton prochain voyage !
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTrips.map((trip) => (
              <div
                key={trip.id}
                onClick={() => onNavigate('group-details', trip.id)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
              >
                {/* Image Header */}
                <div className="relative h-40">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white mb-1">{trip.name}</h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{trip.destination}</span>
                    </div>
                  </div>
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs backdrop-blur-sm ${
                    trip.status === 'Confirmé'
                      ? 'bg-green-500/90 text-white'
                      : 'bg-[#4ECDC4]/90 text-white'
                  }`}>
                    {trip.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{trip.dateDetails}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{trip.members}</span>
                    </div>
                  </div>

                  {trip.trip && (
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      {trip.trip.flight?.confirmationNumber && (
                        <div className="flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                          <Plane className="w-3.5 h-3.5" />
                          <span>Vol confirmé</span>
                        </div>
                      )}
                      {trip.trip.accommodation?.confirmationNumber && (
                        <div className="flex items-center gap-1.5 text-xs text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full">
                          <Hotel className="w-3.5 h-3.5" />
                          <span>Hôtel confirmé</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MobileLayout>
  );
}