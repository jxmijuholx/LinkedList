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
