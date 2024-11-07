import EntriesWebpackHelper from "../helper/entries-webpack.helper";
import { IWebpackEntry } from "../interface/webpack-entry.interface";
import { IWebpackModel } from "../interface/webpack-model.interface";

export class ExportEntriesService {
  private readonly _path: string;
  private readonly entriesWebpackHelper: EntriesWebpackHelper;

  constructor(path: string) {
    this._path = path;
    this.entriesWebpackHelper = new EntriesWebpackHelper();
  }

  public generateModel(): IWebpackModel {
    const entires = this.getEntries();
    let result: IWebpackModel = {
      sourceEntries: entires,
      entries: this.entriesWebpackHelper.getWepbackEntires(entires),
      plugins: []
    };

    return result;
  }

  private getEntries(): IWebpackEntry[] {
    return this.entriesWebpackHelper.readFiles(this._path).map((item: { f: any; path: string }) => {
      const file = item.f;
      const currentDir = item.path.replace("src\\export\\", "").replace("./src/export/", "").replace("\\", "//");

      const currentFilePath = `./src/export/${currentDir}/${file}`;
      const fileName =
        `./${currentDir}/` +
        file
          .substring(0, file.length - 3)
          .replace("-", "")
          .replaceAll("_", "")
          .replaceAll(".", "")
          .replace("sii", "")
          .toLowerCase();

      var result: IWebpackEntry = {
        friendlyName: fileName,
        name: fileName,
        path: currentFilePath
      };
      return result;
    });
  }
}
