
# Lezione su `display: flex` in CSS

## Introduzione a `display: flex`

Il modulo Flexbox (Flexible Box) di CSS3 è stato progettato per disporre e allineare elementi all'interno di un contenitore in modo più efficiente rispetto ai metodi tradizionali. L'idea principale dietro Flexbox è quella di fornire un layout più flessibile e prevedibile per gli elementi contenuti in un box.

Quando si applica `display: flex` a un contenitore, questo diventa un "contenitore flessibile" (flex container) e i suoi elementi figli diventano "elementi flessibili" (flex items). Questo sistema di layout consente una maggiore capacità di adattamento e posizionamento degli elementi all'interno di un contenitore, sia orizzontalmente che verticalmente.

## Proprietà principali di `display: flex`

### 1. `display: flex`
Questa proprietà viene applicata al *contenitore* per renderlo un contenitore flessibile. 

```css
.container {
    display: flex;
}
```

### 2. `flex-direction`
Definisce la direzione principale degli elementi flessibili. Le opzioni sono:
- `row` (default): gli elementi vengono disposti in una riga.
- `row-reverse`: gli elementi vengono disposti in una riga ma in ordine inverso.
- `column`: gli elementi vengono disposti in una colonna.
- `column-reverse`: gli elementi vengono disposti in una colonna ma in ordine inverso.

```css
.container {
    flex-direction: row;
}
```

### 3. `flex-wrap (non fondamentale di base)`
Determina se gli elementi flessibili devono andare a capo o meno quando non c'è spazio sufficiente. Le opzioni sono:
- `nowrap` (default): tutti gli elementi sono posizionati su una singola riga o colonna.
- `wrap`: gli elementi vanno a capo se non c'è spazio sufficiente.
- `wrap-reverse`: gli elementi vanno a capo ma l'ordine delle righe è invertito.

```css
.container {
    flex-wrap: wrap;
}
```

### 4. `justify-content`
Allinea gli elementi lungo l'asse principale (orizzontale per default). Le opzioni includono:
- `flex-start` (default): allinea gli elementi all'inizio.
- `flex-end`: allinea gli elementi alla fine.
- `center`: centra gli elementi.
- `space-between`: distribuisce lo spazio rimanente tra gli elementi.
- `space-around`: distribuisce lo spazio rimanente attorno agli elementi con spazi uguali.

```css
.container {
    justify-content: center;
}
```

### 5. `align-items`
Allinea gli elementi lungo l'asse trasversale (verticale per default). Le opzioni sono:
- `stretch` (default): estende gli elementi per riempire il contenitore.
- `flex-start`: allinea gli elementi all'inizio dell'asse trasversale.
- `flex-end`: allinea gli elementi alla fine dell'asse trasversale.
- `center`: centra gli elementi lungo l'asse trasversale.
- `baseline`: allinea gli elementi lungo la linea di base del loro contenuto.

```css
.container {
    align-items: center;
}
```

### 6. `align-content (non fondamentale di base)`
Allinea le righe del contenitore quando c'è spazio extra lungo l'asse trasversale (in altre parole definisce lo spazio tra le righe). Le opzioni sono:
- `stretch` (default): estende le righe per riempire lo spazio.
- `flex-start`: allinea le righe all'inizio.
- `flex-end`: allinea le righe alla fine.
- `center`: centra le righe.
- `space-between`: distribuisce lo spazio tra le righe.
- `space-around`: distribuisce lo spazio attorno alle righe con spazi uguali.

```css
.container {
    align-content: space-between;
}
```

### 7. `flex-grow`
Determina la capacità di un elemento flessibile di crescere in relazione agli altri elementi flessibili all'interno dello stesso contenitore.

```css
.item {
    flex-grow: 1;
}
```

### 8. `flex-shrink`
Determina la capacità di un elemento flessibile di ridursi in relazione agli altri elementi flessibili all'interno dello stesso contenitore.

```css
.item {
    flex-shrink: 1;
}
```

### 10. `align-self (non fondamentale di base)`
Permette di sovrascrivere l'allineamento specificato da `align-items` per un singolo elemento.

```css
.item {
    align-self: flex-end;
}
```

## Altre Proprietà Utilizzate con Flexbox

### 11. `order`
Specifica l'ordine in cui gli elementi flessibili appaiono all'interno del contenitore, indipendentemente dall'ordine del codice HTML.

```css
.item {
    order: 2;
}
```

Utilizzando Flexbox, si può creare layout complessi in modo più semplice e mantenere un design reattivo che si adatta a diverse dimensioni dello schermo.
