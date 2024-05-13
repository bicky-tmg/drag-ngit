export default function Card({ content }: { content: number }) {
  return (
    <div className="w-448 h-448 shadow-primary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-3xl">
      <div className="w-full h-full shadow-bevel-primary p-6 rounded-2xl bg-cinnamon-satin">
        <div className="flex flex-col space-y-5 h-full">
          <div className="shadow-primary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-3xl h-1/2">
            <div className="w-full h-full shadow-bevel-secondary bg-candy-pink backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-2xl">
              {content}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-candy-pink shadow-bevel-secondary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-full w-70 h-70"></div>
            <div className="flex flex-col flex-1 gap-4">
              <div className="bg-candy-pink shadow-bevel-secondary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-lg h-8"></div>
              <div className="bg-candy-pink shadow-bevel-secondary backdrop-blur-sm border-8 border-solid border-mauvelous rounded-2xl w-2/5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
