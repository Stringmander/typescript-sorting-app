import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharctersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);
