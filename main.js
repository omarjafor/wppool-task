console.log('hello js');

// Sticky Navbar Scroll 
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('bg-blend-transparent');
        header.classList.remove('bg-blend-banner');
    } else {
        header.classList.add('bg-blend-banner');
        header.classList.remove('bg-blend-transparent');
    }
});

//  Mobile Menu open close ------>
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

// Toggle accordion content and icons
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function () {
        const content = button.nextElementSibling;
        content.classList.toggle('hidden');
        const icon = button.querySelector('.icon');
        icon.querySelector('.plus-icon').classList.toggle('hidden');
        icon.querySelector('.minus-icon').classList.toggle('hidden');
    });
});

// Toggle dropdown menus
document.getElementById('sectorsButton').addEventListener('click', function () {
    document.getElementById('sectorsMenu').classList.toggle('hidden');
});

document.getElementById('ipoButton').addEventListener('click', function () {
    document.getElementById('ipoMenu').classList.toggle('hidden');
});

// Toggle time range buttons
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