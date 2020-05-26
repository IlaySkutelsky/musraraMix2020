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
  }, 10000)
}

function hideElement(selector) {
  let elm = document.querySelector(selector)
  elm.classList.add("hidden")
}

let screenWidth = window.innerWidth
let checkMove = true
function handleMouseMove(e) {
  if (checkMove) {
    checkMove = false
    let x = e.x
    let index = Math.floor(x/(screenWidth/6))+1
    for (let i = 1; i<7; i++) {
      let spriteElm = document.querySelector(`.background .sprite${7-i}`)
      if (i==index) {
        spriteElm.classList.remove('hidden')
      } else {
        spriteElm.classList.add('hidden')
      }
    }
    setTimeout(function() {
      checkMove = true
    }, 50)
  }
}

function handleMouseEnter(e) {
  let index = e.target.dataset.index;
  for (let i = 1; i<7; i++) {
    let spriteElm = document.querySelector(`.background .sprite${7-i}`)
    if (i==index) {
      spriteElm.classList.remove('hidden')
    } else {
      spriteElm.classList.add('hidden')
    }
  }
}

function insertTextPoint(i) {
  let textPElm = document.querySelector('section.text p')
  textPElm.innerHTML = htmlTextPoints[i]
}

function nextTextPoint() {
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
<span onclick="nextTextPoint()">כל שנה</span> יש פה את מוסררה מיקס.







`,  
2: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי <span onclick="nextTextPoint()">להיזכר</span> איפה שערי הכדורגל






`,
3: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה <span onclick="nextTextPoint()">ממוקמים</span> הסלים





`,
4: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים ש<span onclick="nextTextPoint()">מעבר לגדר</span>.





`,
5: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב <span onclick="nextTextPoint()">מה</span> יקרה פה




`,
6: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ב<span onclick="accumToNextTextPoint(event, 0.5)">יום</span> וב<span onclick="accumToNextTextPoint(event, 0.5)">שעה</span> של המוסררה מיקס.



`,
7: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו <span onclick="nextTextPoint()">עלים</span> שזזים ברוח


`,
8: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ו<span onclick="nextTextPoint()">נערים</span> משחקים כדורגל

`,
  9: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
ו<span onclick="nextTextPoint()">ערב</span>`,
10: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
וערב ו<span onclick="nextTextPoint()">שקט</span>`,
11: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
וערב ושקט ו<span onclick="nextTextPoint()">זהו</span>`,
12: `היית פה פעם?
כל שנה יש פה את מוסררה מיקס.
כשישבתי בבית לא הצלחתי להיזכר איפה שערי הכדורגל
או איפה ממוקמים הסלים או איך נראים הבתים שמעבר לגדר.
ניסיתי לחשוב מה יקרה פה
ביום ובשעה של המוסררה מיקס.
בטח יהיו עלים שזזים ברוח
ונערים משחקים כדורגל
וערב ושקט וזהו`
  
}
