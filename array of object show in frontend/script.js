const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Frontend Developer",
    description: "Passionate frontend developer who loves building clean and interactive user interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    fullName: "Meera Patel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Creative designer focused on user-centered design and smooth digital experiences.",
    tags: ["Figma", "Adobe XD", "UX Research", "Prototyping"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Backend Developer",
    description: "Backend engineer experienced in building scalable APIs and server-side logic.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"]
  },
  {
    fullName: "Ananya Singh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description: "Data analyst who transforms raw data into meaningful insights and dashboards.",
    tags: ["Python", "SQL", "Power BI", "Data Visualization"]
  },
  {
    fullName: "Kabir Khan",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Digital Marketer",
    description: "Results-driven marketer specializing in SEO, social media, and growth strategies.",
    tags: ["SEO", "Content Marketing", "Google Ads", "Analytics"]
  }
];

var sum = ''

users.forEach(function(elem){
  sum = sum + ` <div class="card">
            <img src=${elem.image} alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})
var main = document.querySelector('main')
main.innerHTML = sum

// make an array of objects and name it users
// make a card in html
// users par lagao foreach and print hello n times
// make a variable sum and give it a value ''(empty string)
// add on 'hello' in sum and print it outside loop
// add on card(html code) in sum and print it too.
// select parent(main) and put sum in its innerHTML
// replace sample data with real data of array of objects 