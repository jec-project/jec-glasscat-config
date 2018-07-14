/*!
 * JEC GlassCat Config Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-glasscat-config" {

export interface BootstrapConfig {    glasscat: GlasscatConfig;    config: ToolsConfig;}export interface GlasscatConfig {    version: string;    locale: string;}export interface HttpConfig {    listeners: HttpListenerConfig[];}export interface HttpListenerConfig {    monitoring: HttpMonitoringConfig;    id: string;    port: number;    address: string;    secured: boolean;    server: string;    sslPath: string;    domain: string;    securityConfig: string[];}export interface HttpMonitoringConfig {    enabled: boolean;    factory: string;}export interface LoggerFactoryConfig {    name: string;    factory: string;    logLevel: LogLevelString;}export interface LoggersConfig {    logLevel: LogLevelString;    factories: LoggerFactoryConfig[];}export interface SecurityConfig {    headerModules: any[];}export interface ToolsConfig {    loggers: LoggersConfig;    http: HttpConfig;    security: SecurityConfig;    errorPage: string;}export interface Domain {    name: string;    host: string;    target: string;    connector: DomainConnectorConfig;}export interface DomainConfig {    domains: Domain[];}export interface DomainConnectorConfig {    type: string;    server: string;}export interface EjpBootstrapConfig {    path: string;    priority: number;}export interface EjpConfig {    webapp: EjpWebAppConfig;}export interface EjpConstraintConfig {    name: string;    roles: string[];    urlPattern: string;    errorUrl: string;}export interface EjpFormConfig {    loginUrl: string;    errorUrl: string;}export interface EjpJsletsConfig {    configFile: string;    config: string[];    enableAutowire: boolean;}export interface EjpLoginConfig {    authMethod: AuthMethod;    formConfig: EjpFormConfig;    realm: EjpRealmConfig;}export interface EjpRealmConfig {    type: RealmType;    securedArea: string;    connectorFactory: string;}export interface EjpResourceMapperConfig {    name: string;    value: string;}export interface EjpRoleConfig {    name: string;    path: string;}export interface EjpSecurityConfig {    constraints: EjpConstraintConfig[];    roles: EjpRoleConfig[];    staticResources: EjpStaticResourcesConfig[];}export interface EjpSessionConfig {    storage: SessionStorageType;    errorUrl: string;    maxAge: number;}export interface EjpStaticResourcesConfig {    urlPattern: string;    cacheControlPolicy: CacheControlPolicy;}export interface EjpWebAppConfig {    name: string;    description: string;    version: string;    author: string;    contextRoot: string;    state: string;    welcomeFile: string;    jslets: EjpJsletsConfig;    bootstrap: EjpBootstrapConfig[];    session: EjpSessionConfig;    resourceMap: Array<EjpResourceMapperConfig>;    login: EjpLoginConfig;    security: EjpSecurityConfig;}/*! * JEC GlassCat Config Node Module * Copyright(c) 2017-2018 Pascal ECHEMANN * Apache 2.0 Licensed * This is a part of the JEC projects: <http://jecproject.org> */export { BootstrapConfig } from "./glasscat/config/core/BootstrapConfig";export { GlasscatConfig } from "./glasscat/config/core/GlasscatConfig";export { HttpConfig } from "./glasscat/config/core/HttpConfig";export { HttpListenerConfig } from "./glasscat/config/core/HttpListenerConfig";export { HttpMonitoringConfig } from "./glasscat/config/core/HttpMonitoringConfig";export { LoggerFactoryConfig } from "./glasscat/config/core/LoggerFactoryConfig";export { LoggersConfig } from "./glasscat/config/core/LoggersConfig";export { SecurityConfig } from "./glasscat/config/core/SecurityConfig";export { ToolsConfig } from "./glasscat/config/core/ToolsConfig";export { Domain } from "./glasscat/config/domains/Domain";export { DomainConfig } from "./glasscat/config/domains/DomainConfig";export { DomainConnectorConfig } from "./glasscat/config/domains/DomainConnectorConfig";export { EjpBootstrapConfig } from "./glasscat/config/ejp/EjpBootstrapConfig";export { EjpConfig } from "./glasscat/config/ejp/EjpConfig";export { EjpConstraintConfig } from "./glasscat/config/ejp/EjpConstraintConfig";export { EjpFormConfig } from "./glasscat/config/ejp/EjpFormConfig";export { EjpJsletsConfig } from "./glasscat/config/ejp/EjpJsletsConfig";export { EjpLoginConfig } from "./glasscat/config/ejp/EjpLoginConfig";export { EjpRealmConfig } from "./glasscat/config/ejp/EjpRealmConfig";export { EjpResourceMapperConfig } from "./glasscat/config/ejp/EjpResourceMapperConfig";export { EjpRoleConfig } from "./glasscat/config/ejp/EjpRoleConfig";export { EjpSecurityConfig } from "./glasscat/config/ejp/EjpSecurityConfig";export { EjpSessionConfig } from "./glasscat/config/ejp/EjpSessionConfig";export { EjpStaticResourcesConfig } from "./glasscat/config/ejp/EjpStaticResourcesConfig";export { EjpWebAppConfig } from "./glasscat/config/ejp/EjpWebAppConfig";}