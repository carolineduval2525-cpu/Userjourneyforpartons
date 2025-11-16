import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { MapPin, Calendar, Users, Euro, Star, Clock, Palmtree, Mountain, Utensils, Camera, Plane, Hotel } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Trip } from '../App';

interface DetailsScreenProps {
  onNavigate: (screen: string) => void;
  trips: Trip[];
}

export function DetailsScreen({ onNavigate, trips }: DetailsScreenProps) {
  // Get the most recent trip or use default data
  const currentTrip = trips.length > 0 ? trips[trips.length - 1] : null;

  return (
    <MobileLayout activeTab="travels" showNavbar={true} onNavigate={onNavigate}>
      <div className="min-h-full pb-24">
        {/* Hero Image */}
        <div className="relative h-64">
          <ImageWithFallback
            src={`https://source.unsplash.com/800x600/?${currentTrip?.image || 'bali,indonesia'}`}
            alt={currentTrip?.destination || 'Bali'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-white mb-2">
              {currentTrip ? `${currentTrip.destination}, ${currentTrip.country}` : 'Bali, Indonésie'}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span>4.8 (2.3k avis)</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Calendar className="w-5 h-5 text-[#4ECDC4] mb-2" />
              <p className="text-sm text-gray-600">Période</p>
              <p className="text-[#1e3a5f]">
                {currentTrip ? `${currentTrip.dates.start}` : 'Été 2025'}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Clock className="w-5 h-5 text-[#4ECDC4] mb-2" />
              <p className="text-sm text-gray-600">Durée</p>
              <p className="text-[#1e3a5f]">
                {currentTrip ? `${currentTrip.duration} jours` : '7 jours'}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Users className="w-5 h-5 text-[#4ECDC4] mb-2" />
              <p className="text-sm text-gray-600">Groupe</p>
              <p className="text-[#1e3a5f]">
                {currentTrip ? `${currentTrip.members} ${currentTrip.members > 1 ? 'personnes' : 'personne'}` : '4 personnes'}
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <Euro className="w-5 h-5 text-[#4ECDC4] mb-2" />
              <p className="text-sm text-gray-600">Budget</p>
              <p className="text-[#1e3a5f]">
                {currentTrip ? `${currentTrip.budget} €` : '1200 €'}
              </p>
            </div>
          </div>

          {currentTrip && (
            <>
              {/* Flight Information */}
              {currentTrip.flight && (
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Plane className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-[#1e3a5f]">Vol Réservé</h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-[#1e3a5f]">{currentTrip.flight.airline}</p>
                        <p className="text-sm text-gray-600">{currentTrip.flight.departure} → {currentTrip.flight.arrival}</p>
                      </div>
                      <p className="text-[#4ECDC4]">{currentTrip.flight.price}€</p>
                    </div>
                    {currentTrip.flight.confirmationNumber && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-500">N° de confirmation</p>
                        <p className="text-sm text-[#1e3a5f]">{currentTrip.flight.confirmationNumber}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Accommodation Information */}
              {currentTrip.accommodation && (
                <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Hotel className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-[#1e3a5f]">Hébergement Réservé</h3>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-[#1e3a5f]">{currentTrip.accommodation.title}</p>
                        <p className="text-sm text-gray-600">{currentTrip.accommodation.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#4ECDC4]">{currentTrip.accommodation.pricePerNight * currentTrip.accommodation.nights}€</p>
                        <p className="text-xs text-gray-500">{currentTrip.accommodation.nights} nuits</p>
                      </div>
                    </div>
                    {currentTrip.accommodation.confirmationNumber && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-500">Adresse / N° de réservation</p>
                        <p className="text-sm text-[#1e3a5f]">{currentTrip.accommodation.confirmationNumber}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Description */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3">À propos</h2>
            <p className="text-gray-600">
              {currentTrip?.destination || 'Bali'} est {currentTrip?.country === 'Indonésie' ? "l'île paradisiaque" : "la destination"} parfaite pour ton groupe ! Entre plages de rêve, temples mystiques, 
              rizières en terrasses et vie nocturne animée, cette destination offre le mix idéal d'aventure et de détente.
            </p>
          </div>

          {/* Activities */}
          <div>
            <h2 className="text-[#1e3a5f] mb-3">Activités recommandées</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Palmtree, label: 'Plages & Surf' },
                { icon: Mountain, label: 'Randonnées' },
                { icon: Utensils, label: 'Cuisine locale' },
                { icon: Camera, label: 'Temples & Culture' },
              ].map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.label} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <div className="w-10 h-10 bg-[#4ECDC4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#4ECDC4]" />
                    </div>
                    <span className="text-sm text-gray-700">{activity.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {!currentTrip && (
            <>
              {/* Votes Section */}
              <div className="bg-gradient-to-br from-[#4ECDC4]/10 to-cyan-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-[#1e3a5f] mb-1">Votes du groupe</h3>
                    <p className="text-sm text-gray-600">3 sur 4 ont voté pour Bali</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-[#4ECDC4]">75%</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="text-sm text-gray-700">Sophie a voté 👍</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="text-sm text-gray-700">Marc a voté 👍</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="text-sm text-gray-700">Léa a voté 👍</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">
                      ?
                    </div>
                    <span className="text-sm text-gray-500">Thomas n'a pas encore voté</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full">
                Confirmer le voyage
              </Button>
            </>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}