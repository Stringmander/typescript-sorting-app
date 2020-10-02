export class NumbersCollection {
  constructor(public data: number[]) {}

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
