class MCPI - Scratch {
    //Converted from https://jbaragry.github.io/mcpi-scratch/mcpi-scratch.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "MCPI-Scratch",
            "name": "MCPI-Scratch",
            "blocks": [{
                "opcode": "postToChat",
                "text": "post to chat [str]",
                "arguments": {
                    "str": {
                        "type": "string",
                        "defaultValue": "message"
                    }
                }
            }, {
                "opcode": "playerPosToChat",
                "blockType": "command",
                "text": "post Player.pos chat",
                "arguments": {}
            }, {
                "opcode": "setPlayerPos",
                "blockType": "command",
                "text": "set Player pos to x:%n y:%n z:%n",
                "arguments": {}
            }, {
                "opcode": "setBlock",
                "blockType": "command",
                "text": "set block pos x:%n y:%n z:%n to type [x] data [y] [z]",
                "arguments": {
                    "x": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "z": {
                        "type": "string",
                        "menu": "blockPos",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "setBlocks",
                "blockType": "command",
                "text": "set blocks pos x1:%n y1:%n z1:%n to x2:%n y2:%n z2:%n to type [x1] data [y1]",
                "arguments": {
                    "x1": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "y1": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "setLine",
                "blockType": "command",
                "text": "set line pos x1:%n z1:%n to x2:%n z2:%n height y:%n to type [x1] data [z1]",
                "arguments": {
                    "x1": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "z1": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "setCircle",
                "blockType": "command",
                "text": "set circle center x1:%n z1:%n radius r:%n at height y:%n to type [x] data [z]",
                "arguments": {
                    "x": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "z": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "getPlayerPos",
                "blockType": "reporter",
                "text": "get player pos [posCoord]",
                "arguments": {
                    "posCoord": {
                        "type": "string",
                        "menu": "pos",
                        "defaultValue": "x"
                    }
                }
            }, {
                "opcode": "getBlock",
                "blockType": "reporter",
                "text": "get block pos x:%n y:%n z:%n [x]",
                "arguments": {
                    "x": {
                        "type": "string",
                        "menu": "blockPos",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "whenBlockHit",
                "blockType": "hat",
                "text": "when blockHit",
                "arguments": {}
            }],
            "menus": {
                pos: this._formatMenu(['x', 'y', 'z']),
                blockPos: this._formatMenu(['abs', 'rel']),
            }
        };
    }
    postToChat({
        str
    }) {
        var cmdUrl = "http://localhost:4715/postToChat/" + encodeURIComponent(str);
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("postToChat success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error postToChat: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    playerPosToChat({}) {
        var cmdUrl = "http://localhost:4715/playerPosToChat";
        $.ajax({
            type: "GET",
            url: cmdUrl,
            // dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("playerPosToChat success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error playerPosToChat: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    setPlayerPos({
        x,
        y,
        z
    }) {
        var cmdUrl = "http://localhost:4715/setPlayerPos/" + x + "/" + y + "/" + z;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setPlayerPos success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setPlayerPos: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    setBlock({
        x,
        y,
        z,
        blockType,
        blockData,
        posType
    }) {
        var cmdUrl = "http://localhost:4715/setBlock/" + x + "/" + y + "/" + z + "/" + blockType + "/" + blockData + "/" + posType;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setBlock success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setBlock: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    setBlocks({
        x1,
        y1,
        z1,
        x2,
        y2,
        z2,
        blockType,
        blockData
    }) {
        var cmdUrl = "http://localhost:4715/setBlocks/" + x1 + "/" + y1 + "/" + z1 + "/" +
            x2 + "/" + y2 + "/" + z2 + "/" + blockType + "/" + blockData;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setBlocks success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setBlocks: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    setLine({
        x1,
        z1,
        x2,
        z2,
        y,
        blockType,
        blockData
    }) {
        var cmdUrl = "http://localhost:4715/setLine/" + x1 + "/" + z1 + "/" +
            x2 + "/" + z2 + "/" + y + "/" + blockType + "/" + blockData;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setLine success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setLine: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    setCircle({
        x,
        z,
        r,
        y,
        blockType,
        blockData
    }) {
        var cmdUrl = "http://localhost:4715/setCircle/" + x + "/" + z + "/" +
            r + "/" + y + "/" + blockType + "/" + blockData;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setCircle success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setCircle: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
    }
    getPlayerPos({
        posCoord,
        callback
    }) {
        var cmdUrl = "http://localhost:4715/getPlayerPos/" + posCoord;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("getPlayerPos success ", data.trim());
                callback(data.trim());
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error getPlayerPos: ", error);
                callback(null);
            }
        });
    }
    getBlock({
        x,
        y,
        z,
        posType,
        callback
    }) {
        var cmdUrl = "http://localhost:4715/getBlock/" + x + "/" + y + "/" + z + "/" + posType;
        $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("getPlayerPos success ", data.trim());
                callback(data.trim());
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error getPlayerPos: ", error);
                callback(null);
            }
        });
    }
    whenBlockHit({
        str
    }) {
        if (!blockHits)
            return;
        else
            return true;
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new MCPI - Scratch());