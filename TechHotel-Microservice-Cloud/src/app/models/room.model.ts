export class Room{
    roomId: number;
    numberOfBeds: number;
    hairDryer: boolean;
    bathTub: boolean;
    price: number;
    roomType: string;
    available: boolean;

    constructor(){
        this.roomId = null;
        this.numberOfBeds = null;
        this.hairDryer = null;
        this.bathTub = null;
        this.price = null;
        this.roomType = null;
        this.available = null;
    }

    public getRoomId(): number {
        return this.roomId;
    }

    public setRoomId(roomId: number): void {
        this.roomId = roomId;
    }

    public getNumberOfBeds(): number {
        return this.numberOfBeds;
    }

    public setNumberOfBeds(numberOfBeds: number): void {
        this.numberOfBeds = numberOfBeds;
    }

    public getHairDryer(): boolean {
        return this.hairDryer;
    }

    public setHairDryer(hairDryer: boolean): void {
        this.hairDryer = hairDryer;
    }

    public getBathTub(): boolean {
        return this.bathTub;
    }

    public setBathTub(bathTub: boolean): void {
        this.bathTub = bathTub;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getRoomType(): string {
        return this.roomType;
    }

    public setRoomType(roomType: string): void {
        this.roomType = roomType;
    }

    public getAvailable(): boolean {
        return this.available;
    }

    public setAvailable(available: boolean): void {
        this.available = available;
    }
}