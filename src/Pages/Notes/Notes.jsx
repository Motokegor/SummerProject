import React, { useState, useEffect } from "react";
import "./notes.scss";
import HeaderHome from "../../Components/HeaderHome/HeaderHome.jsx";
import Creation from "../../img/creation.png";
import IconexFirst from "../../img/iconex-first.png";
import IconexSecond from "../../img/iconex-second.png";
import Add from "../../img/add.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../../firebaseConfig.js'; 

export default function Notes() { 
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
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
          <img src={Add} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}