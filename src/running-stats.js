import { assertFiniteNumber, assertSeries } from "./validation.js";

export class RunningStats {
  #values = [];
  #sum = 0;
  #min = Infinity;
  #max = -Infinity;

  constructor(values = []) {
    assertSeries(values);
    for (const value of values) {
      this.add(value);
    }
  }

  get count() {
    return this.#values.length;
  }

  get sum() {
    return this.#sum;
  }

  get mean() {
    return this.count === 0 ? undefined : this.#sum / this.count;
  }

  get min() {
    return this.count === 0 ? undefined : this.#min;
  }

  get max() {
    return this.count === 0 ? undefined : this.#max;
  }

  get variance() {
    if (this.count === 0) {
      return undefined;
    }

    const average = this.mean;
    return (
      this.#values.reduce(
        (total, value) => total + (value - average) ** 2,
        0,
      ) / this.count
    );
  }

  add(value) {
    assertFiniteNumber(value);
    this.#values.push(value);
    this.#sum += value;
    this.#min = Math.min(this.#min, value);
    this.#max = Math.max(this.#max, value);
    return this;
  }

  remove(value) {
    assertFiniteNumber(value);
    const index = this.#values.indexOf(value);

    if (index === -1) {
      return false;
    }

    this.#values.splice(index, 1);
    this.#sum -= value;
    return true;
  }

  clear() {
    this.#values = [];
    this.#sum = 0;
    this.#min = Infinity;
    this.#max = -Infinity;
  }

  values() {
    return [...this.#values];
  }
}
