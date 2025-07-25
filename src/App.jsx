import { useState } from "react";
import PasswordLock from "./components/PasswordLock";
import Countdown from "./components/Countdown";
import BirthdayMessage from "./components/BirthdayMessage";
import MainMenu from "./components/MainMenu";
import "./index.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const correctPassword = "ourlove"; // Change this to your secret password

  const handleUnlock = () => {
    setShowCountdown(true);
    setTimeout(() => {
      setShowCountdown(false);
      setShowBirthday(true);
    }, 3800); // Matches countdown duration
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex flex-col items-center justify-center">
        {showCountdown ? (
          <Countdown />
        ) : showBirthday ? (
          <BirthdayMessage
            onComplete={() => {
              setShowBirthday(false);
              setUnlocked(true);
            }}
          />
        ) : (
          <PasswordLock
            onUnlock={handleUnlock}
            correctPassword={correctPassword}
          />
        )}
      </div>
    );
  }

  return <MainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />;
}
