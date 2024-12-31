document.getElementById('apply-filters').addEventListener('click', () => {
  const category = document.getElementById('category').value;
  const priceRange = document.getElementById('price-range').value;
  const keyword = document.getElementById('keyword').value.toLowerCase();

  const services = document.querySelectorAll('.service');

  services.forEach(service => {
    const serviceCategory = service.getAttribute('data-category');
    const servicePrice = parseInt(service.getAttribute('data-price'), 10);
    const serviceText = service.innerText.toLowerCase();

    let matchesCategory = category === 'all' || serviceCategory === category;
    let matchesPrice = false;
    if (priceRange === 'all') matchesPrice = true;
    else if (priceRange === 'low') matchesPrice = servicePrice <= 200;
    else if (priceRange === 'mid') matchesPrice = servicePrice > 200 && servicePrice <= 400;
    else if (priceRange === 'high') matchesPrice = servicePrice > 400;

    let matchesKeyword = serviceText.includes(keyword);

    if (matchesCategory && matchesPrice && matchesKeyword) {
      service.style.display = 'block';
    } else {
      service.style.display = 'none';
    }
  });
});
