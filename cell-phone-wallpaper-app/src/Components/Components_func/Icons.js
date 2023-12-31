import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Typography } from './Typography';
import { Badge } from './Badge';

// export class Icons extends React.Component {
//     render() {
//         const { name, size, color } = this.props;
//         return <Ionicons name={name} size={size} color={color} />;
//     }
// }

export const Icons = (props) => {
    return <Ionicons name={props.name} size={props.size} color={props.color} />;
};
