export class RoomReservation{
    userId: number;
    userName: string;
    roomId: number;
    roomType: string;
    numberOfNights: number;

    constructor(){
        this.userId = null;
        this.userName = null;
        this.roomId = null;
        this.roomType = null;
        this.numberOfNights = null;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public getRoomId(): number {
        return this.roomId;
    }

    public setRoomId(roomId: number): void {
        this.roomId = roomId;
    }

    public getRoomType(): string {
        return this.roomType;
    }

    public setRoomType(roomType: string): void {
        this.roomType = roomType;
    }

    public getNumberOfNights(): number {
        return this.numberOfNights;
    }

    public setNumberOfNights(numberOfNights: number): void {
        this.numberOfNights = numberOfNights;
    }
}