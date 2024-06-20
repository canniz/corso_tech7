
# Cheatsheet per `position` in CSS

## Proprietà `position`

### `position: static`
- Default per tutti gli elementi.
- L'elemento è posizionato secondo il normale flusso del documento.
- Non sono applicabili `top`, `right`, `bottom`, `left` o `z-index`.

### `position: relative`
- Posiziona l'elemento rispetto alla sua posizione originale.
- Utilizza le proprietà `top`, `right`, `bottom`, `left` per spostare l'elemento.
- L'elemento rimane nel flusso del documento.

```css
.relative-box {
    position: relative;
    top: 10px;
    left: 20px;
}
```

### `position: absolute`
- Posiziona l'elemento rispetto al suo primo antenato posizionato (diverso da `static`).
- Utilizza le proprietà `top`, `right`, `bottom`, `left` per spostare l'elemento.
- L'elemento è rimosso dal flusso del documento.

```css
.absolute-box {
    position: absolute;
    top: 10px;
    left: 20px;
}
```

### `position: fixed`
- Posiziona l'elemento rispetto alla finestra del browser.
- Utilizza le proprietà `top`, `right`, `bottom`, `left` per spostare l'elemento.
- L'elemento è rimosso dal flusso del documento.
- Rimane fisso durante lo scrolling.

```css
.fixed-box {
    position: fixed;
    top: 0;
    right: 0;
}
```

### `position: sticky (non visto a lezione)`
- Posiziona l'elemento basato sul normale flusso del documento, poi lo rende "appiccicoso" rispetto alla posizione di scrolling del contenitore.
- Utilizza le proprietà `top`, `right`, `bottom`, `left` per definire quando l'elemento deve diventare sticky.

```css
.sticky-box {
    position: sticky;
    top: 0;
}
```

## Proprietà associate

### `top`, `right`, `bottom`, `left`
- Definiscono l'offset dell'elemento rispetto al contenitore posizionato o alla finestra del browser.
- Applicabili solo quando `position` è impostato su `relative`, `absolute`, `fixed` o `sticky`.

```css
.box {
    position: absolute;
    top: 10px;
    right: 20px;
}
```

### `z-index`
- Controlla l'ordine di sovrapposizione degli elementi posizionati.
- Gli elementi con un `z-index` più alto si sovrappongono agli elementi con un `z-index` più basso.

```css
.box {
    position: absolute;
    z-index: 10;
}
```
