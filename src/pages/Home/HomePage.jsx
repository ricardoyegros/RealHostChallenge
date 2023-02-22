import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCharactersFromApi } from "../../redux/actions/request.characters";
import Card from "./components/Card";
import Logo from "../../assets/Rick_and_Morty.png"
import "./home.css";
export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCharactersFromApi());
  }, []);
  const characters = useSelector(
    (state) => state.allCharactersReducer.characters?.results
  );
  const loadingMessage = "Please Wait...";
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={Logo} alt="logo"/>
      </header>
      <h1 className="title">All characters</h1>
      <section className="cards">
        {characters &&
          characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        {!characters && <h1 className="error">{loadingMessage}</h1>}
      </section>
    </div>
  );
}
