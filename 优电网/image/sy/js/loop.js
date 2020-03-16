let loopBody = document.getElementById("loopbody");  //上面大图
let loopNav = document.getElementById("loopnav");   //下面导航小图
let leftBtn = loopNav.querySelector(".left-btn");   //左箭头
let rightBtn = loopNav.querySelector(".right-btn");  //右箭头
let smallImgs = loopNav.querySelector(".loop-imgs");  //小图

// 大图数据
const historyItem = [{
        img:'url("pic/history/0010.png")',
        h:'2013年6月',
        p:'一带一路建设成果之一，华电水电站大坝建成并开始发电。'
    },{
        img:'url("pic/history/0014.png")',
        h:'第2张图',
        p:'一带一路建设成果之一，华电水电站大坝建成并开始发电。'
    },{
        img:'url("pic/history/0010.png")',
        h:'第3张图',
        p:'一带一路建设成果之一，华电水电站大坝建成并开始发电。'
    },{
        img:'url("pic/history/0010.png")',
        h:'第4张图',
        p:'一带一路建设成果之一，华电水电站大坝建成并开始发电。'
    },{
        img:'url("pic/history/0010.png")',
        h:'第五张图',
        p:'一带一路建设成果之一，华电水电站大坝建成并开始发电。'
    }
]
// 小图数据
const loopImg = [
    ["pic/history/0014.png","1978-1987年"],
    ["pic/history/0013.png","1978-1987年"],
    ["pic/history/0012.png","1978-1987年"],
    ["pic/history/0011.png","1978-1987年"],
    ["pic/history/0012.png","第五张图"],
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