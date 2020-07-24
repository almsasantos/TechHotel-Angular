export class RoomFood{
    activityId: number;
    userId: number;
    roomId: number;
    totalPrice: string;
    foodMenu: string;
    drinkMenu: string;
    delivered: boolean;

    constructor(){
        this.activityId = null;
        this.userId = null;
        this.roomId = null;
        this.totalPrice = null;
        this.foodMenu = null;
        this.drinkMenu = null;
        this.delivered = null;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getActivityId(): number {
        return this.activityId;
    }

    public setActivityId(activityId: number): void {
        this.activityId = activityId;
    }

    public getRoomId(): number {
        return this.roomId;
    }

    public setRoomId(roomId: number): void {
        this.roomId = roomId;
    }

    public getTotalPrice(): string {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: string): void {
        this.totalPrice = totalPrice;
    }

    public getFoodMenu(): string {
        return this.foodMenu;
    }

    public setFoodMenu(foodMenu: string): void {
        this.foodMenu = foodMenu;
    }

    public getDrinkMenu(): string {
        return this.drinkMenu;
    }

    public setDrinkMenu(drinkMenu: string): void {
        this.drinkMenu = drinkMenu;
    }

    public getDelivered(): boolean {
        return this.delivered;
    }

    public setDelivered(delivered: boolean): void {
        this.delivered = delivered;
    }
}