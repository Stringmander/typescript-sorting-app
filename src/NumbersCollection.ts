import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(i: number): boolean {
    return this.data[i] > this.data[i + 1];
  }

  swap(i: number): void {
    const leftHand = this.data[i];
    this.data[i] = this.data[i + 1];
    this.data[i + 1] = leftHand;
  }
}
