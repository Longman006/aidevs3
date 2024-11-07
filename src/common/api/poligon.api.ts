import { TaskRequestBody, TaskRequestResponse } from "common/model/poligon.model";

export default class PoligonApi {
  private static readonly apikey = "6e739d5d-219c-4212-b5ff-5b7c8b145f29";
  private static readonly uri = "https://poligon.aidevs.pl/verify";

  public static async sendTaskAnswer(task, answer) {
    const body: TaskRequestBody = {
      answer: answer,
      apikey: this.apikey,
      task: task
    };
    const response = await fetch(this.uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    });
    const responseBody: TaskRequestResponse = await response.json();
    return responseBody;
  }
}
