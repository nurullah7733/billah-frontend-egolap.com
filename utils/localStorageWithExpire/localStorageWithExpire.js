export function setItemWithExpiry(key, value, expirySeconds) {
  if (typeof window !== "undefined") {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + expirySeconds * 1000, // Convert seconds to milliseconds
    };
    return localStorage.setItem(key, JSON.stringify(item));
  }
}

export function getItemWithExpiry(key) {
  if (typeof window !== "undefined") {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } else {
    return false;
  }
}
