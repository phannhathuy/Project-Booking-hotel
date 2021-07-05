import AdminSaga from "./admin.saga"
import { fork } from "redux-saga/effects"

export default function* Saga() {
  yield fork(AdminSaga)
}