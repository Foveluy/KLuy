import { UserManager } from '../Manager/user'
import { CategoryManager } from '../Manager/category'

const addType = (array, type) => {
    return array.map(item => {
        return { ...item, type: type }
    })
}

export default {
    namespace: 'editor',
    state: { category: [] },
    reducer: {
        change(state, { payload }) {
            return { ...state, routerState: payload, isRedirect: false }
        },
        redirect(state, { payload }) {
            return {
                ...state,
                redirectPath: { pathname: payload.redirectPath },
                isRedirect: payload.isRedirect
            }
        },
        mapCategory(state, { payload }) {
            return {
                ...state,
                category: payload.list,
                type: payload.type,
                categoryID: payload.categoryID
            }
        }
    },
    effects: {
        *checkAuth({ put, call }, { payload }) {
            const user = new UserManager(call)
            const res = yield user.auth()
            if (res.status === 'fail') {
                yield put({
                    type: 'redirect',
                    payload: {
                        redirectPath: '/login',
                        isRedirect: true
                    }
                })
            }
        },
        *addCategory({ put, call }, { payload }) {
            const Category = new CategoryManager(call)
            const json = yield Category.fetch('/category/create', {
                categoryName: payload,
                categoryID: Date.now()
            })
        },
        *bindExerciseToCate({ put, call }, { payload }) {
            const Category = new CategoryManager(call)
            console.log(payload)
            const json = yield Category.fetch('/category/bind', {
                categoryID: payload.categoryID,
                exerciseID: payload.id
            })
        },
        *fetchExcersise({ put, call }, { payload }) {
            yield put({
                type: 'mapCategory',
                payload: []
            })
            const Category = new CategoryManager(call)
            const json = yield Category.getCategory(
                '/category/exercise/' + payload
            )
            yield put({
                type: 'mapCategory',
                payload: {
                    list: addType(json.payload.exercise, 'exercise'),
                    type: 'exercise',
                    categoryID: payload
                }
            })
        },
        *fetchCategory({ put, call, select }, { payload }) {
            const Category = new CategoryManager(call)
            const json = yield Category.getCategory('/category')
            yield put({
                type: 'mapCategory',
                payload: {
                    list: addType(json.payload.category, 'category'),
                    type: 'category'
                }
            })
        }
    }
}
