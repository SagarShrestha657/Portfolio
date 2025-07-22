import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { X } from 'lucide-react';

interface MapProps {
  isOpen: boolean;
  onClose: () => void;
}

const Map: React.FC<MapProps> = ({ isOpen, onClose }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!isOpen || !mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 10,
      center: [72.8777, 19.0760], // Mumbai coordinates
    });

    // Add marker for Mumbai
    new mapboxgl.Marker({
      color: '#8B5CF6'
    })
    .setLngLat([72.8777, 19.0760])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Mumbai, Maharashtra</h3><p>Location</p>'))
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [isOpen, mapboxToken]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-xl border border-border overflow-hidden w-full max-w-4xl h-[600px] relative">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-all duration-300"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>
        </div>
        
        {!mapboxToken ? (
          <div className="p-8 flex flex-col items-center justify-center h-full space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Enter Mapbox Token</h3>
            <p className="text-muted-foreground text-center max-w-md">
              To view the map, please enter your Mapbox public token. You can get one from{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <input
              type="text"
              placeholder="Enter your Mapbox public token"
              className="w-full max-w-md px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
          </div>
        ) : (
          <div ref={mapContainer} className="w-full h-full" />
        )}
      </div>
    </div>
  );
};

export default Map;