import React,{useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
    
  },
})(Rating)

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`
}

export default function CustomizedRatings(props) {
  const score = Number(props.score)
  return (
    <>
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography component="legend"></Typography>
        <StyledRating
          name="customized-color"
          value={score}
          readOnly={true}
          getLabelText={getLabelText}
          precision={0.1}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
    </>
  )
}
