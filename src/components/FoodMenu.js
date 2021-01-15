
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import SANOMENU from '../shared/SanoMenu';
import classnames from 'classnames';



function CreateEntry (props) {
  return (
    <div style={{ backgroundImage: "url(https://projects.saicharan.com/navpills/veg-table.jpg)",}}> 
      {props.mealType.map(mealT => <p><h5><strong>{mealT.name} ${mealT.cost} </strong></h5></p> )}
    </div>
  );
}

const FoodList = (actTab) => {
    switch (actTab.actTab) {
        case "1": 
          return <div className="text-center"> <CreateEntry  mealType={ SANOMENU.filter(mealT =>  mealT.foodtype === 'Juices') } /></div>
        case "2":  
          return <div className="text-center"> <CreateEntry  mealType={ SANOMENU.filter(mealT =>  mealT.foodtype === 'Breakfast') } /></div>
        case "3":  
          return <div className="text-center"> <CreateEntry  mealType={ SANOMENU.filter(mealT =>  mealT.foodtype === 'Lunch') } /></div>     
        case "4":  
          return <div className="text-center"> <CreateEntry  mealType={ SANOMENU.filter(mealT =>  mealT.foodtype === 'Dinner') } /></div> 
        default:
            return null;                    
    }
}

class FoodMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggle=(tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    return (
      <Container fluid="sm">   
         <Row>
           <Col >
              <h1 className="text-center">Our Menu</h1>       
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}>
                      <h3>Juices</h3>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}>
                      <h3>Breakfast</h3>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}>
                     <h3>Lunch</h3>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '4' })}
                      onClick={() => { this.toggle('4'); }}>
                      <h3>Dinner</h3>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    { this.state.activeTab === "1" ? <FoodList actTab={this.state.activeTab} /> : null }
                  </TabPane>
                  <TabPane tabId="2">
                    { this.state.activeTab === "2" ? <FoodList actTab={this.state.activeTab} /> : null }
                  </TabPane>
                  <TabPane tabId="3">
                    { this.state.activeTab === "3" ? <FoodList actTab={this.state.activeTab} /> : null }
                  </TabPane>
                  <TabPane tabId="4">
                    { this.state.activeTab === "4" ? <FoodList actTab={this.state.activeTab} /> : null }
                  </TabPane>
                </TabContent>
              </div>
            </Col>  
          </Row>
      </Container> 
    );
  }
}

export default FoodMenu; 