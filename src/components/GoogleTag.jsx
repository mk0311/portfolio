import React from 'react';

const GoogleTagManager = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NMVFY4PW2P"></script>
    <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NMVFY4PW2P');
        `}
    </script>
  </>
);

export default GoogleTagManager;
