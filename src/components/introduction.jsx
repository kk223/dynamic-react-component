import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Grid, Row, Col, ScreenClassRender} from 'react-grid-system';

class Introduction extends React.Component
{
    constructor() {
        super();
        this.state = {
            height: '',
            width: ''
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions()
    {
        this.setState({height: window.innerHeight, width: window.innerWidth});
    }
    componentDidMount()
    {
        window.addEventListener('resize', this.updateDimensions);
    }


    render()
    {
        const styleFunction = (screenClass) => {
            if (screenClass === 'xl')
                return {fontSize: '20px', backgroundImage: `url(${ '../src/images/wipro-logo.png'})`, backgroundSize: 'cover',height:'95vh'};
            if (screenClass === 'lg')
                return {fontSize: '20px', backgroundImage: `url(${ '../src/images/wipro-logo.png'})`, backgroundSize: 'cover',height:'95vh'};
            if (screenClass === 'md')
                return {fontSize: '19px', backgroundImage: `url(${ '../src/images/wipro-logo.png'})`, backgroundSize: 'cover',height:'95vh'};
            if (screenClass === 'sm')
                return {fontSize: '15px', backgroundImage: `url(${ '../src/images/wipro-logo.png'})`, backgroundSize: 'cover',height:'95vh'};
            return {fontSize: '10px', backgroundImage: `url(${ '../src/wipro-logo.png'})`, backgroundSize: 'cover',height:'95vh'};
        };

        var style = {
            minWidth: '200px',
            width: '100%',
            textAlign: 'left',
            padding: '10px',
            backgroundColor: 'rgba(0,0,0,0.0)',
            display: 'inline-block',
            color: 'black',
            paddingTop: '10%'
        };
        const labelStyle = {
            color: 'black',
            fontWeight: '400px',
            fontSize: '20px'
        };
        const buttonStyle = {
            padding: '9px',
            backgroundColor: 'white',
            borderRadius: '4px'
        };

        var styles = {
            divRowStyle: {
                backgroundImage: `url(${ '../src/images/wipro-logo.png'})`,
                backgroundSize: 'cover'
            },
            styleRow: {
                paddingTop: '40px',
                paddingBottom: '40px',
                paddingLeft: '9%',
                paddingRight: '9%',
                textAlign: 'center'
            },
            // styleRowFooter: {
            //     paddingTop: '10px',
            //     paddingBottom: '10px',
            //     // paddingLeft: '60px',
            //     // paddingRight: '60px',
            //     textAlign: 'justify',
            //     backgroundColor: '#444444',
            //     color: 'white',
            //     // float: 'right'
            // },
            imgAdjusment: {
                maxWidth: '400px',
                width: '100%'
            },
            txtUnderIcons: {
                textAlign: 'center'
            },
            h4marginSet: {
                margin: '4px'
            },
             signInButtonStyle: {
        margin: '2px',
        border: '0px',
        height: '46px'
    },
    signInButtonLabelStyle: {
        color: 'white',
        fontWeight: 400
    },

        };
        return (
          <MuiThemeProvider>
            <Container fluid style={{paddingLeft: '0px',paddingRight: '0px',    marginTop: '-4px'}}>
                <ScreenClassRender style={styleFunction}>
                    <Row style={{
                        width: '100%',
                    }}>
                        <Col md={3} lg={3}></Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Paper style={style} zDepth={2}>
                                <h1>Wipro Navigation fro new Employee</h1><br/>
                              <RaisedButton label="SIGN IN WITH WIPRO AD_ID" icon={<img src="../src/images/wipro_login.jpg" style={{height:'36px',width:'36px'}}/>} labelStyle={labelStyle} backgroundColor='white' style={buttonStyle}/><br/>>
                             <a href='/auth/google'><RaisedButton label="SIGN IN WITH GOOGLE" icon={<img src="../src/images/google_login.png" style={{height:'36px',width:'36px'}}/>} labelStyle={labelStyle} backgroundColor='white'
                                 style={buttonStyle}/></a>
                            </Paper>
                        </Col>
                    </Row>
                </ScreenClassRender>
                </Container>
            </MuiThemeProvider>
        );
    }
  }
export default Introduction;
