import { createContext, useContext } from "react";
import Trails, { ITrails } from "./trail-list";

const TrailsContext = createContext<ITrails[] | undefined>(undefined);

export const useTrailsContext = () => {
  const trails = useContext(TrailsContext);
  if (trails === undefined) {
    throw new Error("trails must not be undefined");
  }
  return trails;
};

export default function TrailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrailsContext.Provider value={Trails}>{children}</TrailsContext.Provider>
  );
}
