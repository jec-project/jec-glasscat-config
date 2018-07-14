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

import {LogLevelString} from "jec-commons";

/**
 * The <code>LoggerFactoryConfig</code> interface represents an item of the
 * <code>loggers.factories</code> data specified by a bootstrap configuration
 * file.
 */
export interface LoggerFactoryConfig {

  /**
   * The name of the logger factory.
   */
  name:string;
  
  /**
   * The class path of the logger factory.
   */
  factory:string;

  /**
   * The log level of the logger factory.
   */
  logLevel:LogLevelString;
}