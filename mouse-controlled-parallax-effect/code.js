window.addEventListener("load", function() {
	const container = document.querySelector("[data-parallax]");
	const childNodes = container.children;
	for (let n = 0; n < childNodes.length; n++) {
		childNodes[n].setAttribute("data-index", n + 1);
	}
	container.addEventListener("mousemove", function(e) {
		let elms = this.children;
		console.log(elms);
		for (let c = 0; c < elms.length; c++) {
			const motion = parseInt(elms[c].getAttribute("data-index")) / 10;
			const x = e.clientX * motion + "px";
			const y = e.clientY * motion + "px";
			elms[c].style.backgroundPosition = x + " " + y;
		}
	});
});
