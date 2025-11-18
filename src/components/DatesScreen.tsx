import { useState } from 'react';
import { MobileLayout } from './MobileLayout';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Clock, ChevronLeft, CalendarDays } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { Logo } from './Logo';
import { ProgressBar } from './ProgressBar';

interface DatesScreenProps {
  onNavigate: (screen: string) => void;
}

const stepNames = ['Type', 'Invitations', 'Mood', 'Activités', 'Dates', 'Budget', 'Résultats'];

export function DatesScreen({ onNavigate }: DatesScreenProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [dateType, setDateType] = useState<'precise' | 'flexible'>('precise');
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const months = [
    { id: '2025-06', label: 'Juin 2025' },
    { id: '2025-07', label: 'Juillet 2025' },
    { id: '2025-08', label: 'Août 2025' },
    { id: '2025-09', label: 'Septembre 2025' },
    { id: '2025-10', label: 'Octobre 2025' },
    { id: '2025-11', label: 'Novembre 2025' },
  ];

  const isValid = dateType === 'precise' 
    ? dateRange?.from && dateRange?.to 
    : selectedMonth !== null;

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

        <div className="mb-6">
          <h1 className="text-[#1e3a5f] mb-2 text-2xl font-bold">
            Quand pars-tu ?
          </h1>
          <p className="text-gray-600">
            Choisis tes dates ou une période flexible
          </p>
        </div>

        {/* Toggle between Precise and Flexible */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setDateType('precise')}
              className={`py-3 rounded-lg transition-all text-center ${
                dateType === 'precise'
                  ? 'bg-white text-[#4ECDC4] shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Dates précises
            </button>
            <button
              onClick={() => setDateType('flexible')}
              className={`py-3 rounded-lg transition-all text-center ${
                dateType === 'flexible'
                  ? 'bg-white text-[#4ECDC4] shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Dates flexibles
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          {dateType === 'precise' ? (
            // Dates précises avec calendrier
            <div className="w-full max-w-sm">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 hover:border-[#4ECDC4]/30 transition-colors">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  className="rounded-md mx-auto" text-center
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
          ) : (
            // Dates flexibles par mois (style Airbnb)
            <div className="w-full">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-[#4ECDC4]" />
                <h3 className="text-[#1e3a5f]">Choisis un mois</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {months.map((month) => (
                  <button
                    key={month.id}
                    onClick={() => setSelectedMonth(month.id)}
                    className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                      selectedMonth === month.id
                        ? 'border-[#4ECDC4] bg-[#4ECDC4]/5 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <p className="text-[#1e3a5f] text-center">{month.label}</p>
                  </button>
                ))}
              </div>
              {selectedMonth && (
                <div className="mt-4 p-3 bg-gradient-to-r from-[#4ECDC4]/10 to-cyan-50 rounded-xl text-center border border-[#4ECDC4]/20 animate-in fade-in slide-in-from-top-2">
                  <p className="text-sm text-gray-600">
                    Période flexible : <span className="text-[#4ECDC4]">{months.find(m => m.id === selectedMonth)?.label}</span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <Button
          onClick={() => onNavigate('budget')}
          disabled={!isValid}
          className="w-full bg-[#4ECDC4] hover:bg-[#3db8af] text-white h-12 rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
        >
          Suivant
        </Button>
      </div>
    </MobileLayout>
  );
}