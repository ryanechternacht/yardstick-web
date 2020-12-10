import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faChartBar,
  faFlag,
  faHeadSideVirus,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import {
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons'

// solid
library.add(faChartBar)
library.add(faFlag)
library.add(faHeadSideVirus)
library.add(faHome)
library.add(faUser)

// regular
library.add(faQuestionCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
