import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  ChevronLeft, 
  Users, 
  MapPin, 
  Calendar, 
  Euro, 
  Plane, 
  Hotel,
  MessageCircle,
  Share2,
  CheckCircle,
  Clock,
  Settings,
  Sparkles,
  Bell,
  X,
  UserPlus
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Trip } from '../App';

interface GroupDetailsScreenProps {
  onNavigate: (screen: string) => void;
  groupId: string | number;
  trips: Trip[];
}

interface Member {
  id: number;
  name: string;
  avatar: string;
  role: string;
  hasVoted: boolean;
}

export function GroupDetailsScreen({ onNavigate, groupId, trips }: GroupDetailsScreenProps) {
  const [reminderSent, setReminderSent] = useState(false);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteSent, setInviteSent] = useState(false);

  const handleSendReminder = () => {
    setReminderSent(true);
    setTimeout(() => setReminderSent(false), 3000);
  };

  const handleSendInvite = () => {
    if (inviteEmail.trim()) {
      setInviteSent(true);
      setTimeout(() => {
        setInviteSent(false);
        setShowInviteDialog(false);
        setInviteEmail('');
      }, 2000);
    }
  };

  // Mock data for the default groups
  const defaultGroupsData: Record<string | number, any> = {
    1: {
      id: 1,
      name: 'Les Aventuriers',
      members: [
        { id: 1, name: 'Sophie', avatar: '👩🏻', role: 'Admin', hasVoted: true },
        { id: 2, name: 'Marc', avatar: '👨🏻', role: 'Membre', hasVoted: true },
        { id: 3, name: 'Léa', avatar: '👩🏼', role: 'Membre', hasVoted: true },
        { id: 4, name: 'Thomas', avatar: '👨🏽', role: 'Membre', hasVoted: false },
      ],
      destination: 'Bali, Indonésie',
      image: 'https://images.unsplash.com/photo-1669545192473-f4d88714fe2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwc3Vuc2V0fGVufDF8fHx8MTc2MzMwODQzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Été 2025',
      dateDetails: '15 juin - 22 juin 2025',
      duration: 7,
      budget: 1200,
      status: 'En cours',
      votes: { total: 4, voted: 3 },
      activities: ['Plages & Surf', 'Temples', 'Randonnées', 'Vie nocturne'],
      timeline: [
        { step: 'Création du groupe', date: '10 mars 2025', completed: true },
        { step: 'Vote destination', date: '15 mars 2025', completed: true },
        { step: 'Réservation vols', date: 'En attente', completed: false },
        { step: 'Réservation hébergement', date: 'En attente', completed: false },
      ],
    },
    2: {
      id: 2,
      name: 'Trip Portugal',
      members: [
        { id: 1, name: 'Sophie', avatar: '👩🏻', role: 'Membre', hasVoted: true },
        { id: 5, name: 'Julie', avatar: '👩🏾', role: 'Admin', hasVoted: true },
        { id: 6, name: 'Alex', avatar: '👨🏼', role: 'Membre', hasVoted: false },
      ],
      destination: 'Lisbonne, Portugal',
      image: 'https://images.unsplash.com/photo-1604400555082-b6131dfc4d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjB0cmFtd2F5JTIwc3RyZWV0fGVufDF8fHx8MTc2MzMwODQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Printemps 2025',
      dateDetails: '10 avril - 17 avril 2025',
      duration: 7,
      budget: 800,
      status: 'Vote en cours',
      votes: { total: 3, voted: 2 },
      activities: ['Gastronomie', 'Architecture', 'Vie nocturne', 'Plages'],
      timeline: [
        { step: 'Création du groupe', date: '5 mars 2025', completed: true },
        { step: 'Vote destination', date: 'En cours', completed: false },
        { step: 'Réservation vols', date: 'En attente', completed: false },
        { step: 'Réservation hébergement', date: 'En attente', completed: false },
      ],
    },
  };

  // Find the group data
  const trip = trips.find(t => t.id === groupId);
  const defaultGroupData = defaultGroupsData[groupId];
  
  const groupData = trip ? {
    name: `Voyage ${trip.destination}`,
    destination: `${trip.destination}, ${trip.country}`,
    image: trip.imageUrl || 'https://images.unsplash.com/photo-1698466632559-7c66b0ec5a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwYmVhY2h8ZW58MXx8fHwxNzYzMjMzMzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: `${trip.dates.start} - ${trip.dates.end}`,
    dateDetails: `${trip.dates.start} - ${trip.dates.end}`,
    duration: trip.duration,
    budget: trip.budget,
    status: trip.status,
    members: [
      { id: 1, name: 'Sophie', avatar: '👩🏻', role: 'Admin', hasVoted: true },
    ],
    votes: { total: 1, voted: 1 },
    activities: ['Plages', 'Culture', 'Gastronomie'],
    timeline: [
      { step: 'Création du groupe', date: trip.dates.start, completed: true },
      { step: 'Vote destination', date: trip.dates.start, completed: true },
      { step: 'Réservation vols', date: trip.dates.start, completed: true },
      { step: 'Réservation hébergement', date: trip.dates.start, completed: true },
    ],
    flight: trip.flight,
    accommodation: trip.accommodation,
  } : defaultGroupData;

  if (!groupData) {
    return (
      <MobileLayout activeTab="groups" showNavbar={true} onNavigate={onNavigate}>
        <div className="p-6">
          <p className="text-gray-600">Groupe introuvable</p>
        </div>
      </MobileLayout>
    );
  }

  const nonVoters = groupData.members.filter((m: Member) => !m.hasVoted);

  return (
    <MobileLayout activeTab="travels" showNavbar={true} onNavigate={onNavigate}>
      <div className="min-h-full pb-24">
        {/* Hero Section */}
        <div className="relative h-48">
          <ImageWithFallback
            src={groupData.image}
            alt={groupData.destination}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Back Button */}
          <button
            onClick={() => onNavigate('groups')}
            className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-[#1e3a5f]" />
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-white mb-1">{groupData.name}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{groupData.destination}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-between">
            <span className={`px-4 py-2 rounded-full text-sm ${
              groupData.status === 'Confirmé'
                ? 'bg-green-100 text-green-700'
                : 'bg-[#4ECDC4]/10 text-[#4ECDC4]'
            }`}>
              {groupData.status}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => onNavigate('groups')}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-xl border border-gray-200 text-center">
              <Calendar className="w-5 h-5 text-[#4ECDC4] mx-auto mb-2" />
              <p className="text-xs text-gray-600">Durée</p>
              <p className="text-[#1e3a5f] text-sm">{groupData.duration} jours</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 text-center">
              <Users className="w-5 h-5 text-[#4ECDC4] mx-auto mb-2" />
              <p className="text-xs text-gray-600">Membres</p>
              <p className="text-[#1e3a5f] text-sm">{groupData.members.length}</p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 text-center">
              <Euro className="w-5 h-5 text-[#4ECDC4] mx-auto mb-2" />
              <p className="text-xs text-gray-600">Budget</p>
              <p className="text-[#1e3a5f] text-sm">{groupData.budget}€</p>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 p-4 rounded-2xl border border-[#4ECDC4]/20">
            <h3 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#4ECDC4]" />
              Dates du voyage
            </h3>
            <p className="text-gray-700">{groupData.dateDetails}</p>
          </div>

          {/* Members Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[#1e3a5f]">
                Membres ({groupData.members.length})
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#4ECDC4] hover:text-[#3db8af]"
                onClick={() => setShowInviteDialog(true)}
              >
                + Inviter
              </Button>
            </div>
            <div className="space-y-2">
              {groupData.members.map((member: Member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl p-3 border border-gray-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center text-lg">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="text-[#1e3a5f]">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  {member.hasVoted ? (
                    <div className="flex items-center gap-2 text-green-600 text-xs">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                      <span>A voté</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="w-4 h-4" />
                      <span>En attente</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Votes Progress */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <h3 className="text-[#1e3a5f] mb-3">Progression des votes</h3>
            <div className="mb-2">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">{groupData.votes.voted} sur {groupData.votes.total} ont voté</span>
                <span className="text-[#4ECDC4]">
                  {Math.round((groupData.votes.voted / groupData.votes.total) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#4ECDC4] h-2 rounded-full transition-all"
                  style={{ width: `${(groupData.votes.voted / groupData.votes.total) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-[#1e3a5f] mb-3">Activités prévues</h3>
            <div className="flex flex-wrap gap-2">
              {groupData.activities.map((activity: string, index: number) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>

          {/* Flight & Accommodation (if confirmed) */}
          {groupData.flight && (
            <div className="bg-white rounded-2xl p-4 border-2 border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Plane className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-[#1e3a5f]">Vol réservé</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Compagnie</span>
                  <span className="text-[#1e3a5f]">{groupData.flight.airline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Départ</span>
                  <span className="text-[#1e3a5f]">{groupData.flight.departure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix</span>
                  <span className="text-[#4ECDC4]">{groupData.flight.price}€</span>
                </div>
              </div>
            </div>
          )}

          {groupData.accommodation && (
            <div className="bg-white rounded-2xl p-4 border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Hotel className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-[#1e3a5f]">Hébergement réservé</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="text-[#1e3a5f]">{groupData.accommodation.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lieu</span>
                  <span className="text-[#1e3a5f]">{groupData.accommodation.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix total</span>
                  <span className="text-[#4ECDC4]">
                    {groupData.accommodation.pricePerNight * groupData.accommodation.nights}€
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Timeline */}
          <div>
            <h3 className="text-[#1e3a5f] mb-3">Étapes du voyage</h3>
            <div className="space-y-3">
              {groupData.timeline.map((step: any, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.completed
                      ? 'bg-[#4ECDC4]'
                      : 'bg-gray-200'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-white fill-white" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`${
                      step.completed ? 'text-[#1e3a5f]' : 'text-gray-500'
                    }`}>
                      {step.step}
                    </p>
                    <p className="text-xs text-gray-500">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reminder for non-voters */}
          {nonVoters.length > 0 && (
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 border-2 border-orange-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1e3a5f] mb-1">Vote en attente</h3>
                  <p className="text-sm text-gray-600">
                    {nonVoters.map((m: Member) => m.name).join(', ')} 
                    {nonVoters.length === 1 ? ' n\'a' : ' n\'ont'} pas encore voté
                  </p>
                </div>
              </div>
              <Button
                onClick={handleSendReminder}
                disabled={reminderSent}
                className={`w-full h-10 rounded-xl transition-all ${
                  reminderSent
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {reminderSent ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Relance envoyée !
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Relancer {nonVoters.length === 1 ? 'cette personne' : 'ces personnes'}
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Action Button */}
          {groupData.status !== 'Confirmé' && (
            <Button
              onClick={() => onNavigate('vote-destination')}
              className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-12 rounded-full flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Continuer l'organisation
            </Button>
          )}
        </div>
      </div>

      {/* Invite Dialog */}
      {showInviteDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-in zoom-in duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#1e3a5f] text-lg">Inviter un membre</h3>
                <button 
                  onClick={() => setShowInviteDialog(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="mb-4">
                <label className="text-sm text-gray-600 mb-2 block">Adresse email</label>
                <Input
                  type="email"
                  placeholder="exemple@email.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full h-12 rounded-xl"
                  autoFocus
                />
                <p className="text-xs text-gray-500 mt-2">
                  Un email d'invitation sera envoyé à cette adresse
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-11 rounded-xl"
                  onClick={() => setShowInviteDialog(false)}
                >
                  Annuler
                </Button>
                <Button
                  className="flex-1 h-11 rounded-xl bg-[#4ECDC4] hover:bg-[#3db8af] text-white"
                  onClick={handleSendInvite}
                  disabled={!inviteEmail.trim() || inviteSent}
                >
                  {inviteSent ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Envoyé !
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Envoyer
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MobileLayout>
  );
}