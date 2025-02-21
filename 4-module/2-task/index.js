function makeDiagonalRed(table) {
  let elem;
  for (let i = 0; table.rows[i]; i++) {
    elem = table.rows[i].cells[i];
    elem.style.background = 'red';
  }
}
