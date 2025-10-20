const filterButtons = document.querySelectorAll('.navigation div button');
const extensionCards = document.querySelectorAll('.extension-card');
const toggleSwitches = document.querySelectorAll('.switch input');

function filterExtensions() {
    const activeFilter = document.querySelector('.navigation div button.active').textContent.toLowerCase();
    
    extensionCards.forEach(card => {
        const isActive = card.querySelector('.switch input').checked;
        
        if (activeFilter === 'all') {
            card.style.display = 'flex';
        } else if (activeFilter === 'active' && isActive) {
            card.style.display = 'flex';
        } else if (activeFilter === 'inactive' && !isActive) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterExtensions();
    });
});

toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', filterExtensions);
});