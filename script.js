//Query selectors
const toggleButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});