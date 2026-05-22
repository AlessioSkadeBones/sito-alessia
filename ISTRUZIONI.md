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

## Da MacBook con GitHub Desktop

Questa e la soluzione consigliata per lavorare dal MacBook senza usare la cartella iCloud.

### Prima volta sul MacBook

1. Apri GitHub Desktop
2. Vai su `File > Clone Repository`
3. Seleziona il repository:

```text
AlessioSkadeBones/sito-alessia
```

4. Scegli una cartella locale sul MacBook, per esempio:

```text
Documents/Siti/sito-alessia
```

Meglio non usare iCloud per questa cartella.

5. Clicca `Clone`

6. Apri il Terminale nella cartella appena clonata:

```bash
cd ~/Documents/Siti/sito-alessia
```

7. Installa le dipendenze:

```bash
npm install
```

8. Avvia il sito:

```bash
npm run dev
```

9. Apri il browser su:

```text
http://localhost:4321/
```

### Ogni volta che inizi a lavorare dal MacBook

1. Apri GitHub Desktop
2. Apri il repository `sito-alessia`
3. Clicca `Fetch origin`
4. Se compare `Pull origin`, cliccalo
5. Apri il Terminale nella cartella del progetto:

```bash
cd ~/Documents/Siti/sito-alessia
```

6. Avvia il sito:

```bash
npm run dev
```

### Quando hai finito di lavorare dal MacBook

1. Controlla le modifiche in GitHub Desktop
2. Scrivi un messaggio nel campo `Summary`, per esempio:

```text
Aggiorna contenuti sito
```

3. Clicca `Commit to main`
4. Clicca `Push origin`

In questo modo le modifiche finiscono su GitHub e saranno disponibili anche sul Mac fisso.

## Regola importante tra Mac fisso e MacBook

Prima di iniziare a lavorare:

```text
Pull / Fetch origin
```

Dopo aver finito di lavorare:

```text
Commit + Push origin
```

In pratica:

```text
Mac fisso -> lavori -> push
MacBook -> pull -> lavori -> push
Mac fisso -> pull
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
