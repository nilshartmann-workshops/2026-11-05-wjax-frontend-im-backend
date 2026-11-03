export function formatDate(s: string) {
  const date = new Date(s);
  // how to determine locale in Next.js on server side?
  const userLocale = "en";
  return new Intl.DateTimeFormat(userLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatTime(s: string) {
  const date = new Date(s);
  // how to determine locale in Next.js on server side?
  const userLocale = "de";
  return new Intl.DateTimeFormat(userLocale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}
