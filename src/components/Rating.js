import React  from 'react';
import StarRatingComponent from "react-rating-stars-component";


export default class Rating extends React.Component {
    state  = {
        rating: 1,
    };
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue });
        this.props.rating(nextValue);
    };
    render() {
        return (
            <div>
                <StarRatingComponent starCount={5} 
                value={this.state.rating}
                onStarClick={this.onStarClick}
                />
            </div>
        );
    }
}