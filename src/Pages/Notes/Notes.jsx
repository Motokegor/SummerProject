import React, { useState, useEffect } from "react";
import "./notes.scss";
import HeaderHome from "../../Components/HeaderHome/HeaderHome.jsx";
import Creation from "../../img/creation.png";
import IconexFirst from "../../img/iconex-first.png";
import IconexSecond from "../../img/iconex-second.png";
import Add from "../../img/add.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";

export default function Notes({ notes, setNotes }) {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setNotes(data.notes))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const addNote = () => {
    navigate("/notes/write");
  };

  return (
    <>
      <div className="notes-app">
        <HeaderHome />
        <div className="header-actions">
          <div className="header-actions-icons">
            <div className="header-action">
              <img src={IconexFirst} />
            </div>
            <div className="header-action">
              <img src={IconexSecond} />
            </div>
          </div>

          <div className="header-action">
            <span>Creation date</span>
            <img className="header-action-img" src={Creation} />
          </div>
        </div>
        <div className="notes">
          {notes.map((note, index) => (
            <div
              key={index}
              className="note"
              onClick={() => navigate(`/notes/write/${index}`)} 
            >
              <div className="note-title">{note.title}</div>
              <div className="note-content">{note.content}</div>
              <div className="note-date">{note.date}</div>
            </div>
          ))}
        </div>
        <div className="add-note" onClick={addNote}>
          <img src={Add} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}