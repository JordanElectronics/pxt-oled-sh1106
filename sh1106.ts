//% icon="\uf26c"
//% color="255" weight="90"
namespace OLED {

    /**
     * initialises the i2c OLED display
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number, width: number): void {
        return;
    }

    /**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }

    /**
     * moves the text cursor.
     */
    //% blockId=oled_text_cursor
    //% block="text cursor x %x|y %y"
    //% icon="\uf1ec" 
    //% shim=OLED::textCursor
    export function textCursor(x: number, y: number): void {
        return;
    }

    /**
     * draws a filled rectangle (color = white).
     */
    //% blockId=oled_filled_rect_white
    //% block="filled white rectangle x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRectWhite
    export function fillRectWhite(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * draws a filled rectangle (color = black).
     */
    //% blockId=oled_filled_rect_black
    //% block="filled black rectangle x %x|y %y|w %w|h %h"
    //% icon="\uf1ec" 
    //% shim=OLED::fillRectBlack
    export function fillRectBlack(x: number, y: number, w: number, h: number): void {
        return;
    }

    /**
     * prints a string on the OLED display
     * @param text text to display
     */
    //% weight=87 blockGap=8
    //% block="show|string %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=OLED::showString
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * prints a number on the OLED display
     * @param number number to display
     */
    //% weight=96
    //% blockId=oled_print_number
    //% block="show|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }
}
