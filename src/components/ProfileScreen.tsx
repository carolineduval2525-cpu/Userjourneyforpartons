import { MobileLayout } from './MobileLayout';
import { User, Mail, MapPin, Calendar, Settings, LogOut, Heart, Plane } from 'lucide-react';
import { Button } from './ui/button';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <MobileLayout activeTab="profile" onNavigate={onNavigate}>
      <div className="p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#4ECDC4] to-[#3db8af] rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-[#1e3a5f] mb-1">Sophie Martin</h1>
          <p className="text-gray-600">Aventurière passionnée</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <Plane className="w-6 h-6 text-[#4ECDC4] mx-auto mb-2" />
            <div className="text-[#1e3a5f]">12</div>
            <div className="text-xs text-gray-600">Voyages</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <User className="w-6 h-6 text-[#4ECDC4] mx-auto mb-2" />
            <div className="text-[#1e3a5f]">28</div>
            <div className="text-xs text-gray-600">Amis</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <MapPin className="w-6 h-6 text-[#4ECDC4] mx-auto mb-2" />
            <div className="text-[#1e3a5f]">15</div>
            <div className="text-xs text-gray-600">Pays</div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3 mb-8">
          <h2 className="text-[#1e3a5f] mb-3">Informations</h2>
          
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Email</div>
                <div className="text-[#1e3a5f]">sophie.martin@email.com</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Ville</div>
                <div className="text-[#1e3a5f]">Paris, France</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-600">Membre depuis</div>
                <div className="text-[#1e3a5f]">Janvier 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-3 mb-8">
          <h2 className="text-[#1e3a5f] mb-3">Préférences de voyage</h2>
          
          <div className="flex flex-wrap gap-2">
            {['Aventure', 'Plage', 'Culture', 'Gastronomie'].map((pref) => (
              <span
                key={pref}
                className="px-4 py-2 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-full text-sm"
              >
                {pref}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full border-2 border-gray-200 h-12 rounded-full flex items-center justify-center gap-2"
          >
            <Settings className="w-5 h-5" />
            Paramètres
          </Button>

          <Button
            variant="outline"
            className="w-full border-2 border-red-200 text-red-600 hover:bg-red-50 h-12 rounded-full flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Se déconnecter
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
