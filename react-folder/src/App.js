import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Title from "./components/Title";




class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count:0
  };

  // handleIncrement increases this.state.count by 1
 count=() => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log("Count is: "+this.state.count);
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title count={this.state.count}>Keep on clicking on images that haven't been clicked</Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              //removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              count={this.count}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
