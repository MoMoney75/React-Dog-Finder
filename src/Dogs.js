import dogsList from "./allDogs";
import { Link } from "react-router-dom";

const Dogs = () => {
    return (
      <div>
        {dogsList.map((d) => (
          <div key={d.name}>
            <Link to={`/dogs/${d.name}`}>
              <h4>{d.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  };


export default Dogs