import { Button } from './ui/button';
import logoImage from 'figma:asset/c393bca3a09499850908ebfeae09c4aed20a4cbc.png';
import { Plane, MapPin, Users } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-between p-6 max-w-md mx-auto">
      {/* Wave Pattern Background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#4ECDC4" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Top Section */}
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10">
        <div className="mb-8">
          <img src={logoImage} alt="Partons!" className="w-48 h-auto" />
        </div>
        
        <h1 className="text-[#1e3a5f] text-center mb-4">
          Organise ton prochain voyage en groupe en quelques clics !
        </h1>
        
        <p className="text-gray-600 text-center mb-8 px-4">
          Trouve la destination parfaite avec tes amis, votez ensemble et partez à l'aventure !
        </p>

        {/* Features */}
        <div className="space-y-4 w-full mb-12">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <p className="text-gray-700">Invite tes amis facilement</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <p className="text-gray-700">Découvre des destinations uniques</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Plane className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <p className="text-gray-700">Vote et partez ensemble</p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full space-y-3 z-10">
        <Button
          onClick={() => onNavigate('signup')}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full"
        >
          S'inscrire
        </Button>
        
        <Button
          onClick={() => onNavigate('login')}
          variant="outline"
          className="w-full border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10 h-12 rounded-full"
        >
          Se connecter
        </Button>
      </div>
    </div>
  );
}
