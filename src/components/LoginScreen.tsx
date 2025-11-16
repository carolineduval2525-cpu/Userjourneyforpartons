import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft } from 'lucide-react';
import logoImage from 'figma:asset/c393bca3a09499850908ebfeae09c4aed20a4cbc.png';

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="p-4">
        <button
          onClick={() => onNavigate('welcome')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="mb-8">
          <img src={logoImage} alt="Partons!" className="w-32 h-auto mx-auto" />
        </div>

        <h1 className="text-[#1e3a5f] text-center mb-2">
          Bon retour parmi nous !
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Connecte-toi pour retrouver tes voyages
        </p>

        <div className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ton@email.com"
              className="h-12 rounded-xl border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-12 rounded-xl border-gray-300"
            />
          </div>

          <button className="text-[#4ECDC4] text-sm hover:underline">
            Mot de passe oublié ?
          </button>

          <Button
            onClick={() => onNavigate('home')}
            className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6"
          >
            Se connecter
          </Button>

          <div className="text-center mt-4">
            <span className="text-gray-600">Pas encore de compte ? </span>
            <button
              onClick={() => onNavigate('signup')}
              className="text-[#4ECDC4] hover:underline"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
