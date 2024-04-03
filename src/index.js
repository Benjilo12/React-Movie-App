import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import App1 from "./App copy";

// // displaying the message with the number of rating
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRatings color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    

    <StarRatings maxRating={10} />
    <StarRatings
      size={24}
      color="red"
      messages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
    />
       <StarRatings
      maxRating={5}
      messages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  
    */}

    <App1 />
  </React.StrictMode>
);
