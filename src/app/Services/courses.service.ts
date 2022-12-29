export class CoursesService {
  courses = [
    {
      id: 101,
      name: 'Javascript for beginners',
      author: 'John Heikela',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: 'assets/images/javascript-logo.png',
      description:
        'In this course you will learn the fundamentals of javascript. This course is designed for beginners.',
    },
    {
      id: 102,
      name: 'Angular for beginners',
      author: 'Mark Vought',
      duration: 28,
      type: 'Premium',
      price: 129.0,
      ratings: 4.5,
      image: 'assets/images/angular.png',
      description:
        'In this course you will learn the fundamentals of Angular Framework. This course is designed for beginners.',
    },
    {
      id: 103,
      name: 'React for beginners',
      author: 'Steve Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: 'assets/images/react.png',
      description:
        'In this course you will learn the fundamentals of React. This course is designed for beginners.',
    },
    {
      id: 104,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 145.5,
      ratings: 4.8,
      image: 'assets/images/advance_ang.png',
      description:
        'In this course you will learn all the concepts of Angular framework from basics to advance.',
    },
    {
      id: 105,
      name: 'Advance Javascript Course',
      author: 'John Heikela',
      duration: 60,
      type: 'Premium',
      price: 150.0,
      ratings: 4.5,
      image: 'assets/images/advance_js.png',
      description:
        'In this course you will learn the complete modern javascript, step by step.',
    },
    {
      id: 106,
      name: 'UX Design Course',
      author: 'Steve Smith',
      duration: 19.0,
      type: 'Premium',
      price: 115.5,
      ratings: 4.8,
      image: 'assets/images/ux_design.png',
      description:
        'In this course you will learn the reactive web development using HTML and CSS.',
    },
  ];

  getAllCourses():any {
    const courseList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.courses)
      }, 5000);
    });
    return courseList;
  }
}
