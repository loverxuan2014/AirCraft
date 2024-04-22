const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    @property(cc.Prefab)
    bulletPre: cc.Prefab = null;
    @property()
    bulletBornTime: number = 1;

    start() {
        //���Ʒɻ��ƶ�����start��ʼ���������ƶ��¼�������ȡ��ָ����ͬ�����ɻ�����
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            this.node.setPosition(event.getLocation());
        });
        //ÿ0.5�뷢���ӵ���ʹ�ü�ʱ��
        this.schedule(() => {
            //�ӵ�born��ʹ�õ�Ԥ�������¶���ⲿ
            let playerBullet = cc.instantiate(this.bulletPre);
            //�ӵ����������� 3.5.2�汾�����ø��ڵ��ʱ����Ի�ȡ��ҽڵ�ĸ��ڵ�Ȼ���ڽ��ø��ڵ����ó��ӵ��ĸ��ڵ��OK��
            playerBullet.setParent(cc.director.getScene());
            //�ӵ�λ�ó�ʼ��
            playerBullet.setPosition(this.node.x, this.node.y + 50)
        }, this.bulletBornTime);

        //��ʼ����ײ��⿪��
        cc.director.getCollisionManager().enabled = true;
    }

    //update(dt) {}
}
