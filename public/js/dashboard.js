document.getElementById('post-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.querySelector('[name="title"]').value.trim();
    const content = document.querySelector('[name="content"]').value.trim();
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.getElementById('post-form').reset(); // Clear form
        document.getElementById('post-form').style.display = 'none'; // Hide form
        document.location.reload(); // Reload the page to show the new post
      } else {
        alert('Failed to create new post.');
      }
    } else {
      alert('Please enter both title and content.');
    }
  });
  