function toggleCollapse(el) {
  $(el).next().collapse('toggle');
}

document.getElementById('get_btn').addEventListener('click', async function(e) {
  e.preventDefault()
  const num = document.getElementById('number').value;
  let output = '<h2>Users</h2>'
  for (let i = 1; i <= num; i++) {
    let req = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
    let post = await req.json()
    output += `
      <h5>${post.title}</h5>
      <p>${post.body}</p>
      <h6>Comments</h6>`
    
    let req2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)
    let comments = await req2.json()
    comments.forEach(comment => {
      output += `<small class="mb-2">${comment.email}</small>`
    });
    }
  document.getElementById('container').innerHTML = output;
})