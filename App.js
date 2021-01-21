import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning",
  "😁": "Beaming",
  "😆": "Grinning",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Tears of Joy",
  "😅": "Grinning",
  "🙂": "Slightly Smiling Face",
  "😉": "Winking",
  "😊": "happy",
  "😇": "Grateful",
  "😃": "Grinning",
  "😍": "Infatuation",
  "🤩": "Star-Struck",
  "😘": "kiss",
  "😋": "Face Savoring Food",
  "🤪": "Silly",
  "🤗": "hugging",
  "🤫": "Shushing Face",
  "🤔": "Thinking",
  "😄": "Grinning",
  "😐": "Neutral",
  "😑": "mad",
  "😏": "Smirking",
  "😒": "Unamused",
  "🤥": "Lying",
  "😌": "Relieved Face",
  "😔": "sad",
  "😪": "Sleepy",
  "🤤": "Drooling",
  "😴": "Sleeping",
  "😷": "Sick",
  "🤒": "Sick",
  "🤕": "Injured",
  "🤢": "Nauseated",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing",
  "🥵": "Hot",
  "🥶": "Cold",
  "🥴": "Woozy",
  "😵": "Dizzy",
  "🤯": "Exploding Head",
  "🥳": "Partying Face",
  "😎": "Cool",
  "🤓": "Nerd",
  "🧐": "Searching",
  "😕": "Confused",
  "😟": "Worried",
  "🙁": "Slightly Frowning Face",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Shocked",
  "😧": "Anguished",
  "😨": "Fearful",
  "😰": "Anxious",
  "😥": "Sad but Relieved",
  "😢": "Crying",
  "😭": "Loudly Crying",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded",
  "😣": "Persevering",
  "😞": "Disappointed",
  "😩": "Weary",
  "😫": "Tired",
  "🥱": "Yawning",
  "😤": "Angry",
  "😡": "Frowning",
  "😠": "Angry",
  "🤬": "Cursing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Know the emoji</h1>
      <input className="input" onChange={emojiInputHandler}></input>
      <h2 className="bg"> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            className="setEmo"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer className="footer">
        <div className="footer-header">about</div>
        <p>
          Emojis can be confusing sometimes. Here's a guide to know the meaning
          of emojis. Click on an emoji or type an emoji in the input bar to know
          its meaning.
        </p>
      </footer>
    </div>
  );
}
