import "./style.scss";
import * as data from './data.json';

import { capitalize } from "./functions";
import { getData, getLanguages, getAccents, getAccentsForLanguage, getGenders, getAgeBrackets } from "./api";

let blocked;

//let data;
let languages;
let accents;
let genders;
let ages;


window.addEventListener('load', async() => {
    blocked = false;

    createForm();

    languages = await getLanguages(data);
    accents = await getAccents(data);
    genders = await getGenders(data);
    ages = await getAgeBrackets(data);

    console.log(languages);


    if (languages.length > 0) {
        populate('language', languages);
    }

    accents = await getAccents();
    if (accents.length > 0) {
        populate('accent', accents);
    }

    genders = await getGenders();
    if (genders.length > 0) {
        populate('gender', genders);
    }

    ages = await getAgeBrackets();
    if (ages.length > 0) {
        populate('age', ages);
    }
});

function populate(id, data, selected = null) {
    const combobox = document.getElementById(id);
    const event = new CustomEvent('populate', { detail: { data: data, selected: selected } });
    combobox.dispatchEvent(event);
}

function unpopulate(id) {
    const combobox = document.getElementById(id);
    const event = new CustomEvent('unpopulate');
    combobox.dispatchEvent(event);
}

function createForm() {
    const form = document.createElement('form');
    const h1 = document.createElement('h1');
    const textarea = document.createElement('textarea');

    form.setAttribute('action', '');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'myform');

    h1.innerHTML = 'Text-to-speech API';

    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('placeholder', 'Add text here');

    form.appendChild(h1);
    form.appendChild(createComboBox('language'));
    form.appendChild(createComboBox('accent'));
    form.appendChild(createComboBox('gender'));
    form.appendChild(createComboBox('age'));
    form.appendChild(createComboBox('name'));
    form.appendChild(textarea);
    form.appendChild(createButton('send'));

    document.getElementById('container').appendChild(form);
}

function createButton(id) {
    const button = document.createElement('button');
    switch (id) {
        case 'send':
            button.setAttribute('id', id);
            button.innerHTML = capitalize(id);
            button.addEventListener('click', async(event) => {
                event.preventDefault();
                const textarea = document.getElementById('textarea');
                const text = textarea.value.trim();
                textarea.value = '';
                if (!blocked) {
                    console.log('start');
                    console.log('stop');
                }
            });
            break;
    }
    return button;
}

function createComboBox(id) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const option = document.createElement('option');

    label.setAttribute('for', id);
    label.innerHTML = capitalize(id);

    option.setAttribute('value', '');
    option.setAttribute('selected', 'selected');
    option.innerHTML = 'Choose ' + id.toLowerCase();

    select.setAttribute('id', id);
    select.appendChild(option);

    select.addEventListener('mousedown', () => {
        select.style.backgroundColor = null;
        console.log('mousedown');
    });

    select.addEventListener('populate', (event) => {
        const values = event.detail.data;
        const selected = event.detail.selected;
        values.forEach((value) => {
            if (value !== undefined && value !== '') {
                const option = document.createElement('option');
                option.setAttribute('value', value);
                option.innerHTML = capitalize(value);
                select.appendChild(option);
            }
        });
        select.selectedIndex = selected !== null ? selected : select.selectedIndex;
    });

    select.addEventListener('unpopulate', (event) => {
        const options = Array.from(select.options);
        options.shift();
        options.forEach((option) => {
            option.parentNode.removeChild(option);
        });
    });

    select.addEventListener('change', async(event) => {
        const index = select.selectedIndex;
        const value = select.options[index].value;
        console.log(index, value);

        switch (id) {
            case 'language':
                if (index === 0) {
                    console.log('language deselected');
                } else {
                    console.log('lang: ' + value);
                    unpopulate('accent'); // remove current list of accents
                    //accents = await getAccentsForLanguage(value);  // reload accents for this language only
                    populate('accent', accents, 1);
                }
                break;
            case 'accent':
                if (index === 0) {
                    console.log('accent deselected');
                } else {

                }
                break;
        }
    });
    div.appendChild(label);
    div.appendChild(select);
    return div;
}