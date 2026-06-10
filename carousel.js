// Member data - define once, use everywhere
const members = [
  {
    name: 'Roger Bond',
    role: 'Lead Vocals',
    image:
      'https://scontent-dub4-1.cdninstagram.com/v/t51.75761-15/476414025_17946408965929310_9120815120633968196_n.webp?_nc_cat=101&ig_cache_key=MzU2MTM5MjMxODQ3ODEyMzI4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=A_j_XOCYe5MQ7kNvwHEmDKs&_nc_oc=Adpti-JdKVhf6MT8HhhKO5RaTw6v-gxASpUZi6DhbVsiLEVyQbT6ZdutXWFw1RS9J3o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_gid=A_ZDcr3VrYtIWEkJrIX7WA&_nc_ss=7a22e&oh=00_Af__MACPOZqt0lCdXDYzLUOgO68MzWz1eyZ7H5IeZb1hzA&oe=6A2DD3D9',
    bio: 'Never knows the words.',
  },
  {
    name: 'Julian Zander',
    role: 'Lead Guitar',
    image:
      'https://scontent-dub4-1.cdninstagram.com/v/t51.75761-15/476650167_17946408944929310_5413361343441042771_n.webp?_nc_cat=102&ig_cache_key=MzU2MTM5MjMxODY5NjMzODQ0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8J6hKB3Q63QQ7kNvwFtHZhb&_nc_oc=AdocusVABh-55a97Rbes1SDxPo363OTuJs_a6mWE8sns7FW2j4-Clqdk90CGY2P_r_4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_gid=A_ZDcr3VrYtIWEkJrIX7WA&_nc_ss=7a22e&oh=00_Af-wSEp8cxjvja7oysvus4Mkg8kocMXNG4_kB_KPXj88jg&oe=6A2DFC68',
    bio: "Julian's guitar riffs define our sound. His technical skill is matched.",
  },
  {
    name: 'Rory Parker',
    role: 'Bass Guitar',
    image:
      'https://scontent-dub4-1.cdninstagram.com/v/t51.75761-15/476234638_17946408974929310_9031619429586972323_n.webp?_nc_cat=101&ig_cache_key=MzU2MTM5MjMxODQ3ODA1NjU0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=6GkqGrIT26kQ7kNvwFGqv5d&_nc_oc=Adrs07RF_vZ-1LAIooVx2ZMTWTyYnJZyCS8SZjpQhrzlpu5WqpzUzOsGfX8YjTOJT2I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_gid=A_ZDcr3VrYtIWEkJrIX7WA&_nc_ss=7a22e&oh=00_Af_E0HjR-7y4g0yvZ6n8XTeha5AqBYXhTs1LzV6X3zftEw&oe=6A2E02FB',
    bio: 'Rory holds down the foundation with powerful bass lines that drive our songs.',
  },
  {
    name: 'Liam Jackson',
    role: 'Drums',
    // image:
    //   'https://scontent-dub4-1.cdninstagram.com/v/t51.75761-15/476126786_17946408953929310_8892966859178458760_n.webp?_nc_cat=108&ig_cache_key=MzU2MTM5MjMxODM3NzU3NDY2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=u9oLnPSa9HEQ7kNvwHoTXs4&_nc_oc=AdonIvy5b25V-DbVDu6-X_gKSpFL-if1ZiwIA8zvBpCgLwXX1AW7oe5jkPTOYJDN3eg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_gid=A_ZDcr3VrYtIWEkJrIX7WA&_nc_ss=7a22e&oh=00_Af_Xeuyh2A-7qWym_zJW5NmYXdZVLcMiET-3dLeb7s_hJw&oe=6A2DEFA0',
    image: 'images/Liam2.jpg',
    bio: "Liam's drumming keeps the beat and brings energy to every track.",
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
