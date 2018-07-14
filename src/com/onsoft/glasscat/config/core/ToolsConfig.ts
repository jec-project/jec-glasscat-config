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

import {LoggersConfig} from "./LoggersConfig";
import {HttpConfig} from "./HttpConfig";
import {SecurityConfig} from "./SecurityConfig";

/**
 * The <code>ToolsConfig</code> interface represents the <code>config</code> data 
 * of a bootstrap configuration file.
 */
export interface ToolsConfig {

  /**
   * The GlassCat container loggers as defined by the bootstrap configuration
   * file.
   */
  loggers:LoggersConfig;

  /**
   * The GlassCat container HTTP tasks settings as defined by the bootstrap 
   * configuration file.
   */
  http:HttpConfig;

  /**
   * The GlassCat container HTTP global security settings as defined by the  
   * bootstrap configuration file.
   */
  security:SecurityConfig;
  
  /**
   * The GlassCat container error page as defined by the bootstrap configuration
   * file.
   */
  errorPage:string;
}