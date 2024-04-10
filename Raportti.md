# Sisällysluettelo

## 1. [Johdanto](#johdanto)
## 2. [Linkitetyn listan teoriaa](#2-linkitetyn-listan-teoriaa)
## 3. [Toteutus](#3-toteutus)
## 4. [LeetCode](#4leetcode)
## 5. [Loppusanat](#5-loppusanat)


# 1. Johdanto

## Työn aihe ja tavoitteet

Tässä raportissa syvennyn linkitetyn listan aiheeseen. Tavoitteena olisi, että
ymmärrän mikä linkitetty lista on, miten sitä käsitellään, mihin sitä käytetään
sekä kaikkein tärkeimpänä haluaisin tehdä tästä raportista sellaisen, että
tämän lukija ymmärtäisi myös kyseisen aiheen teorian.

Tämä raportti toimii ikään kuin oppimispäiväkirjana itselleni
sekä toivottavasti samalla oppimisen lähteenä muille.

# 2. Linkitetyn listan teoriaa

## Mikä on linkitetty lista

Linkitetty lista on tietorakenne, joka koostuu solmuista, joista jokainen sisältää tietoa ja viittauksen seuraavaan solmuun. Se koostuu yksittäisistä elementeistä, joita kutsutaan solmuiksi, jotka on linkitetty toisiinsa joko yksisuuntaisesti (singly linked list) tai kaksisuuntaisesti (doubly linked list). Linkitettyjä listoja käytetään monipuolisesti erilaisissa sovelluksissa, kuten tietokannoissa, hakualgoritmeissa ja graafialgoritmeissa, koska ne mahdollistavat tehokkaan lisäyksen ja poiston solmuista. Lisäksi ne tarjoavat joustavuutta datan tallentamiseen ja käsittelyyn verrattuna taulukkoihin.

Linkitetty lista konsepteina:

Linkitetty lista koostuu solmuista ja jokainen solmu sisältää:
a. Datan
b. Seuraavan solmun osoitteen

Solmut voivat olla missä tahansa muistia!!

Listan elementit ovat yhteydessä osoittimien avulla

                    Singly linked list
          Solmu            Solmu        Solmu
      [data|osoite] -->  [data|osoite] -->  [data|osoite]

                    Doubly linked list
          Solmu            Solmu              Solmu
    [data|osoite] <->  [data|osoite] <->  [data|osoite]

Eli tältä yksi solmu eli node voisi näyttää koodilla:

Singly linked list

C
```
  struct solmu{
    int data;
    Struct solmu *seuraavan_osoite;
  };
```

TypeScript
```
  interface Solmu<T>{
    data: <T>,
    seuraava: Solmu<T> | undefined
  }
```

Doubly linked list

C
```
  struct Solmu{
    int data;
    Struct Solmu *seuraavan_osoite;
    Struct Solmu *edellisen_osoite;
  };
```

TypeScript
```
  interface Solmu<T>{
    data: <T>,
    seuraava: Solmu<T> | undefined
    edellinen: Solmu<T> | undefined
  }
```

Linkitettyä listoja on myös muunlaisia, mutta työ paisuisi ehkä liian isoksi,
jos alkaisimme käymään mm. circular linked listaa läpi.

## ArrayList vs LinkedList

1. Taulukot ovat tietorakenteita, jotka sisältävät samanlaisia tietoelementtejä, kun taas linkitetyt listat ovat ei-primitiivisiä tietorakenteita, jotka sisältävät epäjärjestettyjä linkitettyjä elementtejä.

2. Taulukoissa elementit ovat indeksoituja, kun taas linkitettyjen listojen solmuja ei indeksoida.

3. Taulukon elementin hakeminen on nopeaa, jos tiedämme elementin sijainnin taulukossa, kun taas linkitetyssä listassa tämä vie lineaarista aikaa, joten linkitetty lista on hieman hitaampi.

4. Operaatiot kuten lisäys ja poisto taulukoissa vievät paljon aikaa. Sen sijaan suorituskyky näissä operaatioissa on nopeampaa linkitetyissä listoissa.

5. Taulukot ovat kiinteän koon tietorakenteita ja niiden koko on staattinen, kun taas linkitetyt listat ovat dynaamisia ja joustavia ja voivat laajentaa ja pienentää kokoaan.

## Mihin linkitettyä listaa käytetään?

### Teoriavastaus:

1. Jonojen ja pinon toteutukset:
 Linkitetyt listat ovat yleisiä tietorakenteita, joita käytetään jonon ja pinon toteutuksissa. Niitä voidaan käyttää tehokkaasti lisäämään ja poistamaan alkioita jonosta tai pinosta.

2. Tiedostojen hallinta:
Järjestelmät käyttävät usein linkitettyjä listoja tallentamaan tiedostojen tiedot. Esimerkiksi Linuxin käyttöjärjestelmässä jokainen tiedosto on linkitetty lista, joka sisältää tiedostonimen, koon, käyttöoikeudet jne.

3. Sovellukset, joissa tarvitaan dynaamista kokoa:
Linkitetyt listat ovat hyödyllisiä sovelluksissa, joissa tarvitaan dynaamista kokoa, koska ne voivat laajentaa tai pienentää kokoaan helposti. Esimerkkejä tällaisista sovelluksista ovat tekstieditorit, järjestelmänvalvojat jne.

4. Ketjutetut sovellukset:
 Sovellukset, joissa on ketjutettuja tietoja, kuten verkostoanalyysi, polkujen etsintä ja tietokannat, voivat hyötyä linkitetyistä listoista. Ne tarjoavat tehokkaan tavan hallita ja manipuloida ketjutettuja tietoja.

5. Käyttöjärjestelmät:
Linkitetyt listat ovat tärkeitä käyttöjärjestelmien ydinominaisuuksien toteuttamisessa, kuten prosessien hallinnassa ja muistinhallinnassa. Ne auttavat tehokkaasti hallitsemaan käyttöjärjestelmän resursseja.

### Käytännön vastaus:

1. Soittolistat musiikin kuunteluun:
 Linkitetyt listat ovat erinomainen tapa hallita soittolistoja musiikin kuuntelussa. Jokainen kappale voisi olla yksi solmu listassa, joka sisältää tiedot, kuten kappaleen nimen, esittäjän, albumin ja kappaleen keston. Voit helposti luoda uusia soittolistoja, lisätä uusia kappaleita olemassa oleviin soittolistoja, poistaa kappaleita ja järjestää ne haluamallasi tavalla. Lisäksi voit helposti vaihtaa kappaleita eteenpäin tai taaksepäin soittaessasi musiikkia.

2. Yhteystietoluettelo:
  Yhteystietoluettelon hallintaan voidaan käyttää linkitettyä listaa. Jokainen yhteystieto voisi olla yksi solmu listassa, joka sisältää tiedot, kuten henkilön nimen, puhelinnumeron, sähköpostiosoitteen jne. Voit helposti lisätä uusia yhteystietoja, poistaa vanhoja ja järjestää ne eri tavoin tarpeidesi mukaan. Lisäksi voit helposti navigoida yhteystietoluettelossa eteenpäin ja taaksepäin.

3. Netflix-katseluhistoria:
 Linkitetyt listat voivat auttaa hallitsemaan Netflix-katseluhistoriaa. Jokainen katseltu sarja tai elokuva voisi olla yksi solmu listassa, joka sisältää tiedot, kuten ohjelman nimen, jakson tai elokuvan numeron, katselupäivämäärän ja keston. Voit helposti selata aiempia katseluita, palata takaisin katselemaan kesken jäänyttä ohjelmaa tai poistaa katseluhistoriasta tiettyjä kohteita.

 ## Linkitetyn listojen toiminnot lyhyesti

 ### Lisäys

 Uuden solmun lisääminen linkitettyyn listaan vaatii olemassa olevien solmujen osoittimien säätämistä, jotta oikea järjestys säilyy. Lisäys voidaan suorittaa listan alkuun, loppuun tai mihin tahansa kohtaan listaa.

 ### Poisto

 Solmun poistaminen linkitetystä listasta edellyttää naapurisolmujen osoittimien säätämistä poistetun solmun jälkeisen aukon täyttämiseksi. Poisto voidaan suorittaa listan alusta, lopusta tai mistä tahansa kohdasta listaa.

 ### Etsiminen
 
 Tietyn arvon etsiminen linkitetystä listasta edellyttää listan läpikäyntiä pääsolmusta, kunnes arvo löytyy tai listan loppu saavutetaan.

## Hyödyt ja heikkoudet

### Edut

1. Dynaaminen koko:
Linkitetyt listat voivat kasvaa tai kutistua dynaamisesti, koska muistin varaaminen tapahtuu ajon aikana.

2. Lisäys ja poisto:
 Elementtien lisääminen tai poistaminen linkitetystä listasta on tehokasta, erityisesti suurille listoille.

3. Joustavuus:
Linkitetyt listat voidaan helposti järjestää uudelleen ja muokata ilman, että tarvitaan jatkuvaa muistilohkoa.

### Haitat

1. Satunnainen pääsy:
Toisin kuin taulukot, linkitetyt listat eivät salli suoraa pääsyä elementteihin indeksin perusteella. Tietyn solmun saavuttaminen vaatii listan läpikäynnin.

2. Lisämuisti:
Linkitetyt listat vaativat lisämuistia osoittimien tallentamiseksi verrattuna taulukoihin.

# 3. Toteutus

## Singly linked list

## Doubly linked list

# 4. Leetcode

## Delete a middle node of a linked list

## Odd even linked list

## Reverse linked list

## Maximum twin sum of linked list

# 5. Lähteet

