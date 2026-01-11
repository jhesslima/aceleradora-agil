document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearButton = document.getElementById('clear-button');
    const resultsContainer = document.getElementById('results');
    let debounceTimer;

    displayPhotos(photosDatabase);

    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = searchInput.value.toLowerCase().trim();
            if (query) {
                searchPhotos(query);
            } else {
                displayPhotos(photosDatabase);
            }
        }, 300);
    });

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            searchPhotos(query);
        } else {
            displayPhotos(photosDatabase);
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            if (query) {
                searchPhotos(query);
            } else {
                displayPhotos(photosDatabase);
            }
        }
    });

    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        displayPhotos(photosDatabase);
        searchInput.focus();
    });

    function searchPhotos(query) {
        const results = photosDatabase.filter(photo => 
            photo.title.toLowerCase().includes(query)
        );
        displayPhotos(results);
    }

    function displayPhotos(photos) {
        resultsContainer.innerHTML = '';
        if (photos.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">Nenhuma foto encontrada.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        
        photos.forEach(photo => {
            const photoCard = document.createElement('div');
            photoCard.className = 'photo-card';
            
            const imgElement = document.createElement('img');
            imgElement.src = photo.url;
            imgElement.alt = photo.title;
            imgElement.loading = 'lazy';
            
            const titleElement = document.createElement('h3');
            titleElement.textContent = photo.title;
            
            photoCard.appendChild(imgElement);
            photoCard.appendChild(titleElement);
            fragment.appendChild(photoCard);
        });
        
        resultsContainer.appendChild(fragment);
    }
});