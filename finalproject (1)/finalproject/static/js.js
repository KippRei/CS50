var about = document.querySelector('#about');
var music = document.querySelector('#music');
var videos = document.querySelector('#videos');
var home = document.querySelector('#home');
var contact = document.querySelector('#contact');
var store = document.querySelector('#store');
var sfxBool = true;

about.addEventListener('mouseover', function hover(){this.style.textShadow = '5px 4px 5px white';});
about.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
music.addEventListener('mouseover', function hover(){this.style.textShadow = '5px 4px 5px white';});
music.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
videos.addEventListener('mouseover', function hover(){this.style.textShadow = '5px 4px 5px white';});
videos.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
home.addEventListener('mouseover', function hover(){this.style.textShadow = '5px 4px 5px white';});
home.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
contact.addEventListener('mouseover', function hover(){this.style.textShadow = '5px 4px 5px white';});
contact.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
store.addEventListener('mouseover', function hover(){this.style.textShadow = '5px 4px 5px white';});
store.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});

document.getElementById("menuIcon").addEventListener("click", ShowMenu);
document.addEventListener("click", ClickOffMenu);

var rect = document.getElementById("home").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
rect = document.getElementById("about").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
rect = document.getElementById("music").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
rect = document.getElementById("videos").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
rect = document.getElementById("store").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);


var menuContainer = document.getElementById("menu");
var menuItems = document.getElementsByClassName("menuItem");
var menuList = $( "#menuList" ).detach();
var isOpen = false;

document.getElementById("logo").addEventListener("click", () => {$( "#load" ).load("/home");});

var iconPos = 0;
var startPos = -1;
var startStop = false;
var menuItemAppear;


// TODO: what looks better on closemenu()? fading away tabs or immediately disappearing tabs? Need to adjust MovementTime ShowMenu and CloseMenu accordingly.
function MovementTimer() {
    menuItemAppear = setInterval( () => {
        iconPos = menuContainer.getBoundingClientRect().right;

        for (let i = 0; i < menuItems.length; i++)
        {
            console.log("menu items=" + menuItems[i].getBoundingClientRect().right);
            if (iconPos >= menuItems[i].getBoundingClientRect().right)
            {
                menuItems[i].style.opacity = "1";
            }
            /*else if (iconPos < menuItems[i].getBoundingClientRect().right + 100)
            {
                menuItems[i].style.opacity = "0";
            }*/
        }

        /*if (iconPos <= startPos && isOpen == false)
        {
            menuList.detach();
            clearInterval(menuItemAppear);
        }*/
    }, 100);
}

//TODO: change back to home when finished
$( "#load" ).load("/music");

function ShowMenu()
{
    if (isOpen == false)
    {
        startPos = menuContainer.getBoundingClientRect().right;
        menuContainer.style.left = "73vw";
        menuList.appendTo(" #menuLoc ");
        isOpen = true;
        MovementTimer();
    }

    else
    {
        CloseMenu();
    }
}

function CloseMenu()
{
    menuContainer.style.left = "0vw";
    isOpen = false;

    for (let i = 0; i < menuItems.length; i++)
    {
        menuItems[i].style.opacity = "0";
    }
    clearInterval(menuItemAppear);
    menuList.detach();
}

function ClickOffMenu()
{
    if (event.target.id !== "menuImg") {
        CloseMenu();
    }
}

function LoadURL(name, post=false)
{
    if (post == 'true')
    {
        $( "#load" ).load(name, {
           name: $("#username").val(),
           comment: $("#comment").val()
       });
    }
    else
    {
        $( "#load" ).load(name);
    }
}


//// Menu animation ////
// TODO: create disable/simple button to deactivate animations etc.

// Menu move across screen animation
/*
function MenuAnim()
{
    var w = window.innerWidth;
    var elem = document.getElementById("menuIconAnimation");
    var pos = 0;
    var id = setInterval(frame, 18);
    function frame()
    {
        if (pos >= w - 400)
        {
            clearInterval(id);
        }
        else
        {
            console.log((Math.cos(((pos+400)/w) * 3.14) * 10));
            pos += (40 + (Math.cos(((pos+400)/w) * 3.14) * 10));
            elem.style.left = pos + 'px';
        }
    }
}
*/


// Floating animation
function MenuMove()
{
    var elem = document.getElementById("menuIconAnimation");
    var pos = 0;
    var id = setInterval(frame, 75);
    function frame()
    {
        if (true)
        {
            if (pos >= 3.14 * 2000)
            {
                pos = 0;
            }
            else
            {
                pos += 3.14/32;
            }
        elem.style.top = Math.sin(pos)*5 + 'px';
        }

        else
        {
            clearInterval(id);
        }
    }
}

$( window ).on( "load",MenuMove());
//// Menu animation END ////


//// Typewriter code ////
// TODO: maybe make an array of up and down keystrokes to vary audio slightly/avoid machine gun effect

var lastKeyPressed = 0;
var curKeyPressed = 0;
var upSFX = true;

/* addeventlisteners by class rather than manually in html with onfocus, onfocusout
var typewriters = document.getElementsByClassName("typewriter");
console.log(typewriters);
for (var i = 0; i < typewriters.length; i++)
{
    typewriters[i].addEventListener("focus", Scribble);
    typewriters[i].addEventListener("focusout", NoScribble);
}
*/

function keyDown()
{
    curKeyPressed = event.keyCode;
    console.log(curKeyPressed);
    console.log(lastKeyPressed);
    if (curKeyPressed == lastKeyPressed)
    {
        return;
    }
    else
    {
        var keyDownSFX = new Audio('/static/typewriterdown.mp3');
        keyDownSFX.play();
        lastKeyPressed = curKeyPressed;
        upSFX = true;
    }
}

function keyUp()
{
    var keyUpSFX = new Audio('/static/typewriterup.mp3');
    lastKeyPressed = 0;
    keyUpSFX.play();
}

function Scribble()
{
    if (sfxBool == true)
    {
        document.addEventListener("keydown", keyDown);
        document.addEventListener("keyup", keyUp);
    }
    return;
}

function NoScribble()
{
    if (sfxBool == true)
    {
        document.removeEventListener("keydown", keyDown);
        document.removeEventListener("keyup", keyUp);
    }
    return;
}
//// Typewriter Code END ////


function SFXToggle()
{
    if (sfxBool == true)
    {
        sfxBool = false;
        var clickSFX = new Audio('/static/clickSFX.mp3');
        clickSFX.play();
        document.getElementById("sfxToggleText").innerHTML = "Off"
    }
    else
    {
        sfxBool = true;
        var clickSFX = new Audio('/static/clickSFX.mp3');
        clickSFX.play();
        document.getElementById("sfxToggleText").innerHTML = "On";
    }
}


/// Audio Player ///
$(function(){
    $("#amazingaudioplayer-1").bind("amazingaudioplayer.played", function(event, index){
        YTPause(null);
  });
});

function PlaySong(track)
{
    $("#amazingaudioplayer-1").data("object").audioRun(track, true);
}

function AudioPlayerPause()
{
    $(function(){$("#amazingaudioplayer-1").data("object").pauseAudio();});
}
/// END audio player ///


/// YouTube API control ///
//  This function creates an <iframe> (and YouTube player)
//  after the API code downloads.
var yTPlayerList = [{id:"player1", url:""}, {id: "player2", url:""}, {id:"player3", url:""}, {id: "player4", url:""}, {id:"player5", url:""}, {id: "player6", url:""}, {id:"player7", url:""}, {id: "player8", url:""}, {id: "player9", url:""}];
var curPlayer = [];

function onYouTubeIframeAPIReady()
{
     for (var i = 0; i < yTPlayerList.length; i++)
    {
        curPlayer.push(createPlayer(yTPlayerList[i]));
    }
}

 function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
}

//  The API will call this function when the video player is ready.
function onPlayerReady(event)
{
}

//  The API calls this function when the player's state changes.
function onPlayerStateChange(event)
{
    if (event.data == YT.PlayerState.PLAYING) {
        var vidUrl = event.target.getVideoUrl();
        AudioPlayerPause();
        YTPause(vidUrl);
    }
}

function YTPause(vidUrl)
{
    var j;

    for (j = 0; j < curPlayer.length; j++)
    {
        if (curPlayer[j].getVideoUrl() !== vidUrl)
        {
            curPlayer[j].pauseVideo();
        }
        else
        {
            continue;
        }
    }
}
/// END YT API ///


/// Music Page Code ///
function MusicPage()
{
    var CCAlbum = document.getElementsByClassName("CCAlbum");
    var AlchAlbum = document.getElementsByClassName("AlchAlbum");
    for (let i = 0; i < CCAlbum.length; i++)
        {
            CCAlbum[i].addEventListener("click", PopUpAlbum);
            CCAlbum[i].albumName = "CC";
        }

    for (let i = 0; i < AlchAlbum.length; i++)
        {
            AlchAlbum[i].addEventListener("click", PopUpAlbum);
            AlchAlbum[i].albumName = "Alch";
        }
}

function PopUpAlbum(event)
{
    let albumName = event.currentTarget.albumName;
    if (albumName === "CC")
    {
        let popupNode = document.getElementById("albumPopupBody");
        while (popupNode.firstChild)
        {
            popupNode.removeChild(popupNode.lastChild);
        }

        let node = document.createElement("IMG");
        node.setAttribute("src", "/static/cccover.jpg");
        document.getElementById("albumPopupBody").appendChild(node);
        $("#albumPopup").modal("show");
    }

    else if (albumName === "Alch")
    {
        let popupNode = document.getElementById("albumPopupBody");
        while (popupNode.firstChild)
        {
            popupNode.removeChild(popupNode.lastChild);
        }

        let node = document.createElement("IMG");
        node.setAttribute("src", "/static/alchcover.jpg");
        document.getElementById("albumPopupBody").appendChild(node);
        $("#albumPopup").modal("show");
    }
}