let loopBody = document.getElementById("loopbody");  //上面大图
let loopNav = document.getElementById("loopnav");   //下面导航小图
let leftBtn = loopNav.querySelector(".left-btn");   //左箭头
let rightBtn = loopNav.querySelector(".right-btn");  //右箭头
let smallImgs = loopNav.querySelector(".loop-imgs");  //小图

// 大图数据
const historyItem = [{
        img:'url("pic/history/1-1.png")',
        h:'1978-1987',
        p:'提出“联合办电，集资办电”  解决电力资金不足的问题'
    },{
        img:'url("pic/history/2-1.png")',
        h:'2002年11月',
        p:'我国第一个核电站秦山核电站  采用目前世界上成熟的压水堆'
    },{
        img:'url("pic/history/3-1.png")',
        h:'2005年4月',
        p:'启动“西电东输”战略工程  为西部地区的发展提供了契机'
    },{
        img:'url("pic/history/4-1.png")',
        h:'2006年11月',
        p:'国家重点工程华能玉环电厂  唯一一座拥有四台百万千瓦机组'
    },{
        img:'url("pic/history/5-1.png")',
        h:'2009年01月',
        p:'中国第一条特高压输电线路  ——山西晋东南至湖北'
    },{
        img:'url("pic/history/6-1.png")',
        h:'2015年11月',
        p:'新电改方案  确立电网企业新的盈利模式'
    }
]
// 小图数据
const loopImg = [
    ["pic/history/1-2.png","1978-1987年"],
    ["pic/history/2-2.png","2002年11月"],
    ["pic/history/3-2.png","2005年4月"],
    ["pic/history/4-2.png","2006年11月"],
    ["pic/history/5-2.png","2009年01月"],
    ["pic/history/6-2.png","2015年11月"],
]

// 生成上面大图
function initItem(a){
    if(!historyItem[a]) return;
    let div = document.createElement("div");
    div.className = "history-body-item";
    div.index = a;
    div.style.backgroundImage = historyItem[a].img;

    let div2 = document.createElement("div");
    div2.className = "item-box";

    let h5 = document.createElement("h5");
    h5.innerText = historyItem[a].h;

    let p = document.createElement("p");
    p.innerText = historyItem[a].p;

    div2.appendChild(h5);
    div2.appendChild(p);
    div.appendChild(div2);
    loopBody.appendChild(div);
}

// 生成导航小图
function initLoop(){
    for(let i in loopImg){
        initItem(i);
        let div = document.createElement("div");
        div.className = "loop-img-item";
        div.index = i;
        div.style.left = i*25 + '%';

        let img = document.createElement("img");
        img.src = loopImg[i][0];

        let p = document.createElement("p");
        p.innerText = loopImg[i][1];

        div.appendChild(img);
        div.appendChild(p);
        smallImgs.appendChild(div);

        // 切换图片
        div.addEventListener("click",switchItem);
    }
    loopBody.children[0].style.display = 'flex';
}

initLoop();


// 点击小图切换大图
function switchItem () {
    let index = this.index;
    let item = loopBody.children;

    for(let i=0;i<item.length;i++){
        item[i].style.display = 'none';
    }
        
    item[index].style.display = 'flex';
    
}

// 滚动
function loop(dir){
    let item = smallImgs.children;
    let length = item.length;
    let speed = dir<0 ? 0 : (4 - length);
    for(let i=0;i<item.length;i++){
        // 动画持续时间 即滚动速度
        item[i].style.transition = '1s';
        item[i].style.left = (i + speed)*25 + '%';
    }
}
rightBtn.addEventListener("mousedown",loop.bind(this,1));
leftBtn.addEventListener("mousedown",loop.bind(this,-1));