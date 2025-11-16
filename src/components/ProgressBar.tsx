interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepNames?: string[];
}

export function ProgressBar({ currentStep, totalSteps, stepNames }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4ECDC4] to-[#3db8af] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Step Indicator */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-xs text-gray-500">
          Étape {currentStep} sur {totalSteps}
        </p>
        {stepNames && stepNames[currentStep - 1] && (
          <p className="text-xs text-[#4ECDC4]">
            {stepNames[currentStep - 1]}
          </p>
        )}
      </div>
    </div>
  );
}
