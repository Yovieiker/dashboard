// import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import Iconify from 'src/components/iconify';

// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  const [cantidadVentas, setCantidadVentas] = useState(0);
  const [cantidadUsers, setCantidadUSers] = useState(0);
  const [totalVentas, setTotalVentas] = useState(0);
  const [promedio18, setPromedio18] = useState(0);
  const [promedio25, setPromedio25] = useState(0);
  const [promedio35, setPromedio35] = useState(0);
  const [promedio40, setPromedio40] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/checkout/cantidad');
      const data = await response.json();
      setCantidadVentas(data.cantidad);
      setTotalVentas(data.totalVentas);
      setCantidadUSers(data.totalUsuarios);
      setPromedio18(data.porcentaje18_25);
      setPromedio25(data.porcentaje25_30);
      setPromedio35(data.porcentaje35_40);
      setPromedio40(data.porcentaje40_plus);
      console.log(data);
    };
    fetchData();
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hola, Bienvenido 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Ultimas ventas"
            total={totalVentas}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Nuevo usuarios"
            total={cantidadUsers}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Ventas"
            total={cantidadVentas}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Estados mayor demanda"
            subheader="(+43%) año pasado"
            chart={{
              labels: [
                '01/01/2024',
                '02/01/2024',
                '03/01/2024',
                '04/01/2024',
                '05/01/2024',
                '06/01/2024',
                '07/01/2024',
                '08/01/2024',
                '09/01/2024',
                '10/01/2024',
                '11/01/2024',
              ],
              series: [
                {
                  name: 'Bogota',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'CASANARE',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'CORDOBA',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Promedio de edad"
            subheader="Quienes compran"
            chart={{
              series: [
                { label: '18-25', value: promedio18 },
                { label: '25-30', value: promedio25 },
                { label: '35-40', value: promedio35 },
                { label: '40+', value: promedio40 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
