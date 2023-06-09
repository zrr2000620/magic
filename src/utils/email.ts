export function gotoEmail(email: string) {
  let suffix = email.split('@')[1];
  suffix = suffix.toLowerCase();
  if (suffix == '163.com') {
    return 'mail.163.com';
  } else if (suffix == 'vip.163.com') {
    return 'vip.163.com';
  } else if (suffix == '126.com') {
    return 'mail.126.com';
  } else if (suffix == 'qq.com' || suffix == 'vip.qq.com' || suffix == 'foxmail.com') {
    return 'mail.qq.com';
  } else if (suffix == 'gmail.com') {
    return 'mail.google.com';
  } else if (suffix == 'sohu.com') {
    return 'mail.sohu.com';
  } else if (suffix == 'tom.com') {
    return 'mail.tom.com';
  } else if (suffix == 'vip.sina.com') {
    return 'vip.sina.com';
  } else if (suffix == 'sina.com.cn' || suffix == 'sina.com') {
    return 'mail.sina.com.cn';
  } else if (suffix == 'tom.com') {
    return 'mail.tom.com';
  } else if (suffix == 'yahoo.com.cn' || suffix == 'yahoo.cn') {
    return 'mail.cn.yahoo.com';
  } else if (suffix == 'tom.com') {
    return 'mail.tom.com';
  } else if (suffix == 'yeah.net') {
    return 'www.yeah.net';
  } else if (suffix == '21cn.com') {
    return 'mail.21cn.com';
  } else if (suffix == 'hotmail.com') {
    return 'www.hotmail.com';
  } else if (suffix == 'sogou.com') {
    return 'mail.sogou.com';
  } else if (suffix == '188.com') {
    return 'www.188.com';
  } else if (suffix == '139.com') {
    return 'mail.10086.cn';
  } else if (suffix == '189.cn') {
    return 'webmail15.189.cn/webmail';
  } else if (suffix == 'wo.com.cn') {
    return 'mail.wo.com.cn/smsmail';
  } else if (suffix == '139.com') {
    return 'mail.10086.cn';
  } else {
    return '';
  }
}
