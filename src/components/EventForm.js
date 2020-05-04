import React, { useContext, useState } from 'react'

import { CREATE_EVENT, DELETE_ALL_EVENT, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
    const {state, dispatch} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
  
    const addEvent = e => {
      e.preventDefault()
      dispatch({
        type: CREATE_EVENT, 
        title, 
        body
      })
  
      dispatch({
        type: ADD_OPERATION_LOG, 
        description: 'イベントを作成しました。', 
        operatedAd: timeCurrentIso8601()
      })

      setTitle('')
      setBody('')
    }
  
    const deleteAllEvents = e => {
      e.preventDefault()
      if (window.confirm('全てのイベントを削除してもよろしいですか？')) { 
        dispatch({type: DELETE_ALL_EVENT})

        dispatch({
          type: ADD_OPERATION_LOG,
          description: '全てのイベントを削除しました。',
          operatedAd: timeCurrentIso8601()
        })
      }
    }
  
    const isAddButtonDisabled = title === '' || body === ''
    const isDeleteAllDisabled = state.events.length === 0
  
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
            <div className="form-group">
                <label htmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" onChange={e => setTitle(e.target.value)} value={title}/>
            </div>

            <div className="form-group">
                <label htmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" onChange={e => setBody(e.target.value)} value={body}/>
            </div>

            <button className="btn btn-primary" onClick={addEvent} disabled={isAddButtonDisabled}>イベントを作成する</button>
            <button className="btn btn-danger" onClick={deleteAllEvents} disabled={isDeleteAllDisabled}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventForm

