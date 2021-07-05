const svg = document.getElementById("svg");
let sv = document.querySelectorAll("#points g")
let p = document.getElementById('tooltip')



let liarr = []

for(let a in sv) {
  
  liarr.push(`<li class="list-item" id ="lipoint${a}">This id for point number [${a }]</li>`)
}

let ul = document.createElement("ul")
ul.innerHTML = liarr.slice(0,75).join("")

document.getElementById("navbar").appendChild(ul)

// const getTransformParameters = (element) => {
//   const transform = element.style.transform;
//   let scale = 1,
//     x = 0,
//     y = 0;

//   if (transform.includes("scale"))
//     scale = parseFloat(transform.slice(transform.indexOf("scale") + 6));
//   if (transform.includes("translateX"))
//     x = parseInt(transform.slice(transform.indexOf("translateX") + 11));
//   if (transform.includes("translateY"))
//     y = parseInt(transform.slice(transform.indexOf("translateY") + 11));

//   return { scale, x, y };
// };

// const getTransformString = (scale, x, y) =>
//   "scale(" + scale + ") " + "translateX(" + x + "%) translateY(" + y + "%)";

// const zoom = (direction) => {
//   const { scale, x, y } = getTransformParameters(svg);
//   let dScale = 0.1;
//   if (direction == "out") dScale *= -1;
//   if (scale == 0.1 && direction == "out") dScale = 0;
//   svg.style.transform = getTransformString(scale + dScale, x, y);
// };


// let cont1 = document.getElementById("cont1")
// let cont2 = document.getElementById("svg")

// let sizeCont = cont1.getBoundingClientRect()
// let sizeSvg = cont2.getBoundingClientRect()

// let zoomIn = document.getElementById("zoom-in-button")
// let zoomOut = document.getElementById("zoom-out-button")

// zoomOut.onclick = () => {
//   sizeCont = cont1.getBoundingClientRect()
//   sizeSvg = cont2.getBoundingClientRect()
//   if (sizeCont.width === sizeSvg.width) {
//     alert('Max Zoom!')
//   } else {
//     zoom("out");
//   }

//   console.log(sizeCont)
//   console.log(sizeSvg)
// }

// zoomIn.onclick = () => {
//   sizeCont = cont1.getBoundingClientRect()
//   sizeSvg = cont2.getBoundingClientRect()
//   zoom("in")
//   console.log(sizeCont)
//   console.log(sizeSvg)
// };

function absolutePosition(el) {
  let
    found,
    left = 0,
    top = 0,
    width = 0,
    height = 0,
    offsetBase = absolutePosition.offsetBase;
  if (!offsetBase && document.body) {
    offsetBase = absolutePosition.offsetBase = document.createElement('div');
    offsetBase.style.cssText = 'position:absolute;left:0;top:0';
    document.body.appendChild(offsetBase);
  }
  if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
    var boundingRect = el.getBoundingClientRect();
    var baseRect = offsetBase.getBoundingClientRect();
    found = true;
    left = boundingRect.left - baseRect.left;
    top = boundingRect.top - baseRect.top;
    width = boundingRect.right - boundingRect.left;
    height = boundingRect.bottom - boundingRect.top;
  }
  return {
    found: found,
    left: left,
    top: top,
    width: width,
    height: height,
    right: left + width,
    bottom: top + height
  };
}
let pin = document.getElementById('triangle')
let x = null

let color = 'white'

for (let i in sv) {
  sv[i].id = 'p' + i
 

  document.getElementById(sv[i].id).onclick = function() {
    let pos = absolutePosition(this)
    let top = pos.top - 52
    let bottom = pos.bottom
    let right = pos.right
    let left = pos.left - 42
    x = 'onclickin'
    this.classList.add(x);

    p.style.visibility = 'visible'
    p.style.opacity = '1'
    p.style.top = `${top.toString()}px`
    p.style.bottom = `${(bottom).toString()}px`
    p.style.right = `${right.toString()}px`
    p.style.left = `${left.toString()}px`
    p.innerText = `The ID of this point is ${this.id}`

    document.getElementById(`lipoint${this.id.toString().replace('p','')}`).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
  }
  document.getElementById(sv[i].id).addEventListener('mouseenter', (a) => {
    console.log(document.getElementById(a.srcElement.id))
    document.getElementById(a.srcElement.id).style.outline = '5px solid red'
    document.getElementById(`lipoint${a.srcElement.id.toString().replace('p','')}`).style.color = 'red'
    
  })
  document.getElementById(sv[i].id).addEventListener('mouseleave', (a) => {
    document.getElementById(a.srcElement.id).style.outline = '0px'
    document.getElementById(`lipoint${a.srcElement.id.toString().replace('p','')}`).style.color = 'white'
    
    
  })
 
}




