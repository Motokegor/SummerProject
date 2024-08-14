import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./noteWrite.scss";
import HeaderNote from "../../Components/HeaderNote/HeaderNote.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import backIcon from "../../img/back-icon.png";
import forwards from "../../img/forwards.png";
import done from "../../img/done.png";

export default function NoteWrite({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [symbolsCount, setSymbolsCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      const foundNote = notes.find((note, index) => index === parseInt(id));
      if (foundNote) {
        setTitle(foundNote.title);
        setContent(foundNote.content);
      }
    }
  }, [id, notes]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    setSymbolsCount(event.target.value.length);
  };

  const handleSubmit = () => {
    const newNote = {
      title,
      content,
      date: formatDate(currentDate),
    };

    if (id !== undefined) {
      const updatedNotes = notes.map((note, index) =>
        index === parseInt(id) ? newNote : note
      );
      setNotes(updatedNotes);
    } else {
      fetch("/db.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes: [...notes, newNote],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Заметка добавлена:", data);
          console.log("db.json обновлен:", data); 
          console.log("Состояние notes:", notes);
          setNotes([...notes, newNote]);
        })
        .catch((error) => console.error("Ошибка сохранения данных:", error));
    }

    navigate("/notes");
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
            <div className="notes-write-button notes-write-button-left">
              <div className="notes-write-button-icon">
                <img src={backIcon} alt="Left Arrow" />
              </div>
            </div>
            <div className="notes-write-buttons-separator"></div>
            <div className="notes-write-button notes-write-button-right">
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
