import GameScene from "./GameScene";
import * as Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: GameScene
};

const game = new Phaser.Game(config);