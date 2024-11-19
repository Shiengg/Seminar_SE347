document.addEventListener('DOMContentLoaded', function() {
    const wishButton = document.getElementById('wishButton');
    const wishModal = document.getElementById('wishModal');
    const closeModal = document.getElementById('closeModal');
    const wishMessage = document.getElementById('wishMessage');
    const fireworksContainer = document.getElementById('fireworks-container');
    const roseContainer = document.getElementById('rose-container');
    
    const messages = [
        "Cảm ơn cô đã luôn tận tâm dạy dỗ chúng em!, Chúc mừng ngày Nhà giáo Việt Nam 20/11! Kính chúc cô luôn mạnh khỏe và hạnh phúc!",
    ];

    const teacherImages = [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher1',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher2',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher3',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher4'
    ];

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        
        firework.style.left = `${startX}px`;
        firework.style.top = `${startY}px`;
        firework.style.setProperty('--dx', `${dx}px`);
        firework.style.setProperty('--dy', `${dy}px`);
        
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    function createRose() {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        
        const startX = Math.random() * window.innerWidth;
        rose.style.left = `${startX}px`;
        
        roseContainer.appendChild(rose);
        
        setTimeout(() => {
            rose.remove();
        }, 10000);
    }

    let fireworkInterval;

    // Xử lý modal
    wishButton.addEventListener('click', function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        wishMessage.textContent = randomMessage;
        wishModal.classList.remove('hidden');
        wishModal.classList.add('show');
        
        // Tăng tốc độ pháo hoa khi mở modal
        if (fireworkInterval) clearInterval(fireworkInterval);
        fireworkInterval = setInterval(() => {
            for (let i = 0; i < 3; i++) {
                createFirework();
            }
        }, 300);
    });

    function closeModalHandler() {
        wishModal.classList.remove('show');
        wishModal.classList.add('hidden');
        if (fireworkInterval) {
            clearInterval(fireworkInterval);
        }
    }

    closeModal.addEventListener('click', closeModalHandler);

    // Đóng modal khi click bên ngoài
    wishModal.addEventListener('click', function(e) {
        if (e.target === wishModal) {
            closeModalHandler();
        }
    });

    // Đóng modal khi nhấn ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && wishModal.classList.contains('show')) {
            closeModalHandler();
        }
    });

    // Tạo gallery giáo viên
    const teacherGallery = document.getElementById('teacher-gallery');
    teacherImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Teacher Avatar';
        img.classList.add('w-24', 'h-24', 'rounded-full', 'object-cover', 'transform', 'hover:scale-110', 'transition', 'duration-300', 'mx-auto');
        teacherGallery.appendChild(img);
    });

    // Background effects
    setInterval(createFirework, 2000);
    setInterval(createRose, 3000);
});