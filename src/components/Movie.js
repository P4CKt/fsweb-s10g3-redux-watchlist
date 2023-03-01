import { movies } from "./../movies";

export default function Movie(props) {
  const movie = movies[props.sira];

  return (
    <div className="flex bg-red-50 shadow-lg items-start">
      <img src={movie.posterUrl} alt={movie.title} className="max-w-[18rem] w-2/5 block" />
      <div className="p-8 flex flex-col gap-4 text-sm ">
        <div className="">
          <div className="flex justify-between">
            <h2 className="text-2xl">{movie.title}</h2>
            <h2 className="text-xl bg-blue-200 text-red-400 rounded-[5px] border-2 border-blue-300" >{props.sira+1}.Film</h2>
          </div>
          <p className="italic text-sm ">{movie.genres.join(', ')}</p>
        </div>
       
        <p className="">{movie.plot}</p>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-bold">Yönetmen</span>
          <span className="flex-1">{movie.director}</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-bold">Oyuncular</span>
          <span className="flex-1">{movie.actors}</span>
        </div>
        <div className="flex text-sm gap-1 justify-end">
          <span className="block px-2 py-1 rounded-md border border-zinc-400">{movie.year}</span>
          <span className="block px-2 py-1 rounded-md border border-zinc-400">{movie.runtime}dk</span>
        </div>
      </div>
    </div>
  )
};