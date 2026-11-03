# Das Frontend im Backend: Next.js für Java Entwickler:innen

Der Code zu meinem Vortrag auf der W-JAX 2026 am 5. November 2026.

## Branches

Dieses Repository enthält mehrere Stände der Anwendung:

- `main`: der Ausgangsstand, von dem das Live Coding startet
- [`schritte`](https://github.com/nilshartmann-workshops/2026-11-05-wjax-frontend-im-backend/tree/schritte): alle Schritte, die ich zeigen wollte, je ein Commit pro Thema. In der [Commit-Liste](https://github.com/nilshartmann-workshops/2026-11-05-wjax-frontend-im-backend/commits/schritte/) siehst du sie einzeln. **Der beste Einstieg,** sieh dir einfach den Diff jedes Commits an.
- [`live_coding`](https://github.com/nilshartmann-workshops/2026-11-05-wjax-frontend-im-backend/tree/live_coding): der Code, den ich während des Vortrags tatsächlich geschrieben habe

## Aufbau

```
backend/            Spring Boot mit Postgres, liefert auch die SPA aus
  spa/              die Anwendung als SPA (Next.js mit statischem Export)
nextjs-frontend/    die Anwendung mit Next.js als eigenem Server vor Spring Boot
```

## Getting started

Gebraucht werden Java 25, Docker, Node.js und pnpm. Folgende Ports müssen frei sein: `63080` (Spring Boot), `63432` (Postgres) und `8110` (Next.js).

1. Starte Postgres und das Backend:
   ```bash
   cd backend
   docker compose up -d
   ./mvnw spring-boot:run
   ```
2. Baue die SPA, die Spring Boot unter http://localhost:63080 ausliefert:
   ```bash
   cd backend/spa
   pnpm install
   pnpm build
   ```
3. Starte die Next.js-Anwendung, sie läuft unter http://localhost:8110:
   ```bash
   cd nextjs-frontend
   pnpm install
   pnpm dev
   ```

## Kontakt

Bei Fragen, Anmerkungen oder Rückmeldungen melde dich gerne. Meine Kontaktdaten findest du hier: https://nilshartmann.net/kontakt
