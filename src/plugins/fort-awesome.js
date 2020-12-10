import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUser
} from '@fortawesome/free-solid-svg-icons'

import {
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons'

library.add(faQuestionCircle)
library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)
