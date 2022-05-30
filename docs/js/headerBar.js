const header = document.getElementById('headerBox');
const headerTitle = document.getElementById('headerTitle');

let headerColor = getComputedStyle(header).backgroundColor;
let titleColor = getComputedStyle(headerTitle).color;

headerColor = headerColor.replace(/[a-z()]/g, '').split(', ');
titleColor = titleColor.replace(/[a-z()]/g, '').split(', ');


if (headerColor.length === 4 && titleColor.length === 4) {

  const app = document.getElementById('appBox');
  const heroTitle = document.getElementById('heroTitle');
  const threshold = heroTitle.offsetTop - header.offsetHeight;

  const titleOpacity = titleColor[3];
  const headerOpacity = headerColor[3];
  titleColor = `${titleColor[0]}, ${titleColor[1]}, ${titleColor[2]}`;
  headerColor = `${headerColor[0]}, ${headerColor[1]}, ${headerColor[2]}`;

  app.addEventListener('scroll', (e) => {
    const scrollTop = app.scrollTop;
    const opacity = (scrollTop/threshold).toFixed(2);

    header.style.backgroundColor = (threshold < scrollTop)  
      ? `rgba(${headerColor}, 1)`
      : (opacity > headerOpacity) 
        ? `rgba(${headerColor}, ${opacity})` 
        : `rgba(${headerColor}, ${headerOpacity})`;
  
    headerTitle.style.color = (threshold < scrollTop)  
      ? `rgba(${titleColor}, 1)`
      : (opacity > titleOpacity) 
        ? `rgba(${titleColor}, ${opacity})` 
        : `rgba(${titleColor}, ${titleOpacity})`;
  });
}

