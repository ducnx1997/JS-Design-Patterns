/*
This is empty on purpose! Your code to build the resume will go here.
 */

var model = {
    bio : {
        name : 'Nguyen Xuan Duc',
        role : 'Web Developer',
        contacts : {
            mobile : '0943132348',    
            email : 'ducnx1997@gmail.com',
            github : 'ducnx1997',
            location : 'Vietnam'
        },
        welcomeMessage : 'Hello World!',
        skills : [
            'c++',
            'java',
            'python',
            'javascript'
        ],
        biopic : 'https://i.ytimg.com/vi/bwmSjveL3Lc/hqdefault.jpg'
    },
    education : {
        schools : [{
            name : 'TPC',
            location : 'Haiphong, Vietnam',
            degree : 'Highschool',
            majors : ['informatics',
                'math'],
            dates : '2012 - 2015', 
            url : 'https://www.facebook.com/trangchuyentranphu/'
        }, {
            name :'VNU-UET',
            location : 'Hanoi, Vietnam',
            degree : 'Bachelor',
            majors : ['Computer Science'],
            dates : '2015-2019',
            url : 'http://uet.vnu.edu.vn/'
        }],
        onlineCourses : [{
            title : 'JS OOP',
            school : 'udacity', 
            dates : 'June 2017', 
            url : 'https://classroom.udacity.com/courses/ud015'
        }]
    }
}

var controller = {

    init : function() {
        $('#header').prepend(HTMLheaderName.replace('%data%', model.bio.name)
            + HTMLheaderRole.replace('%data%', model.bio.role));
        for (contact in model.bio.contacts) {
            $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', model.bio.contacts[contact]));
        }
        $('#header').append(HTMLbioPic.replace('%data%', model.bio.biopic)
            + HTMLwelcomeMsg.replace('%data%', model.bio.welcomeMessage));
        $('#header').append(HTMLskillsStart);
        for (skill in model.bio.skills)
            $('#header').append(HTMLskills.replace('%data%', model.bio.skills[skill]));

        $('#education').append(HTMLschoolStart);
        for (let i = 0; i < model.education.schools.length; i++) {
            console.log(i);
            let school = model.education.schools[i];
            $('#education').append(HTMLschoolName.replace('%data%', school.name).replace('#', school.url));
            $('#education').append(HTMLschoolDegree.replace('%data%', school.degree));
            $('#education').append(HTMLschoolDates.replace('%data%', school.dates));
            $('#education').append(HTMLschoolLocation.replace('%data%', school.location));
            $('#education').append(HTMLschoolMajor.replace('%data%', school.majors));
        }
        $('#education').append(HTMLonlineClasses);
        for (let i = 0; i < model.education.onlineCourses.length; i++) {
            let course = model.education.onlineCourses[i];
            $('#education').append(HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url));
            $('#education').append(HTMLonlineSchool.replace('%data%', course.school));
            $('#education').append(HTMLonlineDates.replace('%data%', course.dates));
            $('#education').append(HTMLonlineURL.replace('%data%', course.url).replace('#', course.url));
        }


        $('#mapDiv').append(googleMap);
    }
}



controller.init();