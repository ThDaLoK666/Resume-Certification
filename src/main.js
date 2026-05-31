const grid = document.getElementById('cert-grid')
const modal = document.getElementById('modal')
const viewer = document.getElementById('pdf-viewer')
const closeBtn = document.querySelector('.close-btn')
const countEl = document.getElementById('cert-count')
const template = document.getElementById('card-template')

fetch('/certifications.json')
  .then(r => {
    if (!r.ok) throw new Error('Failed to load certifications')
    return r.json()
  })
  .then(certs => {
    countEl.textContent = certs.length
    certs.forEach(cert => renderCard(cert))
  })
  .catch(err => {
    console.error(err)
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-secondary);padding:2rem;">เกิดข้อผิดพลาดในการโหลดข้อมูลใบรับรอง</p>'
  })

function renderCard(cert) {
  const clone = template.content.cloneNode(true)
  const card = clone.querySelector('.cert-card')
  const title = clone.querySelector('.card-title')
  title.textContent = cert.name
  card.addEventListener('click', () => openPDF(cert.file))
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openPDF(cert.file)
    }
  })
  card.setAttribute('tabindex', '0')
  card.setAttribute('role', 'button')
  card.setAttribute('aria-label', `เปิด ${cert.name}`)
  grid.appendChild(card)
}

function openPDF(file) {
  viewer.src = `Certification/${encodeURIComponent(file)}`
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closePDF() {
  modal.classList.remove('active')
  viewer.src = ''
  document.body.style.overflow = ''
}

closeBtn.addEventListener('click', closePDF)

modal.addEventListener('click', (e) => {
  if (e.target === modal) closePDF()
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closePDF()
  }
})
