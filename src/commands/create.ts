const chalk = require('chalk');
const ora = require('ora');

import fetchTemplate from '../utils/featchTemplate';


/**
 * 创建项目
 * @param params 传入的参数列表 
 * @param commandConfig 命令的配置option，一般没用
 */
function start(params: string[], commandConfig:any){
  if(!_verfiyParams(params))return;
  // 项目名称
  const PROJECT_NAME: string = params[0];
  // 创建
  _createProject(PROJECT_NAME);
}


/**
 * 验证传入参数
 * @param params 
 * @return {boolean}
 */
function _verfiyParams(params:string[]): boolean{
  let isVerified: boolean = true;
  let errorInfo: string = '';
  // 项目名称
  const PROJECT_NAME: string = params[0]; 
  // 判断逻辑
  if(!PROJECT_NAME){
    isVerified = false;
    errorInfo = '请输入项目名称 create <project_name>';
  }
  // 错误提示
  if(!isVerified&&errorInfo){
    console.info(chalk.red(`Error: ${errorInfo}`));
  }
  return isVerified;
}

/**
 * 创建项目 
 * @param {string} projectName
 */
function _createProject(projectName:string){
  console.log(chalk.yellowBright(projectName));
  fetchTemplate('').then(()=>{
    console.info(chalk.red('jahsfjkashfh'));
  })
}

// output-es6
export default start;
// output-common
module.exports = start;