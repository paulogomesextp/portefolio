<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Sobre Mim</MenuItem>
  <MenuItem onClick={handleClose}>Portefólio</MenuItem>
  <MenuItem onClick={handleClose}>Contactos</MenuItem>
</Menu>