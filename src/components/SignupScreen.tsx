import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft } from 'lucide-react';
import logoImage from 'figma:asset/c393bca3a09499850908ebfeae09c4aed20a4cbc.png';

interface SignupScreenProps {
  onNavigate: (screen: string) => void;
}

export function SignupScreen({ onNavigate }: SignupScreenProps) {
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
        <div className="mb-6">
          <img src={logoImage} alt="Partons!" className="w-32 h-auto mx-auto" />
        </div>

        <h1 className="text-[#1e3a5f] text-center mb-2">
          Crée ton compte et rejoins l'aventure !
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Commence à organiser tes voyages dès maintenant
        </p>

        <div className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Prénom</Label>
            <Input
              id="name"
              type="text"
              placeholder="Ton prénom"
              className="h-12 rounded-xl border-gray-300"
            />
          </div>

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

          <div className="flex items-start gap-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-gray-300 text-[#4ECDC4] focus:ring-[#4ECDC4]"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              J'accepte les conditions d'utilisation et la politique de confidentialité
            </label>
          </div>

          <Button
            onClick={() => onNavigate('home')}
            className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6"
          >
            Créer mon compte
          </Button>

          <div className="text-center mt-4">
            <span className="text-gray-600">Déjà un compte ? </span>
            <button
              onClick={() => onNavigate('login')}
              className="text-[#4ECDC4] hover:underline"
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
