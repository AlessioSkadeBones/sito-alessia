# Come lavorare sul sito da un altro computer

## Prima volta su un nuovo Mac

1. Installa Node.js da https://nodejs.org (versione LTS)
2. Apri il Terminale e lancia questi comandi uno alla volta:

```
git clone https://github.com/AlessioSkadeBones/sito-alessia.git
cd sito-alessia
npm install
npm run dev
```

Il sito si apre su http://localhost:4321

---

## Ogni volta che vuoi lavorare (Mac già configurato)

```
cd ~/Desktop/sito-alessia
npm run dev
```

---

## Dopo aver fatto modifiche — salva su GitHub

```
git add . && git commit -m "descrizione modifica" && git push
```

---

## Repository GitHub

https://github.com/AlessioSkadeBones/sito-alessia
