function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  button.addEventListener('click', () => {
    let elem = document.getElementById('text');
    return (elem.hidden) ? elem.hidden = !elem.hidden : elem.hidden = true; 
});
}
