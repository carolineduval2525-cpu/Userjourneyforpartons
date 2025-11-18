import { MobileLayout } from './MobileLayout';
import { MessageCircle, Users, Clock, Plus, MapPin } from 'lucide-react';
import { Button } from './ui/button';

interface GroupsMessagingScreenProps {
  onNavigate: (screen: string, groupId?: number) => void;
}

export function GroupsMessagingScreen({ onNavigate }: GroupsMessagingScreenProps) {
  const conversations = [
    {
      id: 1,
      groupName: 'Les Aventuriers 🌴',
      destination: 'Bali, Indonésie',
      lastMessage: 'Sarah n\'a pas encore voté pour le vol !',
      sender: 'Marc',
      time: 'Il y a 5 min',
      unread: 3,
      avatar: '🏝️',
      members: 4,
      votesNeeded: 1,
    },
    {
      id: 2,
      groupName: 'Trip Portugal 🇵🇹',
      destination: 'Lisbonne, Portugal',
      lastMessage: 'J\'ai voté pour le vol de 10h !',
      sender: 'Julie',
      time: 'Il y a 2h',
      unread: 0,
      avatar: '🇵🇹',
      members: 3,
      votesNeeded: 0,
    },
    {
      id: 3,
      groupName: 'Copines à Tokyo 🗾',
      destination: 'Tokyo, Japon',
      lastMessage: 'On part quand exactement ?',
      sender: 'Emma',
      time: 'Il y a 1j',
      unread: 5,
      avatar: '🗾',
      members: 5,
      votesNeeded: 2,
    },
  ];

  return (
    <MobileLayout activeTab="groups" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 pb-32">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[#1e3a5f] mb-2">
            Mes Groupes
          </h1>
          <p className="text-gray-600">
            Organise tes voyages en groupe
          </p>
        </div>

        {/* Create New Group Button */}
        <Button
          onClick={() => onNavigate('travel-choice')}
          className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4] text-white h-12 rounded-xl mb-6 flex items-center justify-center gap-2 shadow-md"
        >
          <Plus className="w-5 h-5" />
          Créer un nouveau groupe
        </Button>

        {/* Conversations List */}
        {conversations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-[#1e3a5f] mb-2">Aucune conversation</h3>
            <p className="text-gray-600 text-sm mb-6">
              Crée un voyage pour commencer à discuter avec ton groupe !
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => onNavigate('group-chat', conv.id)}
                className="bg-white rounded-2xl p-4 border-2 border-gray-200 hover:border-[#4ECDC4] hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                    {conv.avatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#1e3a5f] truncate">
                          {conv.groupName}
                        </h3>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {conv.destination}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-2">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{conv.time}</span>
                        </div>
                        {conv.unread > 0 && (
                          <div className="w-5 h-5 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xs font-medium shadow-sm animate-pulse">
                            {conv.unread}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 truncate mb-2">
                      <span className="text-[#4ECDC4]">{conv.sender}:</span> {conv.lastMessage}
                    </p>

                    {/* Group Info */}
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="w-3 h-3" />
                        <span>{conv.members} membres</span>
                      </div>
                      {conv.votesNeeded > 0 && (
                        <div className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                          {conv.votesNeeded} vote{conv.votesNeeded > 1 ? 's' : ''} en attente
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MobileLayout>
  );
}