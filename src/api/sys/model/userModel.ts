import { UserMenu } from '/#/store';

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  pwd: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // roles: RoleInfo[];
  // // 用户id
  // userId: string | number;
  // // 用户名
  // username: string;
  // // 真实名字
  // realName: string;
  // // 头像
  // avatar: string;
  // // 介绍
  // desc?: string;
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
