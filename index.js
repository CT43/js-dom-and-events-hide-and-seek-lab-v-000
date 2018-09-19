function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n
  }
}

function deepestChild() {
  let grands = document.getElementById('grand-node')
  while (grands.children[0] !== undefined) {
    grands = grands.children[0]
  }
  return grands
}
