export class Invoice{
    invoiceId: string;
    userId: number;
    name: string;
    roomId: number;
    invoiceType: string;
    priceOwed: number;

    constructor(){
        this.invoiceId = null;
        this.userId = null;
        this.roomId = null;
        this.name = null;
        this.invoiceType = null;
        this.priceOwed = null;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getInvoiceId(): string {
        return this.invoiceId;
    }

    public setInvoiceId(invoiceId: string): void {
        this.invoiceId = invoiceId;
    }

    public getRoomId(): number {
        return this.roomId;
    }

    public setRoomId(roomId: number): void {
        this.roomId = roomId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getInvoiceType(): string {
        return this.invoiceType;
    }

    public setInvoiceType(invoiceType: string): void {
        this.invoiceType = invoiceType;
    }

    public getPriceOwed(): number {
        return this.priceOwed;
    }

    public setPriceOwed(priceOwed: number): void {
        this.priceOwed = priceOwed;
    }
}