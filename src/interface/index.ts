// [struct] action-map-item 
interface ActionMapItem {
  params?: string, // <requied_params> 
  description: string;// 命令的描述
  // action: (actionName: string, requiedParams: string, optionalParams?: string[])=>void;
  [x: string]: any;
}

// [struct] action-map
interface ActionMap {
  [x:string]: ActionMapItem
}

export {
  ActionMapItem,
  ActionMap
}