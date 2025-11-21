import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { 
  ChevronLeft, 
  User, 
  Lock, 
  Bell, 
  Globe, 
  Shield,
  ChevronRight,
  Mail,
  Phone,
  Key,
  Eye,
  Smartphone,
  Languages,
  MapPin
} from 'lucide-react';
import { Button } from './ui/button';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState({
    newMessages: true,
    voteReminders: true,
    destinationSuggestions: false
  });

  const toggleNotification = (type: 'newMessages' | 'voteReminders' | 'destinationSuggestions') => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <MobileLayout activeTab="profile" onNavigate={onNavigate}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] px-6 py-4 sticky top-0 z-10 shadow-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-white text-xl">Paramètres</h1>
          </div>
        </div>

        <div className="p-6 space-y-6 pb-24">
          {/* Paramètres du compte */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
              <User className="w-5 h-5 text-[#4ECDC4]" />
              Paramètres du compte
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Informations personnelles</div>
                    <div className="text-xs text-gray-500">Nom, prénom, bio</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Email</div>
                    <div className="text-xs text-gray-500">sophie.martin@email.com</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Téléphone</div>
                    <div className="text-xs text-gray-500">+33 6 12 34 56 78</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Sécurité */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#4ECDC4]" />
              Sécurité
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Key className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Mot de passe</div>
                    <div className="text-xs text-gray-500">Dernière modification il y a 3 mois</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Authentification à deux facteurs</div>
                    <div className="text-xs text-gray-500">Désactivée</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Sessions actives</div>
                    <div className="text-xs text-gray-500">2 appareils connectés</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#4ECDC4]" />
              Notifications
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Nouveaux messages</div>
                    <div className="text-xs text-gray-500">Groupes et invitations</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-[#4ECDC4] rounded-full relative cursor-pointer" onClick={() => toggleNotification('newMessages')}>
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>

              <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Relances de vote</div>
                    <div className="text-xs text-gray-500">Rappels de participation</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-[#4ECDC4] rounded-full relative cursor-pointer" onClick={() => toggleNotification('voteReminders')}>
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>

              <div className="px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Suggestions de destinations</div>
                    <div className="text-xs text-gray-500">Recommandations personnalisées</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer" onClick={() => toggleNotification('destinationSuggestions')}>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Langue */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#4ECDC4]" />
              Langue
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Languages className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Langue de l'application</div>
                    <div className="text-xs text-gray-500">Français</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Confidentialité */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#4ECDC4]" />
              Confidentialité
            </h2>
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Profil public</div>
                    <div className="text-xs text-gray-500">Visible par mes amis</div>
                  </div>
                </div>
                <div className="w-12 h-6 bg-[#4ECDC4] rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>

              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Données personnelles</div>
                    <div className="text-xs text-gray-500">Gérer mes données</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-[#1e3a5f] font-medium">Conditions d'utilisation</div>
                    <div className="text-xs text-gray-500">CGU et politique de confidentialité</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}