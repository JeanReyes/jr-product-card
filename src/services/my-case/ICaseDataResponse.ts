export interface ICaseDataResponse {
    id: string;
    caseNumber: string;
    parentCase: string;
    origin: string;
    status: string;
    createdDate: Date;
    closedDate: Date;
    dueDate: Date;
    description: string;
    legacyClosureDate: Date;
    closureType: string;
    closureComment: string;
    internalComments: string;
    commerceName: string;
    recordType: string;
    recordAccountType: string;
    levelNumber: string;
    typificationName: string;
    orderNumberExternal: string;
    orderNumberType: string;
    subOrderNumberExternal: string;
    subOrderNumberType: string;
    createdByAgent: boolean;
    agentCode: string;
    bigTicket: boolean;
    checkView: string;
    creditNote: string;
    contact: Contact;
    bankDetails: BankDetails;
    seller: Seller;
    assets: Asset[];
}

export interface Contact {
    documentType: string;
    documentNumber: string;
    externalId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mothersLastName: string;
    contactEmail: string;
    contactPhone: string;
    addressLevel1: string;
    addressLevel2: string;
    addressLevel3: string;
    addressLevel4: string;
    addressComplement: string;
    streetNumber: string;
    departmentNumber: string;
    country: string;
}

export interface BankDetails {
    accountHolderName: string;
    accountHolderDocumentType: string;
    accountHolderDocumentNumber: string;
    bankName: string;
    accountType: string;
    accountNumber: string;
    grandTotal: number;
}

export interface Seller {
    sellerId: string;
    sellerName: string;
    sellerType: string;
}

export interface Asset {
    assetName: string;
    assetCode: string;
    assetLineId: string;
    assetSKU: string;
    assetProductName: string;
    assetQuantity: number;
    assetQuantityOrdered: number;
    assetUseLevel: string;
    assetUPC: string;
    assetStatusReason: string;
    assetProductCondition: string;
    assetPackageCondition: string;
    assetDamageDescription: string;
    assetERDescription: string;
    assetPrice: number;
}