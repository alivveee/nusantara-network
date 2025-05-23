'use client';
import useRouteStore from './_store/useRouteStore';
import GoogleMapComponent from './google-maps';
import { RouteDetails } from './route-detail';

interface RouteLayoutProps {
  children: React.ReactNode; // sidebar
}

export default function RouteLayout({ children }: RouteLayoutProps) {
  const { selectedRoute, setSelectedRoute, setSelectedRouteId, setWaypoints } =
    useRouteStore();
  return (
    <div className="w-full h-full flex relative overflow-hidden">
      {/* Sidebar */}
      <div className="w-[310px] h-full flex flex-col border-r">{children}</div>

      {/* Main content area */}
      <div className="flex-1 bg-slate-300">
        <GoogleMapComponent />
      </div>
      {/* Footer or additional content */}
      <div className="absolute bottom-0 left-0 right-0">
        <RouteDetails
          route={selectedRoute}
          onClose={() => {
            setWaypoints([]);
            setSelectedRoute(null);
            setSelectedRouteId(null);
          }}
        />
      </div>
    </div>
  );
}
