
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (value)=> {return value.json()})
    .then((posts)=> {
        let postsBox=document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let divPost=document.createElement('div');
            divPost.innerText = `${post.id} - ${post.title}`;
            let detailsBtn=document.createElement('Button');
            detailsBtn.innerText='details';
            detailsBtn.onclick = function (){
                console.log('print post', post.id);
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments/`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value);
                    })
            }
            divPost.appendChild(detailsBtn)
            postsBox.append(divPost);
        }
    });