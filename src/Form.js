import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form id="search-form">
      <input
        type="text"
        placeholder="Type your city.."
        autocomplete="off"
        autofocus="off"
        className="search"
        id="search-text-input"
      />
      <input type="submit" class="search-button" value="Search" />
      <button className="second-button" id="getPosition">
        Current
      </button>
    </form>
  );
}
