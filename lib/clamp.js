export default function clamp (number) {
  const d = Math.ceil(Math.log10(number < 0 ? -number : number));
  const mag = 10 ** (16 - Math.floor(d));
  return Math.round(number * mag) / mag;
}
