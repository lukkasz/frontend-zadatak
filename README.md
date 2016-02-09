# Trikoder front-end zadatak
Potrebno je dovršiti nekolicinu zadatka na pripremljenoj statičnoj stranici. Glavni dio stranice je postavljen - html je pripremljen, napisani su css stilovi i interakcije u javascriptu, procesiranje front-end resursa je automatizirano.

Direktorij koji ste preuzeli je git repozitorij - dajemo plus ako zadaće u nastavku rješavate putem lijepo formiranih commit-ova.

## Instalacija
Projekt podesite tako da u konzolu upišete:
```
npm install
```

Development startate sa komandom:
```
npm run watch:development
```

## Zadaci
+ Nedostaje nam modul sa galerijom fotografija u desnoj koloni.
Pogledajte kako isti izgleda u priloženom dizajnu (design.png) i pripremite HTML, CSS (SCSS), i JS datoteke.
Kada se klikne na thumbnail trebala bi se pokazati uvećana slika u modalnom prozoru / lightboxu.
Obzirom da Vam prilažemo dizajn kao PNG datoteku modul ne mora biti pixel perfect.
Slike u maloj i velikoj varijaciji možete pronaći u "public/images" direktoriju.

+ Korisnicima bi valjalo pripremiti optimizirane, minificirane slike. Pronađite i upogonite grunt task pomoću
kojeg minifikaciju slika možemo odrađivati automatski.

+ Klikom na "Sign in" dugme u navigaciji pojavljuje se modalni prozor sa login formom.
U trenutnoj (ne baš idealnoj) implementaciji sadržaj (html) te forme se nalazi u skrivenom modulu na dnu stranice koji se klonira prilikom
instanciranja lightbox-a.
Ažurirajte kod tako da se sadržaj forme dohvaća sa url-a (u public direktoriju nalazi se pripremljeni login-modal.html kojeg možete dohvatiti kada treba)

+ Front-end resurse koji nisu neophodni za inicijalno prikazivanje probajte učitati tek kad su korisniku potrebni.
	+ Ažurirajte kod pretrage tako da se plugin za brzu pretragu učitava nakon što korisnik počne upisivati nešto u pretragu
	+ Slično probajte napraviti za galeriju fotografija tako da se lightbox plugin učita nakon što korisnik klikne na neki od thumbnailova
	+ Dodatan plus dobijete ako i CSS resurse za gornje primjere učitavate samo kad je potrebno

## Predaja rješenja
Rješenje nam pošaljite u obliku zip datoteke na hr@trikoder.net

## Korištene tehnologije
+ [Sass](http://sass-lang.com/) (CSS Preprocessor)
+ [jQuery](https://jquery.com/) (JS library)
+ [Grunt](http://gruntjs.com/) (JS task runner)
+ [webpack](https://webpack.github.io/) (module bundler)
+ [Simple view](http://dbrekalo.github.io/simpleView/) (view component boilerplate)
+ [Simple lightbox](http://dbrekalo.github.io/simpleLightbox/) (lightbox / image modal plugin)
+ [Fast search](https://github.com/dbrekalo/fastsearch) (quick search / autocomplete plugin)