const { ccclass, property } = cc._decorator;

@ccclass
export default class MapMove extends cc.Component {
    @property
    MoveSpeed: number = 0;

    //start () {}

    update(dt) {
        //设置场景循环拼接移动，移动速度参数暴露给外部
        for (let bgNode of this.node.children) {
            //帧移动速率转化为秒移动速率
            bgNode.y -= this.MoveSpeed * dt;
            if (bgNode.y <= -1 * bgNode.height) {
                bgNode.y += bgNode.height * 2;
            }
        }
    }
}
