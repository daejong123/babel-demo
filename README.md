```javascript
mkdir babel-demo && cd babel-demo
npm init -y && mkdir src
1. 本地安装babel-cli: npm i babel-cli -D
2. 注意本地安装的babel是不能直接运行在命令行的
```
```js
为了在命令行运行babel命令的两个方法
1. 在 package.json中的scripts配置命令（将src下文件进行转译到lib下）
        "build": "babel src -d lib",
    或者直接调试运行js
        "bnode": "babel-node src/rx.js"
2. 进入node_modules文件夹中的.bin中。
    然后在命令行中执行 
        babel src -d lib
    或者
        babel-node src/rx.js

3. 但是你会发现。按照上面运行不了。f**k!
    因为还有最后一步没有做！没有配置转码器(es6/es7/react代码转成浏览器或者nodejs能识别的代码)
    1. npm install babel-preset-env -D
    2. 在package.json同级目录新建.babelrc文件
        添加内容
        {
            "presets":["env"]
        }

        说明：
        .babelrc用于配置除回调以外的所有babel api 选项。
        例如plugins和presets。plugins用于配置我们转译所需要的插件，presets用于配置我们所需要的转译器。
        .babelrc不是必须的，我们在.babelrc中配置的选项都可以通过命令行添加，比如在命令行执行 babel src -d lib --presets=env 等价于在.babelrc中配置 "presets":["env"]。当然.babelrc要明显方便很多。

        babel在转译代码的过程中会自动读取当前目录.babelrc配置文件，如果当前目录没有的话就遍历整个目录树去寻找，
        直到找到.babelrc文件或者含有"babel"字段的package.json文件，然后使用这些配置选项来转译代码。
        如package.json
        "babel":{
            //babel选项
            "presets":["es2015", "stage-1"],
            "comments":false
        },

        关于.babelrc的注意点如下。
        1、如果没有.babelrc文件，或者没有在其他文件中设置过babel的presets的配置选型，
           并且命令行中也没有配置--presets，那么代码是不会转译的。原es6代码什么样，转译后的代码还是什么样。
        2、如果你的.babelrc或者你的命令行使用了你没有安装的转译器（presets），代码就会报错
        3、但.babelrc中的配置跟你在命令行中使用的配置冲突的时候，以.babelrc中的配置为准
    3. 安装其他依赖
        # ES2015转码规则
        $ npm install --save-dev babel-preset-es2015
        # react转码规则
        $ npm install --save-dev babel-preset-react
        # ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
        $ npm install --save-dev babel-preset-stage-0
        $ npm install --save-dev babel-preset-stage-1
        $ npm install --save-dev babel-preset-stage-2
        $ npm install --save-dev babel-preset-stage-3
        加入babelrc
        {
            "presets": [
                "es2015",
                "react",
                "stage-2"
            ],
            "plugins": []
        }
    4. 注意
    对于 export default {} 支持不好，还得加个插件 babel-plugin-add-module-exports：
    "plugins": [
        "add-module-exports"
    ]
    命令：npm install babel-plugin-add-module-exports --save-dev
```
