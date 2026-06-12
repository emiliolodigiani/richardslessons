# Richard Lessons 🥁

Sito statico con i groove delle lezioni di batteria di Richard e **50 pattern
famosi numerati**, tutti consultabili come spartito, ascoltabili in pagina e
apribili in [GrooveScribe](https://github.com/montulli/GrooveScribe) per
esercitarsi con metronomo e controllo della velocità.

**Sito:** https://emiliolodigiani.github.io/richard-lessons/

## Struttura

```
index.html      la pagina indice (in italiano)
presets.js      i dati dei preset — l'unico file da modificare
style.css       lo stile della pagina
gscribe/        copia completa di GrooveScribe (GPL v2)
docs/           documentazione, incluso il formato URL di GrooveScribe
```

## Come aggiungere un preset

1. Apri un preset esistente con **"Apri in GrooveScribe"** (o apri
   `gscribe/index.html`) e componi il groove nell'editor.
2. Copia l'URL dalla barra del browser.
3. Aggiungi un oggetto in [`presets.js`](presets.js) incollando la parte
   dell'URL **dopo il `?`** nel campo `groove`:

   ```js
   {
     section: "Lezioni",
     title: "Lezione 12 — Shuffle",
     notes: "Concentrati sulle ghost note.",
     groove: "TimeSig=4/4&Div=12&Tempo=76&Measures=1&H=|x-xx-xx-xx-x|&S=|-g--g-O--g--|&K=|o----o------|"
   }
   ```

4. Commit e push: GitHub Pages si aggiorna da solo.

Il formato della query string è documentato in
[docs/formato-url-groovescribe.md](docs/formato-url-groovescribe.md).

## Ringraziamenti

Questo sito è solo una collezione di preset: tutto il lavoro vero lo fa
**GrooveScribe**, creato da [Lou Montulli](https://en.wikipedia.org/wiki/Lou_Montulli)
e [Mike Johnston](https://www.mikeslessons.com/). Grazie!

- Progetto: https://github.com/montulli/GrooveScribe
- Istanza pubblica ufficiale: https://montulli.github.io/GrooveScribe/

Le trascrizioni dei pattern famosi sono versioni didattiche semplificate a
una/due battute, a scopo di studio.

## Licenza

GrooveScribe è rilasciato sotto **GPL v2** (vedi
[gscribe/LICENSE.txt](gscribe/LICENSE.txt)); la cartella `gscribe/` ne è una
copia non modificata. Di conseguenza anche questo repository è distribuito
sotto GPL v2.
