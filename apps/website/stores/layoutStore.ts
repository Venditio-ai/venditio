import { create } from 'zustand';

interface LayoutState {
  // Whether to use stacked card layout or flat layout
  useStackedLayout: boolean;
  // Function to set the layout mode
  setUseStackedLayout: (useStackedLayout: boolean) => void;
  // Force a re-render by bumping this version number
  version: number;
  // Bump the version to force re-renders
  bumpVersion: () => void;
}

// Create the store with initial state and actions
export const useLayoutStore = create<LayoutState>((set: any) => ({
  useStackedLayout: true, // Default to stacked layout
  setUseStackedLayout: (useStackedLayout: boolean) => 
    set((state: LayoutState) => ({ 
      useStackedLayout, 
      version: state.version + 1 
    })),
  version: 0,
  bumpVersion: () => set((state: LayoutState) => ({ version: state.version + 1 })),
}));
