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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Phone = function () {
	function Phone(data) {
		_classCallCheck(this, Phone);

		this.data = data;
	}

	_createClass(Phone, [{
		key: 'renderPhone',
		value: function renderPhone() {
			var data = this.data;

			for (var i = 0; i < data.length; i++) {
				Phone.createCard(data[i]);
			}
		}
	}], [{
		key: 'createCard',
		value: function createCard(data) {
			var view = document.getElementById('list');
			var item = document.createElement('li');

			item.setAttribute('id', data.id);
			item.classList.add('phone-item');
			item.innerHTML = this.template(data);

			view.appendChild(item);
		}
	}, {
		key: 'template',
		value: function template(data) {
			return '<figure class="phone-item__visual">\n\t\t\t\t<img src="' + data.imageUrl + '" alt="phone">\n\t\t\t\t<figcaption class="phone-item__name">\n\t\t\t\t\t' + data.name + '\n\t\t\t\t</figcaption>\n\t\t\t</figure>';
		}
	}]);

	return Phone;
}();

fetch('https://raw.githubusercontent.com/odesskij/AngularPhoneCat/master/src/api/phones.json').then(function (response) {
	return response.json();
}).then(function (phones) {
	console.log(phones);

	// renderCards(phones);

	new Phone(phones).renderPhone();
});