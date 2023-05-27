const commentHandler = async (e) => {
  e.preventDefault();
  const commentText = document.querySelector("#comment-description").value.trim()
  if (commentText === true) {
    const res = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ commentText }),
      headers: {
        "Content-Type":"application/json",
      },
    });

    if (res.ok){
      document.location.replace("/")
    } else {
      alert ("failed to create a comment")
    }
  }
}

document
  .querySelector("#newCommentForm")
  .addEventListener("submit",commentHandler)