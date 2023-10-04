/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import {
  type InferAttributes,
  type InferCreationAttributes,
  Model,
  DataTypes,
  type Sequelize
} from 'sequelize'
/* jslint node: true */
class MasterUsers extends Model<
InferAttributes<MasterUsers>,
InferCreationAttributes<MasterUsers>
> {
  declare id1: number
  declare fullName: string
  declare email: number
  declare identity: string
  declare challengeSolved: JSON
}

const MasterUsersModelInit = (sequelize: Sequelize) => {
  MasterUsers.init(
    {
      id1: {
        type: DataTypes.INTEGER
      },
      fullName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      identity: {
        type: DataTypes.STRING
      },
      challengeSolved: {
        type: DataTypes.JSON, // Specify the data type of the array elements (e.g., STRING)
        defaultValue: ['abc', 'def'] // You can provide a default empty array if needed
      }
    },
    {
      tableName: 'masterUsers',
      sequelize
    }
  )
}

export { MasterUsers as MasterUsersModel, MasterUsersModelInit }
