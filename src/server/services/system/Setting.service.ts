import "reflect-metadata";
import { AttributeIds, ClientSubscriptionOptions, OPCUAClientOptions } from "node-opcua";
import { Service } from "typedi";
import { IService } from "../../../models";
import { LoggerSrv } from ".";

@Service()
export default class SettingSrv implements IService {

    private settings: any;
    constructor(private logger: LoggerSrv ) {
        this.logger.info("created SettingSrv");
        this.settings = this.loadSettingFile();
    }

    init(): Promise<any> {
        return Promise.resolve();
    }

    /**
     * Create a `uid`
     *
     * @param { Number } len
     * @return { String } uid
     */
    public uid(len?: number): string {
        // create uuid
        len = len || 7;
        return Math.random().toString(35).substr(2, len);
    }

    public defaultAttributeIds: number[] = [
        AttributeIds.NodeId,
        AttributeIds.NodeClass,
        AttributeIds.BrowseName,
        AttributeIds.DisplayName,
        AttributeIds.Description,
        AttributeIds.WriteMask,
        AttributeIds.UserWriteMask,
        AttributeIds.EventNotifier,
        AttributeIds.Value
    ];

    public defaultSubscriptionOpts: ClientSubscriptionOptions = {
        requestedPublishingInterval: 200,
        requestedMaxKeepAliveCount: 1000 * 60 * 10,
        requestedLifetimeCount: 60,
        maxNotificationsPerPublish: 100,
        publishingEnabled: true,
        priority: 10,
    }

    public defaultOPCUAClientOpts: OPCUAClientOptions = {
        connectionStrategy: {
            maxRetry: 5,
            initialDelay: 2000,
            maxDelay: 3000,
        },
        endpoint_must_exist: false, //disable check already endpoint exist
        keepSessionAlive: true,
    };

    loadSettingFile(): any {
        const config: any = require("../../config/config.json");
        return config;
    }

    getPort(): number {
        return this.settings["port"];
    }

    getTestEndpoint(): string {
        return this.settings.testEndpointUrl;
    }

    getSystemDbName(): string {
        return this.settings.sqlite;
    }

    get CertifivateFilePath() {
        return this.settings.certificateFilePath;
    }
    set CertifivateFilePath(v: any) {
        throw Error("not implemented");
    }

    getSettings(): any {
        return this.settings;
    }
}
