//Query selectors
const toggleButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

//Check notification
function markRead(button) {
    const card = button.closest(".notification-card");

    if (!card || card.dataset.status === "read") {
        return;
    }

    card.dataset.status = "read";
    card.classList.add("is-read");
    button.textContent = "Read";
    button.disabled = true;

    updateNotificationCount();
}

function updateNotificationCount() {
    const unreadCards = document.querySelectorAll(
        '.notification-card[data-status="unread"]'
    );

    const count = unreadCards.length;
    const countLabel = document.getElementById("notificationCount");

    if (countLabel) {
        countLabel.textContent = count === 1
            ? "1 new"
            : `${count} new`;
    }
}

updateNotificationCount();
