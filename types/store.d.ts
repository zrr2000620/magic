import { ErrorTypeEnum } from '/@/enums/exceptionEnum';
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { RoleEnum } from '/@/enums/roleEnum';

// Lock screen information
export interface LockInfo {
  // Password required
  pwd?: string | undefined;
  // Is it locked?
  isLock?: boolean;
}

// Error-log information
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum;
  // Error file
  file: string;
  // Error name
  name?: string;
  // Error message
  message: string;
  // Error stack
  stack?: string;
  // Error detail
  detail: string;
  // Error url
  url: string;
  // Error time
  time?: string;
}

export interface UserMenu {
  id: number;
  frontId: RoleEnum;
}

export interface UserInfo {
  // userId: string | number;
  // username: string;
  // realName: string;
  // avatar: string;
  // desc?: string;
  // homePath?: string;
  // roles: RoleInfo[];
  id: number;
  account: string;
  pwd: string;
  adminName: string;
  phone: string;
  mail: string;
  roleId: number;
  lastLoginTime: string;
  bizState: number;
  menus: UserMenu[];
  homePath?: string;
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
