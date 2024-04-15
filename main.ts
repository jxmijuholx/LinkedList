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
