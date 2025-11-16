import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SignupScreen } from "./components/SignupScreen";
import { HomeScreen } from "./components/HomeScreen";
import { GroupsScreen } from "./components/GroupsScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { TravelChoiceScreen } from "./components/TravelChoiceScreen";
import { InvitationScreen } from "./components/InvitationScreen";
import { MoodScreen } from "./components/MoodScreen";
import { ActivitiesScreen } from "./components/ActivitiesScreen";
import { DatesScreen } from "./components/DatesScreen";
import { BudgetScreen } from "./components/BudgetScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { DetailsScreen } from "./components/DetailsScreen";
import { VoteDestinationScreen } from "./components/VoteDestinationScreen";
import { DestinationValidatedScreen } from "./components/DestinationValidatedScreen";
import { FlightProposalsScreen } from "./components/FlightProposalsScreen";
import { AccommodationProposalsScreen } from "./components/AccommodationProposalsScreen";
import { TripSummaryScreen } from "./components/TripSummaryScreen";
import { ItineraryConfirmedScreen } from "./components/ItineraryConfirmedScreen";

export interface Trip {
  id: string;
  destination: string;
  country: string;
  image: string;
  dates: {
    start: string;
    end: string;
  };
  duration: number;
  members: number;
  budget: number;
  status: string;
  flight?: {
    airline: string;
    departure: string;
    arrival: string;
    price: number;
    confirmationNumber?: string;
  };
  accommodation?: {
    title: string;
    type: string;
    pricePerNight: number;
    location: string;
    nights: number;
    confirmationNumber?: string;
  };
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [currentTrip, setCurrentTrip] =
    useState<Partial<Trip> | null>(null);

  const addTrip = (trip: Trip) => {
    setTrips((prev) => [...prev, trip]);
  };

  const updateTrip = (
    tripId: string,
    updates: Partial<Trip>,
  ) => {
    setTrips((prev) =>
      prev.map((trip) =>
        trip.id === tripId ? { ...trip, ...updates } : trip,
      ),
    );
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onNavigate={setCurrentScreen} />;
      case "login":
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case "signup":
        return <SignupScreen onNavigate={setCurrentScreen} />;
      case "home":
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
            trips={trips}
          />
        );
      case "groups":
        return (
          <GroupsScreen
            onNavigate={setCurrentScreen}
            trips={trips}
          />
        );
      case "travels":
        return (
          <DetailsScreen
            onNavigate={setCurrentScreen}
            trips={trips}
          />
        );
      case "profile":
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      case "travel-choice":
        return (
          <TravelChoiceScreen onNavigate={setCurrentScreen} />
        );
      case "invitation":
        return (
          <InvitationScreen onNavigate={setCurrentScreen} />
        );
      case "mood":
        return <MoodScreen onNavigate={setCurrentScreen} />;
      case "activities":
        return (
          <ActivitiesScreen onNavigate={setCurrentScreen} />
        );
      case "dates":
        return <DatesScreen onNavigate={setCurrentScreen} />;
      case "budget":
        return <BudgetScreen onNavigate={setCurrentScreen} />;
      case "results":
        return <ResultsScreen onNavigate={setCurrentScreen} />;
      case "details":
        return (
          <DetailsScreen
            onNavigate={setCurrentScreen}
            trips={trips}
          />
        );
      case "vote-destination":
        return (
          <VoteDestinationScreen
            onNavigate={setCurrentScreen}
          />
        );
      case "destination-validated":
        return (
          <DestinationValidatedScreen
            onNavigate={setCurrentScreen}
          />
        );
      case "flight-proposals":
        return (
          <FlightProposalsScreen
            onNavigate={setCurrentScreen}
          />
        );
      case "accommodation-proposals":
        return (
          <AccommodationProposalsScreen
            onNavigate={setCurrentScreen}
          />
        );
      case "trip-summary":
        return (
          <TripSummaryScreen onNavigate={setCurrentScreen} />
        );
      case "itinerary-confirmed":
        return (
          <ItineraryConfirmedScreen
            onNavigate={setCurrentScreen}
            onSaveTrip={addTrip}
          />
        );
      default:
        return <WelcomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
}