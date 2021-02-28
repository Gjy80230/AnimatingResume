let html = document.querySelector("#html")
let style = document.querySelector("#style")

let n = 0
let string = `/* 你好，我是一名bug工程师
 * 接下来我要造一个八卦图
 * 先准备一个div
 */
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
/* 接下来我要把div变成一个八卦图
 * 嘿嘿，看好了哈
 * 首先，让div变成变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 添加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ''

let step = ()=>{
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += "<br>"
        }else if(string[n] === ' '){
            string2 += '&nbsp;'
        }else{
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        n += 1
        if(n < string.length - 1){
            step()
        }
    },0)
}

step()