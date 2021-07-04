document.querySelectorAll('.navbar li a').forEach( e => {
    if(e.href == window.location.href) e.parentNode.classList.add('active');
});


const ulList = document.querySelector('.navbar .container ul');

document.querySelector('.btn.burger').addEventListener('click', () => {

    if(ulList.style.top == "90px"){
        ulList.style.top = "-1000px";
    } else {
        ulList.style.top = "90px";
    }
})

// mask
$("#phone").mask("+7 (999) 999-9999");



// select
const cardItem = document.querySelectorAll('.card-item');
const infoBlockText = document.querySelector('.info .info__text');
const infoBlockAboutRoom = document.querySelector('.info .info__about-room');
const infoBlockBath = document.querySelector('.info .info__bath');
const infoBlockImage = document.querySelector('.info .info__images');
const selectOption = document.querySelector('.main-form');


console.log(selectOption.children[2].children[1].children[0].innerHTML);

cardItem.forEach(el => {
    element = el.children[0].children[1].children[0];
    element.addEventListener('click', e => {
        let name = e.target.dataset.name;
        

        switch (name) {
            case 'stand':
                var htmlText = `<h2>Стандартный гостиничный номер для одного гостя с удобной 1,5-спальной кроватью.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>площадь - 14м<sup>2</sup></li>
                        <li>кровать 1,5-спальная</li>
                        <li>телевизор</li>
                        <li>холодильник с мини-баром</li>
                        <li>кондиционер</li>
                        <li>кресло</li>
                        <li>журнальный стол</li>
                        <li>шкаф</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                        <li>площадь - 3м<sup>2</sup></li>
                        <li>вертикальный душ</li>
                        <li>один набор одноразовой парфюмерии и полотенец</li>
                        <li>банный халат</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт";
                break;
            case 'standWithBalcony':
                var htmlText = `<h2>Стандартный гостиничный номер с удобной двуспальной кроватью и балконом.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>площадь - 24м<sup>2</sup></li>
                        <li>зонирование пространства на две спальни и зал</li>
                        <li>двухспальная кровать</li>
                        <li>односпальная кровать</li>
                        <li>телевизор ЖК с приставкой Триколор</li>
                        <li>холодильник с мини-баром</li>
                        <li>кондиционер</li>
                        <li>два кресла</li>
                        <li>журнальный стол</li>
                        <li>шкаф</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                        <li>площадь - 4м<sup>2</sup></li>
                        <li>небольшая ванна</li>
                        <li>двойной зубной набор</li>
                        <li>двойной набор одноразовой парфюмерии и полотенец</li>
                        <li>банные халаты</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт с балконом";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт с балконом";
                    
                break;
            case 'standWithBed':
                var htmlText = `<h2>Стандартный гостиничный номер с удобной двуспальной кроватью и раскладным малогабаритным диваном.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>площадь - 20м<sup>2</sup></li>
                        <li>двуспальная кровать</li>
                        <li>телевизор</li>
                        <li>холодильник с мини-баром</li>
                        <li>кондиционер</li>
                        <li>раскладной малогабаритный диван</li>
                        <li>кресло</li>
                        <li>журнальный стол</li>
                        <li>шкаф</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                        <li>площадь - 3м<sup>2</sup></li>
                        <li>вертикальный душ</li>
                        <li>один набор одноразовой парфюмерии и полотенец</li>
                        <li>банный халат</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт с раскидным диваном";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт с раскидным диваном";
                
                break;
            case 'standUpg':
                var htmlText = `<h2>Стандартный гостиничный номер для одного гостя с удобной 1,5-спальной кроватью.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>площадь - 20м<sup>2</sup></li>
                        <li>двухспальная кровать</li>
                        <li>телевизор</li>
                        <li>холодильник с мини-баром</li>
                        <li>кондиционер</li>
                        <li>письменный стол</li>
                        <li>стул</li>
                        <li>кофейный столик</li>
                        <li>шкаф-купе</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                        <li>площадь - 4м<sup>2</sup></li>
                        <li>вертикальный душ, более удобный, чем в других номерах категории "стандарт"</li>
                        <li>один набор одноразовой парфюмерии и полотенец</li>
                        <li>банный халат</li>
                        <li>фен</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт улучшенный";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт улучшенный";
                break;
            case 'stand2Per':
                var htmlText = `<h2>Номер категории "Стандарт" с зонированием пространства и с двумя кроватями в обособленных спальных зонах.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>площадь - 24м<sup>2</sup></li>
                        <li>зонирование пространства на две спальни и зал</li>
                        <li>двухспальная кровать </li>
                        <li>односпальная кровать</li>
                        <li>телевизор ЖК с приставкой Триколор</li>
                        <li>холодильник с мини-баром</li>
                        <li>кондиционер</li>
                        <li>два кресла</li>
                        <li>журнальный стол</li>
                        <li>шкаф</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                    <li>площадь - 4м<sup>2</sup></li>
                    <li>небольшая ванна</li>
                    <li>двойной зубной набор</li>
                    <li>двойной набор одноразовой парфюмерии и полотенец</li>
                    <li>банный халат</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт 2-х местный";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт 2-х местный";
                break;
            case 'stand2':
                var htmlText = `<h2>Просторный номер, включающий в себя гостиную с выходом на балконом, спальню с широкой двухспальной кроватью и просторную ванную комнату.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>площадь – 53м<sup>2</sup> (площадь зала  – 28м<sup>2</sup>, площадь спальни  – 13м<sup>2</sup> , коридор  – 5м<sup>2</sup>, ванная комната  – 7м<sup>2</sup>)</li>
                        <li>2 комнаты</li>
                        <li>двухспальная кровать</li>
                        <li>раскладной 2-х спальный диван</li>
                        <li>два телевизора ЖК с приставкой Триколор</li>
                        <li>холодильник с мини-баром</li>
                        <li>два кондиционера</li>
                        <li>обеденный стол</li>
                        <li>два стула</li>
                        <li>сервант с набором посуды</li>
                        <li>два кресла</li>
                        <li>журнальный стол</li>
                        <li>шкаф</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                        <li>площадь - 7м<sup>2</sup></li>
                        <li>стандартная ванна</li>
                        <li>двойной зубной набор</li>
                        <li>двойной набор одноразовой парфюмерии и полотенец</li>
                        <li>банный халат</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт 2-х комнатный";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт 2-х комнатный";
                break;
            case 'stand2Upg':
                var htmlText = `<h2>Просторный номер с богатым интерьером, включающий в себя большую гостиную, большую спальню с широкой двухспальной кроватью и выходом на балкон и просторную ванную комнату.</h2>`;
                var htmlAboutRoom = `
                    <h2>Номер:</h2>
                    <ul>
                        <li>2-х комнатный номер площадью - 96м<sup>2</sup> (площадь зала - 34м<sup>2</sup>, площадь спальни – 50м<sup>2</sup>, коридор - 5м<sup>2</sup>, ванная комната - 7м<sup>2</sup>)</li>
                        <li>двухспальная кровать</li>
                        <li>шифоньер</li>
                        <li>два комода с зеркалами</li>
                        <li>раскладной 2-х спальный диван</li>
                        <li>два телевизора ЖК с приставкой Триколор</li>
                        <li>холодильник с мини-баром</li>
                        <li>два кондиционера</li>
                        <li>обеденный стол</li>
                        <li>шесть стульев</li>
                        <li>сервант с набором посуды</li>
                        <li>два кресла</li>
                        <li>телефон</li>
                    </ul>`;
                var htmlBath = `
                    <h2>Ванна:</h2>
                    <ul>
                        <li>площадь - 7м<sup>2</sup></li>
                        <li>стандартная ванна</li>
                        <li>двойной зубной набор</li>
                        <li>двойной набор одноразовой парфюмерии и полотенец</li>
                        <li>банный халат</li>
                    </ul>`;
                selectOption.children[2].children[1].children[0].value = "Стандарт улучшенный 2-х комнатный";
                selectOption.children[2].children[1].children[0].innerHTML = "Стандарт улучшенный 2-х комнатный";
                break;
        }

        let htmlImg = `
            <h2 style="text-align: center">Фотографии номера:</h2>
            <div class="image-list">
                <img width="256" src="assets/img/rooms/${name}/1.jpg">
                <br>
                <img width="256" src="assets/img/rooms/${name}/2.jpg">
                <br>
                <img width="256" src="assets/img/rooms/${name}/3.jpg">
            </div>`;

        infoBlockText.innerHTML = htmlText;
        infoBlockAboutRoom.innerHTML = htmlAboutRoom;
        infoBlockBath.innerHTML = htmlBath;
        infoBlockImage.innerHTML = htmlImg;
        
    });
});



