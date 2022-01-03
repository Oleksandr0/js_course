let user = localStorage.getItem('user');
let userId = JSON.parse(user);
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(value => {
        let userWrap = document.createElement('div');
        userWrap.classList.add('userWrap1')
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        for (const userKey in value) {
            if (typeof value[userKey] !== 'object') {
                let element = document.createElement('div');
                element.innerText = `${userKey}: ${value[userKey]}`;
                userWrap.appendChild(element);
            } else {
                let wrapper = document.createElement('div');
                for (const itemKey in value[userKey]) {
                    if (typeof value[userKey][itemKey] !== 'object') {
                        let item = document.createElement('div');
                        item.innerText = `${itemKey}: ${value[userKey][itemKey]}`;
                        wrapper.appendChild(item);
                        userWrap.appendChild(wrapper);
                    } else {
                        let wrapper2 = document.createElement('div');
                        for (const key in value[userKey][itemKey]) {
                            let part = document.createElement('div');
                            part.innerText = `${key}: ${value[userKey][itemKey][key]}`;
                            wrapper2.appendChild(part);
                            wrapper.appendChild(wrapper2);
                        }
                    }
                }
            }
            document.body.appendChild(userWrap);
        }
        let button = document.createElement('button');
        button.innerText = 'Post of current user';
        button.style.marginTop = '20px';
        button.style.width = '90%';
        userWrap.appendChild(button);
        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(value => value.json())
                .then(value => {
                    let heading = document.createElement('h2');
                    heading.innerText = 'User posts:';
                    userWrap.append(heading);
                    let postWrap = document.createElement('div');
                    postWrap.style.display = 'grid';
                    postWrap.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr'
                    for (const element of value) {
                        let wrapper = document.createElement('div');
                        wrapper.classList.add('wrapper')
                        let post = document.createElement('h3');
                        post.innerText = `Title: ${element.title}`;
                        let comments = document.createElement('a');
                        comments.href = 'post-details.html';
                        comments.innerText = 'Get details of post';
                        comments.style.textDecoration = 'none';
                        comments.style.color = 'black';
                        wrapper.append(post, comments)
                        postWrap.append(wrapper);
                        userWrap.append(postWrap);
                        comments.onclick = function () {
                            console.log(`${element.id}`)
                            localStorage.setItem('post', `${element.id}`);
                        }
                    }

                })
        }

    })