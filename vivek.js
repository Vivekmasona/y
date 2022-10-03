/*****pahilagana*******
Author: vivek-verma
Version: 1.0
URI: https://pahilagana.xyz/
*/
/*Few Stupid Inits*/
var vivekmasonaf1,vivekmasonav1;
var ytoldV=(new URLSearchParams(window.location.search)).get('v');
function vivekmasonaGetURL(o){
var sig=(new URLSearchParams(o)).get('s');
var url=(new URLSearchParams(o)).get('url');
sig=eval(vivekmasonav1+vivekmasonaf1+"('"+decodeURIComponent(sig)+"');");
url=decodeURIComponent(url);
return  url+"&sig="+sig;
}

/*Utils for Deciphers*/
var utils={
between:(haystack, left, right) => {
let pos;
if (left instanceof RegExp) {
const match = haystack.match(left);
if (!match) { return ''; }
pos = match.index + match[0].length;
} else {
pos = haystack.indexOf(left);
if (pos === -1) { return ''; }
pos += left.length;
}
haystack = haystack.slice(pos);
pos = haystack.indexOf(right);
if (pos === -1) { return ''; }
haystack = haystack.slice(0, pos);
return haystack;
},
cutAfterJSON :( mixedJson )=> {
let open, close;
if (mixedJson[0] === '[') {
open = '[';
close = ']';
} else if (mixedJson[0] === '{') {
open = '{';
close = '}';
}
if (!open) {
throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${mixedJson[0]}`);
}
let isString = false;
let isEscaped = false;
let counter = 0;
let i;
for (i = 0; i < mixedJson.length; i++) {
if (mixedJson[i] === '"' && !isEscaped) {
isString = !isString;
continue;
}
isEscaped = mixedJson[i] === '\\' && !isEscaped;
if (isString) continue;
if (mixedJson[i] === open) {
counter++;
} else if (mixedJson[i] === close) {
counter--;
}
if (counter === 0) {
return mixedJson.substr(0, i + 1);
}
}
throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
}
}
/*Decipher Code , Credits:NODE-YTDL-CORE*/
var extractFunctions = (body)=> {
const functions = [];
const extractManipulations = caller => {
const functionName = utils.between(caller, `a=a.split("");`, `.`);
if (!functionName) return '';
const functionStart = `var ${functionName}={`;
const ndx = body.indexOf(functionStart);
if (ndx < 0) return '';
const subBody = body.slice(ndx + functionStart.length - 1);
return `var ${functionName}=${utils.cutAfterJSON(subBody)}`;
};
const extractDecipher = () => {
const functionName = utils.between(body, `a.set("alr","yes");c&&(c=`, `(decodeURIC`);
if (functionName && functionName.length) {
const functionStart = `${functionName}=function(a)`;
const ndx = body.indexOf(functionStart);
if (ndx >= 0) {
const subBody = body.slice(ndx + functionStart.length);
let functionBody = `var ${functionStart}${utils.cutAfterJSON(subBody)}`;
functionBody = `${extractManipulations(functionBody)};${functionBody};`;
vivekmasonaf1=functionName;
vivekmasonav1=functionBody;
}
}
};
extractDecipher();
};
var scripts = document.getElementsByTagName('script');
for(var i=0;i<scripts.length;i++){
if(scripts[i].src.indexOf("/base.js") > 0){
var request = new XMLHttpRequest();
request.open("GET", scripts[i].src, false);
request.send(null);
extractFunctions(request.responseText);
}
}



function vivekmasonaDownVid(){
var vivekmasonaDown=document.createElement("div");
var vivekmasonaDownDiv=document.createElement("div");
vivekmasonaDownDiv.setAttribute("id","downvivekmasonadiv");
vivekmasonaDown.style.height="100%";
vivekmasonaDown.style.width="100%";
vivekmasonaDown.style.position="fixed";
vivekmasonaDown.style.display="flex";
vivekmasonaDown.style.background="rgba(0,0,0,.7)";
vivekmasonaDown.style.top="0";
vivekmasonaDown.style.left="0";
vivekmasonaDown.style.justifyContent="center";
vivekmasonaDown.style.alignItems="center";
vivekmasonaDown.style.zIndex="99999999999999";
vivekmasonaDownDiv.style.height="100%";
vivekmasonaDownDiv.style.width="100%";
vivekmasonaDownDiv.style.maxHeight="100%";
vivekmasonaDownDiv.style.overflow="scroll";
vivekmasonaDownDiv.style.background="rgba(44, 203, 183, 1)";
vivekmasonaDownDiv.style.justifyContent="center";
vivekmasonaDownDiv.style.alignItems="center";
vivekmasonaDownDiv.style.zIndex="99999999999999";
vivekmasonaDownDiv.style.padding="0px";
vivekmasonaDownDiv.style.borderRadius="5px";
vivekmasonaDownDiv.style.color="white";
vivekmasonaDownDiv.style.textAlign="center";
vivekmasonaDownDiv.innerHTML="<style>#downvivekmasonadiv a{text-decoration:none;color:white;} #downvivekmasonadiv li{list-style:none;color:#0dd;padding:0px;background:#fff;border:0px solid silver;margin:0px;text-align:lft;}</style>";
vivekmasonaDownDiv.innerHTML+="<span style='position:absolute;top:0px;left:0px;color:#04C5B9;font-size:30px;' onclick='"+"this.parentElement.parentElement.style.display="+'"'+"none"+'"'+";'>&#x2715;</span><iframe src='https://pgmoviepro.blogspot.com/' height='100%' width='100%'></iframe><ul id='listurl'>";
document.body.appendChild(vivekmasonaDown);
vivekmasonaDown.appendChild(vivekmasonaDownDiv);
if("ytplayer" in window){
for(x in ytplayer.config.args.raw_player_response.streamingData.formats){
if("signatureCipher" in ytplayer.config.args.raw_player_response.streamingData.formats[x]){
vivekmasonaDownDiv.innerHTML+="<li data-vivekmasonatit='"+ytplayer.config.args.title+"'  onclick='YTDownVid(this)'  data-vivekmasonaurl='"+vivekmasonaGetURL(ytplayer.config.args.raw_player_response.streamingData.formats[x].signatureCipher)+"'>"+  (ytplayer.config.args.raw_player_response.streamingData.formats[x].qualityLabel ) +"</li>" ;
}else{
vivekmasonaDownDiv.innerHTML+="<li data-vivekmasonatit='"+ytplayer.config.args.title+"'  onclick='YTDownVid(this)'  data-vivekmasonaurl='"+ytplayer.config.args.raw_player_response.streamingData.formats[x].url+"'>"+  (ytplayer.config.args.raw_player_response.streamingData.formats[x].qualityLabel ) +"</li>" ;
}}}else {
alert("AN ERROR OCCURED , PLEASE UPDATE GO-TO pahilagana WEBSITE");
}
}
function YTDownVid(o){
Android.downvid((o.getAttribute("data-vivekmasonatit")+".mp4"),o.getAttribute("data-vivekmasonaurl"),navigator.userAgent+"");
}
/*THE 0NE AND 0NLY FUNCTION*/
function pkc(){
if(window.location.href.indexOf("youtube.com/watch") > -1){
/*Dark and Light Mode*/
var c ="#000";
if(document.cookie.indexOf("f6=400") > -1){c ="#fff";}else{c="#000";}
/*Fetch The Dislikes*/
fetch("https://pahilagana.xyz?api="+(new URLSearchParams(window.location.search)).get('v'))
.then(response => {
return response.json();
}).then(jsonObject => {
if('dislikes' in jsonObject){
document.querySelectorAll('[aria-label="Dislike this video"]')[0].children[0].children[1].innerHTML=jsonObject.dislikes;
}
}).catch(error => {});
/*Check If Element Already Exists*/
if(document.getElementById("vivekmasonaMainDivE") == null){
function insertAfter(referenceNode, newNode) {try{referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);}catch{}}
var vivekmasonaMainDiv=document.createElement("div");
vivekmasonaMainDiv.style.height="50px";
vivekmasonaMainDiv.style.width="100%";
vivekmasonaMainDiv.style.display="flex";
vivekmasonaMainDiv.setAttribute("id","vivekmasonaMainDivE");
vivekmasonaMainDiv.style.alignItems="center";
vivekmasonaMainDiv.style.justifyContent="center";
vivekmasonaMainDiv.style.overflow="hidden";
insertAfter(document.getElementsByClassName('slim-video-action-bar-actions')[0],vivekmasonaMainDiv);
var vivekmasonaDownVidElem=document.createElement("div");
vivekmasonaDownVidElem.style.display="block";
vivekmasonaDownVidElem.style.height="90%";
vivekmasonaDownVidElem.style.width="auto";
vivekmasonaDownVidElem.style.textAlign="center";
vivekmasonaDownVidElem.style.marginRight="10px";
vivekmasonaDownVidElem.style.fontSize="12px";
vivekmasonaDownVidElem.innerHTML='	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#04C5B9" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>								<br><font color=#00cdb8><b>PG  DOWNLOAD';
vivekmasonaMainDiv.appendChild(vivekmasonaDownVidElem);
vivekmasonaDownVidElem.addEventListener("click",
function(){vivekmasonaDownVid();});
var vivekmasonaPIPVidElem=document.createElement("div");
vivekmasonaPIPVidElem.style.display="block";
vivekmasonaPIPVidElem.style.height="90%";
vivekmasonaPIPVidElem.style.width="auto";
vivekmasonaPIPVidElem.style.textAlign="center";
vivekmasonaPIPVidElem.style.fontSize="12px";
vivekmasonaPIPVidElem.style.marginLeft="10px";
vivekmasonaPIPVidElem.innerHTML='	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"   fill="#04C5B9" viewBox="0 0 24 24"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>								<br><font color=#00cdb8><b>PG  POPUP ';
vivekmasonaMainDiv.appendChild(vivekmasonaPIPVidElem);
vivekmasonaPIPVidElem.addEventListener("click",
function(){
document.getElementsByClassName('video-stream')[0].play();
try{document.getElementById("vivekmasonaMainAudDivE").remove();}catch{console.log("");}
Android.pipvid("pip");
});
var vivekmasonaAudElem=document.createElement("div");
vivekmasonaAudElem.style.display="block";
vivekmasonaAudElem.style.height="90%";
vivekmasonaAudElem.style.width="auto";
vivekmasonaAudElem.style.textAlign="center";
vivekmasonaAudElem.style.fontSize="12px";
vivekmasonaAudElem.style.marginLeft="20px";
vivekmasonaAudElem.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#04C5B9" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg><br><font color=#00cdb8><b>PG  MUSIC '
vivekmasonaMainDiv.appendChild(vivekmasonaAudElem);
vivekmasonaAudElem.addEventListener("click",
function(){
vivekmasonaAudPlayer();
});
}
/*Watch The old and New URL*/
if(ytoldV != (new URLSearchParams(window.location.search)).get('v')){
try{document.getElementById("vivekmasonaMainAudDivE").remove();}catch{console.log("");}
ytoldV=(new URLSearchParams(window.location.search)).get('v');
window.location.href=window.location.href;
}
}
}



/*vivekmasona Audio Player*/
function vivekmasonaAudPlayer(){
var vivekmasonaTitle="";
var vivekmasonaURL="";
if("ytplayer" in window){
for(x in ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats){
if(ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].itag == "140"){
if("signatureCipher" in ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x]){
vivekmasonaTitle=ytplayer.config.args.title ;
vivekmasonaURL=vivekmasonaGetURL(ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].signatureCipher);
}else{
vivekmasonaTitle=ytplayer.config.args.title;
vivekmasonaURL=ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].url;
}}}
try{document.getElementById("vivekmasonaMainAudDivE").remove();}catch{console.log("");}
var vivekmasonaAudDivElem=document.createElement("div");
var vivekmasonaAudPlayerElem=document.createElement("audio");
var vivekmasonaAudX=document.createElement("div");
vivekmasonaAudDivElem.style.position="fixed";
vivekmasonaAudDivElem.style.bottom="0";
vivekmasonaAudDivElem.style.left="0";
vivekmasonaAudDivElem.style.zIndex="99999999999";
vivekmasonaAudDivElem.style.height="70px";
vivekmasonaAudDivElem.style.width="100%";
vivekmasonaAudDivElem.style.background="#04C5B9";
vivekmasonaAudDivElem.setAttribute("id","vivekmasonaMainAudDivE");
vivekmasonaAudX.style.position="absolute";
vivekmasonaAudX.style.left="0px";
vivekmasonaAudX.style.height="40px";
vivekmasonaAudX.style.width="40px";
vivekmasonaAudX.style.background="rgba(0,0,0,.7)";
vivekmasonaAudDivElem.style.borderTop="0px solid #04C5B9";
vivekmasonaAudX.style.borderTop="0px solid #04C5B9";
vivekmasonaAudX.style.borderRight="0px solid #04C5B9";
vivekmasonaAudX.style.position="absolute";
vivekmasonaAudX.style.top="-43.25px";
vivekmasonaAudX.style.color="#04C5B9";
vivekmasonaAudX.style.textAlign="center";
vivekmasonaAudX.innerHTML="&#x2715;";
vivekmasonaAudX.style.fontSize="20px";
vivekmasonaAudPlayerElem.style.position="absolute";
vivekmasonaAudPlayerElem.style.top="-20px";
vivekmasonaAudPlayerElem.style.left="0";
vivekmasonaAudPlayerElem.style.height="80px";
vivekmasonaAudPlayerElem.style.width="100%";
vivekmasonaAudDivElem.innerHTML+="<style>audio::-webkit-media-controls-panel{background:#04C5B9;}</style>";
vivekmasonaAudPlayerElem.setAttribute("id","vivekmasonaaudss");
vivekmasonaAudPlayerElem.controls=true;
vivekmasonaAudPlayerElem.src=vivekmasonaURL;
document.body.appendChild(vivekmasonaAudDivElem);
vivekmasonaAudDivElem.appendChild(vivekmasonaAudPlayerElem);
vivekmasonaAudDivElem.appendChild(vivekmasonaAudX);
document.getElementsByClassName('video-stream')[0].pause();
vivekmasonaAudX.addEventListener("click",function(){this.parentElement.remove();});
/*Listen To the Song*/
vivekmasonaAudPlayerElem.onloadeddata = function() {
vivekmasonaAudPlayerElem.play();
Android.showToast("Now Playing \n"+vivekmasonaTitle);
Android.gohome("ok");
};
/*Watch The Audio Player*/
vivekmasonaAudPlayerElem.addEventListener("timeupdate",function(){
if(vivekmasonaAudPlayerElem.currentTime==vivekmasonaAudPlayerElem.duration){
window.location.href="https://m.youtube.com"+document.getElementsByTagName("lazy-list")[1].children[1].children[0].children[0].getAttribute("href")+"&auds=ab";
}
});
}
else {
alert("AN ERROR OCCURED , PLEASE UPDATE PGyt+");
}
}
setInterval(pkc,1);


/*YT ADS BLOCKER , I know it's Copy Paste*/
window.onload = function(){ 
var outerLayer = document.getElementsByClassName('video-ads ytp-ad-module');
var adPlayerOverlay = document.getElementsByClassName('ytp-ad-player-overlay'); // popup ads in video
var adImageOverlay = document.getElementsByClassName('ytp-ad-image-overlay');
var button = document.getElementsByClassName('ytp-ad-skip-button ytp-button');
var firstAd = document.getElementsByClassName('ytp-ad-text');
document.getElementsByClassName('video-stream')[0].muted=false;
function skipFirstInner(callback) {
if (adPlayerOverlay[0] && adPlayerOverlay.length > 0) {
adPlayerOverlay[0].style.visibility = 'hidden';
}
else if (adImageOverlay[0] && adImageOverlay.length > 0) {
adImageOverlay[0].style.visibility = 'hidden';
}
callback();
}
function clickSkipBtn() {
if(button[0] && button.length > 0) {
button[0].click();
}
}
setInterval(function(){ 
if (outerLayer && outerLayer.length > 0) {
clickSkipBtn();
skipFirstInner(function() {
if((firstAd && firstAd[2] && firstAd[2].innerHTML.includes('Ad')) ||
(firstAd && firstAd[1] && firstAd[1].innerHTML.includes('Ad')) ||
(firstAd && firstAd[0] && firstAd[0].innerHTML.includes('Ad'))) {
clickSkipBtn();
let videos = document.querySelectorAll('video');
for(let i=0; i<videos.length; i++) {
if(videos[i] && videos[i].duration) {
videos[i].currentTime = videos[i].duration;
}
}
}
});
}
}, 1);
if((new URLSearchParams(window.location.search)).get('auds') == "ab"){
vivekmasonaAudPlayer();
}
};
