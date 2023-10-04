/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { AddressModelInit } from './address'
import { BasketModelInit } from './basket'
import { BasketItemModelInit } from './basketitem'
import { CaptchaModelInit } from './captcha'
import { CardModelInit } from './card'
import { ChallengeModelInit } from './challenge'
import { ComplaintModelInit } from './complaint'
import { DeliveryModelInit } from './delivery'
import { FeedbackModelInit } from './feedback'
import { ImageCaptchaModelInit } from './imageCaptcha'
import { MemoryModelInit } from './memory'
import { PrivacyRequestModelInit } from './privacyRequests'
import { ProductModelInit } from './product'
import { QuantityModelInit } from './quantity'
import { RecycleModelInit } from './recycle'
import { relationsInit } from './relations'
import { SecurityAnswerModelInit } from './securityAnswer'
import { SecurityQuestionModelInit } from './securityQuestion'
import { UserModelInit } from './user'
import { WalletModelInit } from './wallet'
import { MasterUsersModelInit } from './masterUsers'

/* jslint node: true */

const Sequelize = require('sequelize')

const sequelize = new Sequelize('hackathon_test', 'shubham', 'shubham123', {
  dialect: 'mysql',
  retry: {
    match: [/SQLITE_BUSY/],
    name: 'query',
    max: 5
  },
  username: 'shubham',
  password: 'shubham123',
  host: '127.0.0.1',
  port: '3306',
  logging: false
})
AddressModelInit(sequelize)
BasketModelInit(sequelize)
BasketItemModelInit(sequelize)
CaptchaModelInit(sequelize)
CardModelInit(sequelize)
ChallengeModelInit(sequelize)
ComplaintModelInit(sequelize)
DeliveryModelInit(sequelize)
FeedbackModelInit(sequelize)
ImageCaptchaModelInit(sequelize)
MemoryModelInit(sequelize)
PrivacyRequestModelInit(sequelize)
ProductModelInit(sequelize)
QuantityModelInit(sequelize)
RecycleModelInit(sequelize)
SecurityAnswerModelInit(sequelize)
SecurityQuestionModelInit(sequelize)
UserModelInit(sequelize)
WalletModelInit(sequelize)

relationsInit(sequelize)
MasterUsersModelInit(sequelize)

export { sequelize }
