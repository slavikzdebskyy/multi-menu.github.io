var link = document.getElementsByClassName('menu-link');
var menus = document.getElementsByClassName('menu-up');
var naviMenu = document.getElementById('navi-menu');
var menuMobile = document.getElementById('menu-mobile');
for (var i = 0; i < link.length; i ++) {
	if(link[i].dataset.submenu){
		link[i].addEventListener('click', subMenu);
	}
}
naviMenu.firstElementChild.addEventListener('click', upMenu);
menuMobile.addEventListener('click', mobileMenu);

function upMenu () {
	for(var i = 0; i < menus.length; i++){
		if(menus[i].classList.length > 1) {
			var activeMenu = menus[i];
			var prevMenu = menus[i - 1];
		}
		if(menus[i].dataset.menu === 'main'){
			var mainMenu = menus[i];
		}
	}
 if(this.innerHTML === 'ALL') {
	activeMenu.classList.add('animate-to-right-active');
	mainMenu.classList.add('active');
	mainMenu.classList.add('animate-to-right-prev');
	for(var j = naviMenu.children.length - 1; j > 0; j--){
		naviMenu.removeChild(naviMenu.children[j]);
	}
	setTimeout(function () {
		activeMenu.classList.remove('animate-to-right-active');
		activeMenu.classList.remove('active');
		mainMenu.classList.remove('animate-to-right-prev');
	}, 1000);
 } else {
	activeMenu.classList.add('animate-to-right-active');
	prevMenu.classList.add('active');
	prevMenu.classList.add('animate-to-right-prev');
	naviMenu.removeChild(naviMenu.children[naviMenu.children.length - 1]);
	setTimeout(function () {
		activeMenu.classList.remove('animate-to-right-active');
		activeMenu.classList.remove('active');
		prevMenu.classList.remove('animate-to-right-prev');
	}, 1000);
 }
} // END of function upMenu ();


function subMenu () {
	var activeMenu = this.parentElement.parentElement;
	var a = document.createElement('a');
	a.innerHTML = this.innerHTML.toUpperCase();
	a.addEventListener('click', upMenu);
	naviMenu.appendChild(a);
	for (var i = 0; i < menus.length; i ++) {
		if(this.dataset.submenu == menus[i].dataset.menu){
			var nextMenu = menus[i];
			activeMenu.classList.add('animate-to-left-active');		
			nextMenu.classList.add('active');
			nextMenu.classList.add('animate-to-left-next');		
		}
	}
	setTimeout(function () {
		nextMenu.classList.remove('animate-to-left-next');
		activeMenu.classList.remove('active');
		activeMenu.classList.remove('animate-to-left-active');
	}, 1000);
} // END of function subMenu ()

function mobileMenu () {
	var menu = document.getElementById('menu');
		this.classList.toggle('close-mobile');
		this.classList.toggle('open-mobile');	
		menu.classList.toggle('open');
}  // END of function mobileMenu ()

function sortByCategory(subcategory) {
	let images = document.getElementById('foods').getElementsByTagName('img');
		for(let i = 0; i < images.length; i++){
			if(images[i].className !== subcategory){
				images[i].style.display = 'none';
			} else {
				images[i].style.display = 'block';
			}
		}
}  // END of function sortByCategory(subcategory)

function sortCategory(category) {
	let images = document.getElementById('foods').getElementsByTagName('img');
	switch(category) {
		case 'vegetables':
			for(let i = 0; i < images.length; i++){
				if(images[i].className === 'stalk' || 
						images[i].className === 'roots-and-seeds' || 
						images[i].className === 'cabages' || 
						images[i].className === 'salads' || 
						images[i].className === 'muchrooms'){
							images[i].style.display = 'block';
				} else {
					images[i].style.display = 'none';
				}
			};
			break;
			case 'fruits':
				for(let i = 0; i < images.length; i++){
					if(images[i].className === 'citrus' || 
							images[i].className === 'barries' || 
							images[i].className === 'tropical' || 
							images[i].className === 'melons'){
								images[i].style.display = 'block';
					} else {
						images[i].style.display = 'none';
					}
				};
			break;
			case 'grains':
				for(let i = 0; i < images.length; i++){
					if(images[i].className === 'buckwheat' || 
							images[i].className === 'millet' || 
							images[i].className === 'quinoa' || 
							images[i].className === 'wild-rice' ||
							images[i].className === 'durum'){
								images[i].style.display = 'block';
					} else {
						images[i].style.display = 'none';
					}
				};
			break;
		default:
			for(let i = 0; i < images.length; i++){
				images[i].style.display = 'none';			
			}
	}

}//	END of function sortCategory(category)

function clearAllSorts() {
	let images = document.getElementById('foods').getElementsByTagName('img');
		for(let i = 0; i < images.length; i++){
			images[i].style.display = 'block';		
		}
}  // END of function sortByCategory(subcategory)