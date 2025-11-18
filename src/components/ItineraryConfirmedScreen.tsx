import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plane, Hotel, Save, Check, ChevronLeft, Calendar, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import type { Trip } from '../App';

interface ItineraryConfirmedScreenProps {
  onNavigate: (screen: string) => void;
  onSaveTrip: (trip: Trip) => void;
}

export function ItineraryConfirmedScreen({ onNavigate, onSaveTrip }: ItineraryConfirmedScreenProps) {
  const [flightConfirmation, setFlightConfirmation] = useState('');
  const [hotelConfirmation, setHotelConfirmation] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    
    // Create the new trip object
    const newTrip: Trip = {
      id: Date.now().toString(),
      destination: 'Bali',
      country: 'Indonésie',
      image: 'bali temple sunset',
      dates: {
        start: '15 mai 2025',
        end: '22 mai 2025',
      },
      duration: 7,
      members: 1,
      budget: 1620,
      status: 'Confirmé',
      flight: {
        airline: 'Air France',
        departure: 'CDG 18:00',
        arrival: 'DPS 22:30',
        price: 780,
        confirmationNumber: flightConfirmation || undefined,
      },
      accommodation: {
        title: 'Villa avec piscine privée',
        type: 'Villa entière',
        pricePerNight: 120,
        location: 'Seminyak',
        nights: 7,
        confirmationNumber: hotelConfirmation || undefined,
      },
    };
    
    onSaveTrip(newTrip);
    
    setTimeout(() => {
      onNavigate('my-trips');
    }, 1500);
  };

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col pb-32">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('trip-summary')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block mb-3">
            <Logo size={50} />
          </div>
          <h1 className="text-[#1e3a5f] mb-2">
            Itinéraire : Bali
          </h1>
          <p className="text-gray-600">
            Finalise ton voyage en ajoutant tes confirmations
          </p>
        </div>

        {/* Trip Overview */}
        <div className="bg-gradient-to-r from-[#4ECDC4]/10 to-cyan-50 rounded-2xl p-5 mb-6 border border-[#4ECDC4]/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#4ECDC4] rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#1e3a5f]">Bali, Indonésie</p>
              <p className="text-sm text-gray-600">15 - 22 mai 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>7 nuits • 1 adulte</span>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          {/* Flight Information Section */}
          <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-[#1e3a5f]">Mon Vol</h3>
            </div>

            {/* Flight Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✈️</span>
                <div>
                  <p className="text-[#1e3a5f]">Air France</p>
                  <p className="text-sm text-gray-600">Direct • 4h30</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">CDG 18:00 → DPS 22:30</span>
                <span className="text-[#4ECDC4]">780€</span>
              </div>
            </div>

            {/* Flight Confirmation Input */}
            <div className="space-y-2">
              <Label htmlFor="flightConfirmation" className="text-sm text-gray-700">
                N° de confirmation de vol
              </Label>
              <Input
                id="flightConfirmation"
                type="text"
                placeholder="Ex: AF123456"
                value={flightConfirmation}
                onChange={(e) => setFlightConfirmation(e.target.value)}
                className="h-12 rounded-xl border-gray-300"
              />
              <p className="text-xs text-gray-500">
                Tu trouveras ce numéro sur ta confirmation de réservation
              </p>
            </div>
          </div>

          {/* Hotel Information Section */}
          <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Hotel className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-[#1e3a5f]">Mon Hébergement</h3>
            </div>

            {/* Hotel Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center">
                  <Hotel className="w-4 h-4 text-[#4ECDC4]" />
                </div>
                <div>
                  <p className="text-[#1e3a5f]">Villa avec piscine privée</p>
                  <p className="text-sm text-gray-600">Seminyak, Bali</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">7 nuits</span>
                <span className="text-[#4ECDC4]">840€</span>
              </div>
            </div>

            {/* Hotel Confirmation Input */}
            <div className="space-y-2">
              <Label htmlFor="hotelConfirmation" className="text-sm text-gray-700">
                Adresse / N° de réservation d'hôtel
              </Label>
              <Input
                id="hotelConfirmation"
                type="text"
                placeholder="Ex: Jl. Seminyak Beach ou RES789456"
                value={hotelConfirmation}
                onChange={(e) => setHotelConfirmation(e.target.value)}
                className="h-12 rounded-xl border-gray-300"
              />
              <p className="text-xs text-gray-500">
                L'adresse exacte ou le numéro de confirmation Airbnb/Booking
              </p>
            </div>
          </div>

          {/* Help Text */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-900">
              💡 <span className="font-medium">Astuce :</span> Tu pourras modifier ces informations à tout moment depuis ton profil.
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4">
          <Button
            onClick={handleSave}
            disabled={saved}
            className={`w-full h-12 rounded-full transition-all transform active:scale-95 shadow-lg ${
              saved
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] hover:from-[#3db8af] hover:to-[#4ECDC4]'
            } text-white`}
          >
            {saved ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Informations sauvegardées !
              </>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Sauvegarder mon itinéraire
              </>
            )}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}