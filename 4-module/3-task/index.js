function highlight(table) {
    const ageList = table.querySelectorAll('table td:nth-child(2)');
    for (let age of ageList) {
        if(age.innerHTML < 18) {
            age.parentNode.style.textDecoration = 'line-through';
        }
    }
    const genderList = table.querySelectorAll('table td:nth-child(3)');
    for (let gender of genderList) {
        if(gender.innerHTML === 'm') {
            gender.parentNode.classList.add('male');
        } else if (gender.innerHTML === 'f') {
            gender.parentNode.classList.add('female');
        }
    }
    const statusList = table.querySelectorAll('table td:nth-child(4)');
    for (let status of statusList) {
        if(status.getAttribute('data-available') =='true') {
            status.parentNode.classList.add('available');
        }
        if(status.getAttribute('data-available') =='false') {
            status.parentNode.classList.add('unavailable');
        }
        if(!status.hasAttribute('data-available') && status.innerHTML != 'Status') {
            status.parentNode.setAttribute('hidden', true);
        }
    }
}

