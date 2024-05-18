export class UserStyle {
    userId: number;
    mainBackground: string;
    headerBackground: string;
    headerText: string;
    mainTextDark: string;
    mainTextLight: string;
    darkBackground: string;
    lightBackground: string;
    buttonColor1: string;
    buttonColor2: string;
    buttonText: string;
    tableBackground1: string;
    tableBackground2: string;
    tableHeader: string;
    tableText: string;
    tableButtons: string;
    hyperlinkPC: string;
    hyperlinkAC: string;
    createdAt: string;

    constructor(presetStyle?: any) {
        this.userId = presetStyle.user_id;
        this.mainBackground = presetStyle.main_background;
        this.headerBackground = presetStyle.header_background;
        this.headerText = presetStyle.header_text;
        this.mainTextDark = presetStyle.main_text_dark;
        this.mainTextLight = presetStyle.main_text_light;
        this.darkBackground = presetStyle.dark_background;
        this.lightBackground = presetStyle.light_background;
        this.buttonColor1 = presetStyle.button_color1;
        this.buttonColor2 = presetStyle.button_color2;
        this.buttonText = presetStyle.button_text;
        this.tableBackground1 = presetStyle.table_background1;
        this.tableBackground2 = presetStyle.table_background2;
        this.tableHeader = presetStyle.table_header;
        this.tableText = presetStyle.table_text;
        this.tableButtons = presetStyle.table_buttons;
        this.hyperlinkPC = presetStyle.hyperlink_pc;
        this.hyperlinkAC = presetStyle.hyperlink_ac;

        this.createdAt = presetStyle.created_at;
    }
}