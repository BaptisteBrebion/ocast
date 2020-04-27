// == Import npm
import React, { useEffect } from "react";

// == Import
import "./style.css";

// == Composant
const Counter = ({ count, countAllCandidates }) => {
  useEffect(countAllCandidates, [count]);
  return <h2>{count} profils d'acteurs en ligne</h2>;
};

// == Export
export default Counter;
