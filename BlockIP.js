<script type="text/javascript" src="http://l2.io/ip.js?var=userip"></script>
<script language="Javascript">
function preloadFunc()
{
var ip = userip;
var bannedips=[
 "162.158.179.239", "27.70.213.222", 
]
var handleips=bannedips.join("|")
handleips=new RegExp(handleips, "i")

if (ip.search(handleips)!=-1){ 
window.location.replace("http://google.com");
document.write('<!--');
}
}
window.onpaint = preloadFunc();
</script>
