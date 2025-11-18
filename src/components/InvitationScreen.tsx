import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { UserPlus, Mail, X, ChevronLeft, Phone } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';

interface InvitationScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

type InviteType = 'email' | 'phone';

interface Invite {
  type: InviteType;
  value: string;
}

export function InvitationScreen({ onNavigate }: InvitationScreenProps) {
  const [invites, setInvites] = useState<Invite[]>([{ type: 'email', value: '' }]);

  const addInvite = (type: InviteType) => {
    setInvites([...invites, { type, value: '' }]);
  };

  const removeInvite = (index: number) => {
    setInvites(invites.filter((_, i) => i !== index));
  };

  const updateInvite = (index: number, value: string) => {
    const newInvites = [...invites];
    newInvites[index].value = value;
    setInvites(newInvites);
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('travel-choice')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Progress Bar */}
        <ProgressBar currentStep={2} totalSteps={7} stepNames={stepNames} />

        <div className="mb-6 relative z-10">
          <h1 className="text-[#1e3a5f] mb-2 text-2xl font-bold">
            Qui vient avec toi ?
          </h1>
          <p className="text-gray-600">
            Invite tes amis à rejoindre l'aventure !
          </p>
        </div>

        <div className="flex-1 space-y-4">
          {invites.map((invite, index) => (
            <div key={index} className="relative animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  {invite.type === 'email' ? (
                    <>
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Email de ton ami"
                        value={invite.value}
                        onChange={(e) => updateInvite(index, e.target.value)}
                        className="h-12 rounded-xl border-gray-300 pl-11"
                      />
                    </>
                  ) : (
                    <>
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        value={invite.value}
                        onChange={(e) => updateInvite(index, e.target.value)}
                        className="h-12 rounded-xl border-gray-300 pl-11"
                      />
                    </>
                  )}
                </div>
                {invites.length > 1 && (
                  <button
                    onClick={() => removeInvite(index)}
                    className="p-3 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-2">
            <button
              onClick={() => addInvite('email')}
              className="flex-1 p-4 rounded-xl border-2 border-dashed border-gray-300 text-[#4ECDC4] hover:bg-gray-50 hover:border-[#4ECDC4] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </button>
            <button
              onClick={() => addInvite('phone')}
              className="flex-1 p-4 rounded-xl border-2 border-dashed border-gray-300 text-[#4ECDC4] hover:bg-gray-50 hover:border-[#4ECDC4] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Téléphone</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl mt-6 border border-blue-100">
            <p className="text-sm text-blue-900">
              💡 <span className="font-medium">Astuce :</span> Tes amis recevront un message avec un lien pour rejoindre le voyage et donner leurs préférences !
            </p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <Button
            onClick={() => onNavigate('mood')}
            className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full transition-all transform active:scale-95"
          >
            Suivant
          </Button>
          
          <Button
            onClick={() => onNavigate('mood')}
            variant="ghost"
            className="w-full text-gray-600 h-12 hover:text-[#4ECDC4]"
          >
            Passer cette étape
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}