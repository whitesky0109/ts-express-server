import {
    OPCUAClient, OPCUAClientOptions, ClientSession, ClientSubscription, ClientSubscriptionOptions, ClientMonitoredItem
} from "node-opcua";
import { AsyncHook } from "async_hooks";

export class TsOpcClient {
    public client: OPCUAClient;
    public endpointUrl: string;
    public options: OPCUAClientOptions;

    public isConnect: boolean;
    public isTry: boolean;

    constructor(client: OPCUAClient, endpointUrl: string, options: OPCUAClientOptions, isConnect?: boolean) {
        this.client = client;
        this.endpointUrl = endpointUrl;
        this.options = options;
        this.isConnect = isConnect ? isConnect : false;
        this.isTry = false;
    }

    public toJson(): Object {
        const {client: {securityMode, securityPolicy, serverCertificate}, endpointUrl, isConnect, options} = this;
        return {
            client: {
                securityMode,
                securityPolicy,
                serverCertificate,
            },
            endpointUrl,
            isConnect,
            options
        }
    }
};

export interface TsOpcClients {
    [clientId: string]: TsOpcClient
};


export interface TsSessions {
    [sessionid: string]: TsSession,
};

export class TsSession {
    public sessionid: string;
    public session: ClientSession;
    public clientid: number;
   
    constructor(session: ClientSession, clientid: number, sessionid: string) {
        this.session = session;
        this.clientid = clientid;
        this.sessionid = sessionid;
    }

    public toJson(): Object {
        const { session: {sessionId}, clientid} = this;
        return  {
            session: sessionId,
            clientid
        };
    }
};

export interface TsOpcClientSessions {
    [clientId: string]: TsOpcClientSession
};

export interface TsOpcClientSession {
    session: TsSessions,
    client: OPCUAClient,
};

export interface ReqCreateClient {
    endpointUrl: string;
    options: OPCUAClientOptions;
    
}

export interface TsSubscriptions {
    [sid: string]: TsSubscription;
}

export class TsSubscription {
    public sessionid: string;
    public subscription: ClientSubscription;
    public options?: ClientSubscriptionOptions;
    public monitoredItems: TsMonitors;

    constructor(sessionid: string, subscription: ClientSubscription, monitoredItems: any, options?: ClientSubscriptionOptions) {
        this.sessionid = sessionid;
        this.subscription = subscription;
        this.options = options;
        this.monitoredItems = monitoredItems;
    }

    public toJson(): Object {
        const { sessionid, subscription: {subscriptionId}, options, monitoredItems } = this;
        let obj: any = {};
        for(const key in monitoredItems) {
            obj[key].monitoringParameters = monitoredItems[key].monitoringParameters
        }
        return {
            sessionid,
            subscription: {
                subscriptionId
            },
            options,
            monitoredItems: obj,
        }
    }
}

export interface TsMonitors {
    [monitorid: string]: ClientMonitoredItem
};

export interface TsMonitorObject {
    cid: string; /* Client id from OPC Client Service */
    sid: string; /* ClientSession id from OPC ClientSession Service */
    nodes: any[];

    isRunning: boolean;
}

export interface IMigration {
    migration_id: string;
    action: string;
    args: any[];
}

export interface IRepository {
    migrations(): IMigration[];
}

export interface IService {
    init(): Promise<any>;
}

export interface IMigrationLog {
    id: number;
    migration_id: string;
    action: string;
    success: boolean;
    error: string;
    timestamp: Date;
}

export interface IMigrationLogs {
    [migration_id: string]: IMigrationLog;
}


export interface AddServerInfo {
    server: string;
    endpoint: string;
    securityMode: string;
    securityPolicy: string;
    authentification: string;

    /* optionals */
    username?: string;
    password?: string;
    certFile_id?: number;
    id?: number; /* judge edit mode */
}

export interface ICreateClient {
    isNew: boolean;
    clientid: number;
}

export interface IDataCollection {
    [key: string]: any;

    intervalType: string;
    interval: number;
    server_id: number;
    fields: any[];
    datasource: string;
    table: string;
    destinations: any[];
}

export interface IDataReceiver {

    init(): any;
    received(data: any): void;
    alarmReceived(data: any): void;
    convert(data: any): any;
}

export interface IReceiverInstance {
    [collectionId: number]: {
        [receiver: string]: any;
        created: Date;
    }
}

export interface IReceiver {
    name: string;

}

export interface IDeleveryData {
    src: any;
    data: any;
    created: Date;
}

export interface ICollectedData {
    collectionId: number;
    info: any;
    data: any[];
    created: Date;
}

export interface ICollectionPlugin {
    run: boolean;
    isRun(): boolean;
    start(): any;
    stop(): any;
}

export interface IAlarmStorage {
    [key: string]: any;

    id?: number;
    collection_id: number;
    type: string;
    condition: any;
    created?: Date;
}