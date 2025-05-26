type IconProps = React.SVGProps<SVGSVGElement>;

export const PortfolioIcon = ({ className, ...props }: IconProps) => (
    <svg
        className={className}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <rect x="10" y="12" width="4" height="4" />
        <line x1="3" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="21" y2="14" />
    </svg>
);
