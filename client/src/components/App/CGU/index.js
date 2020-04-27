// == Import npm
import React from 'react';
// import ReactMarkdown from 'react-markdown/with-html';
import terms from './terms_and_conditions.md'
// == Import
import './style.css';

// == Composant
const CGU = () => (
  <section id="cgu">
    <h1 className="title has-text-centered">Conditions générales de ventes</h1>
    {/* <ReactMarkdown className="md" source={terms} escapeHtml={false} /> */}
    <div dangerouslySetInnerHTML={{ __html: terms }} />
  </section>

);

// == Export
export default CGU;
