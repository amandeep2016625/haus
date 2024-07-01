
import router from '@adonisjs/core/services/router'
const student = () => import('#controllers/Http/crud_controller')
const skill = () => import('#controllers/Http/crud_skill')
router.get('/', async () => {
  return {
    msg: 'its working fine',
  }
})

router.post('/student', [student, 'store'])
router.get('/student', [student, 'index'])
router.get('/student/:id', [student, 'show'])
router.delete('/student/:id', [student, 'destroy'])
router.patch('/student/:id', [student, 'update'])

router.post('/skill', [skill, 'store'])
router.get('/skill', [skill, 'index'])
router.get('/skill/:id', [skill, 'show'])
router.delete('/skill/:id', [skill, 'destroy'])
router.patch('/skill/:id', [skill, 'update'])
