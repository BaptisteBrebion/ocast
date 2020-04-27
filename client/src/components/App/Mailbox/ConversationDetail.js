// == Import npm
import React from "react";
// == Import
import MessagesMailbox from "src/containers/App/MessagesMailbox";
import Form from "src/containers/App/FormMailbox";
import ReportProfileButton from "src/components/App/ReportProfileButton";

// == Composant
const ConversationDetail = ({ interlocutor, interlocutorId }) => (
  <div className="conversation-detail">
    <div className="conversation-header">
      <h2>Conversation avec {interlocutor}</h2>
      <ReportProfileButton userToReportId={interlocutorId} size="is-small" />
    </div>
    <MessagesMailbox />
    <Form />
  </div>
);

// == Export
export default ConversationDetail;
