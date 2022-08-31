/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faBold, faItalic, faUnderline,
  faHeading, faAlignCenter, faAlignLeft,
  faAlignRight, faAlignJustify,
  faImage, faLink, faCode
} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(
  faBold, faItalic, faUnderline, faHeading, 
  faAlignCenter, faAlignLeft, faAlignRight, 
  faAlignJustify, faImage, faLink, faCode
)

export default FontAwesomeIcon