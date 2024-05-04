import { Skeleton } from "../ui/skeleton";

const HeaderSkeleton = () => {
  const SKELETON_OVERVIEW_LINES = 5
  return (
    <div>
      <Skeleton className="w-full h-[400px] flex flex-col justify-center">
        <div className="w-1/3 ml-3 space-y-6 ">
          <div className="h-6 bg-slate-700/50"></div>
          <div className="space-y-2">
          {Array.from({ length: SKELETON_OVERVIEW_LINES }).map((_,index) => (
            <div className="h-4 bg-slate-700/50" key={index}/>
          ))}
          </div>
         
        </div>
        
      </Skeleton>
    </div>
  );
};

export default HeaderSkeleton;
