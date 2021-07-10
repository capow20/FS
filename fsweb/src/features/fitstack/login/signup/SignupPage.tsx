import firebase from 'firebase';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Segment } from 'semantic-ui-react';



export default observer(function LoginPage() {

    const [userSignup, setUserSignup] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleTestSignup() {
        if (userSignup.password === userSignup.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(userSignup.email, userSignup.password);
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUserSignup({ ...userSignup, [name]: value })
    }

    return (
        <Grid verticalAlign='middle' textAlign='center' style={{marginTop: '8em' , height: '10vh' }} >
            <GridColumn style={{ maxWidth: 550 }}>
                <Container fluid textAlign='center' >
                    <Header as='h1' style={{
                        fontSize: '2em',
                        fontWeight: 'bold',
                        marginBottom: '25px',
                        color: '#ffffff'
                    }}>Create a FitStack account</Header>
                </Container>
                <GridRow verticalAlign='middle' >
                    <Form onSubmit={handleTestSignup} size='large' >
                        <Segment stacked>
                            <Form.Input onChange={handleChange} name='email' icon='mail' iconPosition='left' focus marginTop='2em' placeholder='Email' />
                            {/* <Form.Input focus marginTop='2em' icon='user' iconPosition='left' placeholder='Create a username' /> */}
                            <Form.Input onChange={handleChange} name='password' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Create a password' type='password' />
                            <Form.Input onChange={handleChange} name='confirmPassword' focus marginTop='2em' icon='key' iconPosition='left' placeholder='Confirm password' type='password' />
                            <Button type='submit' fluid content='Create account' style={{ color: 'white', backgroundColor: '#FE6347' }} />
                        </Segment>
                    </Form>
                </GridRow>
                <GridRow>
                    <Button as={Link} to='/login' fluid basic animated  >
                        <Button.Content visible style={{ color: 'white' }}>Aready have an account?</Button.Content>
                        <Button.Content hidden style={{ backgroundcolor: 'rgb(44, 52, 88, 0)' }}>
                            <Header style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} content='Sign In Instead' />
                        </Button.Content>
                    </Button>
                </GridRow>
            </GridColumn>
        </Grid>
    )
})