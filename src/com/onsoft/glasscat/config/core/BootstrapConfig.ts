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

import {GlasscatConfig} from "./GlasscatConfig";
import {ToolsConfig} from "./ToolsConfig";

/**
 * The <code>BootstrapConfig</code> interface represents the bootstrap 
 * configuration file for a GlassCat container.
 */
export interface BootstrapConfig {

  /**
   * The <code>glasscat</code> data defined by a bootstrap configuration file.
   */
  glasscat:GlasscatConfig;

  /**
   * The <code>config</code> data defined by a bootstrap configuration file.
   */
  config:ToolsConfig;
}