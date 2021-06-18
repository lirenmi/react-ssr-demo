import React from 'react';
import {renderToString} from 'react-dom/server';
import Branding from '../client-src/views/branding/Branding';
import Connections from '../client-src/views/connections/Connections';

export const branding = () => {
  return renderToString(<Branding />);
};

export const connections = () => {
  return renderToString(<Connections />);
};
