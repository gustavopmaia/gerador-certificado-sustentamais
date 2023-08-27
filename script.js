var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('download-btn')

var image = new Image()
image.crossOrigin = 'anonymous'
image.src = 'certificado.jpg'
image.onload = function () {
  drawImage()
}
const date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
const now = `${day}-${month}-${year}`
let id = `ID: 71e39802-0ebc-4eca-8116-1ca928627717`

function drawImage() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  ctx.font = '20px monotype corsiva'
  ctx.fillStyle = '#605746'
  ctx.fillText(nameInput.value, 140, 170)
  ctx.font = '17px monotype corsiva'
  ctx.fillText(now, 125, 280)
  ctx.font = '10px monotype corsiva'
  ctx.fillStyle = '#8f8c88'
  ctx.fillText(id, 5, 345)
}

nameInput.addEventListener('input', function () {
  drawImage()
})

downloadBtn.addEventListener('click', function () {
  downloadBtn.href = canvas.toDataURL('image/jpg')
  downloadBtn.download = 'Certificate - ' + nameInput.value
})
