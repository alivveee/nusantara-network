import { create } from 'zustand';
import createRouteState, { RouteState } from './slicing/route.slice';

interface BoundSliceTypes extends RouteState {
  default: null;
}

const useRouteStore = create<BoundSliceTypes>()((...setter) => ({
  default: null,
  ...createRouteState(...setter),
}));

export default useRouteStore;
