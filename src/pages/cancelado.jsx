import { Helmet } from 'react-helmet-async';

import { CanceladoView } from 'src/sections/cancelados/view';

// ----------------------------------------------------------------------

export default function CanceladoPage() {
  return (
    <>
      <Helmet>
        <title> Cancelados | Minimal UI </title>
      </Helmet>

      <CanceladoView />
    </>
  );
}
