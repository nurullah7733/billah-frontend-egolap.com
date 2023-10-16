export function setItemWithExpiry(key, value, expirySeconds) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expirySeconds * 1000, // Convert seconds to milliseconds
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  // Parse the item from LocalStorage
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // Check if the item has expired
  if (now.getTime() > item.expiry) {
    // If the item has expired, remove it from LocalStorage
    localStorage.removeItem(key);
    return null;
  }
  // If the item is not expired, return its value
  return item.value;
}
