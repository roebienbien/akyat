import React, { useState } from "react";

interface ImageComponentProps {
  photoId: string;
  quality?: number;
  alt?: string;
  className?: string;
  source: "unsplash" | "pexels" | "freepik";
}

// Helper function to get the appropriate image URL based on the source
const getImageUrl = (photoId: string, quality: number, source: string) => {
  switch (source) {
    case "unsplash":
      return `https://images.unsplash.com/photo-${photoId}?q=${quality}&auto=format&fit=crop&ixlib=rb-4.0.3`;
    case "pexels":
      return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpg?auto=compress&cs=tinysrgb&w=1200`;
    case "freepik":
      return `https://image.freepik.com/free-photo/${photoId}.jpg`; // Placeholder for Freepik
    default:
      return "";
  }
};

// Helper function to get the placeholder URL based on the source
const getPlaceholderUrl = (photoId: string, source: string) => {
  switch (source) {
    case "unsplash":
      return `https://images.unsplash.com/photo-${photoId}?q=10&auto=format&fit=crop&ixlib=rb-4.0.3`;
    case "pexels":
      return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpg?auto=compress&cs=tinysrgb&w=200`;
    case "freepik":
      return `https://image.freepik.com/free-photo/${photoId}-low-res.jpg`; // Placeholder for Freepik
    default:
      return "";
  }
};

// Helper function to get srcSet for Unsplash images
const getSrcSet = (photoId: string, quality: number, source: string) => {
  if (source === "unsplash") {
    return `
      https://images.unsplash.com/photo-${photoId}?q=${quality}&w=400 400w,
      https://images.unsplash.com/photo-${photoId}?q=${quality}&w=800 800w,
      https://images.unsplash.com/photo-${photoId}?q=${quality}&w=1200 1200w
    `;
  }
  return "";
};

const ImageComponent: React.FC<ImageComponentProps> = ({
  photoId,
  quality = 80,
  alt = "Image",
  className = "",
  source,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageUrl = getImageUrl(photoId, quality, source);
  const placeholderUrl = getPlaceholderUrl(photoId, source);
  const srcSet = getSrcSet(photoId, quality, source);

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={isLoaded ? imageUrl : placeholderUrl}
        srcSet={isLoaded ? srcSet : undefined}
        sizes="(max-width: 640px) 400px, (max-width: 768px) 800px, 1200px"
        alt={alt}
        loading="lazy"
        className={`transition-opacity duration-500 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageComponent;
