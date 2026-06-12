# Il formato URL di GrooveScribe

GrooveScribe codifica l'intero groove nella query string dell'URL. Non esiste
una documentazione ufficiale di questo formato: questa guida è ricavata dal
codice sorgente (`gscribe/js/groove_utils.js`, funzioni
`getGrooveDataFromUrlString` e `tablatureToABCNotationPerNote`) e dagli esempi
dell'autore in `gscribe/GrooveMultiDisplay.html`.

Un URL completo ha questa forma:

```
gscribe/index.html?TimeSig=4/4&Div=16&Title=Funky%20Drummer&Tempo=100&Measures=1&H=|xxxxxxxxxxxoxxxx|&S=|----O--g-g-O---o|&K=|o-----o---o-----|
```

In `presets.js` salviamo solo la parte dopo il `?`.

## Parametri generali

| Parametro | Significato | Esempio |
|---|---|---|
| `TimeSig` | Tempo musicale `numeratore/denominatore` (default `4/4`) | `TimeSig=5/4` |
| `Div` | Suddivisione per battuta di 4/4: `8`=ottavi, `16`=sedicesimi, `12`=terzine di ottavi, `24`=terzine di sedicesimi, `48`=griglia mista | `Div=16` |
| `Tempo` | BPM | `Tempo=100` |
| `Measures` | Numero di battute | `Measures=2` |
| `Swing` | Percentuale di swing 0–60 (utile con `Div=8`/`16`) | `Swing=33` |
| `Title` | Titolo (URL-encoded, mostrato sullo spartito) | `Title=Cold%20Sweat` |
| `Author` | Autore (URL-encoded) | `Author=Clyde%20Stubblefield` |
| `Comments` | Commenti (URL-encoded) | |
| `MetronomeFreq` | Metronomo: `0`=spento, `4`=quarti, `8`=ottavi, `16`=sedicesimi | `MetronomeFreq=4` |
| `Mode=view` | Apre GrooveScribe in sola visualizzazione | |

## Le righe dello strumento

Ogni voce della batteria è un parametro con una stringa di caratteri: un
carattere per ogni suddivisione, `-` = pausa, `|` separa le battute.

**Importante:** ogni battuta deve avere esattamente
`Div × numeratore / denominatore` caratteri (es. `Div=16` in 4/4 → 16
caratteri; `Div=8` in 5/4 → 10 caratteri; `Div=16` in 7/8 → 14 caratteri).

| Parametro | Voce |
|---|---|
| `H` | Hi-hat / ride / campana / crash |
| `S` | Rullante |
| `K` | Cassa e charleston a pedale |
| `T1` `T2` `T3` `T4` | Tom (1 = alto … 4 = timpano) |
| `Stickings` | Diteggiatura mostrata sopra il rigo |

### Caratteri per `H` (hi-hat e piatti)

| Char | Suono |
|---|---|
| `x` | hi-hat chiuso |
| `X` | hi-hat accentato |
| `o` | hi-hat aperto |
| `+` | hi-hat richiuso (dopo un aperto) |
| `r` | ride |
| `b` | campana del ride |
| `c` | crash |
| `m` | cowbell |
| `s` | stacker |
| `n` / `N` | metronomo normale / accentato |

### Caratteri per `S` (rullante)

| Char | Suono |
|---|---|
| `O` | colpo accentato (il colpo "normale" nei backbeat) |
| `o` | colpo non accentato |
| `g` | ghost note |
| `x` | cross-stick (colpo sul cerchio) |
| `f` | flam |
| `b` | buzz |
| `d` | drag |

### Caratteri per `K` (cassa e pedale hi-hat)

| Char | Suono |
|---|---|
| `o` | cassa |
| `x` | charleston a pedale (splash) |
| `X` | cassa + charleston a pedale insieme |

### Caratteri per `T1`–`T4` (tom)

| Char | Suono |
|---|---|
| `o` oppure `x` | colpo di tom |

### Caratteri per `Stickings`

`R` (destra), `L` (sinistra), `B` (entrambe), `c` (conteggio), `-` (vuoto).

## Esempi

Rock base in ottavi (una battuta di 4/4):

```
TimeSig=4/4&Div=8&Tempo=80&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o---o---|
```

Half-time shuffle in terzine (Purdie style):

```
TimeSig=4/4&Div=12&Tempo=76&Measures=1&H=|X-xX-xX-xX-x|&S=|-g--g-O--g--|&K=|o----o------|
```

Due battute con hi-hat aperto/chiuso (Cold Sweat, trascrizione dell'autore):

```
TimeSig=4/4&Div=16&Tempo=90&Measures=2&H=|x-o-+-x-x-o-+-x-|x-o-+-x-x-o-+-x-|&S=|----O--g------O-|-g--O--g----O---|&K=|o-------o-o-----|--o-----o-o----o|
```

## Come ottenere l'URL di un groove

Il modo più comodo è non scriverlo a mano: si apre un preset esistente con
"Apri in GrooveScribe", si modifica il groove nell'editor e si copia l'URL
dalla barra del browser (o dal menu Share). La parte dopo il `?` va incollata
nel campo `groove` di `presets.js`.
