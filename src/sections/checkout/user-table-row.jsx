import { useState } from 'react';
import PropTypes from 'prop-types';

// import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  cedula,
  nombre,
  avatarUrl,
  apellido,
  correo,
  fecha,
  ciudad,
  estado,
  metodo_pago,
  direccion,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  // const handleOpenMenu = (event) => {
  //   setOpen(event.currentTarget);
  // };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const fecha_registro = fecha;
  const formattedFecha = new Date(fecha_registro).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell>{cedula}</TableCell>
        <TableCell>{nombre}</TableCell>

        <TableCell>{apellido}</TableCell>

        <TableCell>{correo}</TableCell>
        <TableCell>{estado}</TableCell>
        <TableCell>{ciudad}</TableCell>
        <TableCell>{direccion}</TableCell>
        <TableCell>{metodo_pago}</TableCell>
        <TableCell align="center">{formattedFecha}</TableCell>

        {/* <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell> */}
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  apellido: PropTypes.any,
  handleClick: PropTypes.func,
  fecha: PropTypes.any,
  nombre: PropTypes.any,
  correo: PropTypes.any,
  selected: PropTypes.any,
  estado: PropTypes.string,
  ciudad: PropTypes.string,
  metodo_pago: PropTypes.string,
  cedula: PropTypes.string,
  direccion: PropTypes.string,
};
