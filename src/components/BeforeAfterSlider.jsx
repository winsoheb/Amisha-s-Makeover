import { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  // Authentic Makeup Transformation
  const beforeImage = "/img/photoshoot/photoshoot3.png"; // Bare face getting ready / example before
  const afterImage  = "/img/bridal/bridal1.jpg"; // Full glam bridal

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const position = ((x - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handlePointerDown = (e) => {
    handleMove(e);
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handlePointerUp = () => {
    window.removeEventListener('pointermove', handleMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-8">
        <h3 className="font-heading text-3xl text-dark mb-2">The Transformation</h3>
        <p className="font-body text-gray-500 uppercase tracking-widest text-xs">Slide to see before and after</p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-md shadow-2xl cursor-ew-resize select-none"
        onPointerDown={handlePointerDown}
        style={{ touchAction: 'none' }}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After Makeup" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-dark/70 text-white px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-sm rounded-sm">After</div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-x-0 top-0 bottom-0 overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before Makeup" 
            className="absolute inset-0 w-full h-full object-cover max-w-[none] pointer-events-none"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-white/70 text-dark px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-sm rounded-sm">Before</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2b2b2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
