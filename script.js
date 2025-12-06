const courses = [
    {
        id: 'c1',
        title: 'Web Development Basics',
        lessons: [
            { id: 'l1', title: 'HTML Introduction', content: 'Learn HTML structure and elements.' },
            { id: 'l2', title: 'CSS Basics', content: 'Learn styling and layouts with CSS.' },
            { id: 'l3', title: 'JavaScript Intro', content: 'Basics of JS and interactivity.' }
        ],
        assignments: [
            {
                id: 'a1',
                title: 'HTML Quiz',
                questions: [
                    {
                        q: "Which tag defines a paragraph?",
                        choices: ["<p>", "<div>", "<span>"],
                        answer: 0
                    },
                    {
                        q: "Which tag is for links?",
                        choices: ["<a>", "<link>", "<nav>"],
                        answer: 0
                    }
                ]
            }
        ]
    },

    {
        id: 'c2',
        title: 'Python Programming',
        lessons: [
            { id: 'l1', title: 'Python Basics', content: 'Variables, data types, and printing.' },
            { id: 'l2', title: 'Control Flow', content: 'If statements, loops, and logic.' },
            { id: 'l3', title: 'Functions', content: 'Writing and calling functions.' }
        ],
        assignments: [
            {
                id: 'a1',
                title: 'Python Quiz',
                questions: [
                    {
                        q: "Which keyword is used to define a function?",
                        choices: ["def", "func", "function"],
                        answer: 0
                    }
                ]
            }
        ]
    }
];

let currentCourse = null;

// Modal Functions
function showLoginModal() { document.getElementById('login-modal').style.display = 'flex'; }
function showSignupModal() { document.getElementById('signup-modal').style.display = 'flex'; }

function switchToSignup() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'flex';
}

function switchToLogin() {
    document.getElementById('signup-modal').style.display = 'none';
    document.getElementById('login-modal').style.display = 'flex';
}

// Signup
function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!name || !email || !password) {
        alert('Enter all fields');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
        alert('Email already exists');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login.');
    switchToLogin();
}

// Login
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert('Invalid credentials');
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    document.getElementById('login-modal').style.display = 'none';
    showCourses();
}

// Section Control
function hideSections() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('courses-section').style.display = 'none';
    document.getElementById('lessons-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
}

function showCourses() {
    hideSections();
    document.getElementById('courses-section').style.display = 'block';

    const listDiv = document.getElementById('courses-list');
    listDiv.innerHTML = '';

    courses.forEach(c => {
        const div = document.createElement('div');
        div.className = 'course';
        div.innerHTML = `<strong>${c.title}</strong><p>${c.lessons.length} lessons</p>`;
        div.onclick = () => showLessons(c.id);
        listDiv.appendChild(div);
    });
}

function showLessons(courseId) {
    currentCourse = courses.find(c => c.id === courseId);
    hideSections();

    document.getElementById('lessons-section').style.display = 'block';
    document.getElementById('course-title').innerText = currentCourse.title;

    const lessonsDiv = document.getElementById('lessons-list');
    lessonsDiv.innerHTML = '<h3>Lessons</h3>';

    currentCourse.lessons.forEach(l => {
        const div = document.createElement('div');
        div.className = 'lesson';
        div.innerHTML = `<strong>${l.title}</strong><p>${l.content}</p>`;
        lessonsDiv.appendChild(div);
    });

    const assignmentsDiv = document.getElementById('assignments-list');
    assignmentsDiv.innerHTML = '<h3>Assignments / Quizzes</h3>';

    currentCourse.assignments.forEach(a => {
        const div = document.createElement('div');
        div.className = 'assignment';
        div.innerText = a.title;
        div.onclick = () => startQuiz(a);
        assignmentsDiv.appendChild(div);
    });
}

function startQuiz(assignment) {
    hideSections();
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('quiz-title').innerText = assignment.title;

    const quizDiv = document.getElementById('quiz-questions');
    quizDiv.innerHTML = '';

    assignment.questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${i + 1}. ${q.q}</p>`;

        q.choices.forEach((c, j) => {
            const btn = document.createElement('button');
            btn.innerText = c;
            btn.onclick = () =>
                alert(j === q.answer ? 'Correct!' : `Wrong! Correct: ${q.choices[q.answer]}`);
            div.appendChild(btn);
        });

        quizDiv.appendChild(div);
    });
}
