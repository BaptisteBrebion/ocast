// == Import npm
import React from "react";
import PropTypes from "prop-types";
// == Import

// == Composant
const ReportProfileButton = ({ userToReportId, size }) => (
  <a
    className={"report-user button is-danger " + size}
    target="_blank"
    href={`mailto:maude@studio550.io?subject=Signaler%20un%20abus%20de%20utilisateur%20${userToReportId}`}
  >
    Signaler ce profil
  </a>
);

ReportProfileButton.propTypes = {
  userToReportId: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
};

// == Export
export default ReportProfileButton;
