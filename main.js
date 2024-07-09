
// Sticky Navbar Scroll 
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    const shareIcon = document.getElementById('shareIcon');
    const downloadText = document.getElementById('downloadText');
    const menuIcon = document.getElementById('menuIcon');
    const shareBorder = document.getElementById('shareBorder');
    const downloadBorder = document.getElementById('downloadBorder');
    if (window.scrollY > 10) {
        header.classList.add('bg-blend-transparent');
        header.classList.remove('bg-blend-banner');
        logo.src = './asset/img/logo-black.png';
        shareBorder.classList.add('border-[#7CA63A]')
        shareBorder.classList.remove('border-white')
        shareIcon.classList.add('img-black');
        downloadText.classList.remove('text-white');
        downloadText.classList.add('text-black');
        downloadBorder.classList.add('border-[#615DE3]')
        downloadBorder.classList.remove('border-white')
        menuIcon.classList.add('img-black');
    } else {
        header.classList.add('bg-blend-banner');
        header.classList.remove('bg-blend-transparent');
        logo.src = './asset/img/logo.png';
        shareBorder.classList.add('border-white')
        shareBorder.classList.remove('border-[#7CA63A]')
        shareIcon.classList.remove('img-black');
        downloadText.classList.remove('text-black');
        downloadText.classList.add('text-white');
        downloadBorder.classList.add('border-white')
        downloadBorder.classList.remove('border-[#615DE3]')
        menuIcon.classList.remove('img-black');
    }
});

//  Mobile Menu open close toggle ------>
const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenu.classList.add('show');
    }, 10);
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('show');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
});

// Chart Toggle accordion content and icons
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function () {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
        const icon = button.querySelector('.icon');
        icon.querySelector('.plus-icon').classList.toggle('hidden');
        icon.querySelector('.minus-icon').classList.toggle('hidden');
    });
});

// Chart Toggle dropdown menus
document.getElementById('sectorsButton').addEventListener('click', function () {
    document.getElementById('sectorsMenu').classList.toggle('hidden');
});

document.getElementById('ipoButton').addEventListener('click', function () {
    document.getElementById('ipoMenu').classList.toggle('hidden');
});

// Chart Toggle time range button js here 
document.querySelectorAll('[id^="timeButton"]').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('[id^="timeButton"]').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        button.classList.add('bg-blue-600', 'text-white');
        button.classList.remove('bg-gray-200', 'text-gray-700');
    });
});

// chart data function js here 
const ctx = document.getElementById('myChart').getContext('2d');
const wpPoolChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'WPPOOL',
                data: [0, 58, 42, 52, 100, 72, 60],
                borderColor: 'rgb(252, 113, 77)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Google',
                data: [0, 28, 32, 40, 80, 72, 80],
                borderColor: 'rgb(97, 93, 227)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Microsoft',
                data: [0, 42, 48, 50, 12, 90, 68],
                borderColor: 'rgb(124, 166, 58)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Twitter',
                data: [0, 22, 12, 18, 20, 30, 38],
                borderColor: 'rgb(111, 52, 161)',
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '%';
                    },
                    min: -10,
                    max: 80,
                    stepSize: 10
                }
            }
        }
    }
});

// slider with js 

let currentIndex = 0;

const sliderTrack = document.getElementById('sliderTrack');
const sliderItems = document.querySelectorAll('.slider-item');

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < sliderItems.length - 3) {
        currentIndex++;
        updateSlider();
    } else if (currentIndex < sliderItems.length - 2) {
        currentIndex++;
        updateSlider(true);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider(lastImageFull = false) {
    const itemWidth = sliderItems[0].clientWidth + 20;
    if (lastImageFull) {
        sliderTrack.style.transform = `translateX(-${(currentIndex - 0.7) * itemWidth + (itemWidth / 2)}px)`;
    } else {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
}