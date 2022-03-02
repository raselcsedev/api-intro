function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> displayPosts(data))
}
loadPost();
function displayPosts(posts){
    // console.log(posts);
    const displayPost = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`
        <h2> ${post.title}</h2>
        <p> ${post.body}</p>
        `;
        displayPost.appendChild(div);
    }
}


