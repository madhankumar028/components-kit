import React from 'react';

import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { Navbar } from '../components/Navbar';

import { useMediaQuery } from '../utils/hooks/useMediaQuery';
import { BREAK_POINTS } from '../utils/breakpoint';

export default {
  title: "Navbar",
  decorators: [withKnobs]
};

const NAVIGATION_CONSTANTS = {
  defaultUserNavigation: [
    {
      "title": "Login",
      "link": "#",
      "iconName": "lifepal__icon lifepal__icon--login",
      "target": "_blank",
      "type": "link",
      "stylingClass": "pull-right",
      "childItems": []
    },
    {
      "title": "WA Kami",
      "link": "https://wa.me/6282330030027?text=Halo, saya tertarik untuk mengetahui lebih lanjut mengenai asuransi",
      "iconName": "lifepal__icon lifepal__icon--whatsapp",
      "target": "_blank",
      "type": "whatsapp",
      "stylingClass": "pull-right",
      "childItems": []
    },
    {
      "title": "Asuransi",
      "link": "/asuransi/",
      "iconName": "",
      "stylingClass": "pull-left",
      "section": "USER",
      "childItems": [
        {
          "title": "Kesehatan",
          "link": "/asuransi/kesehatan/",
          "iconName": "",
          "stylingClass": "pull-left",
          "childItems": [
            {
              "title": "Asuransi Kesehatan",
              "link": "/asuransi/kesehatan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 1
            },
            {
              "title": "Asuransi Keluarga",
              "link": "/asuransi/kesehatan-keluarga/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 2
            },
            {
              "title": "Asuransi Karyawan",
              "link": "/asuransi/karyawan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 3
            },
            {
              "title": "Asuransi Rawat Jalan",
              "link": "/asuransi/rawat-jalan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 4
            },
            {
              "title": "Asuransi Melahirkan",
              "link": "/asuransi/melahirkan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 5
            },
            {
              "title": "Asuransi Gigi",
              "link": "/asuransi/gigi/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 6
            },
            {
              "title": "Asuransi Penyakit Kritis",
              "link": "/asuransi/penyakit-kritis/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 7
            },
            {
              "title": "Asuransi Kesehatan Syariah",
              "link": "/asuransi/kesehatan-syariah/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 8
            },
            {
              "title": "Hospital Cash Plan",
              "link": "/asuransi/hospital-cash-plan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 9
            }
          ],
          "ordering": 1
        },
        {
          "title": "Jiwa",
          "link": "/asuransi/jiwa/",
          "iconName": "",
          "stylingClass": "pull-left",
          "childItems": [
            {
              "title": "Asuransi Jiwa",
              "link": "/asuransi/jiwa/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 1
            },
            {
              "title": "Asuransi Kecelakaan",
              "link": "/asuransi/kecelakaan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 2
            },
            {
              "title": "Asuransi Unitlink",
              "link": "/asuransi/unit-link/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 3
            },
            {
              "title": "Asuransi Dwiguna",
              "link": "/asuransi/dwiguna/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 4
            },
            {
              "title": "Asuransi Jiwa Premi Kembali",
              "link": "/asuransi/jiwa-rop/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 5
            }
          ],
          "ordering": 2
        },
        {
          "title": "Kendaraan",
          "link": "/asuransi/kendaraan/",
          "iconName": "",
          "stylingClass": "pull-left",
          "childItems": [
            {
              "title": "Asuransi Mobil",
              "link": "/asuransi/mobil/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 1
            },
            {
              "title": "Asuransi Motor",
              "link": "/asuransi/motor/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 2
            },
            {
              "title": "Asuransi TLO",
              "link": "/asuransi/tlo/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 3
            },
            {
              "title": "Asuransi All Risk",
              "link": "/asuransi/all-risk/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 4
            },
            {
              "title": "Kalkulator Premi Asuransi Mobil",
              "link": "https://lifepal.co.id/media/kalkulator-premi-asuransi-mobil/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 5
            },
            {
              "title": "Kuis Jenis Asuransi Mobil",
              "link": "https://lifepal.co.id/media/kalkulator-premi-asuransi-mobil/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 6
            },
            {
              "title": "Cari Bengkel Mobil",
              "link": "/bengkel-mobil",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 7
            }
          ],
          "ordering": 3
        },
        {
          "title": "Lainnya",
          "link": "/asuransi/",
          "iconName": "",
          "stylingClass": "pull-left",
          "childItems": [
            {
              "title": "Asuransi Perjalanan",
              "link": "/asuransi/perjalanan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 1
            },
            {
              "title": "Asuransi Pendidikan",
              "link": "/asuransi/pendidikan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 2
            },
            {
              "title": "Asuransi Rumah",
              "link": "/asuransi/rumah/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 4
            },
            {
              "title": "Asuransi Syariah",
              "link": "/asuransi/syariah/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 6
            },
            {
              "title": "BPJS Kesehatan",
              "link": "/asuransi/bpjs-kesehatan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 8
            },
            {
              "title": "BPJS Ketenagakerjaan",
              "link": "/asuransi/bpjs-ketenagakerjaan/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 9
            },
            {
              "title": "Tips Asuransi",
              "link": "https://lifepal.co.id/media/category/asuransi/",
              "iconName": "",
              "stylingClass": "pull-left",
              "ordering": 10
            }
          ],
          "ordering": 4
        },
        {
          "title": "Dapatkan Penawaran",
          "link": "/penawaran",
          "iconName": "ion-md-calculator",
          "stylingClass": "pull-left",
          "ordering": 7
        }
      ],
      "ordering": 1
    },
    {
      "title": "Keuangan",
      "link": "https://lifepal.co.id/media/",
      "iconName": "",
      "stylingClass": "pull-left",
      "section": "USER",
      "childItems": [
        {
          "title": "Perencanaan",
          "link": "/media/category/perencanaan/",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 1
        },
        {
          "title": "Tabungan",
          "link": "/media/category/tabungan/",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 2
        },
        {
          "title": "Kredit",
          "link": "/media/category/kredit/",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 3
        },
        {
          "title": "Investasi",
          "link": "/media/category/investasi/",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 4
        },
        {
          "title": "Administrasi",
          "link": "/media/category/administrasi/",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 5
        }
      ],
      "ordering": 2
    },
    {
      "title": "Konsultasi",
      "link": "https://lifepal.co.id/tanya/",
      "iconName": "",
      "stylingClass": "pull-left",
      "section": "USER",
      "childItems": [
        {
          "title": "Cek Keuangan",
          "link": "/cek-keuangan",
          "iconName": "ion-md-calculator",
          "stylingClass": "pull-left",
          "ordering": 1
        },
        {
          "title": "Tanya Lifepal",
          "link": "/tanya/",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 2
        },
        {
          "title": "Kalkulator & Kuis",
          "link": "/media/category/kalkulator",
          "iconName": "",
          "stylingClass": "pull-left",
          "ordering": 3
        }
      ],
      "ordering": 3
    },
    {
      "title": "Berita & Riset",
      "link": "https://lifepal.co.id/media/category/berita-riset/",
      "iconName": "",
      "stylingClass": "pull-left",
      "section": "USER",
      "ordering": 4
    },
    {
      "title": "Bantuan",
      "link": "https://lifepalhelp.zendesk.com/hc/id/requests/new",
      "iconName": "",
      "stylingClass": "pull-right",
      "section": "USER",
      "childItems": [
        {
          "title": "Kontak & Klaim",
          "link": "/bantuan-zendesk/",
          "iconName": "",
          "stylingClass": "pull-right",
          "ordering": 1
        },
        {
          "title": "Ketentuan",
          "link": "/ketentuan/",
          "iconName": "",
          "stylingClass": "pull-right",
          "ordering": 2
        },
        {
          "title": "FAQ",
          "link": "https://lifepalhelp.zendesk.com/hc/id",
          "iconName": "",
          "stylingClass": "pull-right",
          "ordering": 3
        }
      ],
      "ordering": 7
    }
  ],
  defaultAgentNavigation: [
    {
      title: 'Akun Saya',
      stylingClass: 'pull-right',
      iconName: 'lifepal-profile',
      link: '#',
      type: 'link',
      target: '',
      childItems: [
        {
          title: "Keluar",
          iconName: null,
          link: "#",
          stylingClass: "pull-right",
          target: '',
          type: "link",
          childItems: [],
        },
        {
          title: "Profil",
          iconName: null,
          link: "/account/profile",
          stylingClass: "pull-right",
          target: '',
          type: "link",
          childItems: [],
        },
        {
          title: "Polis Saya",
          iconName: null,
          link: "/account/policy",
          stylingClass: "pull-right",
          target: '',
          type: "link",
          childItems: [],
        }, {
          title: "Pengajuan",
          iconName: null,
          link: "/account/applications",
          stylingClass: "pull-right",
          target: '',
          type: "link",
          childItems: [],
        },
      ]
    }
  ]

};

export const navbar = () => {
  const navbarTypeLabel = 'Navbar Type';
  const navbarTypeOptions = {
    User: 'user',
    Agent: 'agent',
  };
  const defaultNavbarType = 'user';
  const type = select(navbarTypeLabel, navbarTypeOptions, defaultNavbarType);

  const isAuthenticatedLabel = 'isAuthenticated';
  const defaultIsAuthenticated = false;
  const isAuthenticated = boolean(isAuthenticatedLabel, defaultIsAuthenticated);

  let navigationItems;
  if (isAuthenticated) {
    let nav = [...NAVIGATION_CONSTANTS.defaultUserNavigation];
    nav.splice(0, 1, ...NAVIGATION_CONSTANTS.defaultAgentNavigation);
    navigationItems = nav;
  } else {
    navigationItems = NAVIGATION_CONSTANTS.defaultUserNavigation;
  }

  const isDesktop = useMediaQuery(BREAK_POINTS.desktop);
  const isTablet = useMediaQuery(BREAK_POINTS.tablet);
  const isLargeScaleDisplay = isTablet || isDesktop;

  return (
    <Navbar
      type={type}
      initialName="LP"
      navigationMenu={navigationItems}
      isAuthenticated={isAuthenticated}
      isLargeScaleDisplay={isLargeScaleDisplay}
      handleLogin={()=> console.log('Logging in')}
      handleLogout={() => console.log('logging out')}
      handleMenuClick={() => console.log('handle popup open function')}
      currentActivePage=""
      logoPath={`https://lifepal.tech/static/images/${type === 'user' ? 'lifepal-logo' : 'lifepal-agent'}.png`}
    />
  );
};
