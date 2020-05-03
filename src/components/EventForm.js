import React, {useState} from 'react'

const EventForm = ({state, dispatch}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
  
    const addEvent = e => {
      e.preventDefault()
      dispatch({type: 'CREATE_EVENT', title, body})
  
      setTitle('')
      setBody('')
    }
  
    const deleteAllEvents = e => {
      e.preventDefault()
      if (window.confirm('全てのイベントを削除してもよろしいですか？')) { 
        dispatch({type: 'DELETE_ALL_EVENTS'})
      }
    }
  
    const isAddButtonDisabled = title === '' || body === ''
    const isDeleteAllDisabled = state.length === 0
  
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

