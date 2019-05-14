/**
 * For a gpheader.html "onclick" event, get the html document matching this id
 *  name, stop displaying its siblings, and only display this as a div.
 * This is mainly used on index.html to only display the current div while 
 * hiding sibling divs, but it can be used anywhere.
 *  
 * @requires jquery in HTML files where used
 * 
 * @param {type} id the div id, which should match the HTML page name
 * @returns {undefined}
 */
function displaySingleDiv(id) {
    $.get(id + '.html', function (data) {
        $('#' + id).html(data).css("display", "block");
        $('#' + id).siblings().css("display", "none");
    });
}
/**
 * Get the html document matching this id name and display as a div.
 * This is mainly used on index.html to display menu, home, and group-projects-footer, 
 *  but it can be used anywhere.
 *  
 * @param {type} id the div id, which should match the HTML page name
 * @returns {undefined}
 */
function displayDiv(id) {
    $.get(id + '.html', function (data) {
        $('#' + id).html(data).css("display", "block");
    });
}

var modal = document.getElementById("myModal");

var img = document.getElementById("flyer");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display = "none";
}