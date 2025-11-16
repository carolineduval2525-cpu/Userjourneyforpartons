import { Menu, User, Home, Users, Globe, UserCircle } from 'lucide-react';
import logoImage from 'figma:asset/c393bca3a09499850908ebfeae09c4aed20a4cbc.png';

interface MobileLayoutProps {
  children: React.ReactNode;
  activeTab?: 'home' | 'groups' | 'travels' | 'profile';
  onNavigate?: (screen: string) => void;
  showNavbar?: boolean;
}

export function MobileLayout({ children, activeTab = 'home', onNavigate, showNavbar = true }: MobileLayoutProps) {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white flex flex-col relative">
      {/* Wave Pattern Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#4ECDC4" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-50">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        
        <img src={logoImage} alt="Partons!" className="h-16 w-auto" />
        
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <User className="w-6 h-6 text-gray-700" />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      {showNavbar && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate?.('home')}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Home className={`w-6 h-6 ${activeTab === 'home' ? 'text-[#4ECDC4]' : 'text-gray-400'}`} />
              <span className={`text-xs ${activeTab === 'home' ? 'text-[#4ECDC4]' : 'text-gray-400'}`}>
                Accueil
              </span>
            </button>
            
            <button
              onClick={() => onNavigate?.('groups')}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Users className={`w-6 h-6 ${activeTab === 'groups' ? 'text-[#4ECDC4]' : 'text-gray-400'}`} />
              <span className={`text-xs ${activeTab === 'groups' ? 'text-[#4ECDC4]' : 'text-gray-400'}`}>
                Groupes
              </span>
            </button>
            
            <button
              onClick={() => onNavigate?.('travels')}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Globe className={`w-6 h-6 ${activeTab === 'travels' ? 'text-[#4ECDC4]' : 'text-gray-400'}`} />
              <span className={`text-xs ${activeTab === 'travels' ? 'text-[#4ECDC4]' : 'text-gray-400'}`}>
                Voyages
              </span>
            </button>
            
            <button
              onClick={() => onNavigate?.('profile')}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <UserCircle className={`w-6 h-6 ${activeTab === 'profile' ? 'text-[#4ECDC4]' : 'text-gray-400'}`} />
              <span className={`text-xs ${activeTab === 'profile' ? 'text-[#4ECDC4]' : 'text-gray-400'}`}>
                Profil
              </span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
