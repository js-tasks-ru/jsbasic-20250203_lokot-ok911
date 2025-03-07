/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  elem = null;
  #rows = [];

  constructor(rows) {
    this.#rows = rows || this.#rows;
    this.elem = this.#renderTable();
    this.#onButtonClick();
  }

  #renderTable() {
    const table = document.createElement('table');
    table.innerHTML =  `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody data-name="Container">
      ${this.#rows
        .map(e => `<tr class="close">${Object.values(e).map(el => `<td>${el}</td>`)
        .join('\n') + `<td><button class="remove">X</button></td>`}</tr>`)
        .join('\n')}
    </tbody>`;
    return table;
  }

  #onButtonClick() {
    this.elem.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove')) {
        event.target.closest('tr').remove();
      };
    });
  };
}
