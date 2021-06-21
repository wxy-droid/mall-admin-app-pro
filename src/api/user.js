// 用户信息
import instance from "./axios";

export default {
    login(params) {
        return instance.post('/passport/login',params);
    },
    logon(params) {
        return instance.post('/passport/logon',params);
    },
    getCode(params) {
        return instance.post('/passport/getCode',params);
    },
    getPass(params) {
        return instance.post('/passport/findBack',params);
    },
    getChangeUserInfo(params) {
        return instance.put('/passport/changeUserInfo',params);
    }
}