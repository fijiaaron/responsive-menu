function toggleDisplay(selector, display='block')
{
	console.log("toggleMenu", selector, display);

	const target = document.querySelector(selector);
	
	if (target.style.display == 'none')
	{
		target.style.display = display;
	}
	else 
	{
		target.style.display = 'none';
	}
}