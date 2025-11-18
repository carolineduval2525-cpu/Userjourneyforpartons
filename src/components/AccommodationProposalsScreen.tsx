import { useState } from "react";
import { MobileLayout } from "./MobileLayout";
import { Button } from "./ui/button";
import {
  Hotel,
  Star,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Wifi,
  Coffee,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Logo } from "./Logo";

interface AccommodationProposalsScreenProps {
  onNavigate: (screen: string) => void;
}

interface Accommodation {
  id: number;
  title: string;
  type: string;
  image: string;
  pricePerNight: number;
  rating: number;
  location: string;
  votes: number;
}

const accommodations: Accommodation[] = [
  {
    id: 1,
    title: "Villa avec piscine privée",
    type: "Villa entière",
    image:
      "https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYzMjIzMDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 120,
    rating: 4.9,
    location: "Seminyak",
    votes: 0,
  },
  {
    id: 2,
    title: "Bungalow face à la mer",
    type: "Bungalow",
    image:
      "https://images.unsplash.com/photo-1665375571897-ca7124831aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGJ1bmdhbG93JTIwb2NlYW58ZW58MXx8fHwxNzYzMzA4NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 85,
    rating: 4.7,
    location: "Canggu",
    votes: 0,
  },
  {
    id: 3,
    title: "Appartement centre-ville",
    type: "Appartement",
    image:
      "https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMyMzc5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 65,
    rating: 4.5,
    location: "Ubud",
    votes: 0,
  },
  {
    id: 4,
    title: "Resort 5 étoiles",
    type: "Hôtel",
    image:
      "https://images.unsplash.com/photo-1729717949780-46e511489c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBob3RlbHxlbnwxfHx8fDE3NjMzMDg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 180,
    rating: 5.0,
    location: "Nusa Dua",
    votes: 0,
  },
  {
    id: 5,
    title: "Maison traditionnelle",
    type: "Maison entière",
    image:
      "https://images.unsplash.com/photo-1748935535672-091f0057e0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhbGluZXNlJTIwaG91c2V8ZW58MXx8fHwxNzYzMzA4NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 95,
    rating: 4.8,
    location: "Ubud",
    votes: 0,
  },
  {
    id: 6,
    title: "Studio avec vue rizières",
    type: "Studio",
    image:
      "https://images.unsplash.com/photo-1571267012105-f6cce9a8c915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwdGVycmFjZSUyMHZpZXd8ZW58MXx8fHwxNzYzMzA4NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 55,
    rating: 4.6,
    location: "Tegallalang",
    votes: 0,
  },
  {
    id: 7,
    title: "Loft moderne design",
    type: "Loft",
    image:
      "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2Z0JTIwZGVzaWdufGVufDF8fHx8MTc2MzMwODUyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 110,
    rating: 4.7,
    location: "Seminyak",
    votes: 0,
  },
  {
    id: 8,
    title: "Éco-lodge jungle",
    type: "Lodge",
    image:
      "https://images.unsplash.com/photo-1650201776749-fde3862e5354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBsb2RnZSUyMGp1bmdsZXxlbnwxfHx8fDE3NjMzMDg1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 75,
    rating: 4.8,
    location: "Sidemen",
    votes: 0,
  },
  {
    id: 9,
    title: "Penthouse panoramique",
    type: "Penthouse",
    image:
      "https://images.unsplash.com/photo-1717429541792-5c59021d6ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzYzMzA4NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 150,
    rating: 4.9,
    location: "Jimbaran",
    votes: 0,
  },
  {
    id: 10,
    title: "Chambre d'hôtes charmante",
    type: "Chambre d'hôtes",
    image:
      "https://images.unsplash.com/photo-1661351240151-fa45627490ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWVzdCUyMGhvdXNlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMzMDg1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pricePerNight: 45,
    rating: 4.4,
    location: "Sanur",
    votes: 0,
  },
];

export function AccommodationProposalsScreen({
  onNavigate,
}: AccommodationProposalsScreenProps) {
  const [selectedAccommodations, setSelectedAccommodations] =
    useState<number[]>([]);

  const toggleSelection = (accommodationId: number) => {
    setSelectedAccommodations((prev) =>
      prev.includes(accommodationId)
        ? prev.filter((id) => id !== accommodationId)
        : [...prev, accommodationId],
    );
  };

  return (
    <MobileLayout
      activeTab="home"
      showNavbar={true}
      onNavigate={onNavigate}
    >
      <div className="p-6 min-h-full flex flex-col pb-40">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("flight-proposals")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#4ECDC4]/10 rounded-xl flex items-center justify-center">
              <Hotel className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <h1 className="text-[#1e3a5f] text-[20px] font-bold">
              Choix de l'Hébergement
            </h1>
          </div>
          <p className="text-gray-600">
            Sélectionne tes hébergements préférés
          </p>
        </div>

        {/* Stay Info */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl mb-6 border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900">
                <span className="font-medium">
                  Bali, Indonésie
                </span>
              </p>
              <p className="text-xs text-blue-700 mt-1">
                15 - 22 mai 2025 • 7 nuits • 1 adulte
              </p>
            </div>
            <Logo size={35} />
          </div>
        </div>

        {/* Vote Instructions */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl mb-4 border border-amber-100">
          <p className="text-xs text-amber-900">
            💡 Clique sur une carte pour la sélectionner
            (plusieurs choix possibles)
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="flex-1 grid grid-cols-2 gap-3 mb-6">
          {accommodations.map((accommodation) => (
            <button
              key={accommodation.id}
              onClick={() => toggleSelection(accommodation.id)}
              className={`bg-white rounded-2xl overflow-hidden transition-all transform hover:scale-[1.02] ${
                selectedAccommodations.includes(
                  accommodation.id,
                )
                  ? "border-4 border-[#4ECDC4] shadow-xl ring-2 ring-[#4ECDC4]/20"
                  : "border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {/* Image */}
              <div className="relative h-32">
                <ImageWithFallback
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover"
                />
                {selectedAccommodations.includes(
                  accommodation.id,
                ) && (
                  <div className="absolute top-2 right-2 bg-[#4ECDC4] p-1.5 rounded-full shadow-lg animate-in zoom-in">
                    <CheckCircle className="w-4 h-4 text-white fill-white" />
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-700">
                      {accommodation.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <p className="text-xs text-gray-500 mb-1">
                  {accommodation.type}
                </p>
                <h3 className="text-sm text-[#1e3a5f] mb-2 line-clamp-2 leading-snug">
                  {accommodation.title}
                </h3>

                <div className="flex items-center gap-1 mb-2 text-xs text-gray-600">
                  <MapPin className="w-3 h-3" />
                  <span>{accommodation.location}</span>
                </div>

                <div
                  className={`text-center py-1.5 rounded-lg transition-all ${
                    selectedAccommodations.includes(
                      accommodation.id,
                    )
                      ? "bg-[#4ECDC4] text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <p
                    className={`${
                      selectedAccommodations.includes(
                        accommodation.id,
                      )
                        ? "text-white"
                        : "text-[#4ECDC4]"
                    }`}
                  >
                    {accommodation.pricePerNight}€
                  </p>
                  <p
                    className={`text-xs ${
                      selectedAccommodations.includes(
                        accommodation.id,
                      )
                        ? "text-white/80"
                        : "text-gray-500"
                    }`}
                  >
                    / nuit
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-6 bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4 space-y-2">
        <Button
          onClick={() => onNavigate("trip-summary")}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full transition-all transform active:scale-95"
        >
          <Wifi className="w-5 h-5 mr-2" />
          Voir les résultats du vote
        </Button>
        <Button
          onClick={() => onNavigate("trip-summary")}
          variant="ghost"
          className="w-full text-gray-600 h-10 hover:text-[#4ECDC4]"
        >
          Ignorer cette étape
        </Button>
      </div>
    </MobileLayout>
  );
}