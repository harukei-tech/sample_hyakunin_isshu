class CardAttribute {
    private id: number
    private body: string
    private voice_file: string
    private is_active: boolean

    constructor(id: number, body: string, is_active: boolean) {
        this.id = id
        this.body = body
        this.voice_file = 'a' + String(id).padStart(3, '0') + '.mp3'
        this.is_active = is_active
    }

    getId() {
        return this.id
    }

    getLastedBody() {
        const tmpStr = this.body.split(/\s/)
        return tmpStr[3] + tmpStr[4]
    }

    getVoiceFile() {
        return this.voice_file
    }

    activate() {
        this.is_active = true
    }

    deactivate() {
        this.is_active = false
    }

    isActive() {
        return this.is_active
    }
}

export default CardAttribute