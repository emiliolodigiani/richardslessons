// Preset per le lezioni di Richard.
//
// Ogni preset è un oggetto:
//   section : "Lezioni" oppure "Pattern famosi"
//   num     : numero progressivo (solo per i pattern famosi)
//   title   : titolo mostrato sulla card
//   notes   : descrizione breve (artista, batterista, contesto)
//   groove  : query string GrooveScribe SENZA il punto interrogativo iniziale.
//             Vedi docs/formato-url-groovescribe.md per il formato completo.
//
// Per aggiungere un preset: crea il groove in GrooveScribe ("Apri in
// GrooveScribe" da un preset esistente è un buon punto di partenza),
// copia l'URL dal pulsante Share/Save, incolla qui la parte dopo il "?".

const PRESETS = [

  // ------------------------------------------------------------------
  // LEZIONI — gli esercizi delle lezioni di Richard, in ordine.
  // ------------------------------------------------------------------
  {
    section: "Lezioni",
    title: "Lezione 1 — Rock base in ottavi",
    notes: "Il primo groove di tutti: hi-hat in ottavi, rullante sul 2 e sul 4, cassa sull'1 e sul 3.",
    groove: "TimeSig=4/4&Div=8&Tempo=80&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o---o---|"
  },
  {
    section: "Lezioni",
    title: "Lezione 2 — Variazione di cassa",
    notes: "Stesso groove, ma la cassa aggiunge il levare del 2: ascolta come cambia il movimento.",
    groove: "TimeSig=4/4&Div=8&Tempo=80&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o--oo---|"
  },
  {
    section: "Lezioni",
    title: "Lezione 3 — Sedicesimi sul charleston",
    notes: "Mano destra in sedicesimi (o due mani alternate): parti lento e resta rilassato.",
    groove: "TimeSig=4/4&Div=16&Tempo=70&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O-------O---|&K=|o-------o-------|"
  },
  {
    section: "Lezioni",
    title: "Lezione 4 — Apertura del charleston",
    notes: "Apri il charleston sul levare del 4 e richiudilo sull'1: il “tssss” che dà respiro al groove.",
    groove: "TimeSig=4/4&Div=8&Tempo=85&Measures=1&H=|xxxxxxxo|&S=|--O---O-|&K=|o---o---|"
  },
  {
    section: "Lezioni",
    title: "Lezione 5 — Prime ghost note",
    notes: "Colpi “fantasma” leggerissimi tra i backbeat: il rullante accentato deve restare molto più forte.",
    groove: "TimeSig=4/4&Div=16&Tempo=75&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|-g--O--g-g--O--g|&K=|o-------o-------|"
  },
  {
    section: "Lezioni",
    title: "Lezione 6 — Shuffle base",
    notes: "Terzine con il colpo centrale omesso: il “galoppo” del blues. Conta 1-tri-pl, 2-tri-pl…",
    groove: "TimeSig=4/4&Div=12&Tempo=80&Measures=1&H=|x-xx-xx-xx-x|&S=|---O-----O--|&K=|o-----o-----|"
  },

  // ------------------------------------------------------------------
  // PATTERN FAMOSI — 50 groove che hanno fatto la storia.
  // Le trascrizioni sono versioni didattiche a una/due battute;
  // dove indicato "semplificato" il groove originale è più elaborato.
  // ------------------------------------------------------------------

  // --- Rock ---
  {
    section: "Pattern famosi", num: 1,
    title: "Billie Jean — Michael Jackson",
    notes: "Leon “Ndugu” Chancler. Il “money beat” perfetto: ottavi sul charleston, rullante su 2 e 4, cassa su 1 e 3.",
    groove: "TimeSig=4/4&Div=8&Title=Billie%20Jean&Tempo=117&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o---o---|"
  },
  {
    section: "Pattern famosi", num: 2,
    title: "Back in Black — AC/DC",
    notes: "Phil Rudd. Rock essenziale e granitico: la forza sta nel non aggiungere niente (semplificato).",
    groove: "TimeSig=4/4&Div=8&Title=Back%20in%20Black&Tempo=94&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o---o--o|"
  },
  {
    section: "Pattern famosi", num: 3,
    title: "We Will Rock You — Queen",
    notes: "Il battito di mani e piedi più famoso del mondo: bum-bum-PA, bum-bum-PA.",
    groove: "TimeSig=4/4&Div=8&Title=We%20Will%20Rock%20You&Tempo=81&Measures=1&H=|--------|&S=|--O---O-|&K=|oo--oo--|"
  },
  {
    section: "Pattern famosi", num: 4,
    title: "Smells Like Teen Spirit — Nirvana",
    notes: "Dave Grohl. Potenza grunge: beat rock con la cassa sincopata (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Smells%20Like%20Teen%20Spirit&Tempo=117&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o-------o-o-----|"
  },
  {
    section: "Pattern famosi", num: 5,
    title: "When the Levee Breaks — Led Zeppelin",
    notes: "John Bonham. Il groove più campionato del rock: pesante, dietro al tempo. Due battute: la seconda chiude con la cassa in levare.",
    groove: "TimeSig=4/4&Div=16&Title=When%20the%20Levee%20Breaks&Tempo=71&Measures=2&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|&K=|o-o------oo-----|o-o------oo---o-|"
  },
  {
    section: "Pattern famosi", num: 6,
    title: "Kashmir — Led Zeppelin",
    notes: "John Bonham. Maestoso e ipnotico: il batterista tiene il 4/4 dritto mentre il riff gira in tre.",
    groove: "TimeSig=4/4&Div=8&Title=Kashmir&Tempo=82&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o----o--|"
  },
  {
    section: "Pattern famosi", num: 7,
    title: "Enter Sandman — Metallica",
    notes: "Lars Ulrich. Beat metal di base con doppio colpo di cassa (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Enter%20Sandman&Tempo=123&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o-o-----o-o-----|"
  },
  {
    section: "Pattern famosi", num: 8,
    title: "Seven Nation Army — The White Stripes",
    notes: "Meg White. Quattro quarti di cassa, essenziale come un tamburo da stadio.",
    groove: "TimeSig=4/4&Div=8&Title=Seven%20Nation%20Army&Tempo=124&Measures=1&H=|--------|&S=|--O---O-|&K=|o-o-o-o-|"
  },
  {
    section: "Pattern famosi", num: 9,
    title: "Wipe Out — The Surfaris",
    notes: "Ron Wilson. Il rullato surf in sedicesimi: accenta i quarti e tieni il resto leggero.",
    groove: "TimeSig=4/4&Div=16&Title=Wipe%20Out&Tempo=158&Measures=1&H=|----------------|&S=|OoooOoooOoooOooo|&K=|o---o---o---o---|"
  },
  {
    section: "Pattern famosi", num: 10,
    title: "In the Air Tonight (fill) — Phil Collins",
    notes: "Il fill più famoso della storia del pop: discesa rullante → tom → timpano (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=In%20the%20Air%20Tonight%20Fill&Tempo=96&Measures=1&H=|----------------|&S=|oooo------------|&T1=|----oooo--------|&T4=|--------oooo----|&K=|------------o-o-|"
  },

  // --- Pop, disco, dance ---
  {
    section: "Pattern famosi", num: 11,
    title: "Stayin' Alive — Bee Gees",
    notes: "Il beat disco: cassa in quattro, charleston aperto sui levare.",
    groove: "TimeSig=4/4&Div=8&Title=Stayin%20Alive&Tempo=104&Measures=1&H=|xoxoxoxo|&S=|--O---O-|&K=|o-o-o-o-|"
  },
  {
    section: "Pattern famosi", num: 12,
    title: "Superstition — Stevie Wonder",
    notes: "Suonata da Stevie stesso. Sedicesimi sul charleston e cassa funky che varia nella seconda battuta (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Superstition&Tempo=101&Measures=2&H=|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|&S=|----O-------O---|----O-------O---|&K=|o------o-o------|o------o-o----o-|"
  },
  {
    section: "Pattern famosi", num: 13,
    title: "House / EDM quattro sul pavimento",
    notes: "La base di tutta la musica dance: cassa in quattro, charleston aperto in levare, clap su 2 e 4.",
    groove: "TimeSig=4/4&Div=8&Title=House&Tempo=124&Measures=1&H=|-o-o-o-o|&S=|--O---O-|&K=|o-o-o-o-|"
  },
  {
    section: "Pattern famosi", num: 14,
    title: "Be My Baby — The Ronettes",
    notes: "Hal Blaine. BUM... BA-BUM PA: l'intro che ha definito il pop (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Be%20My%20Baby&Tempo=128&Measures=1&H=|----------------|&S=|------------O---|&K=|o------o-o------|"
  },
  {
    section: "Pattern famosi", num: 15,
    title: "Motown — quattro sul rullante",
    notes: "Lo stile Funk Brothers (es. “I Can't Help Myself”): rullante su tutti i quarti.",
    groove: "TimeSig=4/4&Div=8&Title=Motown&Tempo=120&Measures=1&H=|xxxxxxxx|&S=|O-O-O-O-|&K=|o-o-o-o-|"
  },

  // --- Funk e soul ---
  {
    section: "Pattern famosi", num: 16,
    title: "Funky Drummer — James Brown",
    notes: "Clyde Stubblefield. Il break più campionato di sempre: ghost note e charleston aperto sul levare del 3. La seconda battuta accenta il finale.",
    groove: "TimeSig=4/4&Div=16&Title=Funky%20Drummer&Tempo=100&Measures=2&H=|xxxxxxxxxxxoxxxx|xxxxxxxxxxxoxxxx|&S=|----O--g-g-O---o|----O--g-g-O---O|&K=|o-----o---o-----|o-----o---o-----|"
  },
  {
    section: "Pattern famosi", num: 17,
    title: "Cold Sweat — James Brown",
    notes: "Clyde Stubblefield. Due battute di puro funk (trascrizione dell'autore di GrooveScribe).",
    groove: "TimeSig=4/4&Div=16&Title=Cold%20Sweat&Author=Clyde%20Stubblefield&Tempo=90&Measures=2&H=|x-o-+-x-x-o-+-x-|x-o-+-x-x-o-+-x-|&S=|----O--g------O-|-g--O--g----O---|&K=|o-------o-o-----|--o-----o-o----o|"
  },
  {
    section: "Pattern famosi", num: 18,
    title: "Cissy Strut — The Meters",
    notes: "Zigaboo Modeliste. Funk di New Orleans su due battute: domanda e risposta tra cassa e rullante (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Cissy%20Strut&Tempo=90&Measures=2&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-----O--O--|----O-----O-----|&K=|o--o--o-----o---|o--o--o---o-o---|"
  },
  {
    section: "Pattern famosi", num: 19,
    title: "Chameleon — Herbie Hancock",
    notes: "Harvey Mason. Il groove funk-fusion per eccellenza, su due battute (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Chameleon&Tempo=94&Measures=2&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|&K=|o------o--o----o|o------o--o--o--|"
  },
  {
    section: "Pattern famosi", num: 20,
    title: "50 Ways to Leave Your Lover — Paul Simon",
    notes: "Steve Gadd. Il groove “militare” più imitato di sempre (molto semplificato!).",
    groove: "TimeSig=4/4&Div=16&Title=50%20Ways&Tempo=96&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|-g--O--g-g--O---|&K=|o-------o-------|"
  },
  {
    section: "Pattern famosi", num: 21,
    title: "Pick Up the Pieces — Average White Band",
    notes: "Robbie McIntosh. Funk scozzese da manuale, ghost note ovunque (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Pick%20Up%20the%20Pieces&Tempo=105&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O--g--g-O--g|&K=|o---------o-----|"
  },
  {
    section: "Pattern famosi", num: 22,
    title: "Sex Machine — James Brown",
    notes: "John “Jabo” Starks. Funk asciutto: “on the one” (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Sex%20Machine&Tempo=110&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O--g----O---|&K=|o-o-------o-o---|"
  },

  // --- Breakbeat e hip-hop ---
  {
    section: "Pattern famosi", num: 23,
    title: "Amen Break — The Winstons",
    notes: "G.C. Coleman. Le due battute che hanno generato jungle, drum'n'bass e hip-hop (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Amen%20Break&Tempo=136&Measures=2&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O--g-g-O--O-|----O--g-g-O-O--|&K=|o-o-------o-o---|o-o------o------|"
  },
  {
    section: "Pattern famosi", num: 24,
    title: "Impeach the President — The Honey Drippers",
    notes: "Tra i break più campionati dell'hip-hop anni '90 (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Impeach%20the%20President&Tempo=98&Measures=1&H=|x-x-x-x-x-x-x-o-|&S=|----O-------O---|&K=|o------o--o-----|"
  },
  {
    section: "Pattern famosi", num: 25,
    title: "Boom bap — hip-hop classico",
    notes: "Il beat alla DJ Premier / Pete Rock: cassa “boom”, rullante “bap”. Due battute con la cassa che risponde.",
    groove: "TimeSig=4/4&Div=16&Title=Boom%20Bap&Tempo=90&Measures=2&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|&K=|o-----o---o-----|o-----o-----o-o-|"
  },
  {
    section: "Pattern famosi", num: 26,
    title: "Trap — base moderna",
    notes: "Mezzo tempo: rullante sul 3, charleston con raddoppi in sedicesimi.",
    groove: "TimeSig=4/4&Div=16&Title=Trap&Tempo=140&Measures=1&H=|x-x-x-x-xxxxx-x-|&S=|--------O-------|&K=|o-----o-------o-|"
  },
  {
    section: "Pattern famosi", num: 27,
    title: "Drum and bass — two step",
    notes: "Il pattern “two-step” a 174 BPM: cassa su 1 e sul levare del 3.",
    groove: "TimeSig=4/4&Div=16&Title=Drum%20and%20Bass&Tempo=174&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o---------o-----|"
  },

  // --- Reggae, ska, latin ---
  {
    section: "Pattern famosi", num: 28,
    title: "One drop — Bob Marley",
    notes: "Carlton Barrett. Il battere dell'1 resta vuoto: tutto cade sul 3 (cassa + cross-stick).",
    groove: "TimeSig=4/4&Div=8&Title=One%20Drop&Tempo=76&Measures=1&H=|xxxxxxxx|&S=|----x---|&K=|----o---|"
  },
  {
    section: "Pattern famosi", num: 29,
    title: "Steppers — reggae",
    notes: "Cassa in quattro “militare”, cross-stick sul 3: il reggae che marcia.",
    groove: "TimeSig=4/4&Div=8&Title=Steppers&Tempo=76&Measures=1&H=|xxxxxxxx|&S=|----x---|&K=|o-o-o-o-|"
  },
  {
    section: "Pattern famosi", num: 30,
    title: "Ska",
    notes: "Veloce e in levare: il charleston risponde alla chitarra.",
    groove: "TimeSig=4/4&Div=8&Title=Ska&Tempo=140&Measures=1&H=|-x-x-x-x|&S=|--O---O-|&K=|o---o---|"
  },
  {
    section: "Pattern famosi", num: 31,
    title: "Dembow / reggaeton",
    notes: "Il ritmo di tutto il reggaeton: cassa in quattro, rullante sul “tresillo”.",
    groove: "TimeSig=4/4&Div=16&Title=Dembow&Tempo=95&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|---x--x----x--x-|&K=|o---o---o---o---|"
  },
  {
    section: "Pattern famosi", num: 32,
    title: "Samba",
    notes: "Il motore del Brasile: cassa “boom-ba-boom” e accenti sul charleston (trascrizione dell'autore di GrooveScribe).",
    groove: "TimeSig=4/4&Div=16&Title=Samba&Tempo=100&Measures=1&H=|xxXxxxXxxxXxxxXx|&S=|x-x--x-x-x-x-xx-|&K=|o--oo--oo--oo--o|"
  },
  {
    section: "Pattern famosi", num: 33,
    title: "Bossa nova",
    notes: "Cross-stick sulla clave 3-2 (che si completa in due battute), piede “bossa” costante: João Gilberto in batteria.",
    groove: "TimeSig=4/4&Div=16&Title=Bossa%20Nova&Tempo=130&Measures=2&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|x-----x-----x---|----x---x-------|&K=|o--o----o--o----|o--o----o--o----|"
  },
  {
    section: "Pattern famosi", num: 34,
    title: "Bembé — campana afro-cubana in 12/8",
    notes: "Il pattern di campana africano per eccellenza, qui sul charleston.",
    groove: "TimeSig=4/4&Div=12&Title=Bembe&Tempo=110&Measures=1&H=|x-x-xx-x-x-x|&S=|------------|&K=|o-----o-----|"
  },

  // --- Jazz, blues, shuffle ---
  {
    section: "Pattern famosi", num: 35,
    title: "Swing — spang-a-lang",
    notes: "Il ride pattern del jazz: “spang spang-a-lang”, charleston col piede su 2 e 4.",
    groove: "TimeSig=4/4&Div=12&Title=Swing&Tempo=140&Measures=1&H=|r--r-rr--r-r|&S=|------------|&K=|---x-----x--|"
  },
  {
    section: "Pattern famosi", num: 36,
    title: "Take Five — Dave Brubeck",
    notes: "Joe Morello. Il 5/4 più famoso della storia: conta 3+2.",
    groove: "TimeSig=5/4&Div=8&Title=Take%20Five&Tempo=174&Swing=33&Measures=1&H=|r-rrr-rrr-|&S=|--O---O---|&K=|o-x---x---|"
  },
  {
    section: "Pattern famosi", num: 37,
    title: "Blues shuffle — Pride and Joy",
    notes: "Chris Layton con Stevie Ray Vaughan: terzine “zoppe” e backbeat solido.",
    groove: "TimeSig=4/4&Div=12&Title=Blues%20Shuffle&Tempo=120&Measures=1&H=|x-xx-xx-xx-x|&S=|---O-----O--|&K=|o--o--o--o--|"
  },
  {
    section: "Pattern famosi", num: 38,
    title: "Slow blues 12/8",
    notes: "Terzine piene sul charleston, il tempo che respira: ogni lento blues parte da qui.",
    groove: "TimeSig=4/4&Div=12&Title=Slow%20Blues&Tempo=60&Measures=1&H=|xxxxxxxxxxxx|&S=|---O-----O--|&K=|o-----o-----|"
  },
  {
    section: "Pattern famosi", num: 39,
    title: "Purdie Shuffle — Bernard Purdie",
    notes: "L'half-time shuffle originale (Steely Dan, “Home at Last”): ghost note in terzina, rullante sul 3.",
    groove: "TimeSig=4/4&Div=12&Title=Purdie%20Shuffle&Tempo=76&Measures=1&H=|X-xX-xX-xX-x|&S=|-g--g-O--g--|&K=|o----o------|"
  },
  {
    section: "Pattern famosi", num: 40,
    title: "Fool in the Rain — Led Zeppelin",
    notes: "John Bonham reinterpreta il Purdie Shuffle (semplificato).",
    groove: "TimeSig=4/4&Div=12&Title=Fool%20in%20the%20Rain&Tempo=84&Measures=1&H=|x-xx-xx-xx-x|&S=|-g--g-O--g--|&K=|o-o--o------|"
  },
  {
    section: "Pattern famosi", num: 41,
    title: "Rosanna — Toto",
    notes: "Jeff Porcaro: Purdie Shuffle + Bo Diddley = il groove più studiato al mondo (trascrizione dell'autore di GrooveScribe).",
    groove: "TimeSig=4/4&Div=24&Title=Rosanna%20Shuffle&Author=Jeff%20Porcaro&Tempo=85&Measures=1&H=|x-xx-xx-xx-xx-xx-xx-xx-x|&S=|-g--g-Og--g--g--g-Og--g-|&K=|o----o---o----o---o----o|"
  },
  {
    section: "Pattern famosi", num: 42,
    title: "Sing Sing Sing — Benny Goodman",
    notes: "Gene Krupa. Il timpano che ha reso la batteria uno strumento solista: due battute, la seconda risponde sul rullante.",
    groove: "TimeSig=4/4&Div=12&Title=Sing%20Sing%20Sing&Tempo=112&Measures=2&H=|------------|------------|&S=|------------|---O-----O--|&K=|o-----o-----|o-----o-----|&T4=|o-oo-oo-oo-o|o-oo-oo-oo-o|"
  },

  // --- Country, punk e altro ---
  {
    section: "Pattern famosi", num: 43,
    title: "Train beat — country",
    notes: "Il treno di Johnny Cash: sedicesimi spazzolati sul rullante, accenti su 2 e 4.",
    groove: "TimeSig=4/4&Div=16&Title=Train%20Beat&Tempo=110&Measures=1&H=|----------------|&S=|ggggOgggggggOggg|&K=|o-------o-------|"
  },
  {
    section: "Pattern famosi", num: 44,
    title: "Punk rock — Ramones",
    notes: "Tommy Ramone. Il money beat suonato il più forte e veloce possibile.",
    groove: "TimeSig=4/4&Div=8&Title=Punk%20Rock&Tempo=180&Measures=1&H=|xxxxxxxx|&S=|--O---O-|&K=|o---o---|"
  },
  {
    section: "Pattern famosi", num: 45,
    title: "Half-time rock",
    notes: "Rullante solo sul 3: lo spazio raddoppia e tutto sembra più potente.",
    groove: "TimeSig=4/4&Div=8&Title=Half%20Time&Tempo=90&Measures=1&H=|xxxxxxxx|&S=|----O---|&K=|o--o----|"
  },
  {
    section: "Pattern famosi", num: 46,
    title: "Tom Sawyer — Rush",
    notes: "Neil Peart. Sedicesimi precisi come un orologio (molto semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Tom%20Sawyer&Tempo=88&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O-------O---|&K=|o-o-----o-o-----|"
  },
  {
    section: "Pattern famosi", num: 47,
    title: "Walk This Way — Aerosmith",
    notes: "Joey Kramer. Rock-funk con la cassa che “parla” (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Walk%20This%20Way&Tempo=108&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o-o----o-o------|"
  },
  {
    section: "Pattern famosi", num: 48,
    title: "Good Times Bad Times — Led Zeppelin",
    notes: "John Bonham. I colpi doppi di cassa che cambiarono il rock (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Good%20Times%20Bad%20Times&Tempo=96&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o------oo-o-----|"
  },
  {
    section: "Pattern famosi", num: 49,
    title: "Sunday Bloody Sunday — U2",
    notes: "Larry Mullen Jr. Il rullante “militare”: marcia in sedicesimi con accenti (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=Sunday%20Bloody%20Sunday&Tempo=103&Measures=1&H=|----------------|&S=|OgggOgggOgggOggg|&K=|o-------o-------|"
  },
  {
    section: "Pattern famosi", num: 50,
    title: "My Sharona — The Knack",
    notes: "Bruce Gary. BUM... ba-BUM PA: uno dei groove più riconoscibili del rock (semplificato).",
    groove: "TimeSig=4/4&Div=16&Title=My%20Sharona&Tempo=120&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o------o-o------|"
  }
];
