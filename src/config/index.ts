const fs = require('fs');
const path = require('path');

const filePath: string = path.resolve(__dirname, '../../package.json');
const { version } = JSON.parse(fs.readFileSync(filePath).toString());

// 当前版本
export const VERSION: string = version;

// 暂存的文件夹
export const TEMPLATE_FILE_NAME: string = '.wxmp_app_taro';

// 用户的根目录
export const HOME_PATH: string = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'] || '';

// 配置文件目录
export const RC: string = `${HOME_PATH}/${TEMPLATE_FILE_NAME}`;

// 临时文件存放路径（下载的模板之类的）
export const TEMPORARY_FILE_PATH: string = `${HOME_PATH}/${TEMPLATE_FILE_NAME}`;

// 下载模板的url
export const DOWNLOAD_GITHUB_REMOTE: string = 'https://github.com/NervJS/taro/tree/master/packages/taro-cli/templates/default';