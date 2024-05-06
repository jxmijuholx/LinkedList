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

