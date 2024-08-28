import React, { useState, useEffect } from "react";
import "./notes.scss";
import HeaderHome from "../../Components/HeaderHome/HeaderHome.jsx";
import Creation from "../../img/creation.png";
import CreationSecond from "../../img/creationSecond.png";
import Add from "../../img/add.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebaseConfig.js";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [sortByDate, setSortByDate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const notesCollection = collection(db, "notes");

    const unsubscribe = onSnapshot(
      sortByDate
        ? query(notesCollection, orderBy("date", "desc"))
        : query(notesCollection, orderBy("date")),
      (snapshot) => {
        setNotes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    return () => unsubscribe();
  }, [sortByDate]);

  const addNote = () => {
    navigate("/notes/write");
  };

  const handleSortClick = () => {
    setSortByDate(!sortByDate);
  };

  return (
    <>
      <div className="notes-app">
        <HeaderHome />
        <div className="header-actions">
          <div className="header-action" onClick={handleSortClick}>
            <span>Creation date</span>
            {sortByDate ? (
              <img className="header-action-img" src={CreationSecond} />
            ) : (
              <img className="header-action-img" src={Creation} />
            )}
          </div>
        </div>
        <div className="notes">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="note"
              onClick={() => navigate(`/notes/write/${note.id}`)}
            >
              <p className="note-title">{note.title}</p>
              <p className="note-content">{note.content}</p>
              <p className="note-date">{note.date}</p>
            </div>
          ))}
        </div>
        <div className="add-note" onClick={addNote}>
          <img src={Add} />
        </div>
      </div>
      <Footer />
    </>
  );
}
