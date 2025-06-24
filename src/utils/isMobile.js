// Returns true if the device is mobile (screen width < 768px)
export function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }
  return false;
}
