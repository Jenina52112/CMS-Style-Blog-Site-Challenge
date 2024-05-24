document.getElementById('new-post').addEventListener('click', () => {
  document.getElementById('post-form').style.display = 'block';
  document.querySelector('[name="title"]').value = '';
  document.querySelector('[name="content"]').value = '';
  document.getElementById('delete-post').style.display = 'none'; // Hide delete button for new posts
  document.getElementById('back-btn').style.display = 'none'; // Hide back button for new posts
  document.getElementById('posts').style.display = 'none'; // Hide posts list
});

document.querySelectorAll('.post-title').forEach(link => {
  link.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default link behavior
    const id = event.target.closest('a').getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`);
    const post = await response.json();

    document.getElementById('post-form').style.display = 'block';
    document.querySelector('[name="title"]').value = post.title;
    document.querySelector('[name="content"]').value = post.content;
    document.getElementById('delete-post').style.display = 'block'; // Show delete button for existing posts
    document.getElementById('back-btn').style.display = 'inline-block'; // Show back button for existing posts
    document.getElementById('posts').style.display = 'none'; // Hide posts list

    document.getElementById('post-form').onsubmit = async (event) => {
      event.preventDefault();
      const title = document.querySelector('[name="title"]').value.trim();
      const content = document.querySelector('[name="content"]').value.trim();
      if (title && content) {
        await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
        document.location.reload();
      }
    };

    document.getElementById('delete-post').onclick = async () => {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      document.location.reload();
    };

    document.getElementById('back-btn').onclick = () => {
      document.getElementById('post-form').style.display = 'none';
      document.getElementById('posts').style.display = 'block';
    };
  });
});
