const productsList = document.querySelector('.products');
const keys = Object.keys(localStorage);

keys.forEach(key => {
    const comments = JSON.parse(localStorage.getItem(key));
    const liEl = document.createElement('li');
    liEl.textContent = key;
    productsList.appendChild(liEl);

    for (const comment of comments) {
        const containerEl = document.createElement('div');
        const commentEl = document.createElement('p');
        commentEl.textContent = comment;
        const btnEl = document.createElement('button');
        btnEl.textContent = 'Delete';
        liEl.appendChild(containerEl)
        containerEl.appendChild(commentEl);
        containerEl.appendChild(btnEl);
        containerEl.style.display = 'none';
        liEl.addEventListener('click', () => {
            containerEl.style.display = 'block';
            btnEl.addEventListener('click', () => {
                comments.splice(comments.indexOf(comment), 1);
                if (comments.length > 0) {
                    localStorage.setItem(key, JSON.stringify(comments))
                } else {
                    localStorage.removeItem(key);
                }
                containerEl.remove();
            })
        })

    }
});
