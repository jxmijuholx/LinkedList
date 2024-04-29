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
