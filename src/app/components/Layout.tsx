import { Outlet, useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slideOrder } from "../routes";
import { useEffect } from "react";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = slideOrder.indexOf(location.pathname);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === slideOrder.length - 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && !isFirst) {
        navigate(slideOrder[currentIndex - 1]);
      } else if (e.key === "ArrowRight" && !isLast) {
        navigate(slideOrder[currentIndex + 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isFirst, isLast, navigate]);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Outlet />
      
      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
        <div className="flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-2 border border-gray-200">
          <button
            onClick={() => navigate(slideOrder[currentIndex - 1])}
            disabled={isFirst}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-sm px-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {currentIndex + 1} / {slideOrder.length}
          </span>
          
          <button
            onClick={() => navigate(slideOrder[currentIndex + 1])}
            disabled={isLast}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex gap-1.5">
          {slideOrder.map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(slideOrder[index])}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-indigo-600' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
