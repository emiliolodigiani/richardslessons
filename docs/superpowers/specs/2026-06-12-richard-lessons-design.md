# Richard Lessons — design

App statica per GitHub Pages che raccoglie groove di batteria come preset di GrooveScribe.

## Obiettivo

Una pagina indice (in italiano) con i groove delle lezioni di Richard e un elenco
numerato di 50 pattern famosi. Ogni preset mostra lo spartito renderizzato inline
con pulsante play, più un pulsante per aprirlo nell'app GrooveScribe completa
(metronomo, controllo velocità) per esercitarsi.

## Approccio scelto

Repo self-contained: una copia di GrooveScribe (GPL v2, licenza inclusa) vive in
`gscribe/`. Le anteprime inline usano `gscribe/js/groove_display.js` (lo stesso
meccanismo di GrooveEmbed.html). Nessuna build, nessun backend.

## Struttura

```
richards-lessons/
├── index.html      # pagina indice in italiano
├── presets.js      # dati dei preset (unico file da modificare)
├── style.css
├── gscribe/        # copia di GrooveScribe con LICENSE.txt
└── README.md
```

## Dati

`presets.js` espone un array `PRESETS`; ogni elemento:
`{ section, title, notes, groove }` dove `groove` è la query string GrooveScribe
(senza `?`). Due sezioni: **Lezioni** (inizialmente con un esempio) e
**Pattern famosi** (50 groove numerati).

## Pagina

- Header con titolo.
- Sezione "Lezioni" e sezione "Pattern famosi" (numerati 1–50).
- Card per preset: numero/titolo, nota, spartito inline con play,
  pulsante "Apri in GrooveScribe" → `gscribe/index.html?<groove>`.
- Footer con ringraziamenti a GrooveScribe: link al progetto GitHub
  (https://github.com/montulli/GrooveScribe), all'istanza pubblica e agli autori
  (Lou Montulli, Mike Johnston), con menzione della licenza GPL v2.

## Flusso di aggiornamento

Creare il groove in GrooveScribe → copiare l'URL → incollare la query string in
`presets.js` → commit/push → Pages si aggiorna.

## Deploy

Repo pubblico `emiliolodigiani/richardslessons`, GitHub Pages da `main` (root).
URL: https://emiliolodigiani.github.io/richardslessons/
(nota: l'URL Pages deriva dal nome del repo).

## Verifica

Server HTTP locale: le anteprime si renderizzano, il play suona, i link aprono
GrooveScribe con il groove corretto. Poi verifica dell'URL Pages pubblicato.
