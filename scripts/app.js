const STUDENTS = [
  {
      name: 'Tanya Sinclair',
      title: 'UX Engineer',
      img: './images/image-tanya.jpg',
      alt: 'Tanya Sinclair photo',
      testimonial: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
  },
  {
      name: 'John Tarkpor',
      title: 'Junior Front-end Developer',
      img: './images/image-john.jpg',
      alt: 'John Tarkpor photo',
      testimonial: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  }
];


const nameStudent = document.getElementById('name-student');
const title = document.getElementById('title-student');
const photo = document.getElementById('student-photo');
const testimonial = document.getElementById('testimonial');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let counterIndex = 0;

function updateProfile() {
  photo.setAttribute('src', STUDENTS[counterIndex].img);
  testimonial.textContent = STUDENTS[counterIndex].testimonial;
  nameStudent.textContent = STUDENTS[counterIndex].name;
  title.textContent = STUDENTS[counterIndex].title;
}

btnPrev.addEventListener('click', () => {
  if (counterIndex === 0 ) {
    counterIndex = STUDENTS.length - 1
  } else {
    counterIndex--
  }
  updateProfile()
})

btnNext.addEventListener('click', () => {
   if (counterIndex === STUDENTS.length - 1 ) {
    counterIndex = 0
  } else {
    counterIndex++
  }
  updateProfile()
})
