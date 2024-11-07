import { Configuration, DefinePlugin } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { ExportEntriesService } from "./webpack/service/export-entries.service";
import { DialogEntriesService } from "./webpack/service/dialog-entries.service";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import EntriesWebpackHelper from "./webpack/helper/entries-webpack.helper";
import FileManagerPlugin from "filemanager-webpack-plugin";
import WebpackBuildNotifierPlugin from "webpack-build-notifier";
import GitVersionPlugin = require("@bpedziwiatr/gitversion-webpack-plugin");

const exportEntriesService = new ExportEntriesService("./src/export/");
const exportEntriesModel = exportEntriesService.generateModel();

const dialogEntriesService = new DialogEntriesService("./src/dialog/");
const dialogEntriesModel = dialogEntriesService.generateModel();

var entriesWebpackHelper = new EntriesWebpackHelper();

const webpackPlugins = [
  new GitVersionPlugin.default({ useDotnet: true }),
  new DefinePlugin({
    "process.env": process.env.production || !process.env.development
  }),
  new FileManagerPlugin({
    events: {
      onStart: {
        delete: [__dirname + "/dist/"]
      },
      onEnd: {
        copy: [
          {
            source: __dirname + "/src/dialog/pipes-section-assistant/*.dialog.css",
            destination: __dirname + "/dist/dialog/pipessectionassistant"
          }
        ]
      }
    }
  }),
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: "tsconfig.json",
      diagnosticOptions: {
        semantic: true,
        syntactic: true
      }
    }
  }),
  new WebpackBuildNotifierPlugin({
    title: "aidevs3",
    suppressSuccess: true
  }),
  ...exportEntriesModel.plugins,
  ...dialogEntriesModel.plugins
];

var webpackEntries = entriesWebpackHelper.getWepbackEntires([...exportEntriesModel.sourceEntries, ...dialogEntriesModel.sourceEntries]);

const webpackConfig = (env, argv): Configuration => ({
  entry: webpackEntries,

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    "xrm-webapi-client": "WebApiClient"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        },
        exclude: /build/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    minimize: argv.mode === "production"
  },
  plugins: [...webpackPlugins]
});

export default webpackConfig;
