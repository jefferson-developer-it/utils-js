/**
 * Aqui adicionar mudanças no nativo
 */

import { toJSON } from "./func/JSON"


Object.prototype.toString = function(){
    return toJSON(this)
}