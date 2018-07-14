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

import {RealmType} from "jec-exchange";

/**
 * Represents the realm configuration for an EJP deployed in a GlassCat
 * container.
 */
export interface EjpRealmConfig {

  /**
   * Indicates the type of the realm..
   */
  type:RealmType;
  
  /**
   * The property used for generating the basic authentication response header.
   */
  securedArea:string;
  
  /**
   * The reference to the factory used to build the <code>RealmConnector</code> 
   * instance when the <code>type</code> property is set to
   * <code>RealmType.CUSTOM</code>.
   */
  connectorFactory:string;
}
