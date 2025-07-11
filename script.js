const questions = document.querySelectorAll('.question');
const plus = document.querySelectorAll('.icon-plus');
const minus = document.querySelectorAll('.icon-minus');
const paragraph = document.querySelectorAll('p');

// for (let i = 0; i < questions.length; i++) {
//   questions[i].addEventListener('click', () => {
//     const isHidden = window.getComputedStyle(paragraph[i]).display === 'none';

//     paragraph[i].style.display = isHidden ? 'block' : 'none';
//     plus[i].style.display = isHidden ? 'none' : 'block';
//     minus[i].style.display = isHidden ? 'block' : 'none';
//   });
// }

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    const isHidden = window.getComputedStyle(paragraph[i]).display === 'none';

    paragraph[i].style.display = isHidden ? 'block' : 'none';
    plus[i].style.display = isHidden ? 'none' : 'block';
    minus[i].style.display = isHidden ? 'block' : 'none';
  });
}
