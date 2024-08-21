import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './noteWrite.scss';
import HeaderNote from '../../Components/HeaderNote/HeaderNote.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import backIcon from '../../img/back-icon.png';
import forwards from '../../img/forwards.png';
import done from '../../img/done.png';
import { getFirestore, doc, getDoc, updateDoc, addDoc, collection, deleteDoc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../../firebaseConfig.js'; 

export default function NoteWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [symbolsCount, setSymbolsCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const { id } = useParams();
  const db = getFirestore(initializeApp(firebaseConfig)); 
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0); 
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      const docRef = doc(db, "notes", id);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setTitle(docSnap.data().title);
            setContent(docSnap.data().content);
            const index = notes.findIndex(note => note.id === id);
            if (index !== -1) {
              setCurrentNoteIndex(index);
            }
          } else {
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении документа:", error);
        });
    }
  }, [id, db, notes]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [db]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    setSymbolsCount(event.target.value.length);
  };

  const handleSubmit = async () => {
    if (title.trim() === "" && content.trim() === "") {
      if (id !== undefined) {
        try {
          await deleteDoc(doc(db, "notes", id));
          navigate("/notes");
        } catch (error) {
          console.error("Ошибка при удалении заметки:", error);
        }
      } else {
        navigate("/notes");
      }
      return;
    }

    const newNote = {
      title,
      content,
      date: formatDate(currentDate),
    };

    try {
      if (id !== undefined) {
        const docRef = doc(db, "notes", id);
        await updateDoc(docRef, newNote);
      } else {
        await addDoc(collection(db, "notes"), newNote);
      }

      navigate("/notes");
    } catch (error) {
      console.error("Ошибка при сохранении заметки:", error);
    }
  };

  const formatDate = (date) => {
    const options = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handlePreviousNote = () => {
    if (currentNoteIndex > 0) {
      setCurrentNoteIndex(currentNoteIndex - 1);
    }
  };

  const handleNextNote = () => {
    if (currentNoteIndex < notes.length - 1) {
      setCurrentNoteIndex(currentNoteIndex + 1);
    }
  };

  return (
    <div>
      <HeaderNote />
      <div className="notes-write">
        <div className="notes-write-header">
          <span className="notes-write-date">{formatDate(currentDate)}</span>
          <span className="notes-write-symbols">{symbolsCount} SYMBOLS</span>
        </div>
        <div className="notes-write-content">
          <textarea
            className="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            className="text"
            placeholder="Notes"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="notes-write-buttons">
          <div className="notes-write-buttons-back-forwards">
            <div className="notes-write-button notes-write-button-left" onClick={handlePreviousNote}>
              <div className="notes-write-button-icon">
                <img src={backIcon} alt="Left Arrow" />
              </div>
            </div>
            <div className="notes-write-buttons-separator"></div>
            <div className="notes-write-button notes-write-button-right" onClick={handleNextNote}>
              <div className="notes-write-button-icon">
                <img src={forwards} alt="Right Arrow" />
              </div>
            </div>
          </div>
          <div className="notes-write-buttons-done" onClick={handleSubmit}>
            <p className="notes-write-buttons-done-text">Done</p>
            <img
              className="notes-write-buttons-done-img"
              src={done}
              alt="Check Mark"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}