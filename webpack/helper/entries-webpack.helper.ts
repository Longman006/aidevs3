import fs from "fs";
import path from "path";
import { EntryObject } from "webpack";
import { IWebpackEntry } from "../interface/webpack-entry.interface";

export default class EntriesWebpackHelper {
  public fileExist(path: string) {
    return fs.existsSync(path);
  }

  public getWepbackEntires(entires: IWebpackEntry[]): EntryObject {
    return entires.reduce((obj: any, item: any) => Object.assign(obj, { [item.name]: item.path }), {});
  }

  public readFiles(readPath: string): any {
    function read(_dir) {
      return fs
        .readdirSync(_dir)
        .reduce(
          (files, file) =>
            fs.statSync(path.join(_dir, file)).isDirectory() ? files.concat(read(path.join(_dir, file))) : files.concat({ f: file, path: _dir }),
          []
        );
    }
    return read(readPath);
  }
}
