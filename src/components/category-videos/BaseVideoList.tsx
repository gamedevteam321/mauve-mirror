import { useEffect, useState } from "react";

interface Video {
  videoUrl: string;
  extraText?: string;
}

// Helper function to extract YouTube video IDs
function getVideoId(videoUrl: string): string | null {
  if (videoUrl.includes("shorts/")) {
    return videoUrl.split("shorts/")[1].split("?")[0];
  } else if (videoUrl.includes("watch?v=")) {
    return videoUrl.split("watch?v=")[1].split("&")[0];
  } else if (videoUrl.includes("youtu.be/")) {
    return videoUrl.split("youtu.be/")[1].split("?")[0];
  }
  return null;
}

interface VideoCardProps {
  video: Video;
  paused: boolean;
  isActive: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const VideoCard = ({ video, paused, isActive, onPrev, onNext }: VideoCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const videoId = getVideoId(video.videoUrl);
  const extraText = video.extraText || "";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    paused ? 0 : 1
  }&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0&iv_load_policy=3`;

  const handleLoad = () => setLoaded(true);

  // Prepare WhatsApp URL
  const message = `I want to Inquire about \n${video.videoUrl}`;
  const whatsappUrl = `https://wa.me/9810947849?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full h-full relative bg-black overflow-hidden rounded-xl shadow-lg">
      {paused ? (
        <img
          src={thumbnailUrl}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
              <span className="text-white font-poppins">Loading...</span>
            </div>
          )}
          <iframe
            src={embedUrl}
            title="Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            onLoad={handleLoad}
            className="w-full h-full object-cover pointer-events-none"
          />
        </>
      )}
      
      {/* Mobile Navigation Buttons */}
      <div className="md:hidden absolute bottom-20 left-2.5 right-2.5 flex justify-between items-center gap-4 z-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPrev();
          }}
          className="bg-[#BC7BD0]/60 hover:bg-[#BC7BD0]/80 text-white px-8 py-2 rounded-lg backdrop-blur-sm text-sm font-medium flex-1"
        >
          Previous
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onNext();
          }}
          className="bg-[#BC7BD0]/60 hover:bg-[#BC7BD0]/80 text-white px-8 py-2 rounded-lg backdrop-blur-sm text-sm font-medium flex-1"
        >
          Next
        </button>
      </div>

      {/* Buy Now Button */}
      <div className="absolute bottom-4 left-2.5 right-2.5 bg-gradient-to-r from-[#BC7BD0] via-[#AD55C8] to-[#82309C] rounded-lg p-2.5 shadow-lg font-poppins text-left z-10 pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center text-white text-lg font-bold w-full cursor-pointer"
          onTouchStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(whatsappUrl, "_blank");
          }}
        >
          <span>Buy Now</span>
          <span>₹{extraText}</span>
        </a>
      </div>
    </div>
  );
};

interface BaseVideoListProps {
  category: string;
  apiUrl: string;
}

export default function BaseVideoList({ category, apiUrl }: BaseVideoListProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setVideos(data))
      .catch((error) => console.error("Fetch Error:", error.message));
  }, [apiUrl]);

  if (videos.length === 0) return <div>Loading...</div>;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(currentX);
    setLastX(currentX);
    setLastTime(Date.now());
    setVelocity(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = currentX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    setDragOffset(currentX - startX);
    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    const velocityThreshold = 0.5;
    
    if (Math.abs(dragOffset) > threshold || Math.abs(velocity) > velocityThreshold) {
      if (dragOffset > 0 || velocity > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setDragOffset(0);
    setVelocity(0);
  };

  const getCardWidth = () => {
    if (windowWidth < 768) return "90vw";
    if (windowWidth < 1024) return "240px";
    return "280px";
  };

  const getVisibleIndices = () => {
    const indices = [];
    // Always show 5 cards (-2, -1, 0, 1, 2)
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + videos.length) % videos.length;
      indices.push(index);
    }
    return indices;
  };

  const getPosition = (index: number) => {
    const relativeIndex = (index - currentIndex + videos.length) % videos.length;
    const adjustedIndex = relativeIndex > 2 ? relativeIndex - videos.length : relativeIndex;
    const cardWidth = parseInt(getCardWidth());
    const spacing = windowWidth < 768 ? 20 : 15; // Spacing between cards
    const baseOffset = adjustedIndex * (cardWidth + spacing);
    const dragAdjustment = isDragging ? (dragOffset / 2) : 0; // Reduce drag effect
    return `${baseOffset + dragAdjustment}px`;
  };

  const getCardStyle = (index: number) => {
    const relativeIndex = (index - currentIndex + videos.length) % videos.length;
    const adjustedIndex = relativeIndex > 2 ? relativeIndex - videos.length : relativeIndex;
    const isCenter = adjustedIndex === 0;
    const distance = Math.abs(adjustedIndex);
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;

    if (distance === 1) {
      scale = 0.85;
      opacity = 0.8;
    } else if (distance === 2) {
      scale = 0.7;
      opacity = 0.6;
    }

    if (isCenter) {
      scale = 1;
      opacity = 1;
      zIndex = 10;
    }

    return {
      transform: `translateX(${getPosition(index)}) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div 
      className="relative w-full h-[80vh] md:h-[90vh] bg-transparent overflow-hidden"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Hide desktop buttons on mobile */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-5 -translate-y-1/2 z-50 bg-gradient-to-r from-[#BC7BD0] via-[#AD55C8] to-[#82309C] text-white border-none rounded-full w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity md:block hidden"
      >
        {"<"}
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 -translate-y-1/2 z-50 bg-gradient-to-r from-[#BC7BD0] via-[#AD55C8] to-[#82309C] text-white border-none rounded-full w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity md:block hidden"
      >
        {">"}
      </button>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative h-full flex justify-center items-center">
          {getVisibleIndices().map((index) => (
            <div
              key={index}
              style={{ 
                width: getCardWidth(),
                position: 'absolute',
                ...getCardStyle(index),
                transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'grab',
              }}
              className="h-full"
            >
              <VideoCard
                video={videos[index]}
                paused={index !== currentIndex}
                isActive={index === currentIndex}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 