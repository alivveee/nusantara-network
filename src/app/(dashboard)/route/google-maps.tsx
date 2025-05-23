import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { MdHomeFilled } from 'react-icons/md';
import useRouteStore from './_store/useRouteStore';
import { cn } from '@/lib/utils';

const pointColor = {
  berjalan: 'bg-blue-500',
  berhasil: 'bg-green-500',
  gagal: 'bg-red-500',
  dibuat: 'bg-yellow-500',
};

export default function GoogleMapComponent() {
  // Warehouse position
  const position = { lat: -7.777375888682844, lng: 113.45324294849655 };

  const { waypoints } = useRouteStore();

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <Map defaultCenter={position} defaultZoom={12} mapId="DEMO_MAP_ID">
        <AdvancedMarker position={position}>
          <div className="text-white p-1 border-[1.5px] border-white bg-blue-500 rounded-full">
            <MdHomeFilled size={18} />
          </div>
        </AdvancedMarker>
        {waypoints?.map((waypoint, idx) => (
          <AdvancedMarker
            key={idx}
            position={{ lat: waypoint.lat, lng: waypoint.lon }}
          >
            <div
              className={cn(
                'h-[22px] w-[26px] bg-blue-500 text-white text-sm text-center',
                pointColor[waypoint.status!]
              )}
            >
              {idx + 1}
            </div>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
