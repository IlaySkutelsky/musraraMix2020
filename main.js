let annoyTimeoutID

function showGif() {
  // return
  let headerElm = document.querySelector("section.header")
  let gifElm = document.querySelector("section.background")
  let bodyElm = document.querySelector("body")
  let textElm = document.querySelector("section.text")
  headerElm.classList.add("blur-away")
  bodyElm.classList.add("black-body")
  insertTextPoint(0)
  setTimeout(function() {
    headerElm.classList.add("hidden")
    gifElm.classList.remove("hidden")
  }, 1000)
  setTimeout(function() {
    textElm.classList.remove("hidden")
    annoyTimeoutID = setTimeout(function() {
      let firstWordElm = document.querySelector("section.text p span")
      firstWordElm.classList.add("annoying")
    }, 10000)
  }, 10000)
}

function hideElement(selector) {
  let elm = document.querySelector(selector)
  elm.classList.add("hidden")
}

let screenWidth = window.innerWidth
let checkMove = true
let currAngleIndex = 1
function handleMouseMove(e) {
  if (checkMove) {
    checkMove = false
    let x = e.x
    let index = 6-Math.floor(x/(screenWidth/6))
    if (index !== currAngleIndex) {
      let oldSpriteElm = document.querySelector(`.background .sprite${currAngleIndex}`)
      oldSpriteElm.classList.add('opaque')
      let newSpriteElm = document.querySelector(`.background .sprite${index}`)
      newSpriteElm.classList.remove('opaque')
      currAngleIndex = index
    }
    
    setTimeout(function() {
      checkMove = true
    }, 50)
  }
}

function preloadImages() {
  let imgLoadPromises = []
  for (let i = 1; i < 7; i++) {
    imgLoadPromises.push(loadImage( `./assets/sprite${i}.jpg`))
  }
  Promise.all(imgLoadPromises)
  .then(()=> {
    console.log('all images loaded');
  })
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", err => reject(err));
    img.src = src;
  });
};

function insertTextPoint(i) {
  let textPElm = document.querySelector('section.text p')
  textPElm.innerHTML = htmlTextPoints[i]
}

function nextTextPoint() {
 if (annoyTimeoutID) clearTimeout(annoyTimeoutID)

  currTextPoint++
  setTimeout(function() {
    insertTextPoint(currTextPoint)
  }, 300)
  if (currTextPoint==12) {
    setTimeout(function() {
      let textElm = document.querySelector("section.text")
      textElm.classList.add("blur-away")
    }, 12000)
  }
}

let acc = 0
function accumToNextTextPoint(e, amount) {
  let elm = e.target
  elm.classList.add('disabled')
  acc += amount
  if (acc===1) nextTextPoint()
}

let currTextPoint = 0
let htmlTextPoints = {
  0: `<span onclick="nextTextPoint()">היית</span> פה פעם?
  
  
  
  
  
  

  `,
  1: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. <span onclick="nextTextPoint()">חוץ</span> מהשנה.







`,  
2: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר <span onclick="nextTextPoint()">איפה</span> שערי הכדורגל






`,
3: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
<span onclick="nextTextPoint()">או</span> איפה ממוקמים הסלים





`,
4: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים ש<span onclick="nextTextPoint()">מעבר לגדר</span>.





`,
5: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב <span onclick="nextTextPoint()">מה</span> יקרה פה




`,
6: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ב<span onclick="accumToNextTextPoint(event, 0.5)">יום</span> וב<span onclick="accumToNextTextPoint(event, 0.5)">שעה</span> של המוסררה מיקס.



`,
7: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו <span onclick="nextTextPoint()">עלים</span> שזזים ברוח


`,
8: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ו<span onclick="nextTextPoint()">נערים</span> משחקים כדורגל

`,
  9: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
ו<span onclick="nextTextPoint()">ערב</span>`,
10: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
וערב ו<span onclick="nextTextPoint()">שקט</span>`,
11: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
וערב ושקט ו<span onclick="nextTextPoint()">זהו</span>`,
12: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס. חוץ מהשנה.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
וערב ושקט וזהו`
  
}
