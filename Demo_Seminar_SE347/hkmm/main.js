document.addEventListener('DOMContentLoaded', function() {
    const wishButton = document.getElementById('wishButton');
    const fireworksContainer = document.getElementById('fireworks-container');
    const roseContainer = document.getElementById('rose-container');
    const teacherGallery = document.getElementById('teacher-gallery');
    
    const messages = [
        "Kính chúc cô ngày 20/11 luôn mạnh khoẻ và hạnh phúc",
    
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

    // Hiệu ứng pháo hoa và hoa hồng
    setInterval(createFirework, 1000);
    setInterval(createRose, 2000);

    // Tạo gallery giáo viên
    teacherImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Teacher Avatar';
        img.classList.add('w-24', 'h-24', 'rounded-full', 'object-cover', 'transform', 'hover:scale-110', 'transition', 'duration-300');
        teacherGallery.appendChild(img);
    });

    wishButton.addEventListener('click', function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const teacherMemories = [
        {
            year: 1990,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher1',
            description: 'Cô Linh - Giáo viên Toán đầy nhiệt huyết'
        },
        {
            year: 2000,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher2', 
            description: 'Thầy Minh - Người thắp sáng đam mê khoa học'
        },
        {
            year: 2010,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher3',
            description: 'Cô Hương - Tấm gương sáng về sự tận tâm'
        },
        {
            year: 2020,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher4',
            description: 'Thầy Tuấn - Nhà giáo truyền cảm hứng'
        }
    ];

    const timelineContainer = document.getElementById('teacher-gallery');

    teacherMemories.forEach((memory, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add(
            'timeline-item', 
            'relative', 
            'flex', 
            'items-center', 
            'mb-8', 
            'animate-fade-in'
        );

        timelineItem.innerHTML = `
            <div class="timeline-marker absolute w-6 h-6 bg-blue-500 rounded-full -left-3 z-10"></div>
            <div class="timeline-content flex items-center bg-white shadow-lg rounded-xl p-4 transform transition hover:scale-105">
                <img src="${memory.image}" alt="Teacher" class="w-24 h-24 rounded-full mr-6 object-cover">
                <div>
                    <h3 class="text-xl font-bold text-gray-800">${memory.year}</h3>
                    <p class="text-gray-600">${memory.description}</p>
                </div>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
});