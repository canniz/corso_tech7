
# Flexbox Cheatsheet

## Contenitore Flex

### `display`
- `flex`: Trasforma un elemento in un contenitore flessibile.

### `flex-direction`
- `row`: Dispone gli elementi in una riga.
- `row-reverse`: Dispone gli elementi in una riga inversa.
- `column`: Dispone gli elementi in una colonna.
- `column-reverse`: Dispone gli elementi in una colonna inversa.

### `flex-wrap`
- `nowrap`: Non va a capo, elementi su una sola riga.
- `wrap`: Va a capo se necessario.
- `wrap-reverse`: Va a capo in ordine inverso.

### `justify-content`
- `flex-start`: Allinea gli elementi all'inizio.
- `flex-end`: Allinea gli elementi alla fine.
- `center`: Centra gli elementi.
- `space-between`: Spazio distribuito tra gli elementi.
- `space-around`: Spazio distribuito attorno agli elementi.

### `align-items`
- `stretch`: Estende gli elementi per riempire il contenitore.
- `flex-start`: Allinea gli elementi all'inizio dell'asse trasversale.
- `flex-end`: Allinea gli elementi alla fine dell'asse trasversale.
- `center`: Centra gli elementi lungo l'asse trasversale.
- `baseline`: Allinea gli elementi lungo la linea di base.

### `align-content`
- `stretch`: Estende le righe per riempire lo spazio.
- `flex-start`: Allinea le righe all'inizio.
- `flex-end`: Allinea le righe alla fine.
- `center`: Centra le righe.
- `space-between`: Spazio distribuito tra le righe.
- `space-around`: Spazio distribuito attorno alle righe.

### `gap (non ancora visto)`
- `gap: 10px`: Definisce lo spazio tra gli elementi flessibili.

## Elementi Flex

### `order`
- `order: 2`: Cambia l'ordine di visualizzazione degli elementi.

### `flex-grow (non ancora visto)`
- `flex-grow: 1`: Consente all'elemento di crescere.

### `flex-shrink (non ancora visto)`
- `flex-shrink: 1`: Consente all'elemento di ridursi.

### `flex-basis (non ancora visto)`
- `flex-basis: 100px`: Definisce la dimensione iniziale dell'elemento.

### `flex`
- `flex: 1 1 100px`: Shorthand per `flex-grow`, `flex-shrink` e `flex-basis`.

### `align-self`
- `align-self: flex-end`: Sovrascrive l'allineamento per un singolo elemento.

