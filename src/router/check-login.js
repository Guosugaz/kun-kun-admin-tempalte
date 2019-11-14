import store from "@/store";
import { Message } from "view-design";

export default (to) => {
    if (store.state.name === null && to.path.indexOf("login") < 0) {
        Message.warning("请先登录");
        return false;
    }
    return true;
}