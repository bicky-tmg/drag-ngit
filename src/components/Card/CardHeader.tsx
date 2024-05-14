interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardHeader({
  children,
  className = "",
}: CardHeaderProps) {
  return (
    <div className="shadow-primary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-3xl h-1/2">
      <div
        className={`w-full h-full shadow-bevel-secondary bg-candy-pink backdrop-blur-sm rounded-2xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
