import React from 'react';
import PropTypes from 'prop-types';
import SnapSettingsCard from '../../../components/app/flask/snap-settings-card';
import { removeSnap } from '../../../store/actions';
import ViewSnap from './view-snap';

const propTypes = {
  snaps: PropTypes.object.isRequired,
  viewingSnap: PropTypes.bool,
  snap: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const SnapListTab = (props) => {
  if (props.viewingSnap) {
    return (
      <ViewSnap
        snap={props.snap}
        onToggle={(event) => props.onToggle(event, props.snap)}
        onRemove={(event) => {
          props.onRemove(event, props.snap);
          props.dispatch(removeSnap(props.snap.name));
        }}
      />
    );
  }
  return (
    <div className="snaps-list-wrapper">
      {Object.entries(props.snaps).map(([key, snap]) => {
        return (
          <SnapSettingsCard
            className="snap-settings-card"
            isEnabled={snap.enabled}
            dateAdded={new Date().toDateString()}
            key={key}
            onToggle={(event) => {
              props.onToggle(event, snap);
            }}
            description={snap.description}
            url={snap.name}
            name={snap.name}
            status={snap.status}
            version={snap.version}
            onClick={(event) => {
              props.onClick(event, snap);
            }}
          />
        );
      })}
    </div>
  );
};

SnapListTab.propTypes = propTypes;

export default SnapListTab;
