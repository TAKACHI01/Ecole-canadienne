// JavaScript for search bar functionality

const searchBar = document.getElementById('search-bar');
const courseCards = document.querySelectorAll('.course-card');

// Function to filter courses based on search input
searchBar.addEventListener('input', function() {
    const searchQuery = searchBar.value.toLowerCase();

    courseCards.forEach(card => {
        const courseName = card.dataset.course.toLowerCase();
        const courseDescription = card.querySelector('p').textContent.toLowerCase();

        // Show matching cards and hide non-matching ones
        if (courseName.includes(searchQuery) || courseDescription.includes(searchQuery)) {
            card.style.display = 'block';
            card.classList.add('highlight');
        } else {
            card.style.display = 'none';
            card.classList.remove('highlight');
        }
    });
});
