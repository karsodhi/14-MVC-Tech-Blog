async function newFormHandler(event) {
  event.preventDefault();
  const name = document.querySelector('#blog_name').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (name && description){
    const response = await fetch (`/api/blogs`,{
      method: 'POST',
      body: JSON.stringify({
        name, description
      }),
      headers:{
        'Content-Type': 'application/json',
      },

    });
    if (response.ok){
      document.location.replace("/profile")
    } else {
      alert ("you failed to create your blog")
    }
  }
};
// another function to delete blog 

document
.querySelector('.new-blog-form')
.addEventListener('submit', newFormHandler);

document.querySelector('blogLists')
.addEventListener('click', )