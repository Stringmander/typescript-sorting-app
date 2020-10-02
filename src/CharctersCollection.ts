import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(i: number): boolean {
    return this.data[i].toLowerCase() > this.data[i + 1].toLowerCase();
  }

  swap(i: number): void {
    const characters = this.data.split('');

    const leftHand = characters[i];
    characters[i] = characters[i + 1];
    characters[i + 1] = leftHand;

    this.data = characters.join('');
  }
}
