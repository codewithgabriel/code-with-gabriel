let notificationBox = document.querySelector("div.notification-box");
let isDark = false;

if (!navigator.onLine){
  openNotificationBox("Network Connection Error!")
}


if (document.cookie != "" ) {
    isDark=  document.cookie.split( ';' ).map( function( x ) {
            return x.trim().split( '=' );
            }).reduce( function( a, b ) {
            a[ b[ 0 ] ] = b[ 1 ]; return a;
            }, {} )[ "isDark" ]

            if (isDark === "false") {
                let elem = document.querySelector("a#toggleTheme");
                elem.className = "fas fa-toggle-off";
                // window.location.reload();
            }else if (isDark == "true"){
              linkElem.href  = "/css/dark-style.css";
                let elem = document.querySelector("a#toggleTheme");
                elem.className = "fas fa-toggle-on";
            }
}


function bannerAnimate (message) {
  let interval;

  let indexPageBanner = message;
  let indexPageBanner2 = "Start Here";


  let bannerArr  = indexPageBanner.split("");
  let bannerElem = document.querySelector("#page-banner");
   bannerElem.innerHTML = ""


  let i=0;
  let counter;


  let stopBanner = () => {
    clearInterval(interval);
  }

  appendText = ()=>{
    bannerElem.innerHTML += bannerArr[i];
    if ( i  ==   bannerArr.length -1 ) {
      i = 0;
      stopBanner();

    }else {

      i+=1;

    }
  }


  interval = setInterval(appendText , 150.0);

}







if (document.cookie == ""){
    let btnAgree = document.createElement("button");
    btnAgree.className = "btn";
    btnAgree.innerText="Agree";
    btnAgree.style.margin = "5px";


    let btnDisAgree = document.createElement("button");
    btnDisAgree.innerText= "Disagree";
    btnDisAgree.className = "btn";
    btnDisAgree.style.margin = "5px";



    let message = "cwg.com uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to our Privacy Policy and our Cookies Policy";
    notificationBox.appendChild(btnAgree);
    notificationBox.appendChild(btnDisAgree);


    openNotificationBox (message);
    btnAgree.onclick =  ()=>{
        cookiePolicy(true);
        notificationBox.removeChild(btnAgree);
        notificationBox.removeChild(btnDisAgree);

    }
    btnDisAgree.onclick = ()=> {
        notificationBox.style.backgroundColor = "#cb4335";
        cookiePolicy(false);
    }

}




function openNotificationBox (message) {
    let elem  = document.querySelector("section.notification");
    elem.style.display = "block";
    document.querySelector("#notification-text").innerHTML = message;

}

function closeNotificationBox () {
    let elem  = document.querySelector("section.notification");
    elem.style.display = "none";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function deleteCoookie(name , value) {
    document.cookie += name + "=" + "" + ";";
}
function cookiePolicy(state){
    if (state) {
        setCookie("cookie_privacy_accept" , true, 300);
        closeNotificationBox()
    } ;
    if (!state) openNotificationBox("please agree cookie  and privacy policies to continue.") ;

}

let loginValidator = (event) => {
    notificationBox.style.backgroundColor="#117864";
    event.preventDefault()
    openNotificationBox("please Validate logins");
}

function CreateAccount(event) {
    event.preventDefault();
    notificationBox.style.backgroundColor = " #8e44ad";
    openNotificationBox("please Validate logins");
}




function changeTheme () {
  let Reload= () =>{
      window.location.reload();
  }

    isDark = !isDark;
    let elem = document.querySelector("a#toggleTheme");
    if (isDark === false) {
        elem.className = "fas fa-toggle-off";
    }else {
        elem.className = "fas fa-toggle-on";

    }
    setCookie("isDark" , isDark) , 300;
    setTimeout(Reload , 2000);

}







// let isCaptionOpen = true;



function openPreview(ev){
  previewElem.style.display="flex";

}

function toggleCaption(elem , ev) {
  let feedCaption = document.querySelector(elem);
    feedCaption.style.height = "auto";
    feedCaption.style.overflow = "visible";

    ev.target.className = "fas fa-chevron-up";
    ev.target.style.display = "none";
}
function getCaptionValue(ev) {
  let feedCaption = document.querySelector("#feed-preview-caption");
  feedCaption.innerText =  ev.target.value;
}
function sendPostData(){
  // let articleElem = document.querySelector("textarea#article");
  let photoElem = document.querySelector('#photo-input');
  let videoElem = document.querySelector('#video-input');
  let previewElem  = document.querySelector(".preview");
  let postData = {};



if (photoElem.files.length > 0 || videoElem.files.length > 0 ) {
    postData.photoFiles = photoElem.files;
    postData.videoFiles = videoElem.files;
    postData.datePosted = new Date().getTime();
    postData.postBy = "@gabriel";
    postData.postId = Math.random();
    // postData.caption = articleElem.value;

}else {
    openNotificationBox("no data submited");
}


if (photoElem.files.length > 1 || videoElem.files.length > 1 ){
  openNotificationBox("Media too heavy!");
  photoElem.files = "";
  videoElem.files = "";

}else {
  let picture = photoElem.files[0];
  let video = videoElem.files[0];



  if ( picture != undefined ) {
    if (picture.type == "image/jpeg" ||  picture.type == "image/png") {
          previewElem.style.display="flex";
          let fileUrl = URL.createObjectURL(picture);
          let img = document.querySelector('#imgTag');
          img.style.display = "block";
          img.className = "responsive-img";
          img.src = fileUrl;
          img.onload = function() {
          URL.revokeObjectURL(this.src);
          }
      openNotificationBox("Media pasted!");
    }else {
      openNotificationBox("Invalid picture format");
    }
  }




  if ( video != undefined ) {
    if (video.type == "video/mp4" || video.type == "video/mp3") {
      previewElem.style.display="flex";
      let fileUrl = URL.createObjectURL(video);
      let videoTag= document.querySelector('#videoTag');
      videoTag.style.display = "block";
      videoTag.className = "responsive-img";
      videoTag.src = fileUrl;
      videoTag.onload = function() {
      URL.revokeObjectURL(this.src);
    }
      openNotificationBox("Media pasted!");
    }else {
      openNotificationBox("invalid video format");
    }


  }

}



}



let isopen = false;
function toggleFeedMenu() {
  let lfp = document.querySelector(".left-feed-panel");
  let mfp = document.querySelector(".main-feed-panel");
  let hider = document.querySelector('.hider');
  let hiderItem = document.querySelector('#toggleMenu');

  if (isopen == false) {
    hiderItem.className = "fas fa-angle-right";
    hiderItem.style.color = "black";
    lfp.style.transition = "1s";

    lfp.style.display = "none";
    mfp.style.width = "100%";
    hider.style.width="2%";

    mfp.style.marginLeft = 0;
  }else if(isopen == true) {
    hiderItem.className = "fas fa-angle-left";
    hiderItem.style.color = "white";

    lfp.style.display = "block";
    mfp.style.width = "75%";
    hider.style.width="25%";
    mfp.style.marginLeft = "25%";
  }
  isopen = !isopen;

}


function closeSmallHeader(ev) {
  const elem = document.querySelector('.small-header');
  elem.style.display = "none";
}


function openSmallHeader() {
  const elem = document.querySelector('.small-header');
  elem.style.display = "block";

}
