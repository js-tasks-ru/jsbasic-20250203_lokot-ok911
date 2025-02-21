function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  const saved = document.querySelector('body');
  saved.append(ul);
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.textContent = friends[i].firstName + ' ' + friends[i].lastName;
    const savedli = document.querySelector('ul');
    savedli.append(li);
  }
  return ul;
}
