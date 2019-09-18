function spanContent(content) {
  console.log(content);
  if(content[content.length-1] == '\n');
    content = content.slice(0,-1);
  return content
}

function changeProjectFunc() {
  var projects = ['foldingathome', 'BritBot'];

  projectSpan = document.getElementById('project').value;
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
  var content = document.getElementById('project');
  content.addEventListener('keydown', changeProjectFunc());
}

setup();
