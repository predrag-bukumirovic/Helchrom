import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSound } from "react-icons/ai";
import { IoPauseOutline } from "react-icons/io5";

const TextReader = ({ textKey }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { t, i18n } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [synth, setSynth] = useState(null);
  let utterance = null;

  useEffect(() => {
    const synth = window.speechSynthesis;
    setSynth(synth);

    const handleUnload = () => {
      if (synth) {
        synth.cancel();
        setIsSpeaking(false);
      }
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      if (synth) {
        synth.cancel();
        setIsSpeaking(false);
        window.removeEventListener("beforeunload", handleUnload);
      }
    };
  }, []);

  const stripHTMLTags = html => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleSpeak = () => {
    if (!synth || !t(textKey)) return;

    if (synth.speaking) {
      synth.cancel();
      setIsSpeaking(false);
      setStartIndex(0);
    } else {
      const plainText = stripHTMLTags(t(textKey));
      if (!plainText.trim()) return;

      utterance = new SpeechSynthesisUtterance(plainText);
      const voices = synth.getVoices();

      utterance.text = plainText.substring(startIndex);

      switch (i18n.language) {
        case "ge":
          utterance.voice = voices.find(voice => voice.lang === "ka-GE");
          break;
        case "ru":
          utterance.voice = voices.find(voice => voice.lang === "ru-RU");
          break;
        case "en":
        default:
          utterance.voice = voices.find(voice => voice.lang === "en-US");
          break;
      }

      synth.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
        setStartIndex(0);
      };
    }
  };

  return (
    <div>
      <span className="sound-icon" onClick={handleSpeak}>
        {isSpeaking ? <IoPauseOutline /> : <AiOutlineSound />}
      </span>
    </div>
  );
};

export default TextReader;
