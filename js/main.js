'use strict'

var gNumberStack
var gCount
var gInterval
var gLevel = 16

function oninit() {
  clearInterval(gInterval)
  gNumberStack = shuffle(gLevel)
  gCount = 1
  makeBoard(gLevel)
  createHeadSection()
}

function createHeadSection() {
  var elSpans = document.querySelectorAll('.section span')

  elSpans[0].innerText = '0:000'
  elSpans[1].innerText = gCount
}

function changeLevel(num) {
  gLevel = num
  oninit()
}

function makeBoard(size) {
  var length = size ** 0.5
  var strHTML = '<tbody>'

  for (let i = 0; i < length; i++) {
    strHTML += '<tr>'
    for (let j = 0; j < length; j++) {
      var num = gNumberStack.pop()
      strHTML += `<td class="btnNum" data-num="${num}" onclick="onNumClick(this)"> ${num}  </td>`
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody>'
  document.querySelector('.board').innerHTML = strHTML
}

function timer() {
  var startTime = Date.now()
  gInterval = setInterval(() => {
    document.querySelector('[data-timer]').innerText = ((Date.now() - startTime) / 1000).toFixed(3)
  }, 100)
}

function onNumClick(elBtn) {
  if (+elBtn.dataset.num !== gCount) return
  if (gCount === 1) timer()

  elBtn.classList.add('clicked')
  elBtn.disabled = true
  gCount++

  if (gCount == gLevel + 1) {
    clearInterval(gInterval)
    document.querySelector('.board').innerHTML = '<h1> you WON! </h1>'
    return
  }
  document.querySelector('[data-counter]').innerHTML = gCount
}
