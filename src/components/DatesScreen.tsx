import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Clock, ChevronLeft, CalendarDays } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { SmilingLuggage } from './SmilingLuggage';
import { ProgressBar } from './ProgressBar';

interface DatesScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function DatesScreen({ onNavigate }: DatesScreenProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const durations = [
    { id: 'weekend', label: 'Week-end', days: '2-3 jours' },
    { id: 'week', label: 'Une semaine', days: '7 jours' },
    { id: 'two-weeks', label: 'Deux semaines', days: '14 jours' },
  ];

  return (
    <MobileLayout activeTab="home" showNavbar={true} onNavigate={onNavigate}>
      <div className="p-6 min-h-full flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('activities')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#4ECDC4] mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </button>

        {/* Progress Bar */}
        <ProgressBar currentStep={5} totalSteps={7} stepNames={stepNames} />

        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#4ECDC4]/10 rounded-xl flex items-center justify-center">
              <CalendarDays className="w-6 h-6 text-[#4ECDC4]" />
            </div>
            <h1 className="text-[#1e3a5f]">
              Quand pars-tu ?
            </h1>
          </div>
          <p className="text-gray-600">
            Sélectionne ta période de voyage
          </p>
        </div>

        <div className="flex-1 space-y-6">
          {/* Calendar */}
          <div>
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 hover:border-[#4ECDC4]/30 transition-colors">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                className="rounded-md"
                disabled={(date) => date < new Date()}
                numberOfMonths={1}
              />
            </div>
            {dateRange?.from && dateRange?.to && (
              <div className="mt-3 p-3 bg-gradient-to-r from-[#4ECDC4]/10 to-cyan-50 rounded-xl text-center border border-[#4ECDC4]/20 animate-in fade-in slide-in-from-top-2">
                <p className="text-sm text-gray-600">
                  Du <span className="text-[#4ECDC4]">{dateRange.from.toLocaleDateString('fr-FR')}</span>
                  {' '}au{' '}
                  <span className="text-[#4ECDC4]">{dateRange.to.toLocaleDateString('fr-FR')}</span>
                </p>
              </div>
            )}
          </div>

          {/* Duration Selection */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-[#4ECDC4]" />
              <h3 className="text-[#1e3a5f]">Durée du séjour</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {durations.map((duration) => (
                <button
                  key={duration.id}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                    selectedDuration === duration.id
                      ? 'border-[#4ECDC4] bg-[#4ECDC4]/5 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <p className="text-[#1e3a5f] mb-1">{duration.label}</p>
                  <p className="text-xs text-gray-600">{duration.days}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={() => onNavigate('budget')}
          disabled={!dateRange?.from || !dateRange?.to || !selectedDuration}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Suivant
        </Button>
      </div>
    </MobileLayout>
  );
}