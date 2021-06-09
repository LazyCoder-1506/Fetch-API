function toggleCollapse(el) {
  $(el).next().collapse('toggle');
}

document.getElementById('get_btn').addEventListener('click', function(e) {
  e.preventDefault()
  const num = document.getElementById('number').value;
  let output = '<h2>Users</h2>'
  for (let i = 1; i <= num; i++) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then(post_response => post_response.json())
    .then(post => {
      console.log(post.title)
      output += `
      <div class="row mx-0 mb-5">
        <div class="col-12">
          <h5>${post.title}</h5>
          <p class="mb-0">${post.body}</p>
          <a role="button" class="view_comments mb-2" onclick="toggleCollapse(this)">View Comments</a>
          <div class="collapse fade px-4">
            <p class="mb-0">Comment Name</p>
            <p class="mb-1 text-secondary">Email</p>
            <p><small>Comment Body</small></p>
          </div>
        </div>
      </div>`;
      document.getElementById('container').innerHTML = output;
    })
  }
  // document.getElementById('container').innerHTML = output;
})