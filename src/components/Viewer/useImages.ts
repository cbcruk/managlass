import bluebird from 'bluebird'
import { useEffect, useReducer } from 'react'
import { MangaDetail } from '../../types'

enum ActionType {
  REQUEST,
  SUCCESS,
  FAILURE,
}

export enum StatusType {
  Idle,
  Loading,
  Success,
  Failure,
  Done,
}

type ImagesState = {
  status: StatusType
  error: Error | null
}

type Action =
  | { type: ActionType.FAILURE; payload: Error }
  | { type: ActionType.REQUEST }
  | { type: ActionType.SUCCESS }

function reducer(state: ImagesState, action: Action) {
  switch (action.type) {
    case ActionType.REQUEST:
      return {
        ...state,
        status: StatusType.Loading,
      }
    case ActionType.SUCCESS:
      return {
        ...state,
        status: StatusType.Done,
      }
    case ActionType.FAILURE:
      return {
        ...state,
        status: StatusType.Done,
        payload: action.payload,
      }
    default:
      return state
  }
}

function useImages(imgList: MangaDetail['imgList']) {
  const [state, dispatch] = useReducer(reducer, {
    status: StatusType.Idle,
    error: null,
  })

  useEffect(() => {
    dispatch({
      type: ActionType.REQUEST,
    })

    bluebird
      .map(
        imgList,
        (src) => {
          return new Promise((resolve, reject) => {
            const img = new Image()

            img.src = src
            img.onload = resolve
            img.onerror = reject
          })
        },
        {
          concurrency: 3,
        }
      )
      .then(() => {
        dispatch({
          type: ActionType.SUCCESS,
        })
      })
      .catch((e: Error) => {
        dispatch({
          type: ActionType.FAILURE,
          payload: e,
        })
      })
  }, [imgList])

  return state
}

export default useImages
