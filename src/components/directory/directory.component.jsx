import React from 'react';
import {connect} from 'react-redux';

import {sectionsSelector} from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({sections}) => {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = state => ({
    sections: sectionsSelector(state)
})

export default connect(mapStateToProps)(Directory);
