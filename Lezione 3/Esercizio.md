### Esercizio di Gruppo con GitHub: Creare una Barra di Navigazione con Pagine Multiple

Prima di cominciare, clonate la repo => https://github.com/canniz/corso_tech7


#### Obiettivo
L'obiettivo di questo esercizio è lavorare in coppie (o gruppi di tre) per creare una barra di navigazione che collega due (o tre) pagine web. Ogni membro del gruppo lavorerà su una pagina specifica. Utilizzeranno Git e GitHub Desktop per gestire il progetto, applicando i concetti di branching, commit, push, pull, merge e risoluzione dei conflitti.

### Traccia dell'Esercizio: Creare un Sito Web Multi-Pagina

Il compito è creare un semplice sito web con una barra di navigazione che collega le diverse pagine. Ogni membro del gruppo avrà una pagina specifica da completare.

#### Parte 1: Configurazione del Repository

1. **Creare un nuovo repository su GitHub**:
   - Uno dei membri del gruppo crea un nuovo repository su GitHub e lo chiama ad esempio "ProgettoNavBar".
   - Includere un file README e un file `.gitignore` (opzionale).

2. **Aggiungere collaboratori**:
   - Il creatore del repository va nelle impostazioni del repository su GitHub, nella sezione "Collaborators" e aggiunge gli altri membri del gruppo.

3. **Clonare il repository**:
   - Ogni membro del gruppo clona il repository sul proprio computer utilizzando GitHub Desktop:
     ```plaintext
     File > Clone Repository > Seleziona il repository "ProgettoNavBar"
     ```

#### Parte 2: Creare e Committare le Modifiche

1. **Creare una struttura di base**:
   - Il creatore del repository crea una struttura di base per il progetto con i file `index.html`, `about.html`, `contact.html` (se necessario), e una cartella `css` contenente un file `style.css`. Poi, committa e fa push delle modifiche.


2. **Creare branch separati**:
   - Ogni membro del gruppo crea un branch separato per lavorare sulla propria pagina:
     ```plaintext
     Current Branch > New Branch > Nome del branch (es. about-page, contact-page)
     ```

3. **Lavorare sulle proprie pagine**:
   - Ogni membro del gruppo modifica il file HTML assegnato e lo stile nel file CSS per la propria pagina.

4. **Committare e fare push delle modifiche**:
   - Una volta completate le modifiche, ciascun membro committa e fa push delle proprie modifiche:
     ```plaintext
     Write a commit message > Commit to [nome branch]
     Push origin
     ```

#### Parte 3: Unire i Branch (Merge)

1. **Creare una pull request**:
   - Ogni membro del gruppo crea una pull request per unire il proprio branch al branch principale (`main`):
     ```plaintext
     Branch > Create Pull Request
     ```

2. **Revisione e approvazione**:
   - Gli altri membri del gruppo possono rivedere e approvare la pull request su GitHub.

3. **Unire i branch**:
   - Una volta approvata, il creatore del repository può unire la pull request nel branch principale:
     ```plaintext
     Merge Pull Request > Confirm Merge
     ```

4. **Risoluzione dei conflitti**:
   - Se ci sono conflitti, GitHub notifica del problema. Gli alunni dovranno risolvere i conflitti manualmente:
     - Aprire i file in conflitto e risolverli scegliendo quali modifiche mantenere.
     - Una volta risolti i conflitti, committare e fare push delle modifiche risolte.

#### Parte 4: Sincronizzazione Finale

1. **Sincronizzare i repository locali**:
   - Una volta che tutti i branch sono stati uniti, ogni membro del gruppo deve aggiornare il proprio repository locale:
     ```plaintext
     Fetch origin > Pull origin
     ```

### Riassunto degli Step

1. **Creazione e configurazione del repository**:
   - Creare il repository, aggiungere collaboratori, clonare il repository.

2. **Lavorare sui branch**:
   - Creare branch separati, fare modifiche, committare e fare push.

3. **Unire i branch**:
   - Creare pull request, rivedere, approvare e unire i branch, risolvere eventuali conflitti.

4. **Sincronizzazione finale**:
   - Sincronizzare i repository locali con le modifiche del branch principale.

### Conclusione

Questo esercizio aiuterà gli alunni a comprendere come collaborare su un progetto utilizzando Git e GitHub Desktop, applicando concetti chiave come branching, commit, push, pull, merge e risoluzione dei conflitti. Ogni gruppo creerà un sito web multi-pagina con una barra di navigazione, migliorando la comprensione della struttura HTML e della stilizzazione CSS.