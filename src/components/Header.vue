<template>
  <div>
    <div class="header container-fluid fixed-top">
      <div class="header-container container">
        <div class="row">
          <div class="col-6">
            <svg class="logo" viewBox="0 0 1866 505" xmlns="http://www.w3.org/2000/svg">
              <path d="M901.608 117.091H840.386V300.045H837.83L712.261 117.091H658.284V408H719.79V224.903H721.92L848.483 408H901.608V117.091ZM1091.2 315.102C1091.35 344.364 1071.32 359.705 1049.58 359.705C1026.71 359.705 1011.94 343.653 1011.8 317.943V189.818H951.288V328.739C951.43 379.733 981.26 410.841 1025.15 410.841C1057.96 410.841 1081.54 393.938 1091.35 368.369H1093.62V408H1151.71V189.818H1091.2V315.102ZM1198.98 408H1382.36V359.705H1278.38V358.142L1378.67 229.165V189.818H1202.67V238.114H1305.8V239.676L1198.98 371.92V408ZM1427.5 408H1610.88V359.705H1506.9V358.142L1607.18 229.165V189.818H1431.19V238.114H1534.31V239.676L1427.5 371.92V408ZM1750.33 412.261C1804.31 412.261 1840.67 385.983 1849.19 345.5L1793.23 341.807C1787.12 358.426 1771.49 367.091 1751.32 367.091C1721.07 367.091 1701.89 347.062 1701.89 314.534V314.392H1850.47V297.773C1850.47 223.625 1805.59 186.977 1747.91 186.977C1683.71 186.977 1642.09 232.574 1642.09 299.903C1642.09 369.08 1683.14 412.261 1750.33 412.261ZM1701.89 276.892C1703.17 252.034 1722.06 232.148 1748.91 232.148C1775.19 232.148 1793.37 250.898 1793.51 276.892H1701.89Z" />
              <path d="M228.542 30.7914C220.277 19.1349 216.145 13.3067 213.849 14.4416C211.554 15.5764 213.675 22.3988 217.919 36.0435L293.622 279.484C294.729 283.043 295.282 284.823 294.383 286.044C293.484 287.265 291.62 287.265 287.893 287.265H267.476H178.701H135.556H91.9288H48.3016C31.1694 287.265 22.6033 287.265 22.0806 289.614C22.0373 289.808 22.0135 290.007 22.0095 290.206C21.962 292.611 30.285 294.637 46.9312 298.689L480.4 404.203C486.948 405.797 490.222 406.594 491.391 404.871C492.561 403.149 490.611 400.4 486.713 394.902L228.542 30.7914Z" />
            </svg>
          </div>
          <div class="col-6">
            <div class="menu-container">
              <div class="btn-group">
                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img class="pic" src="assets/me.png" />
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li>
                    <router-link class="dropdown-item" :to="{name:'home'}">Projects</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" :to="{name:'skills'}">Skills</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" :to="{name:'about'}">About</router-link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/MatiasNuccetelli_CV_compressed.pdf" target="_blank">Resume</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>