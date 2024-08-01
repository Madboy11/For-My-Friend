// script.js
const noBtn = document.getElementById('no-btn');
const yesBtn = document.querySelector('.yes-btn');

noBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 200) - 100; // +/- 100px
    const randomY = Math.floor(Math.random() * 200) - 100; // +/- 100px
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// yesBtn.addEventListener('click', () => {
//     alert('Yay! You made a new friend!');
//     // Alternatively, you could redirect to another page or perform another action
//     // window.location.href = 'https://www.example.com/thank-you';
// });
