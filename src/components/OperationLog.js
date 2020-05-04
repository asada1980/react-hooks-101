import React from 'react'

const OperationLog = ({ operationLog }) => {
    return (
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAd}</td>
        </tr>
    )
}

export default OperationLog