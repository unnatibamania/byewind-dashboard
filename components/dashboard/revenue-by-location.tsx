'use client';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const locations = [
  {
    name: 'New York',
    coordinates: [-74.006, 40.7128] as [number, number],
    value: 72,
  },
  {
    name: 'San Francisco',
    coordinates: [-122.4194, 37.7749] as [number, number],
    value: 39,
  },
  {
    name: 'Sydney',
    coordinates: [141.2093, -33.8688] as [number, number],
    value: 25,
  },
  {
    name: 'Singapore',
    coordinates: [103.8198, 1.3521] as [number, number],
    value: 61,
  },
];

export const RevenueByLocation = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <h3 className="text-sm font-semibold">Revenue by Location</h3>

      {/* World Map */}
      <div className="flex-1 flex items-center justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 150,
          }}
          height={420}
          fill="var(--color-secondary-cyan)"
          className="w-full h-auto"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
          {locations.map((location) => (
            <Marker key={location.name} coordinates={location.coordinates}>
              <circle
                r={12}
                fill="var(--color-primary-brand)"
                stroke="white"
                strokeWidth={5}
                className="cursor-pointer hover:fill-primary/80 transition-colors"
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Location List with Progress Bars */}
      <div className="space-y-4.5">
        {locations.map((location) => {
          const percentage = (location.value / 100) * 100;

          return (
            <div key={location.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span>{location.name}</span>
                <span>{location.value}K</span>
              </div>
              <div className="relative h-1 w-full bg-secondary-cyan/10 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-secondary-cyan rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
