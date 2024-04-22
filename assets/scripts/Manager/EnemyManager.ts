const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {
    //����Ԥ����
    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;
    // onLoad () {}

    start () {
        //ÿ2�봴��һ������
        this.schedule(() => {
            let enemy = cc.instantiate(this.enemyPre);
            enemy.setParent(cc.director.getScene());
            enemy.y = this.node.y;
            enemy.x = Math.random() * 800 + 32;
        }, 2);
    }

    // update (dt) {}
}
