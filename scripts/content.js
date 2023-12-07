console.log("bar")
async function QuickerBase() {
    
    var url = document.location.href;
    var realm = (url.split(".")[0]) + ".quickbase.com/";
    
    var curDbid = (url.split("db/")[1]).split("?")[0];
    
    var appDbid = document.querySelector("#tblNavHome a").getAttribute("href").replace("/db/", "")
    console.log("appdbid", appDbid)
    /* async function addDbibFetch() {
        const response = await fetch(realm + ".quickbase.com/db/" + curDbid + "/");
        
        var appDbid = response.url
        appDbid = appDbid.split("/").slice(-1)[0]
        
        return appDbid
    } */
    
    // var appDbid = await addDbibFetch()
    
    function addButtons() {
    var addButt = document.getElementsByClassName(" ButtonText")
    //console.log(addButt)
    var bonusLinkColor = getComputedStyle(document.getElementsByClassName(" ButtonText")[0]).color;
    
    var bonusLinksArray = [];
    var importUrl = [url.split("=")[0] + "=ImportList&dbid=" + curDbid + "&confMsg=", "Imports"];
    bonusLinksArray.push(importUrl)
    var fieldsUrl = [url.split("=")[0] + "=listfields", "Fields"];
    bonusLinksArray.push(fieldsUrl)
    var rShipUrl = [url.split("=")[0] + "=Relationships", "RShips"];
    bonusLinksArray.push(rShipUrl)


    var appLinksArray = []
    var relDiagramUrl = ["reldiagram", "RelDiagram"];
    appLinksArray.push(relDiagramUrl)

    var rolesUrl = ["AppRolesList", "Roles"];
    appLinksArray.push(rolesUrl)


    var bonusLinks = ""

    function addLink (url, index) {
        if(bonusLinks!="") {
            bonusLinks += " <span style='text-decoration: none; color: " + bonusLinkColor + "' class='ButtonText BrandBarButton'>|</span> ";
        }
        bonusLinks += "<a style='text-decoration: none; color: " + bonusLinkColor + "' class='ButtonText BrandBarButton'  href='" + url[0] + "'>" + url[1] + "</a>";
    }
    bonusLinksArray.forEach(addLink);

    function addAppLink (url, index) {
        if(bonusLinks!="") {
            bonusLinks += " <span style='text-decoration: none; color: " + bonusLinkColor + "' class='ButtonText BrandBarButton'>|</span> ";
        }
        bonusLinks += "<a style='text-decoration: none; color: " + bonusLinkColor + "' class='ButtonText BrandBarButton'  href='" + realm + "db/" + appDbid + "?a=" + url[0] + "'>" + url[1] + "</a>";
    }  
    appLinksArray.forEach(addAppLink);

    var customText = document.getElementById("globalAddRecordButton")

    console.log(customText)
    //console.log(bonusLinks);

    customText.insertAdjacentHTML("beforebegin","<span style='line-height:24px; margin-right: 5px;'>" + bonusLinks + "</span>");
    }
    addButtons()
  
}

window.addEventListener('load', 
  
QuickerBase(), false);

