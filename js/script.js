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