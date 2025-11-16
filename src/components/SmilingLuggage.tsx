interface SmilingLuggageProps {
  color?: string;
  size?: number;
  className?: string;
}

export function SmilingLuggage({ color = '#4ECDC4', size = 60, className = '' }: SmilingLuggageProps) {
  return (
    <svg 
      viewBox="0 0 60 70" 
      width={size} 
      height={size * 1.17}
      className={className}
    >
      {/* Corps de la valise */}
      <rect x="15" y="22" width="30" height="38" rx="4" fill={color} />
      {/* Poignée */}
      <path d="M 23 22 Q 30 14 37 22" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Bande horizontale */}
      <rect x="15" y="38" width="30" height="3" fill="rgba(0,0,0,0.1)" />
      {/* Yeux souriants */}
      <circle cx="25" cy="32" r="2.5" fill="white" />
      <circle cx="35" cy="32" r="2.5" fill="white" />
      {/* Sourire */}
      <path d="M 23 44 Q 30 50 37 44" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Roues */}
      <circle cx="22" cy="60" r="3" fill="#1e3a5f" />
      <circle cx="38" cy="60" r="3" fill="#1e3a5f" />
    </svg>
  );
}
