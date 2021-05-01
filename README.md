# luo-post-down-file

> Download files by post mode


## Install

```bash
npm install luo-post-down-file -S
```

## Usage

```js
import luoPostDownFile from 'luo-post-down-file';
import $ from 'jquery';
$.post("/xxx/xxx/xxx", {}, function (data) {
    if (data.status === 'SUCCESS') {
      luoPostDownFile(type, data, '测试.xlsx');
    }
});

```

## Props 

| 参数类型 | 说明 |
| ---------- | ----------- |
| type | 类型'link'为url链接模式，'blob'为二进制数据模式 |
| data | 请求返回的文件数据 |
| name | 文件名称 |

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
