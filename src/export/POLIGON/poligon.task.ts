export default class PoligonApiTask {
  public async execute() {
    const response = await fetch("https://poligon.aidevs.pl/dane.txt", {
      method: "GET"
    });
    const text = await response.text();

    console.log(text);
  }
}
