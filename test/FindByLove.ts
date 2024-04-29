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
