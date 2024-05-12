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

 Aion mitata siis näiden operaatioiden suorittamiseen kuluvaa aikaa ja todennäköisesti käytän vain console logia tulosten näyttämiseen.


## Toteutus

#### Koodi jokaiseen testiin:

### 1. Find by love
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

function findLoveTweetsLinkedList(data: Emotion[]): void {
    console.log('Finding tweets containing the word "love" using Doubly Linked List:');
    const startTime = performance.now();
    const loveTweetsLinkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => {
        if (emotion.tweet.toLowerCase().includes('love')) {
            loveTweetsLinkedList.append(emotion);
        }
    });
    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

function findLoveTweetsArray(data: Emotion[]): void {
    console.log('Finding tweets containing the word "love" using Array:');
    const startTime = performance.now();
    const loveTweetsArray: Emotion[] = [];
    data.forEach(emotion => {
        if (emotion.tweet.toLowerCase().includes('love')) {
            loveTweetsArray.push(emotion);
        }
    });
    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

findLoveTweetsLinkedList(data);
findLoveTweetsArray(data);
```
### 2. Järjestä id:n mukaan
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

function sortByIDLinkedList(data: Emotion[]): void {
    console.log('Sorting by ID using Doubly Linked List:');
    const startTime = performance.now();
    data.sort((a, b) => b.id - a.id);
    const linkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => linkedList.prepend(emotion));
    const sortedData: Emotion[] = [];
    for (let i = 0; i < data.length; i++) {
        sortedData.push(linkedList.get(i) as Emotion);
    }
    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

function sortByIDArray(data: Emotion[]): void {
    console.log('Sorting by ID using Array:');
    const startTime = performance.now();
    data.sort((a, b) => b.id - a.id);

    console.log(`Time taken: ${performance.now() - startTime} milliseconds`);
}

sortByIDLinkedList(data);
sortByIDArray(data);

```
### 3. Lisää keskelle ja poista keskeltä
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
### 4. Lisää eteen ja poista ensimmäinen elementti
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

function insertAtBeginningLinkedList(data: Emotion[], numInsertions: number): number {
    const startTime = performance.now();
    const list = new DoublyLinkedList<Emotion>();
    for (let i = 0; i < numInsertions; i++) {
        list.prepend(data[i % data.length]);
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function insertAtBeginningArray(data: Emotion[], numInsertions: number): number {
    const startTime = performance.now();
    const array: Emotion[] = [];
    for (let i = 0; i < numInsertions; i++) {
        array.unshift(data[i % data.length]);
    }
    const endTime = performance.now();
    return endTime - startTime;
}

const numInsertions = 200000;

const timeLinkedList = insertAtBeginningLinkedList(data, numInsertions);
console.log(`Time taken for inserting at the beginning of Doubly Linked List: ${timeLinkedList} milliseconds`);

const timeArray = insertAtBeginningArray(data, numInsertions);
console.log(`Time taken for inserting at the beginning of Array: ${timeArray} milliseconds`);

function removeFromBeginningLinkedList(data: Emotion[], numRemovals: number): number {
    const list = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => list.append(emotion));
    const startTime = performance.now();
    for (let i = 0; i < numRemovals; i++) {
        list.removeAt(0);
    }
    const endTime = performance.now();
    return endTime - startTime;
}

function removeFromBeginningArray(data: Emotion[], numRemovals: number): number {
    const array = [...data];
    const startTime = performance.now();
    for (let i = 0; i < numRemovals; i++) {
        array.shift();
    }
    const endTime = performance.now();
    return endTime - startTime;
}

const numRemovals = 100000;

const timeRemoveLinkedList = removeFromBeginningLinkedList(data, numRemovals);
console.log(`Time taken for removing from the beginning of Doubly Linked List: ${timeRemoveLinkedList} milliseconds`);

const timeRemoveArray = removeFromBeginningArray(data, numRemovals);
console.log(`Time taken for removing from the beginning of Array: ${timeRemoveArray} milliseconds`);


```
### 5. Lisää viimeiseksi ja poista viimeinen elementti
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

function addTweetsToLinkedList(data: Emotion[]): [DoublyLinkedList<Emotion>, number] {
    const startTime = performance.now();
    const tweetListLinkedList = new DoublyLinkedList<Emotion>();
    data.forEach(emotion => tweetListLinkedList.append(emotion));
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return [tweetListLinkedList, timeTaken];
}

function addTweetsToArray(data: Emotion[]): [Emotion[], number] {
    const startTime = performance.now();
    const dataArray = [...data];
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    return [dataArray, timeTaken];
}

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

function deleteIdThreeTweetsArray(data: Emotion[]): number {
    const [dataArray, addTime] = addTweetsToArray(data);
    const startTime = performance.now();
    dataArray.filter(emotion => emotion.id !== 3);
    const endTime = performance.now();
    const deleteTime = endTime - startTime;
    return addTime + deleteTime;
}

const [linkedList, addLinkedListTime] = addTweetsToLinkedList(data);
console.log(`Time taken for adding to Doubly Linked List: ${addLinkedListTime} milliseconds`);

const [array, addArrayTime] = addTweetsToArray(data);
console.log(`Time taken for adding to Array: ${addArrayTime} milliseconds`);

const deleteLinkedListTime = deleteIdThreeTweetsLinkedList(data);
console.log(`Time taken for deletion from Doubly Linked List: ${deleteLinkedListTime} milliseconds`);

const deleteArrayTime = deleteIdThreeTweetsArray(data);
console.log(`Time taken for deletion from Array: ${deleteArrayTime} milliseconds`);

```

## Tulokset ja niiden tulkinta

### 1. Find by love
```
Finding tweets containing the word "love" using Doubly Linked List:
Time taken: 134.82570900000002 milliseconds
Finding tweets containing the word "love" using Array:
Time taken: 128.400417 milliseconds
```
Tutkimuksen tulosten perusteella voimme havaita, että Doubly Linked Listin ja taulukon (Array) välillä suoritetut haut, jotka etsivät tweettejä sisältäen sanan "love", ovat melko lähellä toisiaan tehokkuuden suhteen. Taulukko osoittautui hieman nopeammaksi, saavuttaen noin 128.4 millisekuntia, kun taas Doubly Linked Listin suorittama haku vei noin 134.8 millisekuntia.

Tämä pieni ero suorituskyvyssä voi johtua useista tekijöistä, kuten tietorakenteiden sisäisestä toteutuksesta ja siitä, miten ne käsittelevät datan lisäystä ja poistoa. On tärkeää huomata, että tulokset ovat yksittäisten suorituskertojen tuloksia, ja suorituskyky voi vaihdella eri tilanteissa ja syötteissä.

### 2. Järjestä id:n mukaan
```
Sorting by ID using Doubly Linked List:
Time taken: 261433.82325000002 milliseconds
Sorting by ID using Array:
Time taken: 23.815875000000233 milliseconds
```
Tutkimus paljasti huomattavan suorituskykyeron Doubly Linked Listin ja taulukon välillä lajittelutoiminnossa, kun tietoja järjestettiin ID:n perusteella. Tuloksista käy ilmi, että taulukko suoriutui merkittävästi paremmin, suorittaen lajittelun noin 23.8 millisekunnissa, kun taas Doubly Linked Listin lajittelu vei noin 261433.8 millisekuntia. Näin suuri ero suorituskyvyssä johtuu useista keskeisistä tekijöistä.

Ensinnäkin, taulukko tarjoaa jatkuvan muistialueen, mikä mahdollistaa tehokkaamman satunnaisen indeksoinnin ja nopeamman tiedon pääsyn. Toisaalta Doubly Linked Listin hajautuminen muistissa aiheuttaa enemmän välimuistin vääräkäyttöä ja hidastaa tiedon käsittelyä.

Toiseksi, taulukon sisäinen järjestys antaa mahdollisuuden tehokkaampien lajittelualgoritmien käyttöön, kun taas Doubly Linked Listin solmujen siirtäminen ja linkkien päivittäminen tekee siitä haastavamman suoritusympäristön lajittelulle.

Kolmanneksi, taulukko varaa yleensä yhtenäisen muistialueen, kun taas Doubly Linked Listin solmut hajautuvat muistiin, mikä voi johtaa enemmän muistin hajautumiseen ja hidastaa tiedon käsittelyä.

### 3. Lisää keskelle ja poista keskeltä
```
Testing insertion and deletion in the middle of a Doubly Linked List:
Time taken for insertion: 3.021167000000048 milliseconds
Time taken for deletion: 2.893792000000019 milliseconds

Testing insertion and deletion in the middle of an Array:
Time taken for insertion: 2.8897499999999923 milliseconds
Time taken for deletion: 1.048249999999996 milliseconds
```

Tulosten perusteella voimme huomata, että Doubly Linked Listin ja taulukon (Array) välinen suorituskykyero insertion ja deletion operaatioissa keskellä rakennetta on kohtalaisen pieni, mutta silti merkittävä. Taulukko suoriutui hieman paremmin insertion operaatiosta, kun taas Doubly Linked List oli hieman nopeampi deletion operaatiossa.

On mielenkiintoista huomata, että vaikka Doubly Linked Listin sisältämä insertion operaatio vaatii solmujen luomisen ja linkkien päivittämisen, se suoriutui silti kohtuullisen nopeasti. Tämä voi johtua siitä, että Doubly Linked Listin insertAt-metodi on tehokas toteutus, joka suoriutuu hyvin keskellä rakennetta tapahtuvista lisäyksistä.

Toisaalta taulukon splice-metodi tarjoaa nopean tavan lisätä ja poistaa alkioita taulukon keskeltä. Koska taulukon elementit ovat peräkkäin muistissa, tämä mahdollistaa tehokkaamman operaation suorituksen insertion ja deletion tapauksissa.

### 4. Lisää eteen ja poista ensimmäinen elementti
```
Time taken for inserting at the beginning of Doubly Linked List: 10.086584000000016 milliseconds
Time taken for inserting at the beginning of Array: 5089.696 milliseconds
Time taken for removing from the beginning of Doubly Linked List: 8.762375000000247 milliseconds
Time taken for removing from the beginning of Array: 116676.811166 milliseconds
```


Tulosten perusteella havaitsemme merkittävän suorituskykyeron Doubly Linked Listin ja taulukon (Array) välillä insertion ja removal operaatioissa rakenteen alusta.

Alustamisoperaation osalta Doubly Linked List suoriutui huomattavasti nopeammin, kestäen vain noin 10.1 millisekuntia verrattuna taulukon noin 5090 millisekuntiin. Tämä johtuu todennäköisesti siitä, että Doubly Linked Listin prepend-operaatio on tehokkaampi rakenteen alusta lisäämisessä, sillä se ei vaadi uudelleenjärjestelyjä, kuten taulukon shift-operaatio.

Sen sijaan removal operaation osalta Doubly Linked List suoriutui myös paremmin, kestäen noin 8.8 millisekuntia verrattuna taulukon noin 116677 millisekuntiin. Tämä ero voi johtua siitä, että Doubly Linked Listin removeAt-operaatio on tehokkaampi rakenteen alusta poistamisessa, kun taas taulukon shift-operaatio vaatii elementtien uudelleenjärjestelyä, mikä voi hidastaa suoritusta merkittävästi, erityisesti suurilla aineistoilla.

Kokonaisuutena Doubly Linked List osoittautui merkittävästi paremmaksi vaihtoehdoksi insertion ja removal operaatioissa rakenteen alusta verrattuna taulukkoon. Tämä korostaa Doubly Linked Listin hyötyjä dynaamisissa sovelluksissa, joissa tarvitaan tehokasta lisäystä ja poistoa rakenteen alusta.

### 5. Lisää viimeiseksi ja poista viimeinen elementti
```
Time taken for adding to Doubly Linked List: 23.317291999999952 milliseconds
Time taken for adding to Array: 11.472375 milliseconds
Time taken for deletion from Doubly Linked List: 47.57658299999997 milliseconds
Time taken for deletion from Array: 11.102958000000001 milliseconds
```

Tulosten perusteella voimme havaita merkittävän suorituskykyeron Doubly Linked Listin ja taulukon (Array) välillä lisäys- ja poisto-operaatioissa.

Alustusoperaation osalta taulukko suoriutui nopeammin, kestäen noin 11.5 millisekuntia verrattuna Doubly Linked Listin noin 23.3 millisekuntiin. Tämä voi johtua siitä, että taulukon spread operaatio on tehokas tapa kopioida taulukko, kun taas Doubly Linked Listin append operaatio vaatii solmujen luomista ja linkkien päivittämistä, mikä voi hidastaa suoritusta.

Sen sijaan poisto-operaatiossa taulukko suoriutui huomattavasti nopeammin, kestäen noin 11.1 millisekuntia verrattuna Doubly Linked Listin noin 47.6 millisekuntiin. Tämä ero voi johtua siitä, että taulukon filter operaatio on tehokas tapa suodattaa taulukon alkioita, kun taas Doubly Linked Listin remove operaatio vaatii solmun etsimistä ja linkkien päivittämistä, mikä voi hidastaa suoritusta, erityisesti suurilla aineistoilla.

Kokonaisuutena taulukko osoittautui paremmaksi vaihtoehdoksi lisäys- ja poisto-operaatioissa verrattuna Doubly Linked Listiin. Tämä voi olla merkittävä huomio sovellusten suunnittelussa, joissa on tarvetta tehokkaalle lisäykselle ja poistolle.

# 5. Leetcode

## Delete a middle node of a linked list

```
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.
 

Constraints:

The number of nodes in the list is in the range [1, 105].
1 <= Node.val <= 105
```

### Brainstorm

- Meille annetaan yksisuuntainen linkitetty lista, josta meidän tulee poistaa keskimmäinen elementti ja palauttaa modifioitu lista
- Keskimmäinen elementti on listan pituus jaettuna kahdella
- Mutta miten saamme listan keskimmäisen elementin ilman, että tiedämme listan pituutta?
- Voisimme luoda kaksi muuttujaa, joiden avulla pääsemme listan keskelle nopeasti
- Ensimmäinen muuttuja käy läpi kaikki listan elementit ja toinen muuttuja menee eteenpäin listassa kaksi kertaa niin nopeasti kuin ensimmäinen muuttuja, joten siinä vaiheessa kun toinen muuttuja pääsee listan loppuun, on ensimmäinen muuttuja keskellä ja sitten poistamme solmun ja palautamme listan
- Tämä konsepti on nimeltään fast and slow pointer
- Poistaminen tapahtuu siten, että kun kohtaamme muuttujan poistamme keskimmäisen elementin linkit ja yhdistämme sen edellisen ja sen seuraavan toisiinsa.
- Ongelman voisi jakaa siis kahteen osaan: keskimmäisen löytäminen ja sen poisto

#### Pseudocode

```
Keskimmäisen löytäminen voisi näyttää jotenkin tältä: 

    hidas = ensimmäinen elementti
    nopea = ensimmäinen elementti
    While (nopea ja nopea.next != tyhjä)
    {
        nopea hyppää kaksi eteenpäin
        hidas hyppää yhden eteenpäin
    }
    
    return hidas eli keskimmäinen

Ja poiston voi suorittaa jotenkin näin:

    hitaan seuraava on hitaan seuraavan seuraava solmu eli
    slow.next = slow.next.next
    eli poistamme linkin keskimmäisestä solmusta

    MUTTA, tässä toteutuksessa on ongelma!!
    jos palautamme keskimmäisen solmun niin mehän poistetaan silloin keskimmäisestä seuraava eikä keskimmäistä. Joten haluamme hitaan elementtiin keskimmäinen-1
    Tämän voimme ratkaista sillä, että ennen kuin menemme while looppiin sisään
    niin liikutetaan nopeaa kerran ennen sitä. Täten kun nopea on lopussa niin hidas on elementissä keskimmäinen - 1.

    eli lisätään rivi
    nopea = nopea.next.next
    koodin alkuun

    Nyt pseudokoodimme voisi näyttää tältä:

    hidas = ensimmäinen elementti
    nopea = ensimmäinen elementti
    nopea = nopea.next.next  // nopea hyppää kaksi ennen loopin alkua

    While (nopea ja nopea.next != tyhjä)
    {
        nopea hyppää kaksi eteenpäin
        hidas hyppää yhden eteenpäin
    }

    hidas.next = hidas.next.next

    return head
```

### Toteutus
```
    function deleteMiddle(head: ListNode | null): ListNode | null {
    
    // Base case tilanteelle jossa lista on tyhjä
    if (!head || !head.next) return null;

    // määritellään pointterit
    let slow = head;
    let fast = head;

    // siirretään nopeaa
    fast = fast.next.next;

    // niin kauan kuin nopea ei ole tyhjä niin hypitään eteenpäin
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // kun olemme lopettaneet hyppimisen niin poistetaan linkki keskimmäisestä
    slow.next = slow.next.next

    // palautetaan muokattu lista
    return head;
};
```

### Tulokset

```
https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/1251682093/ 
```

## Odd even linked list

```
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

Example 2:

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 

Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106

```

### Brainstorm

- Tämä pulma on mielestäni jo huomattavasti hankalampi ymmärtää kuin edellinen, mutta tämäkään ei ole kovin kaukana yksinkertaisesta ottaen huomioon linkitetyn listan luonnon.
- Haluamme järjestää siis linkitetty lista siten, että parittomat indeksit ovat ensin ja parilliset indeksit toiseksi
- Lähestytään ongelmaa siten, että haluamme luoda kaksi listaa -> yksi parittomille ja toinen parillisille ja sitten lopuksi yhdistämme ne yhdeksis listaksi
- Rakennetaan siis algoritmi joka vaihtaa elementtejä keskenään siten, että parittoman seuraava on parillinen ja parillisen seuraava on pariton ja näillä tiedoilla suoritamme vaihdon

- Otetaan esimerkiksi jo ylempänä mainittu lista [1, 2, 3, 4 , 5]
- Haluamme asettaa parittoman ensimmäiseen elementtiin (1) ja parillisen toiseen elementtiin (2)
```
Visualisoidaan, miten voisimme käydä läpi listaa
  
  alkuperäinen lista: 1 -> 2 -> 3 -> 4 -> 5 -> null

    alkuperäinen lista: 1 -> 2 -> 3 -> 4 -> 5 -> null
                        ^    ^
                        |    |
                        odd  even

    alkuperäinen lista: 1 -> 3 -> 2 -> 4 -> 5 -> null
                             ^    ^
                             |    |
                             odd  even

    alkuperäinen lista: 1 -> 3 -> 5 -> 2 -> 4 -> null
                                        ^    ^
                                        |    |
                                        odd  even

    alkuperäinen lista: 1 -> 3 -> 5 -> 2 -> 4 -> null
                                             ^    ^
                                             |    |
                                             odd  even

    alkuperäinen lista: 1 -> 3 -> 5 -> 2 -> 4 -> null
                                                  ^    ^
                                                  |    |
                                                  odd  even
```

### Pseudokoodi

```
    1. Funktio alkaa tarkistamalla, onko listan pää tyhjä. Jos näin on, se palauttaa pään välittömästi, ilmoittaen listan olevan tyhjä eikä uudelleenjärjestelyä tarvita.

    if (head === null || head.next === null) {
        return head;
    } 

   2. Muuttuja odd asetetaan osoittamaan listan päähän, ensimmäiseen solmuun.
    even asetetaan myös osoittamaan seuraavaan solmuun, ja sitä käytetään kulkemaan parillisten solmuje läpi.
    apumuuttuja asetetaan osoittamaan seuraavaan solmuun, joka tulee olemaan parillisten solmujen alku. Tätä tarvitaan siis säilyttämään ensimmäisen evenin arvo, jotta voimme lopussa yhdistää parittomien ja parillisten listat.

    let odd = head;
    let even = head.next;
    let temp = even;

    3. Uudellenjärjestely

    While (even ja evenin seuraava ei ole tyhjiä ) eli emme ole vielä listan lopussa{

      //  asetetaan odd.next osoittamaan seuraavaan parittomaan solmuun jotta ylitämme parillisen solmun
        odd.next = even.next
    // asetetaan odd osoittamaan seuraavaan solmuun
        odd = odd.next
    // even.next asetetaan osoittamaan seuraavaan parilliseen solmuun ja ylitämme parittoman solmun
    even.next = odd.next
    // asetetaan even osoittamaan evenin seuraavaan
        even = even.next
        
    }

     4. Parittomien ja parillisten alilistojen yhdistäminen
     Kun kaikki solmut on käsitelty, viimeinen solmu parittomien alilistassa (odd.next) linkitetään ensimmäiseen solmuun parillisten alilistassa (evenHead), tehden näin kahden alilistan yhdistämisen.
    odd.next = temp;

    5. Palautus
    Funktio palauttaa pään, joka nyt osoittaa uudelleenjärjestettyyn listaan, jossa parittomat solmut seuraavat parillisia solmuja, säilyttäen niiden alkuperäisen suhteellisen järjestyksen kummassakin ryhmässä.
    return head
```

### Toteutus

```
function oddEvenList(head: ListNode | null): ListNode | null {

    if (head === null || head.next === null) {
        return head;
    } 

    let odd = head;
    let even = head.next;
    let temp = even;
    while (even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = temp;
    return head;
};
```

### Tulokset

```
https://leetcode.com/problems/odd-even-linked-list/submissions/1255247176/?envType=study-plan-v2&envId=leetcode-75
```

## Reverse linked list

```
Given the head of a singly linked list, reverse the list, and return the reversed list.


Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
```

### Brainstorm

- Tämä tehtävä on aika yksinkertainen
- Meille annetaan linkitetyn listan pää ja meidän pitää palauttaa lista käännettynä toisinpäin
- Tämän voi tehdä siten, että käymme läpi listan ja joka kierroksella:
    1. Tallennetaan seuraavan solmun osoite
    2. Käännetään nykyisen solmun pointterin suunta osoittamaan edellistä solmua
    3. Siirrytään seuraavaan solmuun ja tehdään sama
- Kun olemme siirtyneet listan loppuun alkuperäisestä head -solmusta tulee viimeinen solmu
- Ja sitten vain palautetaan viimeisen solmun osoite, joka on nyt käännetyn listan pää eli head

```
Visualisoidaan tämä:

Alkuperäinen lista:
1 -> 2 -> 3 -> 4 -> 5

1.  Vaihdetaan ensimmäisen solmun osoittimen suunta
↓
1 <- 2 -> 3 -> 4 -> 5


2. Vaihdetaan toisen solmun osoittimen suunta
↓
1 <- 2 <- 3 -> 4 -> 5

3. Vaihdetaan kolmannen solmun osoittimen suunta
↓
1 <- 2 <- 3 <- 4 -> 5

4. Vaihdetaan neljännen solmun osoittimen suunta
↓
1 <- 2 <- 3 <- 4 <- 5

5. Vaihdetaan viidennen solmun osoittimen suunta ja asetetaan pää viimeiseen solmuun eli numeroon 5
↓
1 <- 2 <- 3 <- 4 <- 5
                    ↑
```

### Pseudokoodi

```
    1. Sama kuin aina; tarkastetaan onko listan pää tai pään seuraava tyhjä

    2. Asetetaan kaksi muuttujaa; nykyinen ja edellinen
    let curr = head;
    let prev = null;
    Laitetaan nykyinen listan päähän ja edellinen nulliksi, koska emme vielä tiedä mikä se on

    3. Käydään läpi lista ja käännetään solmut 
    while (nykyinen ei ole tyhjä){
        // määritellään muuttuja seuraavalle loopin sisässä, jotta joka loopilla on oma next -muuttuja
        // Asetetaan sille arvoksi nykyisen seuraava, aika loogista
        const seuraava = curr.next;

        // sitten asetetaan nykyisen muuttujan seuraava osoittamaan toiseen suuntaan eli
        // asetetaan se muuttujaan prev
        curr.next = prev

        // asetetaan prev nykyiseksi ja nykyinen seuraavaan, jotta pääsemme listassa eteenpäin
        prev = curr;
        curr = next;
    }

    4. Ja lopuksi palautetaan käännetyn listan pää eli prev
    Jos palauttaisimme headin niinkuin yleensä niin se palauttaisi käännetyn listan viimeisen elementin
    Tämä siksi koska muutimme vain pointtereiden suuntaa
    
    return prev;
```

### Toteutus
```
function reverseList(head: ListNode | null): ListNode | null {
    
    if (head === null || head.next === null) return head;

    let curr = head;
    let prev = null;

    while (curr !== null){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
};
```

### Tulokset
```
https://leetcode.com/problems/reverse-linked-list/submissions/1255382277/?envType=study-plan-v2&envId=leetcode-75 
```

## Maximum twin sum of linked list

```
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

Example 1:

Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
Example 2:

Input: head = [4,2,2,3]
Output: 7
Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7.

Example 3:

Input: head = [1,100000]
Output: 100001
Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

Constraints:

The number of nodes in the list is an even integer in the range [2, 105].
1 <= Node.val <= 105
````

### Brainstorm

- Tämä tehtävä onkin jo huomattavasti monimutkaisempi
- Objektiivina on löytää linkitetyn listan suurin mahdollinen "kaksossolmujen" summa
- Jokaisella solmulla on twin eli kaksonen, mikä tarkoittaa solmua, joka on samalla etäisyydellä
listan alusta ja lopusta
- Yksinkertaisesti: 
    listan 1. solmun kaksonen on listan viimeinen solmu
    listan 2. solmun pari on listan toiseksi viimeinen solmu
    listan 3. solmun pari on listan kolmanneksi viimeinen solmu
    ja niin edelleen
    Ja koska me tiedämme, että meillä on parillinen määrä solmuja
    -> voimme väittää, että keskimmäiset solmut ovat kaksosia
- Meidän pitää siis löytää SUURIN kaksosten yhteenlaskettu summa
- Tämä tehtävä vaatii jo sen verran brain poweria, että en osaa tehdä tätä parhaimmalla tavalla
- Mutta ajattelen, että tämän voisi toteuttaa näin:
    1. Käännetään linkitetty lista toisin päin niin saamme kätevästi viimeisen solmun ensimmäiseksi jne.
    2. Käydään molemmat listat läpi (tämä ei ole kovin tehokasta btw)
    3. Etsitään suurin mahdollinen summa kaksossolmujen välillä
- Aion myös tehdä syväkopion alkuperäisestä listasta, jotta emme muuta inputtia kun käännämme listaa tai kun käymme alkuperäistä ja käännettyä listaa läpi ja huom! tämäkään ei ole todellakaan tehokas tapa toteuttaa tätä tehtävää

    ### Pseudokoodi

```
    Käännetään lista toisin päin käyttäen edellisen tehtävän funktiota

    function reverseList(head: ListNode | null): ListNode | null {
    
    if (head === null || head.next === null) return head;

    let curr = head;
    let prev = null;

    while (curr !== null){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
};

    Tehdään funktio syväkopiolle:

    function deepCopyList(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let newHead = new ListNode(head.val);
    let current = head.next;
    let newCurrent = newHead;

    while (current !== null) {
        newCurrent.next = new ListNode(current.val);
        current = current.next;
        newCurrent = newCurrent.next;
    }

    return newHead;
}

    Sitten tehdään funktio tuloksen löytämiseen:

    max = 0;
    // määritellään muuttuja, joka on listan pää
    head = head;

    // määritellään muuttuja, joka on alkuperäinen lista
    copied = deepCopyList(head)
    // määritellään muuttuja, joka on käännetyn listan pää eli kaksonen
    twin = reverseList(copied)

    while (head ja twin eivät ole tyhjiä){
        max = Math.max(max, head solmun arvo + twin solmun arvo)
        // siirrytään listoissa eteenpäin, jotta löydetään suurin arvo
        head = head.next
        twin = twin.next
    }

    // palautetaan summa
    return max
```

### Toteutus

 ```
function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

function deepCopyList(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let newHead = new ListNode(head.val);
    let current = head.next;
    let newCurrent = newHead;

    while (current !== null) {
        newCurrent.next = new ListNode(current.val);
        current = current.next;
        newCurrent = newCurrent.next;
    }

    return newHead;
}

function pairSum(head: ListNode | null): number {
    if (head === null || head.next === null) return 0;
    let copiedHead = deepCopyList(head);
    // käytetään syväkopioitua päätä käännettävään listaan, jotta emme muuta muistissa vahingossa
    // alkuperäisen listan arvoja
    let reversed = reverseList(copiedHead);

    let headOfOriginalList = head;
    let headOfReversedList = reversed;
    let max = 0;

    while (headOfOriginalList !== null && headOfReversedList !== null) {
        max = Math.max(max, headOfOriginalList.val + headOfReversedList.val);
        headOfOriginalList = headOfOriginalList.next;
        headOfReversedList = headOfReversedList.next;
    }

    return max;
}
 ```

### Tulokset

```
https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/submissions/1255447238/?envType=study-plan-v2&envId=leetcode-75 
```
# 6. Lähteet

https://www.geeksforgeeks.org/introduction-to-linked-list-data-structure-and-algorithm-tutorial/ 

https://www.geeksforgeeks.org/linked-list-vs-array/?ref=lbp

https://www.freecodecamp.org/news/how-linked-lists-work/

https://www.youtube.com/watch?v=N6dOwBde7-M&t=662s

https://www.youtube.com/watch?v=Hj_rA0dhr2I
