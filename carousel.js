// Member data - define once, use everywhere
const members = [
  {
    name: 'Roger Bond',
    role: 'Lead Vocals',
    image: 'https://via.placeholder.com/250x250?text=Lead+Vocals',
    bio: 'Never knows the words.',
  },
  {
    name: 'Julian Zander',
    role: 'Lead Guitar',
    image: 'https://via.placeholder.com/250x250?text=Lead+Guitar',
    bio: "Julian's guitar riffs define our sound. His technical skill is matched.",
  },
  {
    name: 'Mike Johnson',
    role: 'Bass Guitar',
    image: 'https://via.placeholder.com/250x250?text=Bass+Guitar',
    bio: 'Mike holds down the foundation with powerful bass lines that drive our songs.',
  },
  {
    name: 'Alex Brown',
    role: 'Drums',
    image: 'https://via.placeholder.com/250x250?text=Drums',
    bio: "Alex's drumming keeps the beat and brings energy to every track.",
  },
]

// Create member card HTML
function createMemberCard(member) {
  return `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <div class="role">${member.role}</div>
                <p>${member.bio}</p>
            </div>
        `
}

// Render carousel based on screen size
function renderCarousel() {
  const carouselContent = document.getElementById('carouselContent')
  const membersGrid = document.getElementById('membersGrid')

  const screenWidth = window.innerWidth
  let membersPerSlide = 1 // Default for small screens

  // Determine members per slide based on screen size
  if (screenWidth >= 768) {
    membersPerSlide = 2 // Medium screens
  }

  // Clear previous content
  carouselContent.innerHTML = ''
  membersGrid.innerHTML = ''

  // Create carousel slides
  let slideIndex = 0
  for (let i = 0; i < members.length; i += membersPerSlide) {
    const slide = members.slice(i, i + membersPerSlide)

    // Create slide HTML
    let slideHTML = `<div class="carousel-item ${slideIndex === 0 ? 'active' : ''}">`

    if (membersPerSlide === 1) {
      // Single card centered
      slideHTML += `
                    <div class="d-flex justify-content-center">
                        <div class="member-carousel-card">
                            ${createMemberCard(slide[0])}
                        </div>
                    </div>
                `
    } else {
      // Multiple cards
      slideHTML = `<div class="carousel-item ${slideIndex === 0 ? 'active' : ''}"><div class="row g-4">`
      slide.forEach((member) => {
        slideHTML += `<div class="col-6">${createMemberCard(member)}</div>`
      })
      slideHTML += `</div></div>`
    }

    carouselContent.innerHTML += slideHTML

    slideIndex++
  }

  // Create grid for large screens
  members.forEach((member) => {
    membersGrid.innerHTML += `
                <div class="col-lg-3 col-md-6">
                    ${createMemberCard(member)}
                </div>
            `
  })
}

// Re-render on window resize
window.addEventListener('resize', renderCarousel)

// Initial render
renderCarousel()
