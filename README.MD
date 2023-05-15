# Webbutveckling III - 2023

## Moment 2 - SASS + Gulp - Aous Josef

Följnade moment fokuserarde på att applicera grunderna inom SASS, så som

- Variabler
- Nesting
- Mixins
- Selector inheritance (nyckelordet "@extend")
- If/else-satser

Gulp användes för omvanlda SCSS kod till CSS kod.
http://studenter.miun.se/~aojo2100/dt173g/m2/

## Moment 1 - Gulp - Aous Josef

Det här projektet handlar om Gulp, byggsystem och task runner som ofta används i webbutvecklingsprojekt som hjälper utvecklare att automatisera repetitiva uppgifter, som att kompilera och minifiera CSS- och JavaScript-filer och sammanfoga filer, med mera

### Paket och verktyg som har använts

- Gulp: En task runner som förenklar byggprocessen genom att automatisera repetitiva uppgifter.
  **Gulp funktioner som har använts**
- `dest`: Används för att ange destinationsmappen där bearbetade filer ska sparas.

- `watch`: Används för att övervaka en uppsättning filer för ändringar och köra uppgifter varje gång en ändring upptäcks.

- `series`: Används för att köra uppgifter i en specifik ordning, en efter den andra.

- `parallel`: Används för att köra uppgifter samtidigt, utan någon särskild ordning.

**Gulp paket som har använts**

- Gulp Sass: Ett paket som kompilerar Sass-filer till CSS.
- Gulp Concat: Ett paket som sammanfogar flera filer till en enda fil.
- BrowserSync: En utvecklingsserver som låter utvecklare se sina ändringar i realtid.
- Gulp CSSnano: Ett paket som minimerar CSS-filer, minskar deras storlek och förbättrar sidladdningstider.
- Gulp Terser: Ett paket som minimerar JavaScript-filer, minskar deras storlek och förbättrar sidladdningstider.

### Installering

1.  Klona förvaret till din lokala dator genom att använda följande kommando:
    `git clone https://github.com/Webbutvecklings-programmet/moment1_4_vt23-aousjosef.git`

2.  Installera Node.js och npm.
3.  Kör `npm installation` för att installera de nödvändiga beroendena.
4.  Kör `gulp` för att starta automatiseringsprocessen.
5.  Navigera till `http://localhost:3000` i din webbläsare för att se utvecklingsservern.
