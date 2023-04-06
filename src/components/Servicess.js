import React from 'react';

const Servicess = () => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th
            className="has-text-centered"
            style={{ backgroundColor: '#1c1c47' }}
          >
            <abbr title="Position" style={{ color: 'white' }}>
              Services
            </abbr>
          </th>
          <th
            className="has-text-centered"
            style={{ backgroundColor: '#1c1c47', color: 'white' }}
          >
            Price (Egyptians)*
          </th>
          <th
            className="has-text-centered"
            style={{ backgroundColor: '#1c1c47', color: 'white' }}
          >
            <abbr title="Played">Price (non-Egyptians)**</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Biological Sample</td>
          <td className="has-text-centered">300 L.E.</td>
          <td className="has-text-centered">$110</td>
        </tr>
        <tr>
          <td>Non-biological Sample</td>
          <td className="has-text-centered">250 L.E.</td>
          <td className="has-text-centered">$80</td>
        </tr>
        <tr>
          <td>Elemental microanalysis for non-biological sample (EDS)</td>
          <td className="has-text-centered">240 L.E.</td>
          <td className="has-text-centered">$75</td>
        </tr>
        <tr>
          <td>EDS Mapping</td>
          <td className="has-text-centered">1000 L.E.</td>
          <td className="has-text-centered">$500</td>
        </tr>
        <tr>
          <td>Coating</td>
          <td className="has-text-centered">50 L.E.</td>
          <td className="has-text-centered"> $10</td>
        </tr>
        <tr>
          <td>Every Additional Picture</td>
          <td className="has-text-centered"> 10 L.E.</td>
          <td className="has-text-centered">$5</td>
        </tr>
      </tbody>
    </table>
    <div className="column is-12 has-text-centered">
      <a className="btn" href="/img/price.pdf" target="_blank">
        View full Services
      </a>
    </div>
    <br />
    <br />
  </>
);

export default Servicess;
