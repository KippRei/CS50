var about = document.querySelector('#about');
var music = document.querySelector('#music');
var home = document.querySelector('#home');
var contact = document.querySelector('#contact');
var videos = document.querySelector('#store');

about.addEventListener('mouseover', function hover(){this.style.textShadow = '7px 7px 7px white';});
about.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
music.addEventListener('mouseover', function hover(){this.style.textShadow = '7px 7px 7px white';});
music.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
home.addEventListener('mouseover', function hover(){this.style.textShadow = '7px 7px 7px white';});
home.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
contact.addEventListener('mouseover', function hover(){this.style.textShadow = '7px 7px 7px white';});
contact.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});
store.addEventListener('mouseover', function hover(){this.style.textShadow = '7px 7px 7px white';});
store.addEventListener('mouseleave', function leave(){this.style.textShadow = '3px 2px 4px #5b53a7';});

document.getElementById("menuButton").addEventListener("click", ShowMenu);
var menuList = $( "#menuList" ).detach();
var isOpen = false;

document.getElementById("logo").addEventListener("click", function() {$( "#load" ).load("/home");});
$( "#load" ).load("/home");

function ShowMenu()
{
    if (isOpen == false)
    {
        menuList.appendTo(" #menuLoc ");
        isOpen = true;
    }
    else
    {
        menuList.detach();
        isOpen = false;
    }
}

function LoadURL(name)
{
    ShowMenu();
    $( "#load" ).load(name);
}

/*function MyMove()
{
    console.log( "ready!" );
    var w = window.innerWidth;
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame()
    {
        if (pos >= w)
        {
            clearInterval(id);
            document.getElementById("menuButton").addEventListener("click", ShowMenu);
        }
        else
        {
            pos += 10;
            elem.style.left = pos + 'px';
        }
    }
}*/


// TODO: create disable/simple button to deactivate animations etc.
function MenuMove()
{
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 150);
    function frame()
    {
        if (true)
        {
            if (pos >= 3.14 * 2)
            {
                pos = 0;
            }
            else
            {
                pos += 3.14/16;
            }
        elem.style.top = Math.sin(pos)*5 + 'px';
        }

        else
        {
            clearInterval(id);
        }
    }
}

//$( window ).on( "load", MyMove());

$( window ).on( "load",MenuMove());

/* TODO: Need To Remove Image After Open/Close to avoid resizing issues*/
function CloseAnim(pageName)
{
    /*var w = window.innerWidth;

    if (w >= 6)
    {

        $("#load").load("/templates/about.html")
        return;
    }

    else
    {
        document.getElementById("menuList").style.visibility = "hidden";
        document.getElementById("menuButton").removeEventListener("click", ShowMenu);
        console.log("close");
        var elem = document.getElementById("animate");
        var pos = w;
        var id = setInterval(frame, 10);
        function frame()
        {
            if (pos <= 0)
            {
                clearInterval(id);
                var clear = document.getElementsByClassName("clear");;

                for (var i = 0; i < clear.length; i++)
                {
                    clear[i].remove();
                }*/

                switch (pageName)
                {
                    case "goHome":
                        console.log("asdbvgfvae");
                        $( "#load" ).load("/contact.html");

                        break;

                    case "goAbout":
                        aboutPg.appendTo("body");
                        break;

                    case "goContact":
                        contactPg.appendTo("body");
                        break;

                    case "goMusic":
                        musicPg.appendTo("body");
                        break;

                    case "goStore":
                        storePg.appendTo("body");
                        break;

                    default:
                        homePg.appendTo("body");
                }
                /*

                MyMove();
            }
            else
            {
                pos -= 10;
                elem.style.left = pos + 'px';
            }
        }
    }*/
}