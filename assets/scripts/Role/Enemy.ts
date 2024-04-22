const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {
    @property
    enemySpeed: number = 150;

    start() {

    }

    update(dt) {
        this.node.y -= this.enemySpeed * dt;
        if (this.node.y < -10) {
            this.node.destroy();
        }
    }

    //die
    die() {
        //ÇÐ»»ËÀÍöÍ¼Æ¬
        cc.loader.loadRes("Images/Enemy/enemy/enemy_1_die", cc.SpriteFrame, (err, res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res;
        });
        setTimeout(() => {
            this.node.destroy();
        }, 300);
    }
}