
# CSS Grid Layout Cheatsheet

## Basic Concepts

### Grid Container
Defines the element as a grid container and establishes a new grid formatting context.
```css
.container {
  display: grid; /* or inline-grid */
}
```

### Grid Items
Children of the grid container automatically become grid items.

## Grid Properties

### Grid Container Properties

#### Grid Template Columns
Defines the columns of the grid with a space-separated list of values. 
```css
.container {
  grid-template-columns: 100px 200px 100px; /* Fixed widths */
  grid-template-columns: 1fr 2fr 1fr; /* Fractional units */
  grid-template-columns: repeat(3, 1fr); /* Repeat function */
}
```

#### Grid Template Rows
Defines the rows of the grid with a space-separated list of values.
```css
.container {
  grid-template-rows: 100px 200px; /* Fixed heights */
  grid-template-rows: 1fr 2fr; /* Fractional units */
  grid-template-rows: repeat(2, 1fr); /* Repeat function */
}
```

#### Grid Template Areas
Defines named grid areas for layout purposes.
```css
.container {
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

#### Grid Gap (or Column Gap / Row Gap)
Specifies the gap between rows and columns.
```css
.container {
  grid-gap: 10px; /* Gap between rows and columns */
  column-gap: 10px; /* Gap between columns */
  row-gap: 10px; /* Gap between rows */
}
```

### Grid Item Properties

#### Grid Column Start / End
Specifies where to start and end the grid item.
```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}
```
or shorthand:
```css
.item {
  grid-column: 1 / 3;
}
```

#### Grid Row Start / End
Specifies where to start and end the grid item.
```css
.item {
  grid-row-start: 1;
  grid-row-end: 3;
}
```
or shorthand:
```css
.item {
  grid-row: 1 / 3;
}
```

#### Grid Area
Assigns a grid item to a named grid area.
```css
.item {
  grid-area: header;
}
```

### Shorthand for Grid Item Placement
Specifies both row and column placement in one declaration.
```css
.item {
  grid-area: 1 / 2 / 3 / 4; /* grid-row-start / grid-column-start / grid-row-end / grid-column-end */
}
```

## Advanced Concepts

### Aligning Items
Align items within their grid areas.

#### Justify Items
Aligns grid items along the row (inline) axis.
```css
.container {
  justify-items: start; /* start, end, center, stretch */
}
```

#### Align Items
Aligns grid items along the column (block) axis.
```css
.container {
  align-items: start; /* start, end, center, stretch */
}
```

#### Justify Content
Aligns the grid within the grid container along the row axis.
```css
.container {
  justify-content: start; /* start, end, center, stretch, space-around, space-between, space-evenly */
}
```

#### Align Content
Aligns the grid within the grid container along the column axis.
```css
.container {
  align-content: start; /* start, end, center, stretch, space-around, space-between, space-evenly */
}
```

### Grid Auto Rows / Columns
Defines the size of implicitly created grid tracks.
```css
.container {
  grid-auto-rows: 100px; /* Height of implicit rows */
  grid-auto-columns: 100px; /* Width of implicit columns */
}
```

### Grid Auto Flow
Controls the placement of items not explicitly placed.
```css
.container {
  grid-auto-flow: row; /* row, column, dense */
}
```

## Example Usage

### Basic Grid
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 10px;
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
```

### Complex Layout
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 10px;
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

This cheatsheet should provide a quick reference to the most important concepts and properties in CSS Grid Layout.
