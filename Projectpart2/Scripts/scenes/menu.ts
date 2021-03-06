﻿// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
          private _Instr: objects.Button;
		    private _Exit: objects.Button;
		   private _menuLabel2: objects.Label;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "MAIL PILOT", "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            
              // add the Start button to the MENU scene
            this._Instr = new objects.Button(
                "instr",
                 10, 10, true);
            this.addChild(this._Instr);


            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            this._Instr.on("click", this._InstrClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {
            this._ocean.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        }

    }
}