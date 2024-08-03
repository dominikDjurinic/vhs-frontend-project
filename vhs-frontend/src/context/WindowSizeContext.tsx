"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
} from "react";

interface WindowSizeValues {
  mobileWindowSize: boolean | undefined;
  setMobileWindowSize: Dispatch<SetStateAction<boolean | undefined>>;
}

const WindowSizeContext = createContext<WindowSizeValues>(
  {} as WindowSizeValues
);

export const WindowSizeContextProvider = ({ children }: PropsWithChildren) => {
  const [mobileWindowSize, setMobileWindowSize] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const handleResizeWindow = () => {
      setMobileWindowSize(window.innerWidth <= 1300);
    };

    window.addEventListener("resize", handleResizeWindow);

    handleResizeWindow();

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <WindowSizeContext.Provider
      value={{ mobileWindowSize, setMobileWindowSize }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSizeContext = () => useContext(WindowSizeContext);
