/** @type {import('next').NextConfig} */
const nextConfig = {
  // Baut die Anwendung als statische Dateien nach "out/", die Spring Boot
  // ausliefert. Einen Next.js-Server gibt es dabei nicht.
  output: "export",
  devIndicators: false,
};

export default nextConfig;
