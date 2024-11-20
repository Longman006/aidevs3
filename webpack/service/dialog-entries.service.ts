import { IWebpackEntry } from "../interface/webpack-entry.interface";
import { IWebpackModel } from "../interface/webpack-model.interface";
import { WebpackDataService } from "./webpack-data.service";
import HtmlWebpackPlugin = require("html-webpack-plugin");
import EntriesWebpackHelper from "../helper/entries-webpack.helper";

export class DialogEntriesService {
  private readonly path: string;
  private readonly webpackDataService: WebpackDataService;
  private readonly entriesWebpackHelper: EntriesWebpackHelper;

  constructor(path: string) {
    this.path = path;
    this.webpackDataService = WebpackDataService.setup();
    this.entriesWebpackHelper = new EntriesWebpackHelper();
  }

  public generateModel(): IWebpackModel {
    if (!this.entriesWebpackHelper.fileExist(this.path)) {
      let emptyResult: IWebpackModel = {
        sourceEntries: [],
        entries: null,
        plugins: []
      };
      return emptyResult;
    }

    const entires = this.getEntries().filter((entry) => entry.path.endsWith(".dialog.ts") || entry.path.endsWith(".dialog.tsx"));

    let result: IWebpackModel = {
      sourceEntries: entires,
      entries: this.entriesWebpackHelper.getWepbackEntires(entires),
      plugins: [...this.getHtmlPlugins(entires)]
    };

    return result;
  }

  private getHtmlPlugins(entries: IWebpackEntry[]): HtmlWebpackPlugin[] {
    return entries.map((entry) => {
      const entrySlices: string[] = entry.path.split("/");

      const friendlyName: string = this.webpackDataService.getTitle(entry.friendlyName, entrySlices[3]);
      const solutionPrefix = this.webpackDataService.getSolutionPrefix();

      return new HtmlWebpackPlugin({
        inject: false,
        template: "./template/html-react-template/react-template.html",
        filename: `${entry.name}.html`,
        title: friendlyName,
        webresourceName: `${entrySlices[2]}/${entrySlices[3]}`
      });
    });
  }

  private getEntries(): IWebpackEntry[] {
    return this.entriesWebpackHelper.readFiles(this.path).map((item: { f: any; path: string }) => {
      const file = item.f;
      const currentDir = item.path.replace("src\\dialog\\", "").replace("./src/dialog/", "").replace("\\", "//");

      const currentFilePath = `./src/dialog/${currentDir}/${file}`;
      const fileName =
        `./dialog/${currentDir.replace(/\-/gi, "")}/` +
        file
          .substring(0, file.length - 3)
          .replaceAll("-", "")
          .replaceAll("_", "")
          .replaceAll(".", "")
          .replace("sii", "")
          .toLowerCase();

      const str = file.split(".")[0].replaceAll("-", " ");
      const niceName = str.charAt(0).toUpperCase() + str.slice(1);

      var result: IWebpackEntry = {
        friendlyName: niceName,
        name: fileName,
        path: currentFilePath
      };
      return result;
    });
  }
}
