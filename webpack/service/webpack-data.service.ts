import fs from "fs";

export class WebpackDataService {
  private static readonly siiPrefix: string = "sii_";
  private readonly configJson: any;

  constructor(configJson: any) {
    this.configJson = configJson;
  }

  public static setup(): WebpackDataService {
    const dataJsonPath = "./webpack/webpack.data.json";

    try {
      if (fs.existsSync(dataJsonPath)) {
        const configData: string = JSON.parse(fs.readFileSync(dataJsonPath, "utf-8"));
        return new WebpackDataService(configData);
      }
    } catch (err) {
      console.error("Issue with 'webpack.data.json' file");
      console.error(err);
    }

    return new WebpackDataService(undefined);
  }

  public getSolutionPrefix(): string {
    if (this.configJson && this.configJson.SolutionPrefix) {
      return this.configJson.SolutionPrefix ?? WebpackDataService.siiPrefix;
    }
    return WebpackDataService.siiPrefix;
  }

  public getTitle(entryFriendlyName: string, dialogName: string): string {
    if (this.configJson && this.configJson.DialogTitles) {
      return this.configJson.DialogTitles[dialogName] ?? entryFriendlyName;
    }
    return entryFriendlyName;
  }
}
