type IconProps = React.SVGProps<SVGSVGElement>;

export const AchievementIcon = ({ className, ...props }: IconProps) => (
  <svg
    className={className}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 200 220"
    fill="currentColor"
  >
    <circle cx="100" cy="90" r="70" fill="none" stroke="currentColor" strokeWidth="20" />
    <path d="M100,50 
             L110,77 
             H138 
             L114,95 
             L124,122 
             L100,106 
             L76,122 
             L86,95 
             L62,77 
             H90 
             Z" />
    <path d="M65,158 
             V205 
             L100,192 
             L135,205 
             V158 
             A70,70 0 0,1 65,158 
             Z" />
  </svg>
);
