function search(info)
{
 var searchstring = info.selectionText;
 chrome.tabs.create({
	url: "https://ncore.cc/torrents.php?mire=" + searchstring + "&miben=name&tipus=all_own&submit.x=0&submit.y=0&tags="})
}

chrome.contextMenus.create({title: "Ncore letöltés", contexts:["selection"], onclick: search});
