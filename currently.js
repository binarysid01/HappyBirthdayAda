// LAST UPDATED ON...
{
    let lastupdate = document.querySelector('#lastupdate');
    // Get HTML content
    let html = lastupdate.innerHTML;
    // Set HTML content
    lastupdate.innerHTML = '2024.02.08';
}
// FEATURED PAGE
{
    let featuredpage = document.querySelector('#featuredpage');
    // Get HTML content
    let html = featuredpage.innerHTML;
    // Set HTML content
    featuredpage.innerHTML = '<div class="left" id="featuredpage"><h2>Featured Page</h2>';

    featuredpage.innerHTML += '<a tabindex="0" href="/Notebook/Gemsh/01.html"><img src="/Assets/Web/gemsh.png" alt="Page preview" class="feature"><p>Genshin Impact Diary <img src="/Assets/Pixels/Sky/16.gif" alt=""></p></a>';

    featuredpage.innerHTML += '<p>Commiserate with me in my gacha addiction~│</p>';

    featuredpage.innerHTML += '</div>';
}
//////////////////////// SIDEBAR - RIGHT ////////////////////////
{
    let cultivating = document.querySelector('#cultivating');
    // Get HTML content
    let html = cultivating.outerHTML;
    // Set HTML content
    cultivating.outerHTML = '<span class="highlight" id="cultivating" title="&#10047; Truthseeking &#10047;">Wickedness</span>';
} {
    let reading = document.querySelector('#reading');
    // Get HTML content
    let html = reading.outerHTML;
    // Set HTML content
    reading.outerHTML = '<span class="highlight" id="reading" title="&#10047; Nothing of value &#10047;">N/A</span>';
} {
    let listening = document.querySelector('#listening');
    // Get HTML content
    let html = listening.outerHTML;
    // Set HTML content
    listening.outerHTML = '<span class="highlight" id="listening" title="&#10047; by Toshio Masuda &#10047;">Mushishi OST</span>';
} {
    let writing = document.querySelector('#writing');
    // Get HTML content
    let html = writing.outerHTML;
    // Set HTML content
    writing.outerHTML = '<span class="highlight" id="writing" title="&#10047; Nothing of value &#10047;">N/A</span>';
} {
    let tarotcard = document.querySelector('#tarotcard');
    // Get HTML content
    let html = tarotcard.outerHTML;
    // Set HTML content
    tarotcard.outerHTML = '<a class="highlight" id="tarotcard" href="/Diary/24/february.html" title="&#10047; February &#10047;">The Magician</a>';
    // Don't forget to update the diary link!!!!!
}
//////////////////////// SIDEBAR - LEFT ////////////////////////
{
    let stickercount = document.querySelector('#stickercount');
    // Get HTML content
    let html = stickercount.innerHTML;
    // Set HTML content
    stickercount.innerHTML = '4,213';
}
//////////////////////// NAVIGATION DIARY LINK ////////////////////////
{
    let diary = document.querySelector('#diary');
    // Get HTML content
    let html = diary.outerHTML;
    // Set HTML content
    diary.outerHTML = '<a href="/Diary/24/february.html" id="diary"><span>Diary</span></a>';
}