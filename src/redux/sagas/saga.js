import {call, put, takeLatest} from "redux-saga/effects"
import fetchData from "../../utils/fetchData";
import { receiveCharactersFromApi } from "../actions/receive.characters";
import { REQUEST_ALL_CHARACTERS } from "../actions/request.characters";

function* getAllCharacters () {
    try {
        const data = yield call(fetchData);
        yield put(receiveCharactersFromApi(data))
    } catch (error) {
        console.log(error)
    }
};
export default function* mySaga () {
    yield takeLatest(REQUEST_ALL_CHARACTERS, getAllCharacters)
};