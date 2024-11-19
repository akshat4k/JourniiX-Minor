import { useEffect, useState } from 'react';
import './loadingAnimation.css';

export default function LoadingAnimation() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 3 seconds animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${showContent ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <h1>JourniiX</h1>
        <div className="loading-spinner"></div>
        <p>Your Journey Begins Here...</p>
      </div>
    </div>
  );
} 