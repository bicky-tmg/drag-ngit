export default function CardBody() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-candy-pink shadow-bevel-secondary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-full w-70 h-70"></div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="bg-candy-pink shadow-bevel-secondary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-lg h-8"></div>
        <div className="bg-candy-pink shadow-bevel-secondary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-2xl w-2/5 h-5"></div>
      </div>
    </div>
  );
}
