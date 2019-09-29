import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    highscore:0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0 ||typeof(friends[i].count)==="undefined" ){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
          });
          this.state.friends.sort(() => Math.random() - 1)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title score={this.state.score} highscore={this.state.highscore}>Test your memory!</Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
            clickCount={this.clickCount}
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
