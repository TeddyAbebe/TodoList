import React from "react";
import { Link } from "react-router-dom";

function TodoScreen() {
  return (
    <div>
      Todo Screen
      <Link to={"/"}>Back</Link>
    </div>
  );
}

export default TodoScreen;
