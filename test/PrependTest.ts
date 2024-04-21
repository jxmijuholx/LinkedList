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

// Load data (assuming data is already loaded)

// Number of insertions for the test
const numInsertions = 10000;

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
