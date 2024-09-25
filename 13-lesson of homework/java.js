class Countries {

    fOpen = async (url) => {
        let response = await fetch(url);

        if (response.ok) return response.json()
        else throw new Error(`we can't reach this site ${url}`)
    }

    getCountryAll = () => this.fOpen("https://restcountries.com/v3.1/all");
    //    getCountry = () => this.fOpen()
}
const countryData = new Countries();
function renderCountry() {

    // console.log(countryCard)
    countryData.getCountryAll().then((data, i) => {
        console.log(data)

        // console.log(data[0].capital[0])
        data.forEach(item => {

            const countryCards = document.querySelector('.dominator','.section1');
            const countryCard = document.createElement('a');

            countryCard.classList.add('country-card')
            countryCard.setAttribute('href', 'country-inner.html')
            console.log(item)
            countryCard.innerHTML = `

            <img src="${item.flags.png}" alt="" class="dominator_image2 images">
            <div class="dominator_titles2 bg-success">
            <h3 class="dominator_alone2">Country: ${item.altSpellings[1]}</h3>
            <h4 class="dominator_items2 i4">Population: ${item.capitalInfo['latlng']}</h4>
            <h4 class="dominator_items2 i5">Region: ${item.region}</h4>
            <h4 class="dominator_items2 i6">Capital: ${item.capital}</h4>
            </div>

       `

            countryCards.append(countryCard)

        });
    })
}

renderCountry()