# Octocat.js

Build your own octocat.

https://myoctocat.dev

# How it works

This library is used within https://myoctocat.dev to make an octocat. It maintains a set of options and then renders an SVG with all of the pieces and then draws it to a canvas.

To import:

```js
import Octocat from 'octocat.js'
```

Or to import the available options:

```js
import {OctocatOptions} from 'octocat.js'
```

Create and draw Octocat:

```js
let octocat = new Octocat()
octocat.draw()
```

In order to draw the octocat we need to fetch the associated SVG documents and splice them together (checking any conflicting options). This tends to be very expensive so we make efforts to cache the following:

- the fetched base SVG
- the fetched pieces
- the completed SVG
- the drawn SVG

Whenever you update an option (or call `redraw` directly) the SVG must be redrawn which may cause additional fetching. For this reason it is not immediate and will attempt to reuse the cache while it redraws in the background.

# Docs

**Colors**

Note: colors can be any valid [SVG or CSS2 Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) including alpha transparency. However, alpha transparency tends to be very computationally expensive when used within `canvas` elements.


| Method | Description |
|---|---|
| `setBodyColor(colors)` | Changes the body colors. `colors` is a hash with `primary`, `underside`, `suctions` keys and color values. e.g. `{ primary: '#282828', underside: '#494949', suctions: '#99C7C9' }` |
| `setBottom(bottom)` | Changes the bottoms. `bottom` is a string containing a bottoms option. |
| `setEyeColor(color)` | Set the eye color. `color` is a color value. |
| `setEyes(eyes)` | Changes the eyes. `eyes` is a string containing an eyes option.|
| `setEyewear(eyewear)` | Changes the eyewear. `eyewear` is a string containing an eyewear option. |
| `setFaceColor(colors)` | Changes the face colors. `colors` is a hash with `face`, `nose` keys and color values. e.g. `{ face: "#FFC5AF", nose: "#A34F3E" }` |
| `setFacialHair(facialHair)` | Changes the facial hair. `facialHair` is a string containing an facial hair option. |
| `setFacialHairColor(facialHairColor)` | Set the facial hair color. `facialHairColor` is a color value.|
| `setFootwear(footwear)` | Changes the footwear. `footwear` is a string containing a footwear option. |
| `setHair(hair)` | Changes the hair. `hair` is a string containing a hair option. |
| `setHairColor(hairColor)` | Set the hair color. `hairColor` is a color value. |
| `setHeadgear(headgear)` | Changes the headgear. `headgear` is a string containing a headgear option. |
| `setAccessory(accessory)` | Changes the accessory. `accessory` is a string containing a accessory option. |
| `setMouth(mouth)` | Changes the mouth. `mouth` is a string containing a mouth option. |
| `setProp(prop)` | Changes the prop. `prop` is a string containing a prop option. |
| `setTop(top)` | Changes the top. `top` is a string containing a top option. |
| `setPuddleColor(puddleColor)` | Set the puddle color. `puddleColor` is a color value. |
| `noPuddle()` | Do not draw the puddle. |
| `setStroke(color, width, opacity)` | If set, the octocat will have an outline stroke with the color width and opacity specified. Note, `opacity` should be left at `1` (the default, can be omitted) in almost all cases. Setting the stroke requires drawing the octocat twice (once with stroke and once without) and is very computationally expensive. |
| `noStroke()` | Turn off the stroke (if it had been turned on). By default there is no stroke. |
| `setFill(color)` | Fill the octocat with a flat color. `color` is a color value. |
| `noFill()` | Turn off the fill (if it had been turned on). By default there is no fill. |
| `customize(svg)` | Once this `svg` is generated for the current options the `customize` method is called. You can override this method to make additional changes to the `svg` before it is rendered. i.e., `octocat.customize = (svg) => { ...do something here with the svg dom... }` |
| `redraw()` | Forces the SVG to redraw. You should not need to use this (it is called internally in all known cases where redrawing would be required). |
| `blink(open, closed)` | Makes the octocat "blink" on a timer. `open` and `closed` are optional parameters. If provided they should be strings containing an eyes option. If not included the blinking will use the current eyes option and `Neutral Closed` when the eyes are closed. If you are working in `p5` add `octocat.blink()` to the `setup` function to have the octocat blink periodically. |
| `noBlink()` | Turn off the blinking (if it had been turned on). By default there is no blinking. |
| `randomize(feature)` | Randomize one or all of the options for the current octocat. The `feature` parameter is optional, if provided it should be a feature name to randomize (one of `bodyColor`, `bottom`, `eyeColor`, `eyes` , `eyewear`, `faceColor`, `facialHair`, `facialHairColor`, `footwear`, `hair` , `hairColor`, `headgear`, `accessory`, `mouth`, `prop`, `top` , `puddleColor`). If omitted, all features will be randomized. Generally this will require a full redraw of the octocat and can be slow. |
| `draw(x, y, w, h)` | Draw the (cached image) current octocat. The `x`, `y`, `w`, and `h` parameters are all optional. If omitted they will default to `0`, `0`, `300`, `300`. This method is safe to use inside of a `draw` loop. |
| `invertocat()` | Returns a text version of the GitHub invertocat logo (ignoring the options). |
| `ascii()` | Returns a text version of a default Octocat (ignoring the options).  |


# Contributors

Made by @gavinzanerafter and @jeffrafter based on MyOctocat.com

Special thanks to:

- MyOctocat.com (for all of the original code)
- @nixpad
- @probablycorey