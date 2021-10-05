var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var sensor = 0

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
  sensor = 2
}

if (sensor === 0) {
  alertTrigger.addEventListener('click', function () {
    alert('FELICIDADES ERES MAS JOTO QUE EL CUTE!!!', 'success')
  }) 
}else{
    false
}
var sensor = 2