
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (value)=> {return value.json()})
    .then((posts)=> {
        let postsBox=document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let divPost=document.createElement('div');
            divPost.innerText = `${post.id} - ${post.title}`;

            postsBox.append(divPost);
        }
    });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let commentsBox=document.getElementsByClassName('comments-box')[0];
        for (const comment of comments) {
            let divComments=document.createElement('div');
            divComments.innerText= `${comment.id} - ${comment.name}`

            commentsBox.append(divComments);
        }
    });