export class PoolRent{
    activityId: number;
    userId: number;
    roomId: number;
    totalPrice: string;
    floatiesNum: number;
    towelNum: number;
    beginOfActivity: Date;
    duration: TimeRanges;
    endOfActivity: Date;

    constructor(){
        this.activityId = null;
        this.userId = null;
        this.roomId = null;
        this.totalPrice = null;
        this.floatiesNum = null;
        this.towelNum = null;
        this.beginOfActivity = null;
        this.duration = null;
        this.endOfActivity = null;
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

    public getFloatiesNum(): number {
        return this.floatiesNum;
    }

    public setFloatiesNum(floatiesNum: number): void {
        this.floatiesNum = floatiesNum;
    }

    public getTowelNum(): number {
        return this.towelNum;
    }

    public setTowelNum(towelNum: number): void {
        this.towelNum = towelNum;
    }

    public getBeginOfActivity(): Date {
        return this.beginOfActivity;
    }

    public setBeginOfActivity(beginOfActivity: Date): void {
        this.beginOfActivity = beginOfActivity;
    }

    public getDuration(): TimeRanges {
        return this.duration;
    }

    public setDuration(duration: TimeRanges): void {
        this.duration = duration;
    }

    public getEndOfActivity(): Date {
        return this.endOfActivity;
    }

    public setEndOfActivity(endOfActivity: Date): void {
        this.endOfActivity = endOfActivity;
    }
}