/**
 * Converts RGB color values to an HSL color string.
 *
 * This function takes red, green, and blue color values (0-255) and converts them
 * to the equivalent HSL (Hue, Saturation, Lightness) color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {true} [asString=true] - Whether to return the result as a string.
 * @returns {string | {h: number; s: number; l: number;}} - The HSL color string in the format "hsl(h, s%, l%)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to an HSL color string.
 *
 * This function takes red, green, and blue color values (0-255) and converts them
 * to the equivalent HSL (Hue, Saturation, Lightness) color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {false} [asString=false] - Whether to return the result as an object.
 * @returns {string | {h: number; s: number; l: number;}} - The HSL color string in the format "hsl(h, s%, l%)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
/**
 * Converts RGB color values to an HSL color string.
 *
 * This function takes red, green, and blue color values (0-255) and converts them
 * to the equivalent HSL (Hue, Saturation, Lightness) color string.
 *
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {boolean} [asString=true] - Whether to return the result as a string.
 * @returns {string | {h: number; s: number; l: number;}} - The HSL color string in the format "hsl(h, s%, l%)" or in object format
 * @throws {Error} Throws an error if any of the color values are out of range.
 */
export function rgbToHsl(r: number, g: number, b: number, asString?: true): string;
export function rgbToHsl(r: number, g: number, b: number, asString?: false): { h: number, s: number, l: number};
export function rgbToHsl(r: number, g: number, b: number, asString: boolean = true): string | { h: number, s: number, l: number} {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error(`Invalid RGB color value ${r}, ${g}, ${b}`);
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
        s = 0,
        l = (max + min) / 2;

    if (max !== min) {
        const delta = max - min;
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        switch (max) {
            case r:
                h = (g - b) / delta + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / delta + 2;
                break;
            case b:
                h = (r - g) / delta + 4;
                break;
        }
        h *= 60;
    }

    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    if (asString) {
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    return { h, s, l };
}
