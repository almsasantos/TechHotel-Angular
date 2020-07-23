export class UserClient{
    id: number;
    name: string;
    username: string;
    password: string;
    phoneNumber: string;
    email: string;
    birthDate: Date;
    country: string;
    city: string;
    street: string;
    postalCode: number;
    balance: number;
    typeOfUser: string;
    address: string;
    registrationDate: string;
    numberOfStays: number;
    roomId: number;

    constructor(){
        this.id = null;
        this.name = null;
        this.username = null;
        this.password = null;
        this.phoneNumber = null;
        this.email = null;
        this.birthDate = null;
        this.country = null;
        this.city = null;
        this.street = null;
        this.postalCode = null;
        this.balance = null;
        this.typeOfUser = null;
        this.address = null;
        this.registrationDate = null;
        this.numberOfStays = null;
        this.roomId = null;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public setBirthDate(birthDate: Date): void {
        this.birthDate = birthDate;
    }

    public getCountry(): string {
        return this.country;
    }

    public setCountry(country: string): void {
        this.country = country;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = this.city;
    }

    public getStreet(): string {
        return this.street;
    }

    public setStreet(street: string): void {
        this.street = this.street;
    }

    public getPostalCode(): number {
        return this.postalCode;
    }

    public setPostalCode(postalCode: number): void {
        this.postalCode = this.postalCode;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(balance: number): void {
        this.balance = this.balance;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getTypeOfUser(): string {
        return this.typeOfUser;
    }

    public setTypeOfUser(typeOfUser: string): void {
        this.typeOfUser = typeOfUser;
    }

    public getRegistrationDate(): string {
        return this.registrationDate;
    }

    public setRegistrationDate(registrationDate: string): void {
        this.registrationDate = registrationDate;
    }

    public getRoomId(): number {
        return this.roomId;
    }

    public setRoomId(roomId: number): void {
        this.roomId = roomId;
    }

    public getNumberOfStays(): number {
        return this.numberOfStays;
    }

    public setNumberOfStays(numberOfStays: number): void {
        this.numberOfStays = numberOfStays;
    }
}