const bookmarks = document.querySelector('.bookmarks');
const inputBox = document.getElementsByTagName('input');
document.querySelector('.container').addEventListener("submit", saveBookmark);

function saveBookmark(e){
    e.preventDefault(); // stops form submit

    let siteName = document.querySelector('#websiteName').value;
    let siteUrl = document.querySelector('#websiteUrl').value; 

    if(siteName == "" || siteUrl == ""){
        alert('Please fill out all fields');
    } else {
        const bookMarkDiv = document.createElement('div');
        const a = document.createElement( 'a' );
        a.setAttribute("href", siteUrl);
        a.setAttribute("target","_blank");
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        a.textContent = siteName;
        bookMarkDiv.classList.add('bookmark-card');
        bookMarkDiv.appendChild(a); 
        bookMarkDiv.append(span);
        const bookmarks = document.querySelector('.bookmarks');
        bookmarks.appendChild(bookMarkDiv);
        document.querySelector('#websiteName').value = "";
        document.querySelector('#websiteUrl').value = "";

    }
    saveData();
}

bookmarks.addEventListener( "click" , function(e){
    if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", bookmarks.innerHTML);
}

function showTask(){
    bookmarks.innerHTML = localStorage.getItem("data");
}
showTask();

