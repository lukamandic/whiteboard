class Draw {
    private whatToDraw: string
    constructor(whatToDraw: string) {
        this.whatToDraw = whatToDraw
    }

    draw() {
        switch(this.whatToDraw) {
            case 'circle':
                console.log('circle')
                break;
            case 'line':
                console.log('line')
                break;
            case 'rectangle':
                console.log('reactangle')
                break;
            case 'pencil':
                console.log('pencil')
                break;
        }
    }

    setMethod(method: string) {
        this.whatToDraw = method
    }

}

export default Draw