'use strict';

// function variant
/*function renderCards(data) {
	for (let i = 0; i < data.length; i++) {
		createCard(data[i]);
	}
}

function createCard(data) {
 	const view = document.getElementById('list');
	const item = document.createElement('li');

	item.classList.add('phone-item');
	item.innerHTML = phoneTemplate(data);

	view.appendChild(item);
}

function phoneTemplate(data) {
	return `<figure class="phone-item__visual">
				<img src="${data.imageUrl}" alt="">
				<figcaption class="phone-item__name">
					${data.name}
				</figcaption>
			</figure>`;
}*/

class Phone {

	constructor(data) {
		this.data = data;
	}

	static createCard(data) {
		const view = document.getElementById('list');
		const item = document.createElement('li');

		item.setAttribute('id', data.id);
		item.classList.add('phone-item');
		item.innerHTML = this.template(data);

		view.appendChild(item);
	}

	renderPhone() {
		const data = this.data;

		for (let i = 0; i < data.length; i++) {
			Phone.createCard(data[i]);
		}
	}

	static template(data) {
		return `<figure class="phone-item__visual">
				<img src="${data.imageUrl}" alt="phone">
				<figcaption class="phone-item__name">
					${data.name}
				</figcaption>
			</figure>`;
	}

}


fetch('https://raw.githubusercontent.com/odesskij/AngularPhoneCat/master/src/api/phones.json')
	.then(function(response) {
		return response.json();
	}).then(function(phones) {
		console.log(phones);

	// renderCards(phones);

	new Phone(phones).renderPhone();
});