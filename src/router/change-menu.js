import store from "@/store";

export default (to) => {
    let { path } = to;
    const [,open, active] = path.split("/");
    store.commit("setMenu", {
        open,
        active
    });
}