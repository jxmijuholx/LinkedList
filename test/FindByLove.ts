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
