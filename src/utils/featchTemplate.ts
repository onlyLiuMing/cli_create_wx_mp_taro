const download = require('download-git-repo');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
import { RC, TEMPLATE_FILE_NAME, TEMPORARY_FILE_PATH, HOME_PATH, DOWNLOAD_GITHUB_REMOTE } from '../config/index';

// loading
const spinner = ora(chalk.yellow(`${DOWNLOAD_GITHUB_REMOTE} is downloading...`));

/**
 * 拉取下载的模板
 * @param remoteUrl 
 */
function fetchTemplate(remoteUrl: string): Promise<any> {
  // 存放模板的路径 
  const TEMPLATE_STORE_PATH: string = path.join(TEMPORARY_FILE_PATH, 'template');
  // 删除上次下载的模板
  _deleteFolderRecursive(TEMPLATE_STORE_PATH);
  // 自动生成目录
  _autoCreateDir(TEMPORARY_FILE_PATH)
  // 创建暂存模板的文件夹
  _autoCreateDir(TEMPLATE_STORE_PATH);
  // download template
  spinner.start();
  return new Promise((resolve: any, reject: any) => {
    download('direct:'+DOWNLOAD_GITHUB_REMOTE, TEMPLATE_STORE_PATH, function (err: any) {
      if (Boolean(err)) {
        // 下载错误
        spinner.fail(`Download Error: ${err}`);
        reject();
      } else {
        spinner.succeed(chalk.green(`Download ${DOWNLOAD_GITHUB_REMOTE} is successed`));
        resolve();
      }
    });
  });
}

// 自动生成目录
function _autoCreateDir(dirPath: string): Promise<any> {
  const exitedDir: boolean = fs.existsSync(dirPath);
  !exitedDir && fs.mkdirSync(dirPath);
  return Promise.resolve();
}

// 递归删除
function _deleteFolderRecursive(path:string): void{
  if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file:any) {
          var curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()) { // recurse
              _deleteFolderRecursive(curPath);
          } else { // delete file
              fs.unlinkSync(curPath);
          }
      });
      fs.rmdirSync(path);
  }
};

// output
export default fetchTemplate;
module.exports = fetchTemplate;