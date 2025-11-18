import { MobileLayout } from './MobileLayout';
import { Users, Plus, Calendar, MapPin, Plane, Hotel } from 'lucide-react';
import { Button } from './ui/button';
import type { Trip } from '../App';

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
    },
    {
      id: 2,
      name: 'Trip Portugal',
      members: 3,
      destination: 'Lisbonne, Portugal',
      date: 'Printemps 2025',
      status: 'Vote en cours',
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
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-[#1e3a5f] mb-2">
            Mes groupes
          </h1>
          <p className="text-gray-600">
            Gère tes voyages de groupe
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {allGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-md transition-all cursor-pointer"
              onClick={() => onNavigate('group-details', group.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[#1e3a5f] mb-1">{group.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{group.members} {group.members > 1 ? 'membres' : 'membre'}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  group.status === 'Confirmé'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-[#4ECDC4]/10 text-[#4ECDC4]'
                }`}>
                  {group.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{group.destination}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{group.date}</span>
                </div>
              </div>

              {group.trip && (
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3">
                  {group.trip.flight?.confirmationNumber && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Plane className="w-3 h-3" />
                      <span>Vol confirmé</span>
                    </div>
                  )}
                  {group.trip.accommodation?.confirmationNumber && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Hotel className="w-3 h-3" />
                      <span>Hôtel confirmé</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          onClick={() => onNavigate('travel-choice')}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Créer un nouveau groupe
        </Button>
      </div>
    </MobileLayout>
  );
}