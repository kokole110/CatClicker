
// count the number of clicks on the cat images and show it in the text
let counterGrey = 0;
let counterRed = 0;


// create a new cat image element and put it in the dom
let $newCat = '<div class="cat-img"><h3 class="red">Red kitten</h3><img class="red" src="images/cat1.jpg" alt="another cat picture"></div>'
$('.container').append($newCat);

// create click event
$('img').click(function(){
	if ($(this).hasClass('grey')) {
		counterGrey+=1;
		$('h3.grey').html("Grey kitten - " + counterGrey);

	} else if ($(this).hasClass('red')) {
		counterRed+=1;
		$('h3.red').html("Red kitten - " + counterRed);
	}
	
});




