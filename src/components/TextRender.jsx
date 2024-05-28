import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePause } from "react-icons/ai";
import userSound from "../assets/images/usersound.png";

import { useTranslation } from "react-i18next";

const TextReader = ({ texts }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { i18n } = useTranslation();
  const synth = useRef(null);
  const utterance = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    synth.current = window.speechSynthesis;

    const handleUnload = () => {
      if (synth.current && synth.current.speaking) {
        synth.current.cancel();
        setIsSpeaking(false);
      }
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      if (synth.current && synth.current.speaking) {
        synth.current.cancel();
        setIsSpeaking(false);
      }
    };
  }, []);

  const stripHTMLTags = html => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleSpeak = () => {
    if (!synth.current) return;

    if (synth.current.speaking) {
      synth.current.pause(); // Pauzira trenutni govor
      setIsSpeaking(false);
    } else {
      speakNext();
    }
  };

  const speakNext = () => {
    if (currentIndex.current >= texts.length) {
      currentIndex.current = 0;
      setIsSpeaking(false);
      return;
    }

    let textToSpeak = texts[currentIndex.current];
    textToSpeak = stripHTMLTags(textToSpeak);

    if (!textToSpeak.trim()) {
      currentIndex.current++;
      speakNext();
      return;
    }

    utterance.current = new SpeechSynthesisUtterance(textToSpeak);
    const voices = synth.current.getVoices();

    switch (i18n.language) {
      case "ge":
        utterance.current.voice = voices.find(voice => voice.lang === "ka-GE");
        break;
      case "ru":
        utterance.current.voice = voices.find(voice => voice.lang === "ru-RU");
        break;
      case "en":
      default:
        utterance.current.voice = voices.find(voice => voice.lang === "en-US");
        break;
    }

    synth.current.speak(utterance.current);
    setIsSpeaking(true);

    utterance.current.onend = () => {
      currentIndex.current++;
      speakNext();
    };
  };

  const stopSpeaking = () => {
    if (synth.current) {
      synth.current.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <span
      className="sound-icon"
      onClick={isSpeaking ? stopSpeaking : handleSpeak}
    >
      {isSpeaking
        ? <AiOutlinePause />
        : <img
            src={userSound}
            style={{ width: 25, marginLeft: 10 }}
            alt="Sound user"
          />}
    </span>
  );
};

export default TextReader;
