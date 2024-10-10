document.addEventListener('DOMContentLoaded', async () => {
  const manhwaListSection = document.getElementById('manhwa-list');

  try {
    // Fetch the manhwa data from the server
    const response = await fetch('/api/manhwa');
    const manhwaList = await response.json();

    // Loop through the manhwa data and create HTML for each item
    manhwaList.forEach(manhwa => {
      const manhwaItem = document.createElement('div');
      manhwaItem.classList.add('manhwa-item');

      manhwaItem.innerHTML = `
        <img src="${manhwa.imageUrl}" alt="${manhwa.title}">
        <h3>${manhwa.title}</h3>
        <p><strong>Genre:</strong> ${manhwa.genre}</p>
        <p>${manhwa.description}</p>
      `;

      // Add the manhwa item to the list
      manhwaListSection.appendChild(manhwaItem);
    });
  } catch (error) {
    console.error('Error fetching manhwa data:', error);
  }
});
