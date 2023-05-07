/* 
自我介绍:

    1>我是谁:
    面试官你好，我叫刘震泊，来自湖北黄石。于2022年毕业于武昌首义学院，所学的专业是计算机科学与技术。
    我在2020年就职于国药控股湖北有限公司，担任前端实习生，目前是公司的前端开发工程师。

    2>我的优势:
    a.(bug)我擅长学习和擅长快速定位bug的位置，并能够找到方法快速的解决bug
    b.(实战经历)我实战经历非常丰富，拿到一个项目知道如何应对、从何开始，而不会面对一个需求、
    一个空白的编辑器不知道从哪开始写。
    c.(擅长沟通，业务转化为代码)我喜欢沟通，乐于沟通，在产品需求方面往往能够理解具体需求是什么，
    并将它转换成TodoList，并翻译成代码

    3>我做过什么、做成了什么、我想做什么
    药品销售系统、医药处方管理系统、翻牌匹配游戏。这些项目
    为公司带来了很大的效益。
    我想继续从事前端开发工作，也在寻求更好的发展平台

    4>我为什么适合这份工作
    (擅长JS，实战经验丰富)我很擅长JavaScript，我业余时间也写了很多项目和demo，对一些功能的实现很熟悉，
    能够很好的完成产品需求的功能。我乐于学习、善于沟通、编写的代码具有可维护性阅读性，所以我相信自己可以胜任这个岗位
*/

/*  Day01 

1. HTML5新特性？    
    a.新的语义化标签(如video,audio,方便SEO)
    b.新技术(Canvas,WebGl,WebSocket)
    c.新的API(拖拽，地理位置，history)
    d.Web存储(localStorage && sessionStorage)
    f.表单控件(date,time,email,url,search)

4. CSS选择器及优先级
    选择器:
            id选择器
            class选择器
            
            属性选择器(a[rel="external"])
            伪类选择器(a:hover li:nth-child)
            相邻选择器(h1 + p)
            子代选择器(ul > li)
            后代选择器(ul  li)
            通配符选择器(*)


            标签选择器

    优先级: !import > 内联 > id > class > 标签 > 继承
    内联：就是写在标签内部的样式，比如说<p style="xxxxxx"></p>

6. == 和 ===的区别
    a. == 表示相等 （值相等） ===表示恒等（类型和值都要相等）。
       ==是松散相等，===是严格相等
    b. ==会用隐式类型强转，把不是同一类型的转成同一类型，再比较值
       而===不会。

7. script脚本放再head和body后面有什么区别？
    如果放head里，浏览器在解析html时，会被js阻塞，导致页面加载时间过久。比如说一个js脚本要4s解析，
    那么最后页面出现的时间一定是大于4s的，这样用户体验就很不好。

    如果放在body后，是解析完html，再解析js，页面可以提前加载出来，而js可以晚一点再加载出来，大大
    提高了性能。

    所以一般再script脚本上加上defer属性，让它延迟到html解析完毕再解析js，这样保证了用户能第一时间看到界面
*/

/* Day02

7.关于垃圾回收
    定义:每隔一段时间，它会检查某个变量a后面还需不需要，如果不需要，就把它删掉，不再占用内存空间
    当我们程序走到尽头并且执行完毕时，它会删除所有变量
    好处:有些语言没有垃圾回收机制，这意味着您需要在使用完毕后手动清理内存，但在 JavaScript 中则不必这样做。
    
8.如何打乱一个数组？
const arr = [1, 2, 3, 4, 5]

function arrRandom(arr) {
  return arr.sort(() => 0.5 - Math.random())
}
arrRandom(arr)

核心思想是借助Math.random
*/

/*  Day03

2.for-in 和 for-of的区别
    for-in遍历对象的属性
        for-in还会遍历对象所有的可枚举属性，包括原型。
       
    for-of遍历数组
        for...of与forEach()不同的是，它可以正确响应break、continue和return语句
         for of遍历带迭代器的对象
    总的来说，遍历对象用for-in,遍历数组用for-of

*拓展：for-in和for-of可以用来写异步吗？
 是可以的。for...in和for-of 可以与异步操作一起使用。你可以通过使用 for...in 循环遍历一个对象中的所有属性，
    并使用 await 关键字来等待异步操作完成，比如说：

    async function asyncFunction(obj) {
        for (let key in obj) {
        const value = obj[key]
        const result = await someAsyncOperation(value)
        console.log(`The result for ${key} is ${result}`)
  }
}

    asyncFunction(myObject)

    上面的例子中，asyncFunction 函数使用 for...in 循环遍历 myObject 对象
    中的每个属性，并对每个属性的值执行异步操作。

 */

/* 网络:

1. http状态码？
    1XX:信息类，请求已发送过去，在处理
    2XX:Success，请求成功了
    3XX:重定向
        304:代表      请求的资源未修改
    4XX:客户端出错
        403:未授权，客户端发过来的API key没有权限访问这个内容。
        404:客户端请求的资源服务器并没有
    5XX:服务器出错

2. 304的过程
    a.客户端向服务器请求资源之前会检查一下上次请求时的缓存，如果缓存发到服务器上，服务器说
    你这个缓存跟上一次请求的并没有变化，就会返回304
    b.客户端只读取本地缓存就行，而不需要重新下载资源
    c.如果服务器检查缓存发现有改变，则返回200

    图解:
    第一次:                             client
      (请求头中没有If-Modified-Since)    | ↑
                                        | |
                                        | |
                                        ↓ |  (服务器会告诉请求资源最后被修改的时间:响应头中的Last-Modified)
                                        server
    
    第二次:                             client
      (请求头中有If-Modified-Since)      | ↑
                                        | |
                                        | |
                                        ↓ |  (服务器会告诉请求资源最后被修改的时间:响应头中的Last-Modified)
                                        server
    如果资源没有被修改，server返回304状态码，浏览器使用本地的缓存文件

    
3.强缓存和协商缓存
    强缓存(Expires Cache-Control)：不与服务器同信，直接读浏览器自己的本地缓存资源。
    协商缓存(Last-Modified etag)：把浏览器之前的缓存资源发给服务器，让服务器比较资源是否更新了。
    更新了，就返回200和其他信息；没更新，就返回304

    正常情况下，浏览器优先走强缓存。如果强缓存过期了，就向服务器请求；
    请求的资源未更新，则返回304，就会从缓存中读取资源；如果返回200，
    则下载新的资源到本地，方便下一次读取
    
4. http1,2,3的区别
    http1.0 (请求处理具有间断性)
        TCP连接是间断的，就是说client发送请求时连接，server处理完这个请求断开；然后client再发
        以此类推。
        简单来讲，每次与服务器交互，都需要新断开之前的一个连接

    http1.1 (持久连接但是会阻塞，请求头响应头)
        a. 引入了持久连接，即TCP连接是不中断的，在同一个TCP连接里面，客户端可以同时发送多个请求
        虽然是持久连接，但是所有的数据通信是按次序进行的，是会阻塞的。如果前面一个请求
        server没处理完，那么后面所有的请求都要排队等它弄完才能处理

        b. 新增了一些方法，比如说请求头和响应头

    http2.0 (多路复用：不间断、并行；二进制；报头压缩；服务器推送)
        a.多路复用，即一个连接，不间断，也不需要排队等待前面一个完成，而是并行
        b.采用二进制而非文本格式
        c.采用报头压缩，降低开销
        d.server推送

    http3.0 (又快又可靠)
    是 HTTP/3 中的底层支撑协议，这个协议基于UDP，但又吸取了TCP的精华，所以它又快又可靠

5.从输入url到页面呈现，经过了哪些过程？
    (缓存)a.在url中敲入ｍ
        浏览器会检查缓存中的DNS记录。DNS就是一个数据库，一个域名对应一个ip
        （使用DNS，不使用ip访问网站是因为使用url的命名能够更人性化的记住网站，而ip不行）
        为了找到DNS记录，浏览器会查找４个缓存
            ·首先，查找浏览器缓存
            ·第一步找不到，查找操作系统缓存。即浏览器会查找Windows上的gethostname来获取记录
            ·再找不到，检查路由缓存。如果它不在你本地计算机上，浏览器将与维护其自己DNS记录缓存
            的路由器通信
            ·最后去ISP找
    好处：虽然我们的信息被缓存在某个地方并不能使我们在隐私方面感到很舒服，但缓存对于
    节省网络流量和缩短数据传输时间至关重要。

    (DNS递归)ｂ．如果请求的URL不在缓存中，ISP的DNS服务器将发起DNS查询以查找托管maps.google.com的服务器的IP地址
        在ISP中的DNS服务器又叫DNS递归器，其他DNS服务器称为名称服务器
        ISP的DNS服务器会在互联网上对多个DNS进行递归查询，从１个DNS检索到另一个DNS，直到找到正确的ｉｐ
        或者返回一个错误相应说我无法找到这个ｉｐ

        具体过程：首先，DNS递归器将联系根名称服务器。根名称服务器会将其重定向到．com域名服务器
        .com名称服务器将重定向到google.com名称服务器
        google.com在其DNS记录中找到maps.google.com的匹配IP地址，并将其返回到
        DNS递归器，DNS递归其再发给您的浏览器。
    
    (返回ip)ｃ．浏览器收到ｉｐ地址后，和服务器简历TCP连接，也就是３次握手。建立起连接，代表可以进行数据传输了
    ｄ．浏览器向网络服务器发送 HTTP 请求。
            浏览器将发送 GET 请求请求 maps.google.com 网页。
            如果您要输入凭据或提交表单，这可能是一个 POST 请求。
    ｅ．服务器处理完请求，返回响应
        它从浏览器接收ｒｅｑ并将其传递给　请求处理程序　以读取并生成响应，请求处理程序
    
    ｆ．服务器发出 HTTP 响应
            ｒｅｓ中包括了你请求的网页还有状态码、压缩类型(Content-Encoding)、如何缓存页面(Cache-Control)、
            要设置的任何 cookie、隐私信息等

    ｈ．浏览器呈现ｈｔｍｌ等内容
        ·首先，它会呈现最初的ｈｔｍｌ骨架
        ·其次，会检查ｈｔｍｌ标签，来获取对应的ｃｓｓ、ｊｓ等。这些静态文件由浏览器缓存，
        因此在下次访问页面时不需要再次获取它们。

    最后，您会在浏览器中看到 maps.google.com。

    查缓存 => 返回ip给客户端 => 三次握手 => 客户端js发请求 => 服务器返回数据 => 浏览器渲染(dom + CSSOM
    => Render tree =>Layout => Painting) =>四次挥手 
 */

/* CSS：
1、响应式布局和移动布局有什么区别？
    响应式布局：任何屏幕都能自适应。需要运用媒体查询
    移动布局：专门为手机、平板做的布局
        总结：响应式布局更普遍，移动布局旨在优化移动设备上的用户体验。

2、Rem布局
        缺点：a.目前 ie 不支持，
              b.算不上真正意义上的移动布局，本质上其实还是px布局

3.清除浮动的几个方式
        a.div上写style="clear:both;"
        b.让父元素overflow:auto
        c.让父元素也浮动(不好)
        d.给父元素添加一个伪元素，来添加一个看不见的块元素，从来达到清除浮动的目的
        e.BFC，让浮动脱标的一起进入BFC盒子

4. CSS3新特性
    a.媒体查询(>= 而不用写min-width)
    b.自定义动画
    c.过渡
    d.Flex,Grid

5.水平垂直居中的方法
    a.父级flex容器，让项目在其主轴上水平对齐，交叉轴上居中对齐
    b.给父级相对定位，子元素绝对定位，相对于父级上下左右均为0，margin:auto
    c.表格布局也行

6.margin带一、二、三、四个参数，含义分别是什么？
    margin:10px(上下左右10px)
    margin:10px 20px(上下10px 左右20px)
    margin:10px 20px 30px(上10px 左右20px 下30px)

    margin:10px 20px 30px 40px(上10 右20 下30 左40)

7.BFC开启的方法有哪些？
    1.float不为none
    2.overflow不是visible
    3.position的值是static/relative
    4.display的值是inline-block、 flex 、table-cell

8.盒模型
    border-box: width = content + padding + border
    content-box: width = content

9.flex
    flex-shirk:0定义了盒子不再随着视口宽度缩小而收缩
    flex-basis:0定义了盒子的初始宽度，如果你给某个flex项目一个默认宽度，但没给flex-basis,
    那么这个项目从初始宽度200px开始grow/shirk

    比如说一个flex容器width:900px,item1、2、3默认宽均设为200px。
    你给item1 flex-shirk:0，item2 flex-grow:2, item3 flex-grow:1，为什么item2宽不是item3宽的2倍呢？

    那么这个容器剩余空间其实为900-200*3 = 300px
    然后item2,item3分配剩余空间，item1固定宽度
    所以最后item2宽度为200 + 300*2/3 = 400px
    item3宽度200 + 300*1/3 = 300px
    
    正解item1 flex-shirk:0，item2 flex-grow:2 flex-basis:0, item3 flex-grow:1 flex-basis:0
    则容器剩余空间为900-200 = 700px
    item2宽：700*2/3
    item3宽: 700*1/3
    这样item2宽才是item3的两倍

    总结:造成flex-grow:2不是flex-grow:1项目的两倍的原因是:宽度不是从0开始增长的
    根本原因是因为两个方案的剩余空间不同
１０．ｆｌｅｘ子元素可以浮动吗
    可以。不过最好不要这样做。因为浮动代表了子元素脱离了文档流。ｆｌｅｘ容器默认以为那个位置没有东西了
    就会安排其他元素过去，这样容易导致布局错乱
    如果硬要浮动的话，把父元素也进入BFC，用overflow：ｈｉｄｄｅｎ／auto
*/

/* JS:

1.forEach和map的区别？

相同点：都是同步的，必须等上一个做完才执行下一个
不同点：
    a.*返回值: forEach没有返回值，map会返回一个新数组
    b.打断: forEach自身不能被打断，但可以使用抛出异常的方式跳出循环；map的回调函数中可以用return中止
    c.速度上: map比forEach执行的速度更快

    d.拓展：forEach如何跳出循环?
    而使用 forEach 方法则无法直接实现跳出循环，但可以通过抛出异常的方式来模拟跳出循环的效果。例如：
   const arr = [1, 2, 3, 4, 5];
    try {
        arr.forEach((item) => {
        if(item === 3) {
        throw BreakException; // 抛出异常
    }
        console.log(item);
    });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    如果item等于3，则抛出异常进入catch中执行
    如果捕获到的异常是 BreakException，那么就跳出整个循环。

2. typeof 和 instanceof
    前者是判断数据类型，后者是判断是不是实例
    前者能判断基本数据类型，后者能判断引用数据类型；两者是互补的，他不行的我行

3.浅拷贝和深拷贝
    浅拷贝：两个对象共同引用一个value/地址。特点是值改变，两个跟着一起变
    深拷贝: 两个对象分别对应两个不同的地址，其中一个改变，另外一个不受影响

    方法:
        浅拷贝：Array.from(),concat(),...
        深拷贝：const obj2 = JSON.parse(JSON.stringify(obj)),JSON可以深拷贝obj/arr ; 递归循环

4.闭包(词法环境 => 作用域链 => 闭包)
    a.定义：在JS中任何函数都是闭包，因为它在创建的时候就保存了上层环境的变量
    b.应用：
            1.从内到外读取变量
            2.JavaScript足够聪明，它可以延长外部(所需变量)的生命周期；直到你不需要它了为止，
            并把它垃圾回收掉
    c.缺点：大量使用闭包会造成内存泄漏

5.什么是垃圾回收？

6.什么是内存泄漏，哪些操作会导致内存泄漏？
    是在程序中分配了内存空间，但在用完以后没有正确释放就叫内存泄漏。
    a.创建全局变量，你可能一不小心就会创建一个全局变量：
        a1.你引用一个未声明的变量，会在全局对象上创建一个新的变量，比如说：
        function foo(arg) {
            bar = "some text"
        }
        这个bar变量就是全局的

        a2.this关键字。你可能不经意地用this创建一个全局变量，比如说：
        function foo() {
        this.var1 = "potential accidental global";
        }
        调用 foo 函数时，this 会指向全局对象(window)而不是未定义，所以var1时挂在全局环境下的变量

    b.闭包


7.diff算法

8.重绘、回流（重排）
    重绘（颜色改变）：比如改变了元素的颜色，那么浏览器只需要将元素重新渲染，这个过程叫做"重绘 (repaint)"。
    回流（元素大小位置、||整体布局）：这个元素的尺寸(px)、布局、位置（你放标签的位置）改变时，浏览器需要
    重新新计算元素的几何属性，并重新布局，这个叫回流

    因为回流后需要重新解析HTML和CSS并生成DOM和CSSOM，但重新生成DOM不一定会触发回流，因为你可能只是
    文本内容发生了改变。
    重绘只是再做一次Paint，而回流/重排则是整个浏览器渲染UI的过程都要从头开始
    这就是为什么说重绘不一定会回流，但回流一定会进行重绘
    
    所以重绘的成本相对较低，而回流比重绘更加耗费性能
    以下是一些减少回流的方法：
        ａ．使用transform 属性代替 top/left 属性来移动元素，因为 transform 不会触发回流。
        ｂ．避免使用 table 布局，因为 table 中某个元素的变化会导致整个 table 的重新布局。
        ｃ．避免频繁修改 DOM 树的结构，可以通过修改css样式来实现相同的效果
        
9、防抖和节流
        所谓防抖，事件不是每次不触发，而是要等待事件稳定下来过后，再触发最后一次的稳定事件。
        之前每次的事件触发都被定时器重置了，只有最后一次是生效的。

10、JS继承的几种方式？
    a.原型链继承。即构造函数原型上的属性、方法继承另一个原型new出来的对象(原型继承对象)
    b.构造函数继承。通过this绑定，让构造函数不指向自己的原型，指向别人的原型(原型继承构造函数)
    c.组合继承
    d.寄生组合继承

11.async await 理解
    async放在function前，是在声明这个函数是异步的
    await后跟promise对象，是等待这个承诺执行完并拿到其返回的结果
        ·如何捕获错误？
            在async函数里用try catch来捕获await的结果，如果await等待的结果出错了，则进入catch块执行

12. var,const,let区别
    声明变量上：var可以声明同一个变量多次，而另外两个不行
    作用域上：var会变量提升，而另外两个不会，它们是暂时性死区
    let和const：可变和不可变

13.字符串拼接方法？
    a.用 + 隐式转换成字符串
    b.用ES6的模板字符串，即${}里放波兰那个

１４.怎么判断一个对象是不是数组
        ａ．Array.isArray()
        ｂ．instanceof

１５．基本数据类型
Number（数字）：用于表示数字，包括整数和浮点数。
String（字符串）：用于表示文本，可以包含字母、数字、符号等。
Boolean（布尔值）：只有两个值，true 和 false，用于表示逻辑真和假。
Undefined（未定义）：表示一个未定义的变量或属性。
Null（空值）：表示一个空的对象引用。
Symbol（符号）：ES6 新增类型，用于创建唯一的标识符。
BigInt（大整数）：ES10 新增类型，用于表示任意精度的整数。

＊基本数据类型是按值传递的，也就是说两个变量对应两个值。而不是两个变量共用一个内存地址
ｌｅｔ　ａ＝　１
ｂ　＝　ａ
ｂ　＋　１　

ａ１　ｂ２
 */

/* React
1、什么是PureComponent?
    纯函数是React Component一种，它继承了纯函数的优点：
    也就是在props和state不变时，不会重复渲染，提高了性能

2、什么是HOC？
    定义:高阶组件是接收一个组件，并做一定的加工，然后返回这个加工后的组件。返回后的组件可以包含原组件并
    增强其功能。
    用处：a.重用组件逻辑
          b.渲染劫持:修改组件的渲染方式，例如添加一些属性、元素或事件监听器。
    总结：HOC是React中一种强大的编程技术，可以帮助我们实现复杂的组件逻辑和重用组件代码。

3、useEffect可以模拟哪些生命周期？
        a.ComponentDidMount
        b.ComponentDidUpdated
        c.ComponentWillUnmount
        d.shouldComponentUpdate，和useState一起

4.setState是同步还是异步？
        setState可能是异步，也可能是同步的
        a.在React事件处理中，setState通常是异步的，也就是说React不会立马更新它的状态，而是将多个
        setState() 调用合并为一个，更新来提高性能，然后稍后执行，以提高性能
        b.但是，如果你在React生命周期方法（如componentDidMount）调用setState，它通常会立即更新状态，
        这时是同步的。
5.useState呢？是同步还是异步？
        同步的，主要是这个回调函数是同步的
        这意味着在调用 useState 后，立即调用更新状态的函数，组件状态会立即更新。

6.真实DOM和虚拟DOM
        ·真实DOM是浏览器的API，它将html元素列成一个DOM树。当JS修改了DOM后，浏览器会重新计算渲染树
        并进行重排和重绘，这个过程非常耗时。
        ·虚拟DOM是对真实DOM的一个抽象描述，是用JS对象嵌套模拟真实的DOM树。当虚拟DOM发生改变时，会和
        上一次的虚拟DOM比较一下，找出变化的部分，然后只更新这些部分对应的真实 DOM，这个过程叫做“DOM diff”
        ·好处：可以减少真实DOM的操作次数，提高页面渲染的性能

	总的来说，具体过程是：先从上到下把这个组件的代码跑一遍，再和上一次版本的组件进行比较，最后在只更新这
	部分组件(运行函数 => 比较 => 更新)

７．ｃｏｍｍｏｎｊｓ和ES６模块语法区别
        ａ．一个是Ｎｏｄｅ语法，一个是浏览器支持的语法
        ｂ．导入导出。ｒｅｑｕｉｒｅ和Ｉｍｐｏｒｔ　Ｍｏｄｕｌｅ．ｅｘｐｏｒｔ和ｅｘｐｏｒｔ
        ｃ．作用域。一个动态作用域。一个静态作用域

８.async await和promise的区别
        ａ．Promise是一个 JavaScript 对象，表示异步操作的最终完成或失败，它有三种状态
        async函数返回一个Promise对象，可以通过await关键字等待异步操作的结果
    　　（可读性：同步和链式调用）async/await的优点在于代码的可读性更好，可以使异步代码看起来像同步代码一样
        ｂ．async/await可以处理更复杂的异步操作，因为可以在async函数中使用常规的控制流语句
        （如条件语句和循环语句）来处理异步操作，而Promise则需要使用then()和catch()方法
        来进行复杂的异步操作处理。
        （根据是否需要条件判断使用情况不一样）

9.为什么不能在条件判断/循环里写hooks?
        因为如果这样做，react不知道你钩子的调用顺序，导致渲染/状态处理出错

10.函数式组件和类组件的区别？
        1.写法上：一个是函数，通过props返回React元素；另一个是类，集成React.Component
        2.状态管理上：函数式组件可能要引入第三方状态管理工具/useReducer。而类组件则是this.state
        3.性能上：函数式更快，因为它没有new的过程；而且它还没有生命周期
        4.生命周期方法：函数式没有生命周期，只是在模拟
        5.获取渲染时的值：闭包

11.React Fiber
    核心思想：Fiber是利用事件循环的机制，去获取浏览器的空闲时间，把大的JS任务拆成一个又一个小的task
    必备概念：在16.6ms-一瞬间的渲染时间 = 就是剩余时间
    实现原理：通过浏览器的requestIdleCallback 或 MessageChannel API来拆解任务，使任务片段在浏览器的
             空余时间得以执行
    特点：提供了可中断的、增量式的渲染
    总结：React Fiber 并非直接控制事件循环，而是是利用事件循环的机制在上层进行工作调度和
         任务拆分的一种实现方式。   
    */

/* 打包器
1.webpack和vite区别
    a.速度。速度上Vite采用了新的实现方式，使用了ES modules的动态引入和浏览器原生ES模块支持，
    可以实现更快的构建速度和更快的热更新。
    b.自动/手动。Vite提供了一个开箱即用的开发服务器;而Webpack需要(手动)配置开发服务器，并且(热更新)
    的速度可能会比较慢
    c.插件生态。webpack丰富，vite小
    d.支持的文件类型。
                    webpack:JS、CSS、图片、字体等 
                    vite：JS、CSS。其他类型的文件需要手动配置。
    总体来说，Vite在开发体验和构建速度方面有明显的优势，但Webpack在插件生态和对多种文件类型
    的支持方面更加强大。
2.vite为什么快？
    a.采用了浏览器的ES Module
    b.采用了预编译，可以在代码发生变化之前预先编译依赖
    c.利用了 HMR（热更新）技术，使得修改代码后可以立即在浏览器中看到更新的效果
*/

// csrf怎么盗取？ => 在Cookie里面搜session/sid
/*
Promise的reject和catch有什么区别
useState是同步还是异步
异步


1.git如何查看和回退以前的版本
    git log查看
    git reset –hard 目标版本号

2.git diff 
    比较和上一次的不同

3.react中的this是指向哪的
在 React 中，组件中的 this 关键字通常指向当前组件的实例。
*/

// 页面出现白屏有什么原因？
//Promise.all,返回的是什么？Promise.race
//https://blog.csdn.net/qq_40190624/article/details/106607405
//Object和Map
//为什么需要虚拟DOM =>性能和跨平台

/* 1.React核心思想是什么？

    1.组件化，将页面划分成一系列独立的、可复用的组件，每个组件包含自己的状态和逻辑，
    可以与其他组件组合成复杂的 UI 界面
    2.声明式。JSX
    3.函数式编程。它将组件看作是一个纯函数，即组件的输入只依赖于它的 props 和 state，输出只依赖于输入。
    这种模式可以使得组件的逻辑更加清晰和易于测试，减少了副作用和不必要的状态。
    4.单向数据流。组件不会直接修改父组件的数据。减少了潜在的数据混乱和错误
    5.虚拟DOM
    
    2.state和props有什么区别
        state是组件内部状态，具有可变性，专门为与用户交互而保留。
        而props是父组件流向子组件的数据，它可以是任何东西，比如说组件，状态，函数等等，具有不变性
        (可变性、父子性)

    3.CSS 中的 BEM 是什么？你能简单地描述一下它的工作原理吗？
        BEM 是块（Block）、元素（Element）、修饰符（Modifier）的缩写。它是一种 CSS 类命名约定，
        旨在帮助开发人员编写更可维护和可重用的 CSS 代码。BEM 的基本思想是将每个 CSS 类名分为三部分，
        用连字符分隔开。块是一个独立的组件，具有自己的意义和用途，例如按钮、表单等。元素是块的组成部分，
        例如表单中的标签、按钮中的文本等。修饰符是对块或元素的外观和行为进行更改的标志，例如按钮的大小或颜色等。

    4.HOC是什么，有什么应用()
        代码复用：使用高阶组件可以将通用的逻辑和状态提取到一个单独的组件中，然后在多个组件中重复使用。
        功能增强：使用高阶组件可以为组件添加额外的功能，例如验证输入、计时器等。
        条件渲染：使用高阶组件可以根据条件选择不同的渲染方式。
        数据注入：使用高阶组件可以将数据注入到组件中，例如将 Redux 的状态注入到组件中。

  5.受控组件和非受控的区别
 	受控：表单的值由state状态来控制，呈现什么内容是state决定的，state是什么，那么表单的值就是什么
	(state => 控制UI）
	非受控：表单的值由浏览器控制，即DOM决定
	(DOM => 控制UI)

   6.input和change事件区别
	input就是你每次表单输入时就会触发
	change则是那你提交表单时触发

*/

// justify-content: center 和 align-items: center 属性将子元素在水平和垂直方向上   居中对齐
/* 
如果你想要避免在组件挂载时触发这个回调函数，但仍然希望在count的值发生改变时触发回调函数，你可以在组件挂载时跳过这个回调函数的执行，例如：



const isFirstRender = useRef(true);
useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  console.log('组件更新了');
}, [count]);

这个代码段利用了useRef来保存组件是否是首次渲染的状态，如果是首次渲染，
就跳过回调函数的执行，否则就执行回调函数。


*/
