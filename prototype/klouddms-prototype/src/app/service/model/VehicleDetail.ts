/**
 * FutureDMS API
 * Premier Enterprise Dealership Management System
 *
 * OpenAPI spec version: 0.3.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface VehicleDetail {
    /**
     * Unique idenfier for a vehicle
     */
    id?: string;

    make?: string;

    model?: string;

    year?: number;

    recall?: Array<models.Recall>;

}
