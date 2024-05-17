AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Assistant Professor",
    cardImage: "assets/images/experience-page/Woxsen-University.jpg",
    place: "Woxsen University (WoU) Hyderabad, Telangana – India, 500033. ",
    time: "(May, 2024 - Present)",
    desp: "<li>Courses Taught: </li> <li>Responsibilities: </li>",
  },
  {
    title: "Assistant Professor (C)",
    cardImage: "assets/images/experience-page/KU (Custom).jpg",
    place: "University of Kashmir, South Campus Anantnag, J&K –India, 192101.",
    time: "(Mar - May, 2024)",
    desp: "<li>Course Taught : MCA21205DCE, Web Technologies(Frontend: HTML, CSS and Java Script, Backend: PHP & mysql)</li>",
  },
  {
    title: "Assistant Professor (C)",
    cardImage: "assets/images/experience-page/cluster (Custom).jpg",
    place: "Cluster University Srinagar (GCW), Srinagar, J&K – India,190001",
    time: "(March, 2023 - December, 2023)",
    desp: "<li>Department: Information Technology</li><li>Course Taught : Problem Solving through C,Information Technology: Concepts and Applications, and Java Programming Language.</li><li>Developed quizzes, exams, learning material,etc.</li><li>Revised the syllabus to meet accreditation standards</li><li>Actively engaged in the Examination related activities like Paper Setting, Paper Evaluation, Exam Invigilation, etc.</li><li>Invigilated various national level exams like NEET, UPSC recruitment exams, state level recruitment tests, etc.</li>",
    
  },
  {
    title: "Full Stack Web Developer",
    cardImage: "assets/images/experience-page/infoscience_labs_logo (Custom).jpg",
    place: "Infoscience Labs, Corporation 98 The Green, Ste A Dover, DE 19901, USA.",
    time: "(Jan , 2023 - December, 2023)",
    desp: "<li>Worked as a PHP Web developer for a Cold Emailing Web Software “SendCrux” (Laravel 9)</li>",
    
  },
  {
    title: "Lecturer",
    cardImage: "assets/images/experience-page/icsc (Custom).jpg",
    place: "Islamia College of Science and Commerce (ICSC) Hawal Srinagar J&K, India",
    time: "(April , 2018 - May, 2019)",
    desp: "<li>Department: Information Technology</li><li>Lectured B.Sc. IT, BCA , BCOM and BBA Classes.</li><li>Subjects Taught: Open-Source Technologies, Database Management System, Computer Fundamentals, Computer programming and E-commerce.</li> <li>Actively engaged in the Examination related activities like Paper Setting, Paper Evaluation, Exam Invigilation and College Committees.</li>",
    
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Project 1",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "Project 2",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "Project 3",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Project 4",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "Project 5",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Project 6",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
