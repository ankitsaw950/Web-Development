document.addEventListener("DOMContentLoaded", () => {
    const subjects = {
      "DSA": [
        "Introduction to Data Structures",
        "Arrays and Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Sorting and Searching Algorithms"
      ],
      "Operating System": [
        "Introduction to Operating Systems",
        "Process Management",
        "Memory Management",
        "File Systems",
        "Security and Protection"
      ],
      "Maths": [
        "Calculus and Linear Algebra",
        "Probability and Statistics",
        "Discrete Mathematics",
        "Numerical Methods",
        "Differential Equations"
      ],
      "OOPS": [
        "Introduction to Object-Oriented Programming",
        "Classes and Objects",
        "Inheritance and Polymorphism",
        "Encapsulation and Abstraction",
        "Exception Handling"
      ],
      "EVS": [
        "Introduction to Environmental Science",
        "Ecosystems and Biodiversity",
        "Natural Resources",
        "Environmental Pollution",
        "Sustainable Development"
      ],
      "DSA Lab": [
        "Lab 1: Introduction to Data Structures",
        "Lab 2: Arrays and Linked Lists",
        "Lab 3: Stacks and Queues",
        "Lab 4: Trees and Graphs",
        "Lab 5: Sorting and Searching"
      ],
      "OOPS Lab": [
        "Lab 1: Introduction to OOPS",
        "Lab 2: Classes and Objects",
        "Lab 3: Inheritance and Polymorphism",
        "Lab 4: Encapsulation and Abstraction",
        "Lab 5: Exception Handling"
      ]
    };
  
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupBody = document.getElementById("popup-body");
    const closeBtn = document.querySelector(".close-btn");
  
    document.querySelectorAll(".subject").forEach(subject => {
      subject.addEventListener("click", () => {
        const subjectName = subject.dataset.subject;
        popupTitle.innerText = subjectName;
        popupBody.innerHTML = subjects[subjectName]
          ? `<ul>${subjects[subjectName].map(point => `<li>${point}</li>`).join('')}</ul>`
          : "No syllabus details available.";
        popup.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    });
  });
  