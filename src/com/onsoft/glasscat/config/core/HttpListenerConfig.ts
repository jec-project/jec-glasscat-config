//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {HttpMonitoringConfig} from "./HttpMonitoringConfig";

/**
 * Contains information for a GlassCat HTTP listener.
 */
export interface HttpListenerConfig {

  /**
   * The HTTP monitoring configuration for this <code>HttpListenerConfig</code>
   * instance.
   */
  monitoring:HttpMonitoringConfig;
  
  /**
   * The ID for the HTTP listener.
   */
  id:string;

  /**
   * The TCP port number on which the HTTP listener will create a server socket
   * and await incoming connections.
   */
   port:number; 

   /**
    * The IP address for the HTTP listener.
    */
   address:string;

   /**
    * A boolean that indicates whether the connection is secured
    * (<code>true</code>), or not (<code>false</code>).
    */
   secured:boolean;

   /**
    * The name of the server associated with this HTTP listener.
    */
   server:string;

   /**
    * The path to the SSL certificate for the secured server associated with
    * this HTTP listener.
    */
   sslPath:string;

  /**
   * The domain associated with this HTTP listener.
   */
  domain:string;

  /**
   * The list of security config options associated with this HTTP listener.
   */
  securityConfig:string[];
}
