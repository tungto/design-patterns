public class MiniDuckSimulator {


    public static void main(String[] args) {
        Duck mallardDuck = new MallardDuck();
        mallardDuck.setFlyBehaviour(new FlyNoWay());
        mallardDuck.setQuackBehaviour(new MuteQuack());
        mallardDuck.performFly();
        mallardDuck.performQuack();



        Duck modelDuck = new ModelDuck();
        modelDuck.display();
        modelDuck.performQuack();
        modelDuck.performFly();
        modelDuck.setFlyBehaviour(new FlyRocketPowered());
        modelDuck.performFly();

    }
}
