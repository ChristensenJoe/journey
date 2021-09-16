import { useState } from 'react'

import {
  Box,
  Typography,
  makeStyles,
  IconButton
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import EditItemDialog from '../Dialogs/EditItemDialog';
import DeleteItineraryItemConfirmDialog from '../Dialogs/DeleteItineraryItemConfirmDialog'

const useStyles = makeStyles(theme=> ({  
  container: {
    marginTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #ccc',
    position: 'relative'
    
  },
  header: {
    width: '60%'
  },
  category: {
    padding: '6px 12px',
    backgroundColor: '#efefef',
    display: 'inline-block',
    marginBottom: '6px',
    marginRight: '6px',
    borderRadius: '40px'
  },
  time: {
    color: '#A2B5BA',
    fontWeight: 'bold',
    marginTop: '12px',
    marginBottom: '16px'
  },
  iconContainer: {
    position: 'absolute',
    top: '-16px',
    right: '10px'
  }
}))

function ItineraryListItem({user, name, location, content, time, allCategories, categories, itemID, setItineraryItems, isMyAccount}) {
  const classes=useStyles();

  const [openEditItem, setOpenEditItem] = useState(false)
  const [openDeleteItem, setOpenDeleteItem] = useState(false)

  function handleEditDialog() {
    setOpenEditItem((openEditItem)=>!openEditItem)
  }

  function handleDeleteItem() {
    setOpenDeleteItem((openDeleteItem)=>!openDeleteItem)
  }

  return(
    <>
    <EditItemDialog 
      open={openEditItem}
      handleEditDialog={handleEditDialog}
      itemID={itemID}
      user={user}
      name={name}
      location={location}
      content={content}
      time={time}
      categories={categories}
      allCategories={allCategories}
      setItineraryItems={setItineraryItems}
    />
    <DeleteItineraryItemConfirmDialog
      open={openDeleteItem}
      handleDeleteItem={handleDeleteItem}
      itemID={itemID}
      setItineraryItems={setItineraryItems}
    />
    <Box 
      className={classes.container}
    >
      <Typography 
        variant="h5"
        className={classes.header}
      >
        {name}
      </Typography>
      <Typography 
        variant="body1" 
        noWrap
      >
        {content}
      </Typography>
      <Typography 
        variant="body1" 
        className={classes.time}
      >
        Time: {time}
      </Typography>
      {categories.map((category) => {
        return (
          <Typography 
            key={category.id}
            className={classes.category} 
            variant="h4"
          >
            {category.name}
          </Typography>
        )
      })}
      {isMyAccount && <div
        className={classes.iconContainer}
      >
        <IconButton 
          onClick={handleEditDialog}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={handleDeleteItem}
        >
          <DeleteIcon />
        </IconButton>
      </div>}
    </Box>
    </>
  )
}

export default ItineraryListItem