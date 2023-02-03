//global variable
let main = document.querySelector('main');
let secNumber = main.children.length - 1;
const sections = document.querySelectorAll('section');
const aList = document.getElementById('navbar_list');
const up = document.querySelector(".scroll");


//Add New Section
function AddNewSection(){
  secNumber++;
  // creat my Elements
  let mySec = document.createElement('section'),
      myDiv = document.createElement('div'),
      myHead = document.createElement('h2'),
      myPara = document.createElement('p'),
  //creat Text
      headText = document.createTextNode(`Section ${secNumber}`),
      paraText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.');
  // add Attributes
  mySec.setAttribute('id',`Section${secNumber}`);
  mySec.setAttribute('data-nav',`Section${secNumber}`);
  myDiv.setAttribute('class','landing__container');
  // append Element
  myDiv.appendChild(myHead);
  myDiv.appendChild(myPara);
  mySec.appendChild(myDiv)
  main.appendChild(mySec);
  // append Text
  myHead.appendChild(headText);
  myPara.appendChild(paraText);
addLink();
};

// add link in navbar
const addLink = () => {
  // creat Element
  let myLi = document.createElement('li'),
  myLink = document.createElement('a'),
  // creat Text
  linkText = document.createTextNode(`Section ${secNumber}`);
  // add Attributes
  myLink.setAttribute('href',`#Section${secNumber}`)
  myLink.setAttribute('data-link',`Section${secNumber}`)
  // append Element
  myLi.appendChild(myLink);
  aList.appendChild(myLi);
  // append Text
  myLink.appendChild(linkText);
};

// static section on page load
let staticSec = 4;  // controll static section with staticSec variable
  // if section number in html file liss than 4 add more sections to be 4 or any number you desied in page , In addition to adding links in navbar for the sections that already exist
if (secNumber < staticSec) {
  secNumber = 0;
    sections.forEach(() => {
      secNumber++;
      addLink();
  })
  for(let x = secNumber;x < staticSec ;x++){
    AddNewSection();
  }
 // if sections in html fill is suitable ,this  add links in navbar for the sections that already exist
} else {
  secNumber=0;
    sections.forEach(() => {
      secNumber++;
      addLink();
    })
};
  
//add and remove activity with using Element.getBoundingClientRect()
window.onscroll = function() {
  document.querySelectorAll('section').forEach(function (sec) {
    let activeLink = aList.querySelector(`[data-link='${sec.id}']`);

    if(sec.getBoundingClientRect().top >= -300 &&
        sec.getBoundingClientRect().top <= 250) {

      sec.classList.add("active-class");
      activeLink.classList.add("active-link");
    }
    else{
      sec.classList.remove("active-class");
      activeLink.classList.remove("active-link");
    }
});

	//scroll button
		if (this.scrollY >= 1000) {
				up.classList.add('scrolling');
		} else {
				up.classList.remove('scrolling');
		};
};


// smooth scroll to links with scrollIntoView
aList.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (ev.target.dataset.link) {
    document
      .getElementById(`${ev.target.dataset.link}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${ev.target.dataset.link}`;
    }, 100);
  }
});

// smooth scroll to scroll button with scrollIntoView
up.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});