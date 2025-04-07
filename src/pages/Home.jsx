import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>
        Bienvenue sur <span className="quiz-name">Quiz CBX</span> !
      </h1>
      <p className="quiz-text">
        Alors, prêt(e) à prouver que{" "}
        <strong>t’es pas juste là pour décorer</strong> ? 😏 Ou tu vas encore
        finir dernier comme d’habitude ? 🤡
      </p>
      <ul className="quiz-rules">
        <li>
          🎯 Réponds aux <strong>questions</strong>
        </li>
        <li>🏆 Gagne des points</li>
        <li>
          😂 Attention, les mauvaises réponses risquent de te coller la honte à
          vie…
        </li>
      </ul>
      <p className="quiz-text">
        <strong>
          Prêt(e) à relever le défi ? <br />
          Choisis ton univers
        </strong>
      </p>
      <div className="quiz-image">
        <Link to="/quiz-sw">
          <button className="start-btn">Star Wars</button>
        </Link>
        <Link to="/quiz-dbz">
          <button className="start-btn">Dragon ball Z</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
