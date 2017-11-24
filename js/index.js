function openChat() {
	var frame = document.getElementById("chatframe");
	frame.className = "";
	var img = document.getElementById("chatBtn");
	img.className = "hide";
}

function closeChat() {
	var frame = document.getElementById("chatframe");
	frame.className = "hide";
	var img = document.getElementById("chatBtn");
	img.className = "";
}