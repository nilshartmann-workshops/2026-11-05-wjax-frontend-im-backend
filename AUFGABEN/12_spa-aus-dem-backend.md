# Die SPA aus dem Backend

Spring Boot liefert die SPA aus `backend/spa/` als statische Dateien aus, das Frontend steckt also im Backend. Öffne http://localhost:63080/recipes.

- Im Network-Tab lädt der Browser zuerst ein fast leeres HTML, dann das JavaScript und erst danach die Rezepte von `/api/recipes`.
- Im Quelltext der Seite steht kein Rezept, nur der Ladezustand.
- Das Spring-Log zeigt den Browser als Aufrufer:
  ```
  GET /api/recipes from 0:0:0:0:0:0:0:1 (Mozilla/5.0 ...)
  ```
- Die Seite der Liste lädt mit `useQuery` im Browser (`backend/spa/app/recipes/page.tsx`). Dieselbe Seite in Next.js ist eine `async` Funktion, die auf dem Server lädt (`nextjs-frontend/app/recipes/page.tsx`).
