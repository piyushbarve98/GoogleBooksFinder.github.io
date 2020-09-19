async function getBookInfo(){
    var title= '';
    var img = '';
    var author ='';
    var bookImg= document.querySelector('.bookImg');
    var division = document.querySelector('#result');
   
    if(division.getAttribute('class')!='result'){
    division.setAttribute('class','result');
}
    var response = await fetch(url);
    var data = await response.json();
    console.log(data.items);
    if(data.items.length>0){
    for(i=0; i<data.items.length; i++){
        titles = data.items[i].volumeInfo.title;
        author = data.items[i].volumeInfo.authors;
        link = data.items[i].volumeInfo.infoLink;
        if(data.items[i].volumeInfo.imageLinks!= undefined){
        var imgUrl = data.items[i].volumeInfo.imageLinks.thumbnail;
        }
        var para = document.createElement('p');
        var name = document.createTextNode(titles);
        var span = document.createElement('span');
        var authorsNode = document.createTextNode('By: '+author);
        var breaks = document.createElement('br');
        var img = document.createElement('img');
        var linkButton = document.createElement('button');
        var linkAnchor = document.createElement('a');
        var buttonText = document.createTextNode('Read More..');
        var div = document.createElement('div');
        img.setAttribute('src',imgUrl);
        linkAnchor.appendChild(buttonText);
        para.appendChild(name);
        span.appendChild(authorsNode);
        // division.appendChild(para);
        linkButton.appendChild(linkAnchor);
        linkAnchor.setAttribute('href',link);

        
        // division.appendChild(span);
        // division.appendChild(breaks);
        // division.appendChild(img);
        // division.appendChild(breaks);
        // division.appendChild(linkButton);
        div.appendChild(para);
        div.appendChild(span);
        div.appendChild(breaks);
        div.appendChild(img);
        div.appendChild(breaks);
        div.appendChild(linkButton);

        division.appendChild(div);

        
       

        
    }
}
else{
    alert('No Books Found');
}
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const btn= document.querySelector('.btn');
btn.addEventListener('click',function myBook(){
    
    var division = document.querySelector('#result');
    removeAllChildNodes(division);
    let bookName=document.querySelector('#book-search').value;
    if(bookName!=''){
    url= 'https://www.googleapis.com/books/v1/volumes?q=' + bookName;
    getBookInfo();
    }
    else{
        alert('Enter A book name');
    }
});

function dark(){
    const button= document.querySelector('.dark');
    if(button.textContent!= 'Light Mode'){
    button.textContent= 'Light Mode';
    }
    else{
        button.textContent='Dark Mode';
    }
    const body = document.querySelector('body');
    if(body.getAttribute('class')!='darkDiv'){
        body.setAttribute('class','darkDiv');
    }
    else{
        body.removeAttribute('class');
    }
    // console.log(body.getAttribute('class'));
}



