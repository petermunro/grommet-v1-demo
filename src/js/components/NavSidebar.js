import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Button from "grommet/components/Button";
import CloseIcon from "grommet/components/icons/base/Close";
import Logo from "grommet/components/icons/Grommet";
import Anchor from "grommet/components/Anchor";

import Accordion from "grommet/components/Accordion";
import AccordionPanel from "grommet/components/AccordionPanel";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";

import SessionMenu from "./SessionMenu";
import { navActivate } from "../actions/nav";

class NavSidebar extends Component {
  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    const {
      nav: { items },
    } = this.props;

    const links = items.map((page) => (
      <Anchor key={page.label} path={page.path} label={page.label} />
    ));

    return (
      <Sidebar colorIndex="neutral-3" fixed={true}>
        <Header size="large" justify="between" pad={{ horizontal: "medium" }}>
          <Title onClick={this._onClose} a11yTitle="Close Menu">
            <Logo />
            <span>Sample App</span>
          </Title>
          <Button
            icon={<CloseIcon />}
            onClick={this._onClose}
            plain={true}
            a11yTitle="Close Menu"
          />
        </Header>

        <Box pad={  {horizontal: "large" }  }>
          <Accordion>
            <AccordionPanel heading="First Title">
              <Menu responsive={true} primary={true}>
                <Anchor path="/dashboard">
                  Dashboard
                </Anchor>
                <Anchor path="/tasks">Tasks</Anchor>
                <Anchor path="/api-service-by-id">API Service</Anchor>
              </Menu>
            </AccordionPanel>
            <AccordionPanel heading="Second Title">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading="Third Title">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </AccordionPanel>
          </Accordion>
        </Box>

        <Footer pad={{ horizontal: "medium", vertical: "small" }}>
          <SessionMenu dropAlign={{ bottom: "bottom" }} />
        </Footer>
      </Sidebar>
    );
  }
}

NavSidebar.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: "multiple",
  },
};

NavSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
};

const select = (state) => ({
  nav: state.nav,
});

export default connect(select)(NavSidebar);
