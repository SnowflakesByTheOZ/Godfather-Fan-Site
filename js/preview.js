let postContent = document.getElementById('content');


let fullText = postContent.innerHTML;

const previewText = fullText.split(' ').slice(0,20).join(' ');

export let wtf = previewText.toString()

// console.log(wtf)




