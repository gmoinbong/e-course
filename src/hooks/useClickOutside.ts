import { useEffect } from "react";

type ClickOutsideHandler = () => void;

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: ClickOutsideHandler) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};