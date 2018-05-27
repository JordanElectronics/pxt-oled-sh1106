# SH1106 OLED MakeCode Package

This is a quick and dirty MakeCode Package for SH1106 OLED controller, based on the Adafruit Arduino library available [here](https://github.com/adafruit/Adafruit_SSD1306).

It works with 128x64 displays based on the SH1106 controller. It was ported quickly, just to get something working. It is not necessarily pretty.

## Hardware Setup
1. Insert the OLED display into the I2C ports on the break out board.

## Blocks
### Initialize OLED Display
Initializes the OLED display.

Sets up the OLED display and prepares it for use by the micro:bit.

```sig
OLED.init(64, 128);
```

This block must be placed before any of the ``show`` blocks.


### Show String
Displays a string on the OLED module.

```sig
OLED.showString("hello, micro:bit!")
```

The ``init`` block must be placed before this.


### Show Number
Displays a number on the OLED module.

```sig
OLED.showNumber(123)
```

The ``init`` block must be placed before this.


### Clear Display
Clears the display.

```sig
OLED.clear()
```

The ``init`` block must be placed before this.

## Supported targets

* for PXT/microbit

## License

MIT