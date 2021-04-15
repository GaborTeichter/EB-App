export class Team {
    emoji: string = "";
    emojiString: string = "";
    fifaCode: string = "";
    flag: string = "";
    iso2: string = "";
    name: string = "";

    constructor(content?: {}) {
        if (content) {
            for (var k in content) {
                this[k] = content[k] || "";
            }
        }
    }
}