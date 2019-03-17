const ErrorLog = {
    TypeError : (name) => {
        return `Error: ${name} is not standard`;
    }
};

class bubble {
    constructor (){
        return this;
    }

    /**
     * 自定输出颜色
     * @param message
     * @param color
     */
    log(message,color){
        let param = [message];
        if (color instanceof Array){
            for(let i in color){
                param.push(`color:${color[i]};`);
            }
        } else if (typeof color === 'string'){
            param.push(`color:${color};`);
        } else {
            //throw new TypeError(ErrorLog.TypeError('color'));
        }
        return console.log.apply(this , param);
    }

    error(message,color){

    }
}

if(window.console){
    window.bubble = new bubble();
} else {
    throw new Error('window.console not find!');
}