### Documentazione dei Tag HTML e degli Elementi CSS Utilizzati

#### Tag HTML

1. **`<!DOCTYPE html>`**
   - **Descrizione**: Dichiara il tipo di documento e la versione HTML. In questo caso, specifica che il documento è un file HTML5.
   - **Uso**: Deve essere il primo elemento in ogni documento HTML.
   - **Esempio**: `<!DOCTYPE html>`

2. **`<html>`**
   - **Descrizione**: Il tag radice che racchiude tutto il contenuto di una pagina HTML.
   - **Attributi**: `lang` (specifica la lingua del documento).
   - **Uso**: Racchiude tutti gli altri tag HTML.
   - **Esempio**: `<html lang="it"> ... </html>`

3. **`<head>`**
   - **Descrizione**: Contiene metadati, collegamenti a file esterni, il titolo del documento, e altre informazioni che non vengono visualizzate direttamente sulla pagina.
   - **Uso**: Racchiude elementi come `<title>`, `<meta>`, `<link>`, ecc.
   - **Esempio**: `<head> ... </head>`

4. **`<meta>`**
   - **Descrizione**: Fornisce metadati come la codifica del carattere e le impostazioni di visualizzazione.
   - **Attributi**: `charset`, `name`, `content`, `viewport`.
   - **Uso**: Utilizzato per specificare la codifica dei caratteri e altre informazioni.
   - **Esempio**: `<meta charset="UTF-8">`

5. **`<title>`**
   - **Descrizione**: Specifica il titolo del documento che appare nella scheda del browser.
   - **Uso**: Si trova all'interno del `<head>`.
   - **Esempio**: `<title>Home Page</title>`

6. **`<link>`**
   - **Descrizione**: Collega documenti esterni come file CSS.
   - **Attributi**: `rel`, `href`.
   - **Uso**: Utilizzato per collegare fogli di stile esterni.
   - **Esempio**: `<link rel="stylesheet" href="css/style.css">`

7. **`<body>`**
   - **Descrizione**: Contiene il contenuto visibile della pagina web.
   - **Uso**: Racchiude tutti gli elementi di contenuto come testi, immagini, link, ecc.
   - **Esempio**: `<body> ... </body>`

8. **`<nav>`**
   - **Descrizione**: Definisce una sezione di navigazione contenente link di navigazione.
   - **Uso**: Racchiude i link di navigazione.
   - **Esempio**: `<nav> ... </nav>`

9. **`<ul>`**
   - **Descrizione**: Definisce una lista non ordinata (punti elenco).
   - **Uso**: Racchiude elementi di lista `<li>`.
   - **Esempio**: `<ul> ... </ul>`

10. **`<li>`**
    - **Descrizione**: Definisce un elemento di una lista.
    - **Uso**: Si trova all'interno di `<ul>` o `<ol>`.
    - **Esempio**: `<li>Elemento</li>`

11. **`<a>`**
    - **Descrizione**: Definisce un collegamento ipertestuale.
    - **Attributi**: `href` (specifica l'URL di destinazione).
    - **Uso**: Utilizzato per creare link.
    - **Esempio**: `<a href="index.html">Home</a>`

12. **`<header>`**
    - **Descrizione**: Rappresenta una sezione di intestazione per un documento o una sezione.
    - **Uso**: Tipicamente contiene titoli e altri elementi introduttivi.
    - **Esempio**: `<header> ... </header>`

13. **`<h1>`, `<h2>`**
    - **Descrizione**: Rappresentano i titoli, con `<h1>` il più importante e `<h6>` il meno importante.
    - **Uso**: Utilizzati per titoli di sezioni e sottosezioni.
    - **Esempio**: `<h1>Titolo Principale</h1>`

14. **`<main>`**
    - **Descrizione**: Definisce il contenuto principale di un documento HTML.
    - **Uso**: Racchiude il contenuto principale della pagina.
    - **Esempio**: `<main> ... </main>`

15. **`<p>`**
    - **Descrizione**: Definisce un paragrafo.
    - **Uso**: Utilizzato per blocchi di testo.
    - **Esempio**: `<p>Questo è un paragrafo.</p>`

#### Elementi CSS

1. **`body`**
   - **Descrizione**: Selettore che applica stili a tutto il corpo del documento HTML.
   - **Proprietà**: `font-family`, `margin`, `padding`, `background-color`.
   - **Uso**: Stilizza l'intero documento.
   - **Esempio**:
     ```css
     body {
         font-family: Arial, sans-serif;
         margin: 0;
         padding: 0;
         background-color: #f0f0f0;
     }
     ```

2. **`nav`**
   - **Descrizione**: Selettore per la barra di navigazione.
   - **Proprietà**: `background-color`, `color`.
   - **Uso**: Stilizza la sezione di navigazione.
   - **Esempio**:
     ```css
     nav {
         background-color: #333;
         color: #fff;
     }
     ```

3. **`ul`**
   - **Descrizione**: Selettore per le liste non ordinate.
   - **Proprietà**: `list-style-type`, `margin`, `padding`, `display`.
   - **Uso**: Rimuove i punti elenco e gestisce i margini e il padding.
   - **Esempio**:
     ```css
     nav ul {
         list-style-type: none;
         margin: 0;
         padding: 0;
         display: flex;
         justify-content: center;
     }
     ```

4. **`li`**
   - **Descrizione**: Selettore per gli elementi di lista.
   - **Proprietà**: `margin`.
   - **Uso**: Gestisce il margine tra gli elementi di lista.
   - **Esempio**:
     ```css
     nav ul li {
         margin: 0 10px;
     }
     ```

5. **`a`**
   - **Descrizione**: Selettore per i collegamenti ipertestuali.
   - **Proprietà**: `color`, `text-decoration`, `padding`, `display`.
   - **Uso**: Stilizza i link di navigazione.
   - **Esempio**:
     ```css
     nav ul li a {
         color: #fff;
         text-decoration: none;
         padding: 10px 20px;
         display: block;
     }

     nav ul li a:hover {
         background-color: #555;
     }
     ```

6. **`header`**
   - **Descrizione**: Selettore per la sezione di intestazione.
   - **Proprietà**: `background-color`, `color`, `text-align`, `padding`.
   - **Uso**: Stilizza l'intestazione della pagina.
   - **Esempio**:
     ```css
     header {
         background-color: #444;
         color: #fff;
         text-align: center;
         padding: 20px;
     }
     ```

7. **`main`**
   - **Descrizione**: Selettore per il contenuto principale.
   - **Proprietà**: `padding`, `text-align`.
   - **Uso**: Stilizza la sezione principale del contenuto.
   - **Esempio**:
     ```css
     main {
         padding: 20px;
         text-align: center;
     }
     ```

8. **`h1, h2`**
   - **Descrizione**: Selettori per i titoli.
   - **Proprietà**: `color`.
   - **Uso**: Stilizza i titoli delle sezioni.
   - **Esempio**:
     ```css
     h1, h2 {
         color: #333;
     }
     ```

Questa documentazione fornisce una panoramica dei tag HTML e delle proprietà CSS utilizzate negli esempi. Può essere utilizzata come riferimento rapido per comprendere l'uso e la stilizzazione degli elementi HTML e CSS.