class CardAttribute {
    private id: number
    private body1: string
    private body2: string
    private body3: string
    private body4: string
    private body5: string
    private line1Body: string
    private line2Body: string
    private line3Body: string
    private voice_file: string
    private is_active: boolean
    is_missed: boolean
    is_removed: boolean

    constructor(d: any, is_active: boolean) {
        this.id = d.id
        this.body1 = d.body1
        this.body2 = d.body2
        this.body3 = d.body3
        this.body4 = d.body4
        this.body5 = d.body5
        this.line1Body = d.line1Body
        this.line2Body = d.line2Body
        this.line3Body = d.line3Body
        this.voice_file = 'a' + String(this.id).padStart(3, '0') + '.mp3'
        this.is_active = is_active
        this.is_missed = false
        this.is_removed = false
    }

    getId() {
        return this.id
    }

    getLine1Body() {
        return this.line1Body
    }
    getLine2Body() {
        return this.line2Body
    }
    getLine3Body() {
        return this.line3Body
    }

    getVoiceFile() {
        return this.voice_file
    }

    activate() {
        this.is_active = true
    }

    remove() {
        this.is_active = false
        this.is_removed = true
    }

    isActive() {
        return this.is_active
    }

    missed() {
        this.is_missed = true
    }

    resetMissed() {
        this.is_missed = false
    }

    isMissed() {
        return this.is_missed
    }

    isRemoved() {
        return this.is_removed
    }
}

export default CardAttribute