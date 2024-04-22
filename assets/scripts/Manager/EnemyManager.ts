const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {
    //敌人预设体
    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;
    // onLoad () {}

    start () {
        //每2秒创建一个敌人
        this.schedule(() => {
            let enemy = cc.instantiate(this.enemyPre);
            enemy.setParent(cc.director.getScene());
            enemy.y = this.node.y;
            enemy.x = Math.random() * 800 + 32;
        }, 2);
    }

    // update (dt) {}
}
