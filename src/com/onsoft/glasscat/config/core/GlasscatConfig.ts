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
 * The <code>GlasscatConfig</code> interface represents the 
 * <code>glasscat</code> data of a bootstrap configuration file.
 */
export interface GlasscatConfig {

  /**
   * The GlassCat container version as defined by the bootstrap configuration
   * file.
   */
  version:string;
  
  /**
   * The GlassCat container locale as defined by the bootstrap configuration
   * file.
   */
  locale:string;
}