import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    position: 'relative',
    minHeight: "auto",
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Novels" style={{fontSize:"10px",fontStyle:"bold"}}/>
            <Tab label="Programing Laguages" style={{fontSize:"10px"}}/>
            <Tab label="Adventure / Horror" style={{fontSize:"10px"}}/>
            <Tab label="O/L Notes" style={{fontSize:"10px"}}/>
            <Tab label="A/L Notes" style={{fontSize:"10px"}}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <form onSubmit={""}>
                    <div className="card">
                        <div className="card-header">
                        ⚠️ This section is reserved only for the Admin ! 
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Novel Book</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Book Name"
                                    placeholder="ex: example book"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Author"
                                    placeholder="ex: example author"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Download URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    //value = {password} onChange = {(e)=>setPassword(e.target.value)} 
                                    required
                                /><br/>
                                <label class="form-label" for="customFile">Select a cover image</label>
                                <input type="file" class="form-control" id="customFile" style={{width:"50%"}} required/><br/>
                                <Button variant="contained" color="primary" type="submit">
                                    <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6>Upload  
                                </Button>
                                
                            </center>
                        </div>
                    </div>
                </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <form onSubmit={""}>
                    <div className="card">
                        <div className="card-header">
                        ⚠️ This section is reserved only for the Admin ! 
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Programming Book</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Book Name"
                                    placeholder="ex: example book"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Author"
                                    placeholder="ex: example author"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Download URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    //value = {password} onChange = {(e)=>setPassword(e.target.value)} 
                                    required
                                /><br/>
                                <label class="form-label" for="customFile">Select a cover image</label>
                                <input type="file" class="form-control" id="customFile" style={{width:"50%"}} required/><br/>
                                <Button variant="contained" color="primary" type="submit">
                                    <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6>Upload  
                                </Button>
                                
                            </center>
                        </div>
                    </div>
                </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <form onSubmit={""}>
                    <div className="card">
                        <div className="card-header">
                        ⚠️ This section is reserved only for the Admin ! 
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Adventure / Horror Book</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Book Name"
                                    placeholder="ex: example book"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Author"
                                    placeholder="ex: example author"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Download URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    //value = {password} onChange = {(e)=>setPassword(e.target.value)} 
                                    required
                                /><br/>
                                <label class="form-label" for="customFile">Select a cover image</label>
                                <input type="file" class="form-control" id="customFile" style={{width:"50%"}} required/><br/>
                                <Button variant="contained" color="primary" type="submit">
                                    <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6>Upload  
                                </Button>
                                
                            </center>
                        </div>
                    </div>
                </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <form onSubmit={""}>
                    <div className="card">
                        <div className="card-header">
                        ⚠️ This section is reserved only for the Admin ! 
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Ordinary Level Notes</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Note Name"
                                    placeholder="ex: example note"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Author"
                                    placeholder="ex: example author"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Download URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    //value = {password} onChange = {(e)=>setPassword(e.target.value)} 
                                    required
                                /><br/>
                                <label class="form-label" for="customFile">Select a cover image</label>
                                <input type="file" class="form-control" id="customFile" style={{width:"50%"}} required/><br/>
                                <Button variant="contained" color="primary" type="submit">
                                    <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6>Upload  
                                </Button>
                                
                            </center>
                        </div>
                    </div>
                </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <form onSubmit={""}>
                    <div className="card">
                        <div className="card-header">
                        ⚠️ This section is reserved only for the Admin ! 
                        </div>
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">Add Advanced Level Notes</h5>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Note Name"
                                    placeholder="ex: example note"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Author"
                                    placeholder="ex: example author"
                                    margin="normal"
                                    variant="outlined"
                                    //value = {email} onChange = {(e)=>setEmail(e.target.value)} 
                                    inputProps={{pattern:"[a-zA-Z ]+[a-zA-Z]+"}}
                                    type="text"
                                    required
                                /><br/>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Enter Download URL"
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="URL"
                                    type="text"
                                    //value = {password} onChange = {(e)=>setPassword(e.target.value)} 
                                    required
                                /><br/>
                                <label class="form-label" for="customFile">Select a cover image</label>
                                <input type="file" class="form-control" id="customFile" style={{width:"50%"}} required/><br/>
                                <Button variant="contained" color="primary" type="submit">
                                    <i class="fa fa-upload" aria-hidden="true"></i> <h6 style={{marginLeft:"5px"}}> </h6>Upload  
                                </Button>
                                
                            </center>
                        </div>
                    </div>
                </form>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);