import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  ChevronLeft, 
  Send,
  Bell,
  CheckCircle,
  MoreVertical,
  Users,
  MapPin,
  Info
} from 'lucide-react';

interface GroupChatScreenProps {
  onNavigate: (screen: string, groupId?: number) => void;
  groupId: string | number;
}

interface Member {
  id: number;
  name: string;
  avatar: string;
  hasVoted: boolean;
}

export function GroupChatScreen({ onNavigate, groupId }: GroupChatScreenProps) {
  const [message, setMessage] = useState('');
  const [reminderSent, setReminderSent] = useState(false);

  // Mock data for groups
  const groupsData: Record<string | number, any> = {
    1: {
      id: 1,
      name: 'Les Aventuriers 🌴',
      destination: 'Bali, Indonésie',
      avatar: '🏝️',
      members: [
        { id: 1, name: 'Sophie', avatar: '👩🏻', hasVoted: true },
        { id: 2, name: 'Marc', avatar: '👨🏻', hasVoted: true },
        { id: 3, name: 'Léa', avatar: '👩🏼', hasVoted: true },
        { id: 4, name: 'Thomas', avatar: '👨🏽', hasVoted: false },
      ],
      messages: [
        { id: 1, sender: 'Marc', avatar: '👨🏻', text: 'Salut tout le monde ! J\'ai trop hâte pour ce voyage 🌴', time: 'Hier 14h30', isMe: false },
        { id: 2, sender: 'Léa', avatar: '👩🏼', text: 'Moi aussi ! J\'ai voté pour Bali', time: 'Hier 15h20', isMe: false },
        { id: 3, sender: 'Sophie', avatar: '👩🏻', text: 'Super ! Il reste Thomas qui doit voter pour qu\'on puisse passer à l\'étape suivante', time: 'Hier 16h45', isMe: true },
        { id: 4, sender: 'Marc', avatar: '👨🏻', text: 'On pourrait lui envoyer un rappel non ?', time: 'Aujourd\'hui 09h15', isMe: false },
        { id: 5, sender: 'Sophie', avatar: '👩🏻', text: 'Bonne idée, je vais le relancer !', time: 'Aujourd\'hui 09h30', isMe: true },
      ],
    },
    2: {
      id: 2,
      name: 'Trip Portugal 🇵🇹',
      destination: 'Lisbonne, Portugal',
      avatar: '🇵🇹',
      members: [
        { id: 1, name: 'Sophie', avatar: '👩🏻', hasVoted: true },
        { id: 5, name: 'Julie', avatar: '👩🏾', hasVoted: true },
        { id: 6, name: 'Alex', avatar: '👨🏼', hasVoted: false },
      ],
      messages: [
        { id: 1, sender: 'Julie', avatar: '👩🏾', text: 'Lisbonne ça va être top ! 🇵🇹', time: 'Il y a 2h', isMe: false },
        { id: 2, sender: 'Sophie', avatar: '👩🏻', text: 'Oui trop contente ! J\'ai déjà voté', time: 'Il y a 1h30', isMe: true },
        { id: 3, sender: 'Julie', avatar: '👩🏾', text: 'Alex tu votes quand ? 😊', time: 'Il y a 30 min', isMe: false },
      ],
    },
    3: {
      id: 3,
      name: 'Copines à Tokyo 🗾',
      destination: 'Tokyo, Japon',
      avatar: '🗾',
      members: [
        { id: 7, name: 'Emma', avatar: '👩🏽', hasVoted: true },
        { id: 8, name: 'Chloé', avatar: '👩🏼', hasVoted: true },
        { id: 9, name: 'Marie', avatar: '👩🏻', hasVoted: true },
        { id: 10, name: 'Laura', avatar: '👱🏻‍♀️', hasVoted: false },
        { id: 11, name: 'Camille', avatar: '👩🏾', hasVoted: false },
      ],
      messages: [
        { id: 1, sender: 'Emma', avatar: '👩🏽', text: 'Les filles, on part quand exactement ? 🗾', time: 'Il y a 1j', isMe: false },
        { id: 2, sender: 'Chloé', avatar: '👩🏼', text: 'J\'ai voté pour les dates en avril', time: 'Il y a 1j', isMe: false },
        { id: 3, sender: 'Marie', avatar: '👩🏻', text: 'Pareil ! Laura et Camille faut voter svp', time: 'Il y a 18h', isMe: false },
      ],
    },
  };

  const groupData = groupsData[groupId] || groupsData[1];
  const nonVoters = groupData.members.filter((m: Member) => !m.hasVoted);

  const handleSendReminder = () => {
    setReminderSent(true);
    setTimeout(() => setReminderSent(false), 3000);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <MobileLayout activeTab="groups" showNavbar={true} onNavigate={onNavigate}>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] px-4 py-3 shadow-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('groups')}
              className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                  {groupData.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white truncate text-base font-medium">
                    {groupData.name}
                  </h2>
                  <p className="text-white/80 text-xs flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3" />
                    {groupData.destination}
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate('group-details', groupId as number)}
              className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <Info className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Members count */}
          <div className="mt-3 flex items-center justify-center gap-2 text-white/90 text-xs">
            <Users className="w-3.5 h-3.5" />
            <span>{groupData.members.length} membres</span>
            {nonVoters.length > 0 && (
              <>
                <span className="text-white/60">•</span>
                <span className="text-amber-200">
                  {nonVoters.length} vote{nonVoters.length > 1 ? 's' : ''} en attente
                </span>
              </>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-36">{/* Increased padding bottom for message input visibility */}
          {/* Reminder Section for non-voters */}
          {nonVoters.length > 0 && (
            <div className="mb-4 animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 border-2 border-orange-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1e3a5f] mb-1 font-medium">Vote en attente</h3>
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
            </div>
          )}

          {/* Messages */}
          <div className="space-y-4">
            {groupData.messages.map((msg: any) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                <div className="w-9 h-9 bg-gradient-to-br from-[#4ECDC4] to-cyan-400 rounded-full flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                  {msg.avatar}
                </div>
                <div className={`flex-1 max-w-[75%] ${msg.isMe ? 'text-right' : ''}`}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <p className={`text-xs font-medium ${msg.isMe ? 'text-[#4ECDC4]' : 'text-gray-600'}`}>
                      {msg.isMe ? 'Moi' : msg.sender}
                    </p>
                    <p className="text-xs text-gray-400">{msg.time}</p>
                  </div>
                  <div className={`inline-block px-4 py-2.5 rounded-2xl shadow-sm ${
                    msg.isMe 
                      ? 'bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] text-white rounded-br-sm' 
                      : 'bg-white text-gray-800 rounded-bl-sm border border-gray-200'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input - Fixed at bottom */}
        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg pb-safe-offset-2">
          <div className="flex gap-3 p-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrire un message..."
              className="flex-1 rounded-full border-gray-300 px-4 h-11 min-h-[44px]"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="bg-[#4ECDC4] hover:bg-[#3db8af] text-white rounded-full w-11 h-11 min-w-[44px] min-h-[44px] p-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}