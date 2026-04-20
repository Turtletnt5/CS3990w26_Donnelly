
let Hanna_courses = [
    {
        course: "CS2910",
        desc: "this course includes basic concepts of computer data orginization and information processing",
        prereqs: ["CS2010 - practical programming"],
        img: "img/image(1).jpeg"
    },
    {
        course: "CS3610",
        desc: "this course includes basic concepts of software enginnering",
        prereqs: [],
        img: "img/image(2).jpg"
    }
    ,
    {
        course: "CS3990",
        desc: "this course introduces the basic concepts of internet and web development",
        prereqs: ["CS2010 - practical programming"],
        img: "img/image(3).jpeg"
    }
    ,
    {
        course: "CS3220",
        desc: "this course introduces the basic concepts and essentials of artifitial intelegence",
        prereqs: ["CS2010 - practical programming",
        "MA1200 - linear algebra",
        "ST1510 - statistics"],
        img: "img/image(4).jpg"
    }
]

let courseClasses = [];


class course{
    constructor(course, desc, prereqs, img) {
        this.course = course;
        this.desc = desc;
        this.prereqs = prereqs;
        this.img = img;
    }

    showCourseBar() {

        let courseli = document.createElement('li');
        courseli.textContent = this.course;
        courseli.style.position = "relative";
        courseli.style.zIndex = "1";

        let courseBar = document.getElementById('courses');
        courseBar.appendChild(courseli);
    }

    showCourseDesc() {

        let courseDesc = document.getElementById('courseDesc');
        courseDesc.textContent = this.desc;
        courseDesc.appendChild(document.createElement('br'));
        let courseImg = document.createElement('img');
        courseImg.src = this.img;
        courseImg.style.width = "50%";
        courseDesc.appendChild(courseImg);

        let coursePrereqs = document.getElementById('coursePrereqs');
        coursePrereqs.textContent = "";

        let coursePrereqsTitle = document.createElement('h3');
        coursePrereqsTitle.textContent = "Complete the following Prerequisites";
        coursePrereqs.appendChild(coursePrereqsTitle);

        let prereqList = document.createElement('ol');
        this.prereqs.forEach(prereq => {
            let prereqli = document.createElement('li');
            prereqli.textContent = prereq;
            prereqList.appendChild(prereqli);
        });
        coursePrereqs.appendChild(prereqList);

    }
}

function createCourseFromList(courses) {
    courseClasses = [];
    courses.forEach((courselistItem) => {
        courseClasses.push(new course(courselistItem.course, courselistItem.desc, courselistItem.prereqs,courselistItem.img));
    });
}


// starting js to create course list
createCourseFromList(Hanna_courses);
courseClasses.forEach(course => {
    course.showCourseBar();
});


//Jquery script
$(document).ready(function() {

    $('#courses').on('click', 'li', function() {
        let clickedCourse = courseClasses.find(course => course.course === this.textContent);
        clickedCourse.showCourseDesc();

        let highlightBox = document.createElement("div");
        highlightBox.style.backgroundColor = "#023d2a";
        highlightBox.style.position = "absolute";
        highlightBox.style.top = "25%" ;
        highlightBox.style.left = "25%" ;
        highlightBox.style.width = "80%";
        highlightBox.style.height = "20px";
        highlightBox.style.zIndex = "-1";

        this.appendChild(highlightBox);

        $(this).prevAll().children().remove();
        $(this).nextAll().children().remove();

    })

})
