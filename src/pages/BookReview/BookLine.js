import React from 'react'
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#cde2d0', 0),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ffc408',
  },
})(LinearProgress)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1.5),
    borderRadius: '20px',
    width: '200px',
  },
}))

export default function CustomizedProgressBars() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={1}
        />
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={15}
        />
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={15}
        />
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={15}
        />
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={15}
        />
      </div>
    </>
  )
}
