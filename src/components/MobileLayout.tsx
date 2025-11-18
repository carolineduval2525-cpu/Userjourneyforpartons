import { Home, MessageCircle, Plane, User } from 'lucide-react';
import { ReactNode } from 'react';
import { Logo } from './Logo';

interface MobileLayoutProps {
  children: ReactNode;
  activeTab?: 'home' | 'groups' | 'travels' | 'profile';
  showNavbar?: boolean;
  showHeader?: boolean;
  onNavigate: (screen: string) => void;
}

export function MobileLayout({
  children,
  activeTab = 'home',
  showNavbar = true,
  showHeader = false,
  onNavigate,
}: MobileLayoutProps) {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative">
      {/* Header with Logo */}
      {showHeader && (
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-4 pt-safe">
          <div className="flex items-center justify-center">
            <Logo size={120} />
          </div>
        </div>
      )}
      
      <div className="pb-32">{children}</div>

      {showNavbar && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 z-50 shadow-lg safe-area-nav">
          <div className="flex items-center justify-around px-2 pt-2 pb-safe-offset-2">
            {/* Accueil */}
            <button
              onClick={() => onNavigate('home')}
              className={`flex flex-col items-center gap-1 transition-all flex-1 py-2 px-3 rounded-lg min-h-[44px] min-w-[44px] justify-center ${
                activeTab === 'home' ? 'text-[#4ECDC4]' : 'text-gray-400'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs">Accueil</span>
            </button>

            {/* Groupes (Messagerie) */}
            <button
              onClick={() => onNavigate('groups')}
              className={`flex flex-col items-center gap-1 transition-all flex-1 py-2 px-3 rounded-lg min-h-[44px] min-w-[44px] justify-center ${
                activeTab === 'groups' ? 'text-[#4ECDC4]' : 'text-gray-400'
              }`}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs">Groupes</span>
            </button>

            {/* Bouton + Central - Mis en avant */}
            <button
              onClick={() => onNavigate('travel-choice')}
              className="flex flex-col items-center gap-1 transition-all duration-300 flex-1 py-2 px-3 min-h-[44px] min-w-[44px] justify-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#4ECDC4] via-[#3db8af] to-cyan-600 rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 border-4 border-white">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-lg"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <span className="text-xs text-[#4ECDC4] font-medium">Créer</span>
            </button>

            {/* Mes Voyages */}
            <button
              onClick={() => onNavigate('travels')}
              className={`flex flex-col items-center gap-1 transition-all flex-1 py-2 px-3 rounded-lg min-h-[44px] min-w-[44px] justify-center ${
                activeTab === 'travels' ? 'text-[#4ECDC4]' : 'text-gray-400'
              }`}
            >
              <Plane className="w-6 h-6" />
              <span className="text-xs">Voyages</span>
            </button>

            {/* Profil */}
            <button
              onClick={() => onNavigate('profile')}
              className={`flex flex-col items-center gap-1 transition-all flex-1 py-2 px-3 rounded-lg min-h-[44px] min-w-[44px] justify-center ${
                activeTab === 'profile' ? 'text-[#4ECDC4]' : 'text-gray-400'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs">Profil</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}