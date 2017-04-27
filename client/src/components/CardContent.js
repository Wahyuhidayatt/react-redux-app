import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Image } from 'semantic-ui-react';

const CardContents = (props) => {
  return (
  <Card.Group>
      { props.users.map((user, index) => {
          return (
                <Card key={index}>
                  <Card.Content>
                    <Image floated='right' size='mini' src={user.image} />
                    <Card.Header>
                      {user.name}
                    </Card.Header>
                    <Card.Description>
                      <p>Alamat : {user.alamat}</p>
                      <p>Lahir : {user.lahir}</p>
                      <p>Status : {user.status}</p>
                   </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Update</Button>
                      <Button basic color='red'>Delete</Button>
                    </div>
                  </Card.Content>
                </Card>
          )
        })
      }
    </Card.Group>
  )
}

const mapStateToProps = (state) => {
  return {
    users : state.users
  }
}

export default connect(mapStateToProps, null)(CardContents)
