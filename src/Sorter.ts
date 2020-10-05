export abstract class Sorter {
  abstract length: number;
  abstract compare(i: number): boolean;
  abstract swap(i: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}
