import { MobileLayout } from './MobileLayout';
import { Users, Plus, Calendar, MapPin, Plane, Hotel, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import type { Trip } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mascotImage from 'figma:asset/1873447990cd9d63141b1a42a26f5e3f5b067e6b.png';

interface GroupsScreenProps {
  onNavigate: (screen: string, groupId?: string | number) => void;
  trips: Trip[];
}

export function GroupsScreen({ onNavigate, trips }: GroupsScreenProps) {
  // Add default groups if no trips exist yet
  const defaultGroups = [
    {
      id: 1,
      name: 'Les Aventuriers',
      members: 4,
      destination: 'Bali, Indonésie',
      date: 'Été 2025',
      status: 'En cours',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Trip Portugal',
      members: 3,
      destination: 'Lisbonne, Portugal',
      date: 'Printemps 2025',
      status: 'Vote en cours',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const allGroups = [
    ...defaultGroups,
    ...trips.map((trip) => ({
      id: trip.id,
      name: `Voyage ${trip.destination}`,
      members: trip.members,
      destination: `${trip.destination}, ${trip.country}`,
      date: `${trip.dates.start} - ${trip.dates.end}`,
      status: trip.status,
      trip: trip,
    })),
  ];

  return (
    <MobileLayout activeTab="groups" onNavigate={(screen) => onNavigate(screen)}>
      <div className="p-6 pb-24">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-[#1e3a5f]">
              Mes groupes
            </h1>
            <img src={mascotImage} alt="Mascotte Partons" className="w-10 h-10 object-contain" />
          </div>
          <p className="text-gray-600 text-sm">
            {allGroups.length} {allGroups.length > 1 ? 'groupes actifs' : 'groupe actif'}
          </p>
        </div>

        {/* Groups Grid */}
        <div className="space-y-4 mb-6">
          {allGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => onNavigate('group-details', group.id)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              {/* Header with Image/Gradient */}
              <div className="relative h-32">
                {group.image ? (
                  <>
                    <ImageWithFallback
                      src={group.image}
                      alt={group.destination}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${group.color || 'from-[#4ECDC4] to-[#3db8af]'}`} />
                )}
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md ${
                    group.status === 'Confirmé'
                      ? 'bg-white/90 text-green-600'
                      : 'bg-white/90 text-[#4ECDC4]'
                  }`}>
                    {group.status}
                  </span>
                </div>

                {/* Group Name */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{group.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Destination & Members */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#4ECDC4]" />
                    <span className="text-sm font-medium">{group.destination}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded-full">
                    <Users className="w-3.5 h-3.5 text-gray-600" />
                    <span className="text-xs text-gray-700 font-medium">{group.members}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{group.date}</span>
                </div>

                {/* Confirmations (if any) */}
                {group.trip && (group.trip.flight?.confirmationNumber || group.trip.accommodation?.confirmationNumber) && (
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    {group.trip.flight?.confirmationNumber && (
                      <div className="flex items-center gap-1.5 text-xs text-green-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <Plane className="w-3.5 h-3.5" />
                        <span>Vol OK</span>
                      </div>
                    )}
                    {group.trip.accommodation?.confirmationNumber && (
                      <div className="flex items-center gap-1.5 text-xs text-green-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <Hotel className="w-3.5 h-3.5" />
                        <span>Hôtel OK</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Arrow indicator */}
                <ChevronRight className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Create New Group Button */}
        <Button
          onClick={() => onNavigate('travel-choice')}
          className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#2da89f] text-white h-14 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#4ECDC4]/30 transition-all transform active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Créer un nouveau groupe</span>
        </Button>
      </div>
    </MobileLayout>
  );
}