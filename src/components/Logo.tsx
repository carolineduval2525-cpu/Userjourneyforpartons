import logoImage from 'figma:asset/c393bca3a09499850908ebfeae09c4aed20a4cbc.png';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="Partons!" 
      style={{ width: `${size}px`, height: 'auto' }}
      className={className}
    />
  );
}
