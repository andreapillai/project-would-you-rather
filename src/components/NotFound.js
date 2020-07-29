import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="center">
      <h1>Page not found...</h1>
      <p>Sorry, the page you're looking for doesn't exist</p>
      <p>
        For a list of questions, please visit the <Link to="/">Dashboard</Link>
      </p>
    </div>
  );
}
