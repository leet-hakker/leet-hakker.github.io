function changeProjectFunc(content) {
  var projects = ['foldingathome', 'BritBot'];
  if (projects.includes(content)) {
    projectExampleLink = document.getElementById('projectExample');
    projectCodeLink = document.getElementById('projectCode');

    projectExampleLink.href = `${content}Example.html`;
    projectExampleLink.classList.add('var-link');
    projectCodeLink.href = `https://github.com/thenamesweretakenalready/${content}`;
    projectCodeLink.classList.add('var-link');
  }
  else {
    projectExampleLink = document.getElementById('projectExample');
    projectCodeLink = document.getElementById('projectCode');

    projectExampleLink.href = '#';
    projectExampleLink.classList.remove('var-link');
    projectCodeLink.href = '#';
    projectCodeLink.classList.remove('var-link');
  }
}

function linkTimeoutPulse() {
  funcs = document.querySelectorAll('.func-link')
  for (var i = 0; i < funcs.length; i++){
    funcs[i].classList.add('func-underline');
  }
  strs = document.querySelectorAll('.str-link')
  for (var i = 0; i < strs.length; i++){
    strs[i].classList.add('str-underline');
  }
  vars = document.querySelectorAll('.var-link')
  for (var i = 0; i < vars.length; i++){
    vars[i].classList.add('var-underline');
  }
}

function LinkClearTimeout(timeout) {

  funcs = document.querySelectorAll('.func-link')
  for (var i = 0; i < funcs.length; i++){
    funcs[i].classList.remove('func-underline');
  }
  strs = document.querySelectorAll('.str-link')
  for (var i = 0; i < strs.length; i++){
    strs[i].classList.remove('str-underline');
  }
  vars = document.querySelectorAll('.var-link')
  for (var i = 0; i < vars.length; i++){
    vars[i].classList.remove('var-underline');
  }
  timeout = setTimeout(linkTimeoutPulse, 2000);
}

var timeout;


timeout = setTimeout(linkTimeoutPulse, 2000);
document.addEventListener('mousemove', function() {
  clearTimeout(timeout);
  LinkClearTimeout(timeout);
});
