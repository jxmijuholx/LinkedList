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

Linkitettyjä listoja on myös muunlaisia, mutta työ paisuisi ehkä liian isoksi,
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

### Heikkoudet

1. Satunnainen pääsy:
Toisin kuin taulukot, linkitetyt listat eivät salli suoraa pääsyä elementteihin indeksin perusteella. Tietyn solmun saavuttaminen vaatii listan läpikäynnin.

2. Lisämuisti:
Linkitetyt listat vaativat lisämuistia osoittimien tallentamiseksi verrattuna taulukoihin.

# 3. Toteutus w/ TypeScript

## Singly linked list

Opettajan toiveen mukaan lähdin toteuttamaan linkitetettyä listaa TypeScriptin tyypitystä käyttäen.
Hetki piti kaivella dokumentaatiota, jotta ymmärsin miten se toimii. Kun ensiksi lähtee toteuttamaan
tätä tietorakennetta pitänee opetella, miten yksi solmu eli node toteutetaan.

Tiedämme sillä olevan kaksi arvoa yksisuuntaisessa linkitetyssä listassa:
1. Arvo
2. Seuraavan solmun osoite

Kerran se vaatii kahta arvoa yhteen "muuttujaan" niin voimme käyttää TypeScriptin interfacea.

```
interface Solmu {

}
```

ja tähän voidaan lisätä vielä tyypitys

```
interface Solmu<T> {

}
```

Eli tässä määrittelen rajapinnan, joka ottaa yhden tyyppiparametrin.
- Tyyppiparametri edustaa solmun arvoa ja se voi olla mikä tahansa tyyppi, kuten
number, string, boolean, enum ja array.
- Eli linkitetyn listan arvon tyypin määrittelee käyttäjä.
- Sitten meidän pitää vain täyttää solmu sen sisällöllä:

```
interface Solmu<T> {
    arvo : T,
    seuraava : Solmu<T> | undefined
}
```
- Arvo on tyyppiä <T>
- Seuraava on arvoa Solmu<T> TAI undefined, koska kyseinen solmu voi olla listan viimeinen!
> Viimeisellä ei ole seuraavaa

Nyt kun olemme tehneet tietotyypin Solmu, voimme rakentaa yhdensuuntaisen linkitetyn listan.

Ensimmäisenä ajatuksena tulee tehdä luokka 'LinkitettyLista', jotta voimme koodata sen
sisälle tarvittavat operaatiot. Näin teemme linkitetystä listasta uudelleen käytettävän.
Tai niin mä ainaki luulisin :D

Määritellään 'linkitetty lista' -luokka:

```
export default class LinkitettyLista<T>{

}
```
Seuraavaksi koodataan listaan seuraavat operaatiot:
- Lisää listan alkuun
- Lisää annettuun indexiin
- Lisää loppuun
- Poista
- Perus get -metodi
- Poista annetusta indexistä


```
interface Solmu<T> {
    arvo : T,
    seuraava : Solmu<T> | undefined
}

export default class LinkitettyLista<T> {
    public pää: Solmu<T> | undefined;
    public length: number;
   
    constructor() {
        this.pää = undefined;
        this.length = 0;
    }

    // Lisätään uusi solmu listan alkuun
    prepend(arvo: T): void {
        const solmu: Solmu<T> = { arvo, seuraava: this.pää };
        this.pää = solmu;
        this.length++;
    }

    // Lisää uuden solmun annettuun indeksiin
    insertAt(arvo: T, index: number): void{

        if (index < 0 || index > this.length) {
           return ;
        }

        if (index === 0) {
            this.prepend(arvo);
            return;
        }

        let current = this.pää;
        for (let i = 0; i < index - 1; i++) {
            current = current?.seuraava;
        }

        const solmu: Solmu<T> = { arvo, seuraava: current?.seuraava };
        current!.seuraava = solmu;
        this.length++;
    }

    // Lisää uuden solmun listan loppuun
    append(arvo: T): void {
        const solmu: Solmu<T> = { arvo, seuraava: undefined };
        if (!this.pää) {
            this.pää = solmu;
        } else {
            let current = this.pää;
            while (current.seuraava) {
                current = current.seuraava;
            }
            current.seuraava = solmu;
        }
        this.length++;
    }

    // Poistaa solmun
    remove(arvo: T): T | void{
        if (!this.pää) {
            return ;
        }

        if (this.pää.arvo === arvo) {
            const poistettu = this.pää.arvo;
            this.pää = this.pää.seuraava;
            this.length--;
            return poistettu;
        }

        let current = this.pää;
        while (current.seuraava) {
            if (current.seuraava.arvo === arvo) {
                const poistettu = current.seuraava.arvo;
                current.seuraava = current.seuraava.seuraava;
                this.length--;
                return poistettu;
            }
            current = current.seuraava;
        }
    }

    // Poistaa solmun annetusta indeksistä
    removeAt(index: number): T | void {
        if (index < 0 || index >= this.length) {
            return ;
        }

        if (index === 0) {
            const poistettu = this.pää!.arvo;
            this.pää = this.pää!.seuraava;
            this.length--;
            return poistettu;
        }

        let current = this.pää;
        for (let i = 0; i < index - 1; i++) {
            current = current?.seuraava;
        }

        const poistettu = current!.seuraava!.arvo;
        current!.seuraava = current!.seuraava!.seuraava;
        this.length--;
        return poistettu;
    }

    // Palauttaa solmun annetusta indeksistä
    get(index: number): T | void {
        if (index < 0 || index >= this.length) {
            return ;
        }

        let current = this.pää;
        for (let i = 0; i < index; i++) {
            current = current!.seuraava;
        }
        return current!.arvo;
    }
}
```
Seuraavaksi päästäänkin tekemään kaksisuuntaista linkitettyä listaa!

## Doubly linked list

Aloitetaan sillä, että todetaan suomenkielen olevan hölmöä tässä kontekstissa, joten toteutetaan Doubly linked list englanniksi. :)

Yksi node voisi näyttää tältä:
```
interface Node<T> {
    value : T,
    next : Solmu<T> | undefined,
    previous : Solmu<T> | undefined
}
```
Paitsi, että TypeScript ei anna käyttää sanaa Node, joten muutetaan se täksi:

```
interface ListNode<T> {
    value: T,
    next: ListNode<T> | undefined,
    prev: ListNode<T> | undefined
}
```

Ja määritellään luokka DoublyLinkedList.ts ja lisätään sinne 'apuvälineet'
```
export default class DoublyLinkedList<T> {
    public head: ListNode<T> | undefined;
    public tail: ListNode<T> | undefined;
    public length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }
}
```
Ja sitten lisätään samat operaatiot kuin Singly linked listissä:

```
export default class DoublyLinkedList<T> {
    private head: ListNode<T> | undefined;
    private tail: ListNode<T> | undefined;
    public length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
        this.tail = undefined;
    }

    // Lisätään uusi solmu listan alkuun
    prepend(value: T): void {
        const node: ListNode<T> = { value: value, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    // Lisää uuden solmun annettuun indeksiin
    insertAt(value: T, index: number): void {
        if (index > this.length) {
            throw new Error("Index out of range");
        } else if (index === this.length) {
            this.append(value);
            return;
        } else if (index === 0) {
            this.prepend(value);
            return;
        }
        let curr = this.head;

        for (let i = 0; curr && i < index; i++) {
            curr = curr.next!;
        }

        const node: ListNode<T> = { value: value, next: curr, prev: curr!.prev };
        curr!.prev!.next = node;
        curr!.prev = node;

        this.length++;
    }

    // Lisää uusi solmu listan loppuun
    append(value: T): void {
        const node: ListNode<T> = { value: value, next: undefined, prev: undefined };
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // Poista solmu
    remove(value: T): T | void {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                if (curr.prev) curr.prev.next = curr.next;
                if (curr.next) curr.next.prev = curr.prev;
                if (curr === this.head) this.head = curr.next;
                if (curr === this.tail) this.tail = curr.prev;
                this.length--;
                return curr.value;
            }
            curr = curr.next;
        }
        return undefined;
    }

    // Poista solmu annetusta indeksistä
    removeAt(index: number): void {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = this.head?.next || undefined;
        } else {
            let prev = this.head;
            let curr = prev?.next;
            for (let i = 1; curr && i < index; i++) {
                prev = curr;
                curr = curr.next;
            }
            if (curr) {
                prev!.next = curr.next;
            }
        }
        this.length--;
    }

    // Hae solmu annetusta indeksistä
    get(index: number): T | void {
        if (index < 0 || index >= this.length) {
            return;
        }
        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }
}
```

## Testausta

Nyt kun olemme toteuttaneet yksisuuntaiset ja kaksisuuntaisen linkitetyn listan,
meidän varmaan pitäisi testata niiden toimivuus...

Luodaan main.ts ja lisätään siihen testi case jokaiselle metodille, jotta saadaan tietää
toimiiko toteutukseni vai ei.

```
import DoublyLinkedList from './DoublyLinkedList';
import LinkitettyLista from './LinkitettyLista';

// Testataan LinkitettyLista
console.log('Testataan LinkitettyLista:');
const linkitettyLista = new LinkitettyLista<number>();

// Lisätään alkioita listan alkuun
linkitettyLista.prepend(2);
linkitettyLista.prepend(1);
linkitettyLista.prepend(0);

// Tulostetaan alkuperäinen lista
console.log('Linkitetty lista:');
for (let i = 0; i < linkitettyLista.length; i++) {
    console.log(linkitettyLista.get(i));
}

// Lisätään alkio keskelle listaa
linkitettyLista.insertAt(1.5, 2);

// Tulostetaan päivitetty lista
console.log('Päivitetty linkitetty lista:');
for (let i = 0; i < linkitettyLista.length; i++) {
    console.log(linkitettyLista.get(i));
}

// Testataan DoublyLinkedList
console.log('\nTestataan DoublyLinkedList:');
const doublyLinkedList = new DoublyLinkedList<number>();

// Lisää alkioita listan alkuun
doublyLinkedList.prepend(2);
doublyLinkedList.prepend(1);
doublyLinkedList.prepend(0);

// Tulostetaan alkuperäinen lista
console.log('Kaksoissuuntainen linkitetty lista:');
for (let i = 0; i < doublyLinkedList.length; i++) {
    console.log(doublyLinkedList.get(i));
}

// Lisätään alkio loppuun
doublyLinkedList.append(3);

// Tulostetaan päivitetty lista
console.log('Päivitetty kaksoissuuntainen linkitetty lista:');
for (let i = 0; i < doublyLinkedList.length; i++) {
    console.log(doublyLinkedList.get(i));
}

// Poistetaan alkio keskeltä listaa
doublyLinkedList.remove(1);

// Tulostetaan päivitetty lista
console.log('Päivitetty kaksoissuuntainen linkitetty lista poiston jälkeen:');
for (let i = 0; i < doublyLinkedList.length; i++) {
    console.log(doublyLinkedList.get(i));
}

// Poistetaan alkio annetusta indeksistä
doublyLinkedList.removeAt(1);

// Tulostetaan päivitetty lista
console.log('Päivitetty kaksoissuuntainen linkitetty lista poiston jälkeen:');
for (let i = 0; i < doublyLinkedList.length; i++) {
    console.log(doublyLinkedList.get(i));
}
```

1. Compiletaan main.ts komennolla tsc main.ts
2. Ajetaan ohjelma komennolla node main.js
3. Ja tuloste on seuraava:

```
Testataan LinkitettyLista:
Linkitetty lista:
0
1
2
Päivitetty linkitetty lista:
0
1
1.5
2

Testataan DoublyLinkedList:
Kaksoissuuntainen linkitetty lista:
0
1
2

Päivitetty kaksoissuuntainen linkitetty lista:
0
1
2
3

Päivitetty kaksoissuuntainen linkitetty lista poiston jälkeen:
0
2
3

Päivitetty kaksoissuuntainen linkitetty lista poiston jälkeen:
0
3
```

# 4. Leetcode

## Delete a middle node of a linked list

## Odd even linked list

## Reverse linked list

## Maximum twin sum of linked list

# 6. Lähteet

