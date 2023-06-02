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

let counter = 0;

photo.src = `${STUDENTS[0].img}`;
photo.alt = `${STUDENTS[counter].alt}`
testimonial.textContent = `${STUDENTS[counter].testimonial}`;
nameStudent.textContent = `${STUDENTS[counter].name}`;
title.textContent = `${STUDENTS[counter].title}`;


btnNext.addEventListener('click', (slideNextImage));
btnPrev.addEventListener('click', (slidePrevImage));

function slideNextImage() {
    counter++;
   
    if(counter > STUDENTS.length - 1) {
        counter = 0;
    }
    photo.src = `${STUDENTS[counter].img}`;
    photo.alt = `${STUDENTS[counter].alt}`
    testimonial.textContent = `${STUDENTS[counter].testimonial}`;
    nameStudent.textContent = `${STUDENTS[counter].name}`;
    title.textContent = `${STUDENTS[counter].title}`;
}

function slidePrevImage() {
    counter--;
   
    if(counter < 0 ) {
        counter = STUDENTS.length - 1;
    }
    photo.src = `${STUDENTS[counter].img}`;
    photo.alt = `${STUDENTS[counter].alt}`
    testimonial.textContent = `${STUDENTS[counter].testimonial}`;
    nameStudent.textContent = `${STUDENTS[counter].name}`;
    title.textContent = `${STUDENTS[counter].title}`;   
}
