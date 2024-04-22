const { ccclass, property } = cc._decorator;

@ccclass
export default class MapMove extends cc.Component {
    @property
    MoveSpeed: number = 0;

    //start () {}

    update(dt) {
        //���ó���ѭ��ƴ���ƶ����ƶ��ٶȲ�����¶���ⲿ
        for (let bgNode of this.node.children) {
            //֡�ƶ�����ת��Ϊ���ƶ�����
            bgNode.y -= this.MoveSpeed * dt;
            if (bgNode.y <= -1 * bgNode.height) {
                bgNode.y += bgNode.height * 2;
            }
        }
    }
}
