function spanContent(span) {
  console.log(span);
  var innerText = span.innerHTML;
  console.log(innerText)
  if(innerText[innerText.length-1] === '\n');
    innerText = innerText.slice(0,-1);
  return innerText
}

function changeProjectFunc() {
  var projects = ['foldingathome', 'BritBot'];

  projectSpan = document.querySelectorAll('#projectContent');
  console.log(projectSpan);
  content = spanContent(projectSpan);
  if (projects.includes(content)) {
    projectExampleLink = document.querySelectorAll('#projectExample');
    projectCodeLink = document.querySelectorAll('#projectCode');

    projectExampleLink.href = `${content}Example.html`;
    projectCodeLink.href = `${content}Code.html`;
  }
}

function setup() {
  content = document.querySelectorAll('#projectContent');
  content.addEventListener('change', changeProjectFunc());
}

setup();
