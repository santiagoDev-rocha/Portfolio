function toggleTheme() {
      document.body.classList.toggle('dark');
    }

const cards = document.querySelectorAll('.card-hab');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

const cardsProj = document.querySelectorAll('.card-proj');

    const observerProj = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    cardsProj.forEach(card => observerProj.observe(card));

function abrirGithub() {
      window.open('https://github.com/santiagoDev-rocha', '_blank');
}

function abrirLinkedIn() {
      window.open('https://www.linkedin.com/in/santiago-rocha-036a373b3/', '_blank');
}

function irProjetos() {
  const secao = document.getElementById('projetos');
  secao.scrollIntoView({behavior: 'smooth'});
}

function projeto1() {
  window.open('https://github.com/santiagoDev-rocha/Login-CriptografiaHibrida', '_blank');
}

function projeto2() {
  window.open('https://github.com/santiagoDev-rocha/GreenMind', '_blank');
}

function projeto3() {
  window.open('', '_blank');
}