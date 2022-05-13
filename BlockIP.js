function preloadFunc()
{
var ip = userip;
var bannedips=[
 "162.158.179.239","202.92.7.198",
]
var handleips=bannedips.join("|")
handleips=new RegExp(handleips, "i")

if (ip.search(handleips)!=-1){ 
window.location.replace("https://gotrangtri.vn/");
document.write('<!---->');
}
}
window.onpaint = preloadFunc();

