
const accordions = (trigerBtn, content) => {
  const triger = document.querySelector(trigerBtn);
  const body = document.querySelector(content);
  console.log(triger, body);
  triger.addEventListener('click', () => {
    body.classList.toggle('open');
    
    if (body.classList.contains('open')) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = null;
    }
  });

};

export default accordions;


