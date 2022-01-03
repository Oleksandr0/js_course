// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let post = localStorage.getItem('post');
let postId = JSON.parse(post);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(value => {
        let postWrap = document.createElement('div');
        postWrap.classList.add('postWrap');
        for (const item in value) {
            let post = document.createElement('div');
            post.innerHTML = `<b>${item}</b>: ${value[item]}`;
            postWrap.appendChild(post);
        }
        document.body.appendChild(postWrap);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(value => {
                let commentWrap = document.createElement('div');
                commentWrap.style.display = 'grid';
                commentWrap.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
                for (const element of value) {
                    let wrapper = document.createElement('div');
                    wrapper.classList.add('wrapper1');
                    for (const item in element) {
                        let comment = document.createElement('div');
                        comment.innerHTML = `<b>${item}</b>: ${element[item]}`;
                        wrapper.appendChild(comment);
                        commentWrap.append(wrapper);
                    }
                }
                document.body.appendChild(commentWrap);
            })
    })