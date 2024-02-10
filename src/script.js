import { fpsMeter } from "../libs/v1.95/script/functionScripts/FPS.js";
import { mainRender } from "../libs/v1.95/core/getcanvas.js";

const main = () => {
    mainRender();
    fpsMeter();
}

main()