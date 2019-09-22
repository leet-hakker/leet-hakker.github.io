function changeProjectFunc(content) {
  var projects = ['foldingathome', 'BritBot'];
  console.log(content);
  if (projects.includes(content)) {
    projectExampleLink = document.getElementById('projectExample');
    projectCodeLink = document.getElementById('projectCode');

    projectExampleLink.href = `${content}Example.html`;
    projectExampleLink.style.textDecoration = 'underline';
    projectCodeLink.href = `https://github.com/thenamesweretakenalready/${content}`;
    projectCodeLink.style.textDecoration = 'underline'
  }
}
