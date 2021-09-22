/**
* Wait Until Custom Blocks
*/
//% weight=100 color=#bc8cbe block="WaitUntilBlocks" icon="\f04c"
namespace WaitUntilBlocks {
    /**
       * Wait until a pin is pressed
       * @param pin pin to wait for eg: P0, P1, P2
       */
    //% blockId=WaitUntilBlocks_wait_until_pin_pressed
    //% block="wait until pin %pin is pressed"
    //% block.loc.nl="wacht tot pin %pin is ingedrukt"
    //% jsdoc.loc.nl="Wacht tot een pin is ingedrukt"
    //% pin.loc.nl="Pin waar je op wacht, bijvoorbeeld P0, P1, P2"
    export function waitUntilPinPressed(pin: TouchPin): void {
        while (!input.pinIsPressed(pin)) {
            basic.pause(20);
        }
    }

    /**
       * Wait until a pin is released
       * @param pin pin to wait for eg: P0, P1, P2
       */
    //% blockId=WaitUntilBlocks_wait_until_not_pin_pressed
    //% block="wait until pin %pin is released"
    //% block.loc.nl="wacht tot pin %pin is losgelaten"
    //% jsdoc.loc.nl="Wacht tot een pin is losgelaten, oftewel niet meer wordt ingedrukt."
    //% pin.loc.nl="Pin waar je op wacht, bijvoorbeeld P0, P1, P2"
    export function waitUntilPinReleased(pin: TouchPin): void {
        while (input.pinIsPressed(pin)) {
            basic.pause(20);
        }
    }

    /**
       * Wait until sound level drops below a value
       * @param level sound level to wait for eg: 80
       */
    //% blockId=WaitUntilBlocks_wait_until_sound_level_below
    //% block="wait until sound level is below %level"
    //% block.loc.nl="wacht tot geluidsniveau lager is dan %level"
    //% jsdoc.loc.nl="Wacht tot het geluidsniveau onder de gekozen waarde komt"
    //% level.loc.nl="Geluidsniveau waar je op wacht, bijvoorbeeld 80"
    //% level.min=0 level.max=255 level.defl=80
    export function waitUntilSoundLevelBelow(level: number): void {
        while (input.soundLevel() >= level) {
            basic.pause(20);
        }
    }

    /**
       * Wait until button is pressed
       * @param button the button to wait for eg: button A
       */
    //% blockId=WaitUntilBlocks_wait_until_button_is_pressed
    //% block="wait until button %button is pressed"
    //% block.loc.nl="wacht tot knop %button is ingedrukt"
    //% jsdoc.loc.nl="Wacht tot een knop is ingedrukt."
    //% button.loc.nl="De knop waar je op wacht, bijvoorbeeld knop A."
    export function waitUntilButtonPressed(button: Button): void {
        while (!input.buttonIsPressed(button)) {
            basic.pause(20);
        }
    }

    /**
       * Wait until button is released
       * @param button the button to wait for eg button A
       */
    //% blockId=WaitUntilBlocks_wait_until_button_is_released
    //% block="wait until button %button is released"
    //% block.loc.nl="wacht tot knop %button is losgelaten"
    //% jsdoc.loc.nl="Wacht tot een knop is losgelaten oftewel niet meer is ingedrukt."
    //% button.loc.nl="De knop waar je op wacht, bijvoorbeeld knop A."
    export function waitUntilButtonReleased(button: Button): void {
        while (input.buttonIsPressed(button)) {
            basic.pause(20);
        }
    }
}// Voer hier je code in
