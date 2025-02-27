import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "./actions/actions";
import { movies } from "./movies";
import { nextShow, previewShow, initialShow } from "./actions/actions";

function App() {
  const favMovies = useSelector((newStore) => newStore.fMovies);
  const sira = useSelector((newStore) => newStore.sira);
  const dispatch = useDispatch();

  function handleAdd() {
    console.log("eklee");
    !favMovies.includes(movies[sira]) && dispatch(addFav(movies[sira]));
  }
  function sonrakiFilm() {
    dispatch(nextShow());
  }
  function oncekiFilm() {
    sira !== 0 && dispatch(previewShow());
  }
  function ilkFilm() {
    dispatch(initialShow());
  }

  return (
    <div className="wrapper max-w-2xl mx-auto ">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 text-[12px] sm:text-[16px] justify-center sm:justify-end py-3">
            <button
              onClick={ilkFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            <button
              disabled={sira === 19}
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={handleAdd}
              className="select-none sm:px-4 sm:py-2 px-2 py-1 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
