// Ide kell berakni az állatok adatait
let adatok = [
    {
        cim: 'Ázsiai elefánt',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Elephas_maximus_%28Bandipur%29.jpg',
        leiras: `Az ázsiai elefánt 3–5 tonnát is nyomhat, és bár hatalmas, mégis meglepően finom mozdulatokra képes: ormánya több mint 40 000 izmot tartalmaz. Kiemelkedően intelligens, fejlett emlékező- és problémamegoldó képességgel rendelkezik, valamint összetett családi csoportokban él.
        <br>
        <br>
        Besorolás: emlős, a patások rendjébe tartozik.
        <br>
        Hol található az állatkertben: Elefántház / Ázsia-zóna.`,
    },
    {
        cim: 'Gorilla',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Bristol.zoo.western.lowland.gorilla.arp.jpg',
        leiras: `A gorillák a legnagyobb termetű emberszabású majmok, a hímek súlya akár a 200 kg-ot is elérheti. Rendkívül erősek, mégis békés, családközpontú állatok, amelyek a napjuk nagy részét táplálékszerzéssel és pihenéssel töltik. Mély, morgó hangjuk és mellkasdöngető „kommunikációjuk” ikonikus viselkedésforma.
        <br>
        <br>
        Besorolás: emlős, főemlős.
        <br>
        Hol található az állatkertben: Főemlős-ház / Trópusi esőerdő részleg.
`,
    },
    {
        cim: 'Orángután',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Orangutans2.jpg',
        leiras: `Az orángutánok a fák koronaszintjének mesterei: idejük akár 90%-át a magasban töltik, ahol fészkeket is építenek minden éjjel. A hímek jellegzetes pofalemezei és hangos, messzire hallatszó hívóhangjai könnyen felismerhetők. Rendkívül intelligensek, képesek eszközöket használni és bonyolult problémákat megoldani.
        <br>
        <br>
        Besorolás: emlős, főemlős.
        Hol található az állatkertben: Főemlős-ház / Esőerdő részleg.`,
    },
    {
        cim: 'Szibériai tigris',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1200px-P.t.altaica_Tomak_Male.jpg',
        leiras: `A szibériai tigris a világ legnagyobb macskaféléje, a hímek tömege akár 300 kg is lehet. Vastag szőrzete és erős testfelépítése lehetővé teszi, hogy a fagyos, havas élőhelyeken is kiváló vadász legyen. Ritka és veszélyeztetett faj, természetben mindössze néhány száz példány él.
        <br>
        <br>
        Besorolás: emlős, ragadozó.
        <br>
        Hol található az állatkertben: Nagyragadozók kifutója / Ázsia-zóna.`,
    },
    {
        cim: 'Oroszlán',
        kep: 'https://img.444.hu/oroszl%C3%A1n-01.jpg',
        leiras: `Az oroszlán az egyetlen nagymacska, amely nagy, összetartó csapatokban – úgynevezett falkákban – él. A hímek hatalmas sörénye nemcsak dísz, hanem védi is őket a harcok során. Üvöltésük akár 8 km távolságra is elhallatszik, így kommunikálnak a falkatagokkal és jelzik területüket.
        <br>
        <br>
        Besorolás: emlős, ragadozó.
        <br>
        Hol található az állatkertben: Szavanna-kifutó / Ragadozók részlege.`,
    },
    {
        cim: 'Jegesmedve',
        kep: 'https://cdn.origo.hu/2023/12/Z4HvgYU2Ae1evhLjIL_J0BiCqLkO2cQVFn-Q_rKtUU8/fit/1200/799/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2I5ZDQ3MWIwNDczNjQxODdhMjYyZDBhOTQ5ZGI0OWMx.jpg',
        leiras: `A jegesmedve a legnagyobb szárazföldi ragadozó, a hímek tömege elérheti az 500–600 kg-ot is. Fél évig képes nem enni, miközben a jégen vándorol zsákmány után kutatva. Bundája valójában átlátszó, a bőre pedig fekete, hogy jobban elnyelje a nap hőjét.
        <br>
        <br>
        Besorolás: emlős, ragadozó.
        <br>
        Hol található az állatkertben: Sarkvidéki kifutó / Jegesmedve-ház.`,
    },
    {
        cim: 'Pápaszemes pingvin',
        kep: 'https://zoobudapest.com/wp-content/uploads/2025/01/pingvin-scaled.webp',
        leiras: `A pápaszemes pingvin egyike a legkisebb pingvinfajoknak, testhossza csupán 60–70 cm. Hatalmas kolóniákban költ, és rendkívül gyors vízi vadász, akár 20 percig is képes a víz alatt maradni. Nevét a szemét körül látható világos „pápaszem” mintáról kapta.
        <br>
        <br>
        Besorolás: madár.
        <br>
        Hol található az állatkertben: Pingvinház / Dél-afrikai partvidék részleg.`,
    },
    {
        cim: 'Zebra',
        kep: 'https://img.hvg.hu/Img/8133bb77-3fc3-490f-b374-cb198a0455cc/3c4b6f44-71cc-4e77-ae5c-3cb0c7cdbdc7.jpg',
        leiras: `A zebrák csíkos mintázata minden egyednél egyedi, mint az ujjlenyomat az embereknél. A csíkok nemcsak díszek: segítenek hűteni a testet és megtéveszteni a ragadozókat. A zebrák gyorsak, rövid távon akár 65 km/h-val is tudnak futni.
        <br>
        <br>
        Besorolás: emlős, patás.
        <br>
        Hol található az állatkertben: Szavanna-kifutó.
`,
    },
    {
        cim: 'Gepárd',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Acinonyx_jubatus_walking_edit.jpg',
        leiras: `A gepárd a leggyorsabb szárazföldi állat. Testfelépítése a villámgyors sprinteléshez alkalmazkodott. Arcán jellegzetes csíkok láthatók.

        <br><br> Besorolás: emlős, ragadozó. <br> Hol található az állatkertben: Nagyragadozók kifutója / Szavanna-zóna.`,
    },
    {
        cim: 'Kis panda',
        kep: 'https://promotions.hu/article/79206/1594476914_budapest-fovaros-allatkert-novenykert-panda-lepke-kert-programajanlo-promotionshu.jpg',
        leiras: `A kis panda fára mászó, bambuszt fogyasztó állat. Vörös bundája feltűnő. Magányos természetű.

        <br><br> Besorolás: emlős. <br> Hol található az állatkertben: Ázsia-erdő / Kisragadozók kifutója.`,
    },
    {
        cim: 'Vidra',
        kep: 'https://cdn.haon.hu/2023/03/rcdyK6Iak1cCv4d4PUEs9xUKwB5z0yUqqHwaKMW62JY/fill/1347/758/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzYyMTEyMzY2YTExMzQ0YzBhN2M5YTY4NzJjNjU4OWE5.jpg',
        leiras: `Kiváló úszó. Játékos természetű. Sűrű bundája melegen tartja.
        <br><br> Besorolás: emlős, ragadozó. <br> Hol található az állatkertben: Édesvízi élővilág részleg / Vidraház.`,
    },
    {
        cim: 'Páva',
        kep: 'https://www.erdekesvilag.hu/wp-content/uploads/2016/05/nilusi-krokodil-1.jpg',
        leiras: `A hímek látványos farktollazattal udvarolnak. A színek fénytörésből adódnak.<br><br> Besorolás: madár. <br> Hol található az állatkertben: Madárkert / Ázsiai részleg.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://welovebudapest.com/i/61/rozsas-flamingo06-foto-bagosi-zoltan.JPG',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Emu',
        kep: 'https://s.24.hu/app/uploads/2022/12/gettyimages-521166538-e1671445828370.jpg',
        leiras: `Nagy testű futómadár. Gyors futó. A hím neveli a fiókákat.
        <br><br> Besorolás: madár. <br> Hol található az állatkertben: Ausztrál kifutó.`,
    },
    {
        cim: 'Nandu',
        kep: 'https://zoobudapest.com/wp-content/uploads/2025/10/gyurusfarku_maki-scaled.webp',
        leiras: `Dél-amerikai futómadár. Gyors és kitartó. A hím költi a tojásokat.
        <br><br> Besorolás: madár. <br> Hol található az állatkertben: Dél-amerikai szavanna.`,
    },
    {
        cim: 'Barnamedve',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Kangur.rudy.drs.jpg',
        leiras: `Nagy testű, erős ragadozó. Ősszel felkészül a télre. Kiváló szaglású.
        <br><br> Besorolás: emlős, ragadozó. <br> Hol található az állatkertben: Európai erdő kifutó.`,
    },
    {
        cim: 'Mosómedve',
        kep: 'https://archiv.budapest.hu/sites/english/PublishingImages/english/Budapest%20Zoo/20150305_Koala.jpg?Width=640&Height=400',
        leiras: `Ügyes mancsú, intelligens állat. Éjszakai életmódú. Gyakran „mos” ételt.
        <br><br> Besorolás: emlős, ragadozó. <br> Hol található az állatkertben: Kisragadozók háza.`,
    },
    {
        cim: 'Leopárd',
        kep: 'https://ng.24.hu/uploads/2016/06/201606-ts_01.jpg',
        leiras: `Kiváló mászó. Lopakodó vadász. Rozettás bundájú.
        <br><br> Besorolás: emlős, ragadozó. <br> Hol található az állatkertben: Afrikai ragadozók kifutója.`,
    },
    {
        cim: 'Jaguár',
        kep: 'https://infostart.hu/images/site/articles/lead/2023/03/1679484928-HLH5cu1HP_md.jpg',
        leiras: `Nagyon erős harapású. Szereti a vizet. Foltos bundája jellegzetes.
        <br><br> Besorolás: emlős, ragadozó. <br> Hol található az állatkertben: Dél-amerikai esőerdő részleg.`,
    },
    {
        cim: 'Kaliforniai oroszlánfóka',
        kep: 'https://cdn.veol.hu/2025/11/n4w33IizndQzzcl_Vqb1DDZxQ0Fu16qPM86GtCHaEsQ/fill/1347/758/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2U3MTMzM2M1ZDc0ZTQ4ZTA4OGE0MzZiN2VjMzJiYjQ3.jpg',
        leiras: `Gyors úszó. Okos és játékos. Gyakran szerepel bemutatókon.
        <br><br> Besorolás: emlős, tengeri emlős. <br> Hol található az állatkertben: Fóka-medence / Tengeri bemutató.
`,
    },
    {
        cim: 'Delfin',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mandrill_at_san_francisco_zoo.jpg/640px-Mandrill_at_san_francisco_zoo.jpg',
        leiras: `Rendkívül intelligens tengeri emlős. Hangokkal kommunikál. Gyors úszó.
        <br><br> Besorolás: emlős, tengeri emlős. <br> Hol található az állatkertben: Delfinárium (ha van).`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4q7-KGu55tLwmACOF7L1_LJL3Jc8xsNT4qA&s',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Havasi kecske',
        kep: 'https://madaraink.hu/wp-content/uploads/2024/07/kek-pava-pavo-cristatus-hangja1.jpeg',
        leiras: `Jól mászik sziklákon. Tapadós lábpárnái vannak. Hidegtűrő bundájú.

<br><br> Besorolás: emlős, patás. <br> Hol található az állatkertben: Hegyi állatok kifutója.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://cdn.britannica.com/13/154513-050-C8FB64D4/Emu.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://safaripark-pusztaottlaka.hu/wp-content/uploads/2022/04/pusztaottlaka-safaripark_45-2.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://kep.index.hu/1/0/3917/39173/391735/39173537_f08fc68ee377f98e55830460f37662b0_wm.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://kep.cdn.index.hu/1/0/2763/27632/276323/27632351_74fcb3f5974c20b32358e002980aaf59_wm.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_yPWJCerU5LwncIzkL-i6u3W4lwaSE9xsg&s',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://bengalcat.pet/wp-content/uploads/photo-gallery/imported_from_media_libray/szerval-3.jpg?bwg=1682074338',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://lh6.googleusercontent.com/proxy/-FN25HSfsWN5bmCCLzU6lmmWCbMIXNuRoTgHiuRIvbGraBKNYmRkLtusoPB2PWHHAxmXItAP-7VSh1dOYwihLsVG_FX1yDNZ0s2K',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://tgymagazin.hu/wp-content/uploads/2014/09/shutterstock-2462523815-1-1000x588.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mountain_Goat_USFWS.jpg/1200px-Mountain_Goat_USFWS.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://www.haziallat.hu/diszmadarak/aranyfacan-kezdoknek-es-haladoknak/1083/1/kina-facan-aranyfacan.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://media.istockphoto.com/id/1462149977/hu/fot%C3%B3/t%C3%B6rpe-kajm%C3%A1n-krokodil.jpg?s=612x612&w=0&k=20&c=JsvUnpOYT9kgWLkpK6EJOA1IcJ0zLENzdoJZwuvBGzs=',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Komodo_dragon_Varanus_komodoensis_Ragunan_Zoo_2.JPG/1200px-Komodo_dragon_Varanus_komodoensis_Ragunan_Zoo_2.JPG',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://s.24.hu/app/uploads/sites/11/2020/11/tarajos-e1606151505869.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://myfish.hu/wp-content/uploads/2024/06/570.jpg',
        leiras: `Ez a teszt állat leírása.`,
    },
    {
        cim: 'Teszt állat',
        kep: 'https://mme.hu/sites/default/files/styles/lead_image_904x555/public/keteltuek_es_hullok/fejleckepek/zamlon_01_h_halpern_balint_c.jpg?itok=ZhvNJFTm',
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
                <button type="button" class="btn btn-link btn-pink stretched-link allat-felugro-ablak-gomb" data-index="${index}">Megtekintés</button>
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