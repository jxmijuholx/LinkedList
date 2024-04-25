# Sisällysluettelo

## 1. [Johdanto](#johdanto)
## 2. [Linkitetyn listan teoriaa](#2-linkitetyn-listan-teoriaa)
## 3. [Toteutus](#3-toteutus)
## 4. [Tutkimista](#4-tutkimus)
## 5. [LeetCode](#5-leetcode)
## 6. [Lähteet](#6-lähteet)


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

# 4. Tutkimista

## Alustusta 

Aion vertailla linkitetyn listan ja taulukon suorituskykyä. Vertailen niitä mittaamalla aikaa performance.now() -kirjaston avulla. Suoritan emotions.csv tiedostolle erilaisia operaatioita kuten järjesteylä, hakua, lisäämistä ja poistamista. Emotions.csv on aineisto, joka sisältää noin 400 tuhatta erilaista palaa dataa ja jokaisella palalla on id, twiitti ja numero, joka vastaa jotain tunnetta, joka esiintyy twiitissä. Eli aineisto on jo suhteellisen painava ja toivon näkeväni koneeni hieman hidastuvan testejä suorittaessa.

## Hypoteesi

Veikkaisin, että taulukko suoriutuu vielä tämän kokoisella aineistolla lähes jokaisessa tapauksessa paremmin kuin linkitetty lista, sillä JavaScriptin taulukko on dynaaminen ja sen takia erittäin nopea. Mutta, toivon kuitenkin, että joissain tapauksissa linkitetty lista pääsisi edes lähelle taulukon suorituskykyä. Haluan myös nähdä, kuinka paljon huonommin linkitetty lista mahdollisesti suoriutuu niistä operaatioita, joista olettaisimmekin sen suorituvan hitaasti.

## Testisuunnitelma

#### Aion testata seuraavia asioita (Array vs Linked list):
- Järjestäminen id:n mukaan
- Etsiä kaikki twiitit, joissa esiintyy sana 'love'
- Lisääminen eteen
- Lisääminen perälle
- Lisääminen keskelle
- Edestä poisto
- Perältä poisto
- Keskeltä poisto
- Ylimääräiset, ei niin tärkeät, testit

 Aion mitata siis näiden operaatioiden suorittamiseen kuluvaa aikaa ja todennäköisesti käytän vain console logia tulosten näyttämiseen.


## Toteutus

#### Koodi jokaiseen testiin:

1. Perään lisääminen ja sieltä poisto
```
import * as fs from 'fs';
import { performance } from 'perf_hooks';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';


const rawData: string = fs.readFileSync('emotions.csv', 'utf-8');
const data: Emotion[] = rawData
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
        const [id, tweet, emotion] = line.split(',');
        return { id: parseInt(id), tweet, emotion: parseInt(emotion) };
    });

// Function to add all tweets to a Doubly Linked List and measure time
function addTweetsToLinkedList(data: Emotion[]): [DoublyLinkedList<Emotion>, number] {
    const startTime = performance.now();
    const tweetListLinkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => tweetListLinkedList.append(emotion));
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return [tweetListLinkedList, timeTaken];
}

// Function to add all tweets to an Array and measure time
function addTweetsToArray(data: Emotion[]): [Emotion[], number] {
    const startTime = performance.now();
    const dataArray = [...data];
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return [dataArray, timeTaken];
}

// Function to delete all emotions with id 3 using doubly linked list and measure time
function deleteIdThreeTweetsLinkedList(data: Emotion[]): number {
    const [tweetListLinkedList, addTime] = addTweetsToLinkedList(data);
    const startTime = performance.now();

    let curr = tweetListLinkedList.head;
    while (curr) {
        if (curr.value.id === 3) {
            const next = curr.next;
            tweetListLinkedList.remove(curr.value);
            curr = next;
        } else {
            curr = curr.next;
        }
    }

    const endTime = performance.now();
    const deleteTime = endTime - startTime;
    return addTime + deleteTime;
}

// Function to delete all emotions with id 3 using array and measure time
function deleteIdThreeTweetsArray(data: Emotion[]): number {
    const [dataArray, addTime] = addTweetsToArray(data);
    const startTime = performance.now();

    const filteredArray = dataArray.filter(emotion => emotion.id !== 3);

    const endTime = performance.now();
    const deleteTime = endTime - startTime;
    return addTime + deleteTime;
}

// Measure time for adding to the doubly linked list
const [linkedList, addLinkedListTime] = addTweetsToLinkedList(data);
console.log(`Time taken for adding to Doubly Linked List: ${addLinkedListTime} milliseconds`);

// Measure time for adding to the array
const [array, addArrayTime] = addTweetsToArray(data);
console.log(`Time taken for adding to Array: ${addArrayTime} milliseconds`);

// Measure time for deleting from the doubly linked list
const deleteLinkedListTime = deleteIdThreeTweetsLinkedList(data);
console.log(`Time taken for deletion from Doubly Linked List: ${deleteLinkedListTime} milliseconds`);

// Measure time for deleting from the array
const deleteArrayTime = deleteIdThreeTweetsArray(data);
console.log(`Time taken for deletion from Array: ${deleteArrayTime} milliseconds`);

```
2. Etsi 'love'
```
import * as fs from 'fs';
import { performance } from 'perf_hooks';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';

// Load data from emotions.csv
const rawData: string = fs.readFileSync('emotions.csv', 'utf-8');
const data: Emotion[] = rawData
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
        const [id, tweet, emotion] = line.split(',');
        return { id: parseInt(id), tweet, emotion: parseInt(emotion) };
    });

// Function to find tweets containing the word 'love' using doubly linked list
function findLoveTweetsLinkedList(data: Emotion[]): void {
    console.log('Finding tweets containing the word "love" using Doubly Linked List:');
    const startTime = performance.now();

    // Create a DoublyLinkedList to store love tweets
    const loveTweetsLinkedList = new DoublyLinkedList<Emotion>();

    // Traverse the data array
    data.forEach(emotion => {
        if (emotion.tweet.toLowerCase().includes('love')) {
            loveTweetsLinkedList.append(emotion);
        }
    });

    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

// Function to find tweets containing the word 'love' using array
function findLoveTweetsArray(data: Emotion[]): void {
    console.log('Finding tweets containing the word "love" using Array:');
    const startTime = performance.now();

    // Create an array to store love tweets
    const loveTweetsArray: Emotion[] = [];

    // Traverse the data array
    data.forEach(emotion => {
        if (emotion.tweet.toLowerCase().includes('love')) {
            loveTweetsArray.push(emotion);
        }
    });

    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

// Run the tests
findLoveTweetsLinkedList(data);
findLoveTweetsArray(data);

```
3. Eteen lisääminen
```
import * as fs from 'fs';
import { performance } from 'perf_hooks';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';

// Load data from emotions.csv
const rawData: string = fs.readFileSync('emotions.csv', 'utf-8');
const data: Emotion[] = rawData
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
        const [id, tweet, emotion] = line.split(',');
        return { id: parseInt(id), tweet, emotion: parseInt(emotion) };
    });

// Function to insert elements at the beginning of a Doubly Linked List and measure time
function insertAtBeginningLinkedList(data: Emotion[], numInsertions: number): number {
    const startTime = performance.now();
    const list = new DoublyLinkedList<Emotion>();
    for (let i = 0; i < numInsertions; i++) {
        list.prepend(data[i % data.length]);
    }
    const endTime = performance.now();
    return endTime - startTime;
}

// Function to insert elements at the beginning of an Array and measure time
function insertAtBeginningArray(data: Emotion[], numInsertions: number): number {
    const startTime = performance.now();
    const array: Emotion[] = [];
    for (let i = 0; i < numInsertions; i++) {
        array.unshift(data[i % data.length]);
    }
    const endTime = performance.now();
    return endTime - startTime;
}

// Number of insertions for the test
const numInsertions = 200000;

// Measure time for inserting at the beginning of a Doubly Linked List
const timeLinkedList = insertAtBeginningLinkedList(data, numInsertions);
console.log(`Time taken for inserting at the beginning of Doubly Linked List: ${timeLinkedList} milliseconds`);

// Measure time for inserting at the beginning of an Array
const timeArray = insertAtBeginningArray(data, numInsertions);
console.log(`Time taken for inserting at the beginning of Array: ${timeArray} milliseconds`);

// Compare the times
if (timeLinkedList < timeArray) {
    console.log('Doubly Linked List performed better for inserting at the beginning.');
} else if (timeLinkedList > timeArray) {
    console.log('Array performed better for inserting at the beginning.');
} else {
    console.log('Both performed equally for inserting at the beginning.');
}

```
4. Järjestä id:n mukaan
```
import * as fs from 'fs';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';

const rawData: string = fs.readFileSync('emotions.csv', 'utf-8');
const data: Emotion[] = rawData
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => {
        const [id, tweet, emotion] = line.split(',');
        return { id: parseInt(id), tweet, emotion: parseInt(emotion) };
    });

// Järjestetään koko emotions.csv suurimmasta id:stä pienempään käyttäen doubly linked listiä
function sortByIDLinkedList(data: Emotion[]): void {
    console.log('Sorting by ID using Doubly Linked List:');
    const startTime = performance.now();
    
    // Sort the data array by id in descending order
    data.sort((a, b) => b.id - a.id);

    // Add the sorted data to the linked list
    const linkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => linkedList.prepend(emotion));

    const sortedData: Emotion[] = [];
    for (let i = 0; i < data.length; i++) {
        sortedData.push(linkedList.get(i) as Emotion);
    }

    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

// Järjestetään koko emotions.csv suurimmasta id:stä pienempään käyttäen arrayta
function sortByIDArray(data: Emotion[]): void {
    console.log('Sorting by ID using Array:');
    const startTime = performance.now();
    
    // Järjestäminen arrayllä
    data.sort((a, b) => b.id - a.id);

    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

// Aja testi
sortByIDLinkedList(data);
sortByIDArray(data);

```
5. Lisää ja poista keskeltä
```
import * as fs from 'fs';
import { performance } from 'perf_hooks';
import DoublyLinkedList from '../DoublyLinkedList';
import { Emotion } from './Emotion';

function createDoublyLinkedList(data: Emotion[]): DoublyLinkedList<Emotion> {
    const linkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => linkedList.append(emotion));
    return linkedList;
}

// Test insertion and deletion in the middle of a doubly linked list
function testDoublyLinkedList(data: Emotion[]): void {
    console.log('Testing insertion and deletion in the middle of a Doubly Linked List:');
    const linkedList = createDoublyLinkedList(data);
    const middleIndex = Math.floor(data.length / 2);

    // Insertion
    const startTimeInsertion = performance.now();
    const nodeToInsert = { id: 99999, tweet: 'New Tweet', emotion: 1 };
    linkedList.insertAt(nodeToInsert, middleIndex);
    const insertionTime = performance.now() - startTimeInsertion;

    // Deletion
    const startTimeDeletion = performance.now();
    linkedList.removeAt(middleIndex);
    const deletionTime = performance.now() - startTimeDeletion;

    console.log(`Time taken for insertion: ${insertionTime} milliseconds`);
    console.log(`Time taken for deletion: ${deletionTime} milliseconds`);
}

// Test insertion and deletion in the middle of an array
function testArray(data: Emotion[]): void {
    console.log('Testing insertion and deletion in the middle of an Array:');
    const array = [...data];
    const middleIndex = Math.floor(data.length / 2);

    // Insertion
    const startTimeInsertion = performance.now();
    array.splice(middleIndex, 0, { id: 99999, tweet: 'New Tweet', emotion: 1 });
    const insertionTime = performance.now() - startTimeInsertion;

    // Deletion
    const startTimeDeletion = performance.now();
    array.splice(middleIndex, 1);
    const deletionTime = performance.now() - startTimeDeletion;

    console.log(`Time taken for insertion: ${insertionTime} milliseconds`);
    console.log(`Time taken for deletion: ${deletionTime} milliseconds`);
}

function main(): void {
    const rawData = fs.readFileSync('emotions.csv', 'utf-8');
    const data: Emotion[] = rawData
        .split('\n')
        .filter((line) => line.trim() !== '')
        .map((line) => {
            const [id, tweet, emotion] = line.split(',');
            return { id: parseInt(id), tweet, emotion: parseInt(emotion) };
        });

    testDoublyLinkedList(data);
    testArray(data);
}
main();

```
6. Muuta pelleilyä
```

```

## Tulokset ja niiden tulkinta

1. Perään lisääminen ja sieltä poisto
```
Time taken for adding to Doubly Linked List: 23.983334000000013 milliseconds
Time taken for adding to Array: 10.632042000000013 milliseconds
Time taken for deletion from Doubly Linked List: 28.469667000000015 milliseconds
Time taken for deletion from Array: 13.115958999999975 milliseconds
```
2. Etsi 'love'
```
Finding tweets containing the word "love" using Doubly Linked List:
Time taken: 133.90008400000005 milliseconds
Finding tweets containing the word "love" using Array:
Time taken: 129.44154199999997 milliseconds
```
3. Eteen lisääminen
```
Time taken for inserting at the beginning of Doubly Linked List: 9.245584000000008 milliseconds
Time taken for inserting at the beginning of Array: 4974.91575 milliseconds
Doubly Linked List performed better for inserting at the beginning.
```
4. Järjestä id:n mukaan
```
Sorting by ID using Doubly Linked List:
Time taken: 260566.770833 milliseconds
Sorting by ID using Array:
Time taken: 11.95933299997705 milliseconds
```
5. Lisää ja poista keskeltä
```
Testing insertion and deletion in the middle of a Doubly Linked List:
Time taken for insertion: 3.0532079999999837 milliseconds
Time taken for deletion: 2.954750000000047 milliseconds
Testing insertion and deletion in the middle of an Array:
Time taken for insertion: 2.611082999999951 milliseconds
Time taken for deletion: 1.0215840000000185 milliseconds
```
6. Muuta pelleilyä
```

```

# 5. Leetcode

## Delete a middle node of a linked list

## Odd even linked list

## Reverse linked list

## Maximum twin sum of linked list

# 6. Lähteet

