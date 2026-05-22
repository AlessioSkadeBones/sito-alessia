# Come lavorare sul sito

Repository GitHub:

```bash
https://github.com/AlessioSkadeBones/sito-alessia
```

## Da questo Mac

Apri il Terminale e vai nella cartella del progetto:

```bash
cd "/Users/alessiocervara/Library/Mobile Documents/com~apple~CloudDocs/claude workspace/sito-alessio"
```

Prima di iniziare, aggiorna il progetto da GitHub:

```bash
git pull
```

Avvia il sito in locale:

```bash
npm run dev
```

Poi apri il browser su:

```bash
http://localhost:4321/
```

## Se vuoi lavorare con Codex

Quando il sito e aperto in locale, puoi scrivere a Codex:

```text
continuiamo a lavorare sul sito
```

Codex puo modificare i file, testare il sito, creare commit e salvare le modifiche su GitHub.

## Da un altro computer

Installa prima:

- Git
- Node.js versione LTS da https://nodejs.org

Poi apri il Terminale e scarica il progetto:

```bash
git clone https://github.com/AlessioSkadeBones/sito-alessia.git
cd sito-alessia
npm install
npm run dev
```

Il sito si apre su:

```bash
http://localhost:4321/
```

## Ogni volta che riprendi a lavorare

```bash
cd sito-alessia
git pull
npm run dev
```

Se sei su questo Mac e non su un computer nuovo, usa invece il percorso completo:

```bash
cd "/Users/alessiocervara/Library/Mobile Documents/com~apple~CloudDocs/claude workspace/sito-alessio"
git pull
npm run dev
```

## Salvare le modifiche su GitHub

Dopo aver fatto modifiche:

```bash
git status
git add .
git commit -m "Descrizione modifica"
git push
```

## Comandi utili

Controllare che il sito compili senza errori:

```bash
npm run build
```

Vedere lo stato dei file modificati:

```bash
git status
```

Aggiornare il progetto con l'ultima versione online:

```bash
git pull
```
