// Sample course data
const coursesData = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development with modern technologies.",
    price: 299,
    duration: "12 weeks",
    instructor: "Jane Smith",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Introduction to data analysis and machine learning.",
    price: 399,
    duration: "10 weeks",
    instructor: "John Doe",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with Flutter.",
    price: 349,
    duration: "8 weeks",
    instructor: "Alex Johnson",
  },
  // Add more courses as needed
];

// Function to load courses on the courses page
function loadCourses() {
  const container = document.getElementById("courses-container");
  if (!container) return;

  container.innerHTML = coursesData
    .map(
      (course) => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
                <p class="text-gray-600 mb-4">${course.description}</p>
                <div class="flex justify-between items-center mb-4">
                    <span class="font-bold text-lg">$${course.price}</span>
                    <span class="text-sm text-gray-500">${course.duration}</span>
                </div>
                <button onclick="enrollCourse(${course.id})" 
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
                    Enroll Now
                </button>
            </div>
        </div>
    `
    )
    .join("");
}

// Call loadCourses when DOM is loaded
document.addEventListener("DOMContentLoaded", loadCourses);
