/*
  Copyright 2017~2022 The Bottos Authors
  This file is part of the Bottos Data Exchange Client
  Created by Developers Team of Bottos.

  This program is free software: you can distribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Bottos. If not, see <http://www.gnu.org/licenses/>.
*/
import React from 'react';

// export default function Token(props) {
//   return <span className='dib'>
//     <img style={{margin: '2px 4px 4px'}} width='15px' src='./img/token.png' />
//   </span>
// }

export default function TokenSymbol(props) {
  let type = typeof props.type == 'string' ? props.type.toUpperCase() : 'BTO'
  let token = type ? 'BTO' : 'DTO'
  let _style = props.style || {}
  let style = {
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 700,
    ..._style
  }
  return <span className='dib' style={style}>
    {token}
  </span>
}