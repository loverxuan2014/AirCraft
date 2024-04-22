const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    @property(cc.Prefab)
    bulletPre: cc.Prefab = null;
    @property()
    bulletBornTime: number = 1;

    start() {
        //控制飞机移动，在start开始监听触摸移动事件，并获取手指坐标同步给飞机坐标
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            this.node.setPosition(event.getLocation());
        });
        //每0.5秒发射子弹，使用计时器
        this.schedule(() => {
            //子弹born，使用的预制体对象暴露给外部
            let playerBullet = cc.instantiate(this.bulletPre);
            //子弹所属父物体 3.5.2版本在设置父节点的时候可以获取玩家节点的父节点然后在将该父节点设置成子弹的父节点就OK了
            playerBullet.setParent(cc.director.getScene());
            //子弹位置初始化
            playerBullet.setPosition(this.node.x, this.node.y + 50)
        }, this.bulletBornTime);

        //初始化碰撞检测开启
        cc.director.getCollisionManager().enabled = true;
    }

    //update(dt) {}
}
