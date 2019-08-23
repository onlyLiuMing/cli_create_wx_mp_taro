// 主的流程控制
const applyCommand = (action: string, ...args: any[]) => {
  // 传入的参数
  const params: string[] = args.length > 1 ? args.slice(0, args.length - 1) : [];
  // 命令的配置
  const commandConfigObj: any = args.length > 1 ? args.slice(-1) : args[1];
  // 加载命令
  require(`./${action}`)(params, commandConfigObj);
};

export default applyCommand;
