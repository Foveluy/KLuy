import { ExcersiseManager } from '../Manager/excersise'
import { message } from 'antd'

export default {
    namespace: 'exercise',
    state: { history: [] },
    reducer: {
        bindHistory(state, { payload }) {
            return { ...state, ...payload }
        },
        bindExcersise(state, { payload }) {
            return { ...state, exercise: payload }
        }
    },
    effects: {
        *fetchHistory({ put, call }, { payload }) {
            yield put({
                type: 'bindHistory',
                payload: []
            })
            const exmanager = new ExcersiseManager(call)
            const json = yield exmanager.getExcersise(
                `/exercise/history/${payload}`
            )
            yield put({
                type: 'bindHistory',
                payload: json.payload
            })
        },
        *fetchExerciseAll({ put, call }, { payload }) {
            yield put({
                type: 'bindExcersise',
                payload: []
            })
            const exmanager = new ExcersiseManager(call)
            const json = yield exmanager.getExcersise('/exercise')
            if (json.Success) {
                yield put({
                    type: 'bindExcersise',
                    payload: json.payload.exercise
                })
            } else {
                message.error(json.message)
            }
        },
        *addExerciseSet({ put, call }, { payload }) {
            const exmanager = new ExcersiseManager(call)
            const json = yield exmanager.addExerciseSet({
                name: 'benchpress',
                date: '2016-8-15',
                sets: payload
            })
            if (json.Success) {
                message.success('加入成功')
            } else {
                message.success('加入失败')
            }
        }
    }
}