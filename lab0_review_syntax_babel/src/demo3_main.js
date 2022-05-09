import courseA from './demo3_course'
import courseB from './demo3_course'
import {default_header} from './demo3_common'
import {MAX_SIZE} from './demo3_common'
import * as b from './demo3_common'
console.log(courseA)
console.log(courseB)
default_header()
console.log(`max size=${MAX_SIZE}`)
b.default_header()
console.log(`max size=${b.MAX_SIZE}`)