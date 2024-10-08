export const theme = {
    token: {
        colorPrimary: 'var(--primary-color)',
        colorPrimaryHover: 'var(--primary-color-hover)',
        colorPrimaryActive: 'var(--primary-color-active)',
        colorPrimaryOutline: 'var(--primary-color-outline)',
        colorPrimaryBg: 'var(--primary-1)',
        colorPrimaryBgHover: 'var(--primary-2)',
        colorPrimaryBorder: 'var(--primary-3)',
        colorPrimaryText: 'var(--primary-6)',
        colorPrimaryTextHover: 'var(--primary-5)',
        colorPrimaryTextActive: 'var(--primary-7)',

        colorBgContainer: 'var(--component-background)',
        colorBgBase: 'var(--body-background)',
        colorText: 'var(--text-color)',
        colorTextSecondary: 'var(--text-color-secondary)',
    },
    components: {
        Button: {
            // Color primario del botón
            colorPrimary: 'var(--primary-color)',

            // Color de fondo del botón
            colorPrimaryBg: 'var(--primary-color)',

            // Color del texto del botón
            colorPrimaryText: 'var(--primary-color-hover)',

            // Estados hover
            colorPrimaryHover: 'var(--primary-color-hover)',
            colorPrimaryBgHover: 'var(--primary-color-hover)',
            colorPrimaryTextHover: '#ffffff',

            // Estados activos (cuando se presiona el botón)
            colorPrimaryActive: 'var(--primary-color-active)',
            colorPrimaryBgActive: 'var(--primary-color-active)',
            colorPrimaryTextActive: '#ffffff',

            // Estados de enfoque (focus)
            colorPrimaryFocus: 'var(--primary-color-active)',
            colorPrimaryBgFocus: 'var(--primary-color-active)',
            colorPrimaryTextFocus: '#ffffff',

            // Borde del botón
            colorPrimaryBorder: 'var(--primary-color-active)',
            colorPrimaryBorderHover: 'var(--primary-color-active)',

            // Sombra del botón (para efecto de elevación)
            boxShadow: '0 2px 0 rgba(0, 185, 107, 0.1)',
            boxShadowSecondary: '0 2px 0 rgba(0, 0, 0, 0.045)',

            // Botón deshabilitado
            colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
            colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',

            // Botón peligroso (normalmente rojo)
            colorError: '#ff4d4f',
            colorErrorHover: '#ff7875',
            colorErrorActive: '#d9363e',
            colorErrorText: '#ffffff',
            colorErrorBg: '#ff4d4f',
            colorErrorBorder: '#ff4d4f',

            // Otros ajustes
            controlHeight: 32, // Altura del botón
            controlHeightSM: 24, // Altura del botón pequeño
            controlHeightLG: 40, // Altura del botón grande

            // Bordes redondeados
            borderRadius: 2,
            borderRadiusLG: 4,
            borderRadiusSM: 2,
        },
        Typography: {
            // Color para el título principal (h1)
            // colorTextHeading: '#00b96b',

            // Colores para diferentes niveles de títulos
            titleMarginTop: '1.2em',
            titleMarginBottom: '0.5em',

            // Puedes especificar colores para cada nivel de título si lo deseas
            // Estos son ejemplos, ajústalos según tus necesidades
            h1Color: 'var(--primary-4)',  // Color para <Title level={1}>
            h2Color: 'var(--primary-4)',  // Color para <Title level={2}>
            h3Color: 'var(--primary-4)',  // Color para <Title level={3}>
            h4Color: 'var(--primary-4)',  // Color para <Title level={4}>
            h5Color: 'var(--primary-4)',  // Color para <Title level={5}>

            // Tamaños de fuente para diferentes niveles de títulos
            fontSizeHeading1: '38px',
            fontSizeHeading2: '30px',
            fontSizeHeading3: '24px',
            fontSizeHeading4: '20px',
            fontSizeHeading5: '16px',

            // Peso de la fuente para los títulos
            fontWeightStrong: 600,

            // Altura de línea para los títulos
            lineHeightHeading1: 1.23,
            lineHeightHeading2: 1.35,
            lineHeightHeading3: 1.35,
            lineHeightHeading4: 1.4,
            lineHeightHeading5: 1.5,
        },
        Input: {
            colorBorder: 'var(--border-color)',
            // Otros tokens específicos de Input
        },
        // Otros componentes...
    }
};
