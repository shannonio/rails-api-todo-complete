import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:          '',
      name:           '',
      nickname:       '',
      favorite_color: '',
      image:          '',
      signedIn:       false,
      configName:     ''
    };
  }

  renderImage() {
    var src = "https://react.semantic-ui.com/assets/images/avatar/large/matthew.png";
    if (this.props.signedIn) {
      if (this.props.image) {
        src = this.props.image;
      } else {
        src = "https://react.semantic-ui.com/assets/images/avatar/large/matthew.png";
      }
    }

    return(
      <Image alt='' src={src} />
    );
  }

  render() {
    return (
      <Card>
        {this.renderImage()}
        <Card.Content>
          <Card.Header>
            {this.props.name || 'n/a'}
          </Card.Header>
          <Card.Meta>
            <span className='email'>
              {this.props.email || 'n/a'}
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.nickname || 'n/a'}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
};

ProfileInfo.propTypes = {
  email: React.PropTypes.string,
  name: React.PropTypes.string,
  nickname: React.PropTypes.string,
  favorite_color: React.PropTypes.string,
  image: React.PropTypes.string,
  signedIn: React.PropTypes.bool,
  configName: React.PropTypes.string
};

export default ProfileInfo;
