export default function capitalizeFLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
