"use client";
import React, { useState } from "react";
import { Translate } from "@google-cloud/translate";

const translate = new Translate();

function TranslateComponent() {
  const [translatedText, setTranslatedText] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");

  const translateText = async () => {
    try {
      const [translation] = await translate.translate(textToTranslate, "es");
      setTranslatedText(translation);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
      />
      <button onClick={translateText}>Translate</button>
      <p>Translated Text: {translatedText}</p>
    </div>
  );
}

export default TranslateComponent;
