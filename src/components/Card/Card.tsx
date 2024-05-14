interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="w-448 h-384 shadow-primary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-3xl">
      <div className="w-full h-full shadow-bevel-primary p-6 rounded-2xl bg-cinnamon-satin">
        <div className="flex flex-col space-y-5 h-full">{children}</div>
      </div>
    </div>
  );
}
