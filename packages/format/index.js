import ms from "ms";

// How long a number of milliseconds reads to a person.
export function humanDuration(milliseconds) {
  return ms(milliseconds, { long: true });
}
