import axios from "axios"

import { Message } from "view-design"

const conext = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
})

function request({ url, method = "get", data }) {
    return new Promise((resolve, reject) => {
        const options = {
            url: `/api/v1${url}`,
            method,
            headers: {
                Authorization: tool.getCookie("Authorization")
            }
        }
        if (method.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data;
        }
        conext(options)
            .then(res => {
                console.log(res);
                resolve(res);
            })
            .catch(error => {
                handleError(error)
            })
    })
}

//响应错误处理
function handleError(error) {
    console.log(error, error.response);
    if (!error.response) return;
    const status = error.response.status;
    switch (status) {
        case 404:
            Message.error({
                content: "抱歉没有找到接口地址",
                duration: 4
            })
            return;
        default:
            Message.error({
                content: "抱歉服务器出现了一些问题，请刷新试下",
                duration: 4
            })
            return;
    }
}

export default request
