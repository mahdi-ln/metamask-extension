import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/button';
import Typography from '../../../../components/ui/typography';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import {
  ALIGN_ITEMS,
  DISPLAY,
  TYPOGRAPHY,
} from '../../../../helpers/constants/design-system';
import SnapsAuthorshipPill from '../../../../components/app/flask/snaps-authorship-pill';
import Box from '../../../../components/ui/box';
import ToggleButton from '../../../../components/ui/toggle-button';

function ViewSnap({ snap, onRemove, onToggle }) {
  const t = useI18nContext();

  return (
    <div className="settings-page__content-row">
      <div className="settings-page__content-item">
        <div className="settings-page__subheader view-snap__header">
          <Box display={DISPLAY.FLEX} alignItems={ALIGN_ITEMS.CENTER}></Box>
          <Typography variant={TYPOGRAPHY.H3}>{snap.name}</Typography>
          <SnapsAuthorshipPill
            packageName={snap.name}
            url={snap.name}
          ></SnapsAuthorshipPill>
          <Box paddingLeft={4} className="snap-settings-card__toggle-container">
            <ToggleButton
              value={snap.enabled}
              onToggle={onToggle}
              className="snap-settings-card__toggle-container__toggle-button"
            />
          </Box>
        </div>
        <Typography variant={TYPOGRAPHY.H6} boxProps={{ marginTop: 8 }}>
          {snap.description}
        </Typography>
      </div>
      <Typography variant={TYPOGRAPHY.H4}>{t('permissions')}</Typography>
      <pre>
        <code>{JSON.stringify(snap.initialPermissions, null, 4)}</code>
      </pre>
      <Typography variant={TYPOGRAPHY.H4}>{t('connectedSites')}</Typography>
      <Typography variant={TYPOGRAPHY.H4}>{t('removeSnaps')}</Typography>
      <div className="view-snap__remove__description">
        {t('removeSnapDescription')}
      </div>
      <Button
        className="settings-page__header view-snap__remove__button"
        type="danger"
        css={{
          maxWidth: '175px',
        }}
        onClick={onRemove}
      >
        {t('removeSnap')}
      </Button>
    </div>
  );
}

ViewSnap.propTypes = {
  snap: PropTypes.object,
  onRemove: PropTypes.func,
  onToggle: PropTypes.func,
  // listRoute: PropTypes.string.isRequired,
};

export default React.memo(ViewSnap);
