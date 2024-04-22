import Enemy from "../Role/Enemy";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    @property
    bulletSpeed: number = 600;
    bulletAudio: cc.AudioClip = null;

    //start() {}

    update(dt) {
        //bullet move every sec
        this.node.y += this.bulletSpeed * dt;
        //destory when bullet beyond the screen,这里后期考虑导入mapmove使用里面的map宽度来代替这里的870
        if (this.node.y > 870) {
            this.node.destroy();
        }
    }

    //子弹的碰撞事件
    onCollisionEnter(clooisionThing) {
        //如果碰到的是敌人，1.让敌人死亡，2.销毁子弹
        if (clooisionThing.tag == 10) {
            clooisionThing.getComponent(Enemy).die();
            //敌人停止移动
            clooisionThing.getComponent(Enemy).enemySpeed = 0;
            this.node.destroy();
        }
    }
}
