
  function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  function loadUsers(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(data => displayUsers(data))
  }
  function displayUsers(data){
    const ul =  document.getElementById('ul');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText= `Name : ${user.name}  Email : ${user.email}`;
        ul.appendChild(li);
    }

  }
