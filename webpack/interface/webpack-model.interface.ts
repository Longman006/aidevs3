import { EntryObject } from "webpack";
import { IWebpackEntry } from "./webpack-entry.interface";

export interface IWebpackModel {
  entries: EntryObject;
  sourceEntries: IWebpackEntry[];
  plugins: any[];
}
