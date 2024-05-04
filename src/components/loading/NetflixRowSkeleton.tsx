import { Skeleton } from '../ui/skeleton'

const NetflixRowSkeleton = () => {
  const ITEMS_MOVIES_SKELETON = 3
  return (
    <div className='w-full py-4 h-96'>
      <div className='px-3 space-y-4'>
        <Skeleton className='w-24 h-6 py-2 bg-slate-700'></Skeleton>
        <div className='flex justify-between'>
          {Array.from({length:ITEMS_MOVIES_SKELETON}).map((_,index)=>{
            return <Skeleton className='h-64 aspect-video bg-slate-700' key={index}></Skeleton>
          })}
        </div>
      </div>
      
    </div>
  )
}

export default NetflixRowSkeleton
