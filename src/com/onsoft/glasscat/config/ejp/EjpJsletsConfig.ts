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


/**
 * Represents the <code>webapp.jslets</code> configuration property for an EJP  
 * deployed in a GlassCat container.
 */
export interface EjpJsletsConfig {

  /**
   * Indicates the path to the configuration file to load for declaring jslets.
   */
  configFile:string;
  
  /**
   * The list of jslets declared for the EJP.
   */
  config:string[];

  /**
   * Indicates whether jslets auto wire is enables (<code>true</code>), or not
   * (<code>false</code>).
   */
  enableAutowire:boolean;
}
