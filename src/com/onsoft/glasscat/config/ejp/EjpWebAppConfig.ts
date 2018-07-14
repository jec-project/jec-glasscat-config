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

import {EjpJsletsConfig} from "./EjpJsletsConfig";
import {EjpBootstrapConfig} from "./EjpBootstrapConfig";
import {EjpSessionConfig} from "./EjpSessionConfig";
import {EjpResourceMapperConfig} from "./EjpResourceMapperConfig";
import {EjpLoginConfig} from "./EjpLoginConfig";
import {EjpSecurityConfig} from "./EjpSecurityConfig";

/**
 * Represents the <code>webapp</code> configuration property for an EJP deployed 
 * in a GlassCat container.
 */
export interface EjpWebAppConfig {

  /**
   * The name of the EJP.
   */
  name:string;
  
  /**
   * The description of the project associated with the EJP.
   */
  description:string;
  
  /**
   * The current project version.
   */
  version:string;
  
  /**
   * The project author information.
   */
  author:string;

  /**
   * The project context root.
   */
  contextRoot:string;
  
  /**
   * The project container state.
   */
  state:string;
  
  /**
   * The welcome file for this project.
   */
  welcomeFile:string;
  
  /**
   * The configuration for all Jslets in this project.
   */
  jslets:EjpJsletsConfig;

  /**
   * The bootstrap files configuration this project.
   */
  bootstrap:EjpBootstrapConfig[];
  
  /**
   * The session configuration this project.
   */
  session:EjpSessionConfig;
  
  /**
   * The resources map configuration this project.
   */
  resourceMap:Array<EjpResourceMapperConfig>;
  
  /**
   * The login configuration this project.
   */
  login:EjpLoginConfig;
  
  /**
   * The security configuration this project.
   */
  security:EjpSecurityConfig;
}
