// Ide kell berakni az állatok adatait
let adatok = [
    {
        cim: 'Ázsiai elefánt',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Elephas_maximus_%28Bandipur%29.jpg',
        leiras: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae esse eos temporibus facilis, commodi porro ducimus? Id deleniti esse porro alias iste ut quisquam facere natus molestiae exercitationem, quasi beatae?
      Deserunt pariatur adipisci iure reiciendis voluptatem doloremque qui, fugiat beatae assumenda porro corporis. Ipsa nobis non fuga possimus amet molestiae corporis blanditiis a, nisi labore eveniet similique iste cupiditate illum.`,
    },
    {
        cim: 'Gorilla',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Bristol.zoo.western.lowland.gorilla.arp.jpg',
        leiras: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae esse eos temporibus facilis, commodi porro ducimus? Id deleniti esse porro alias iste ut quisquam facere natus molestiae exercitationem, quasi beatae?
      Deserunt pariatur adipisci iure reiciendis voluptatem doloremque qui, fugiat beatae assumenda porro corporis. Ipsa nobis non fuga possimus amet molestiae corporis blanditiis a, nisi labore eveniet similique iste cupiditate illum.`,
    },
    {
        cim: 'Orángután',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Orangutans2.jpg',
        leiras: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae esse eos temporibus facilis, commodi porro ducimus? Id deleniti esse porro alias iste ut quisquam facere natus molestiae exercitationem, quasi beatae?
      Deserunt pariatur adipisci iure reiciendis voluptatem doloremque qui, fugiat beatae assumenda porro corporis. Ipsa nobis non fuga possimus amet molestiae corporis blanditiis a, nisi labore eveniet similique iste cupiditate illum.`,
    },
    {
        cim: 'Szibériai tigris',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1200px-P.t.altaica_Tomak_Male.jpg',
        leiras: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae esse eos temporibus facilis, commodi porro ducimus? Id deleniti esse porro alias iste ut quisquam facere natus molestiae exercitationem, quasi beatae?
      Deserunt pariatur adipisci iure reiciendis voluptatem doloremque qui, fugiat beatae assumenda porro corporis. Ipsa nobis non fuga possimus amet molestiae corporis blanditiis a, nisi labore eveniet similique iste cupiditate illum.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://placehold.co/600x400',
        leiras: `Ez a teszt állat leírása.`,
    },
];

// Annyi kártya legyen, ahány állat van a tömbben
adatok.forEach(function (allat, index) {
    let style = '';

    // Az oldal betöltésekor csak az első néhány állat jelenjen meg, a többi legyen rejtve
    if ((index + 1) > 8) {
        style += 'display: none;'
    }

    document.querySelector('#allatok').innerHTML += `
        <div class="card mt-5 card-fixed mx-2" style="${style}">
            <div class="card-img-wrapper">
                <img class="card-img-top" src="${allat.kep}">
            </div>
            <div class="card-body">
                <h4 class="card-title">${allat.cim}</h4>
                <p class="card-text">${allat.leiras}</p>
                <button type="button" class="btn btn-link stretched-link allat-felugro-ablak-gomb" data-index="${index}">Megtekintés</button>
            </div>
        </div>
    `;
});

// Ha rákattint arra, hogy "További állatok megtekintése", akkor jelenjen meg az összes állat
document.querySelector('#tovabbiAllatokGomb').addEventListener('click', function (e) {
    e.preventDefault();

    // Tűnjön el a gomb
    document.querySelector('#tovabbiAllatokGomb').style.display = 'none';

    // Jelenjen meg az összes állat
    document.querySelectorAll('#allatok .card').forEach(function (kartya) {
        kartya.style.display = 'initial';
    });
});

// Mindegyik állatnál működjön a felugró ablak
document.querySelectorAll('.allat-felugro-ablak-gomb').forEach(function (gomb) {
    gomb.addEventListener('click', function (e) {
        e.preventDefault();

        // Megnézzük, hogy hányadik állatra lett rákattintva
        let index = gomb.getAttribute('data-index');

        // Lekéjük a tömbből az adatait
        let allat = adatok[index];

        // Kitöltjük a felugró ablakot az állat adataival
        document.querySelector('#allatFelugroAblakCim').innerHTML = allat.cim;
        document.querySelector('#allatFelugroAblakKep').setAttribute('src', allat.kep);
        document.querySelector('#allatFelugroAblakLeiras').innerHTML = allat.leiras;

        // Megjelenítjük a felugró ablakot
        $('#allatFelugroAblak').modal('show');
    });
});