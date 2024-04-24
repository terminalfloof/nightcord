import {z} from "zod";

/**
 * An instance of a Nightcord moon icon.
 * @param fill - The hex color code to fill the moon with.
 * @param size - The size of the moon icon. Defaults to 16.
 */
function Moon({fill, size = 16}: {fill?: string, size?: number}) {
    fill = z.string().min(4).max(9).regex(/^#/).parse(fill ?? "#3F365B");
    size = z.number().int().positive().parse(size);

    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="moon">
                <circle id="Ellipse 1" cx="8" cy="8" r="8" fill="#DDD6E5"/>
                <circle id="Ellipse 2" cx="9.86673" cy="8.26663" r="6.13333" fill={fill}/>
                <circle id="Ellipse 3" cx="7.93335" cy="8.46667" r="1" fill="#DDD6E5"/>
                <circle id="Ellipse 4" cx="12.5333" cy="8.53333" r="1" fill="#DDD6E5"/>
            </g>
        </svg>
    );
}

export default Moon;