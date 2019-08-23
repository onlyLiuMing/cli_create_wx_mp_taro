// interface
import { ActionMap } from "../interface/index";

// action-name 必须与command文件夹下命令相对应
const actionMap:ActionMap = {
  create: {
    params:  'project_name',
    description: 'program name', 
  }  
}

export default actionMap;