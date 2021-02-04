import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderCampsite(campsite) {              // Prints Details for Site from props
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {              // Prints Comments for Site
        if (comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {      // Prints all comments
                        return(
                            <div key={comment.id}> 
                                <p>{comment.text} <br />
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return <div />;
        }
    }

    render(){                               // Displays panel w/ details & Comments
        const {campsite} = this.props;

        if (campsite) {         // Evaluates if campsite is selected
            return(
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(campsite)}
                        {this.renderComments(campsite.comments)}
                    </div>
                </div>
                );
        } else {                // Runs only if campsite is null
            return(
                <div />
            );
        }
    }
}

export default CampsiteInfo;