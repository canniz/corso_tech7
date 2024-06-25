
# Cheatsheet CSS

## Pseudo-Classi
Pseudo-classi definiscono lo stato speciale di un elemento. Esempi:
- `:hover`: quando il mouse passa sopra un elemento.
- `:active`: quando un elemento è cliccato.
- `:focus`: quando un elemento è in focus (es. un input).
- `:nth-child(n)`: seleziona il n-esimo figlio.
- `:first-child` / `:last-child`: seleziona il primo/ultimo figlio.
- `:not(selettore)`: seleziona elementi che non corrispondono al selettore.

## Animazioni (Transizioni e Keyframes)
Permettono di animare le proprietà CSS.

### Transizioni
Permettono il cambiamento graduale di una proprietà.

```css
.elemento {
  transition: proprietà durata funzione-tempo ritardo;
  /* Esempio */
  transition: all 0.3s ease-in-out;
}
```

### Keyframes
Definiscono i passaggi intermedi di un'animazione.

```css
@keyframes esempio {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.elemento {
  animation: esempio 2s infinite;
}
```

## Transform (Ruotare, Scalare, Traslare)
Applica trasformazioni 2D o 3D a un elemento.

- `rotate(angolo)`: Ruota un elemento di un angolo specificato.
  ```css
  transform: rotate(45deg);
  ```
- `scale(x, y)`: Scala un elemento. 1 è la dimensione originale.
  ```css
  transform: scale(1.5, 1.5);
  ```
- `translate(x, y)`: Trasla un elemento dalla sua posizione corrente.
  ```css
  transform: translate(50px, 100px);
  ```

## Display Flex
Flexbox permette layout flessibili e reattivi.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
```

- `display: flex`: Attiva Flexbox.
- `flex-wrap: wrap`: Gli elementi si dispongono su più righe.
- `gap`: Spaziatura tra gli elementi.
- `justify-content`: Allinea gli elementi lungo l'asse principale.

## Object-Fit
Specifica come ridimensionare un'immagine o video per adattarsi al contenitore.

- `fill`: Riempie il contenitore.
- `contain`: Adatta mantenendo il rapporto d'aspetto.
- `cover`: Riempie mantenendo il rapporto d'aspetto.
- `none`: Nessun ridimensionamento.
- `scale-down`: Scala a contain o none, il più piccolo.

```css
img {
  object-fit: cover;
}
```

## Pseudo Elementi
Stilizza parti specifiche di un elemento.

- `::before`: Inserisce contenuto prima del contenuto dell'elemento.
- `::after`: Inserisce contenuto dopo il contenuto dell'elemento.
- `::first-line`: Stilizza la prima riga di un elemento a blocco.
- `::first-letter`: Stilizza la prima lettera di un elemento a blocco.

```css
.elemento::before {
  content: "Prefisso";
}
```

## Z-Index
Specifica l'ordine di impilamento di un elemento. Gli elementi con un `z-index` più alto sono davanti a quelli con un `z-index` più basso.

```css
.elemento {
  z-index: 10;
}
```

## Overflow
Specifica come gestire il contenuto che eccede le dimensioni di un elemento.

- `visible`: Default. Il contenuto trabocca fuori dal box.
- `hidden`: Il contenuto traboccante è nascosto.
- `scroll`: Il contenuto traboccante è scrollabile.
- `auto`: Scrollbar aggiunti solo se necessario.

```css
.container {
  overflow: auto;
}
```

## Variabili CSS
Permettono di memorizzare valori da riutilizzare nel documento.

```css
:root {
  --primary-color: #3498db;
  --padding: 10px;
}

.elemento {
  color: var(--primary-color);
  padding: var(--padding);
}
```

Questi concetti sono essenziali per creare pagine web dinamiche, reattive e visivamente accattivanti.
