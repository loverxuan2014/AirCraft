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
        //destory when bullet beyond the screen,������ڿ��ǵ���mapmoveʹ�������map��������������870
        if (this.node.y > 870) {
            this.node.destroy();
        }
    }

    //�ӵ�����ײ�¼�
    onCollisionEnter(clooisionThing) {
        //����������ǵ��ˣ�1.�õ���������2.�����ӵ�
        if (clooisionThing.tag == 10) {
            clooisionThing.getComponent(Enemy).die();
            //����ֹͣ�ƶ�
            clooisionThing.getComponent(Enemy).enemySpeed = 0;
            this.node.destroy();
        }
    }
}
