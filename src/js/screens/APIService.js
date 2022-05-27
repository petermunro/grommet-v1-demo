import React, { Component } from "react";

import Box from "grommet/components/Box";
import Button from "grommet/components/Button";
import Footer from "grommet/components/Footer";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Label from "grommet/components/Label";
import Select from "grommet/components/Select";
import TextInput from "grommet/components/TextInput";

class APIService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entitlementId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ entitlementId: e.target.value });
  }

  render() {
    return (
      <Box pad="medium">
        <Form>
          <Header>
            <Heading strong={false}>API Service</Heading>
          </Header>

          <FormField>
            <Label>Entitlement ID</Label>
            <TextInput
              id="entitlemendId"
              name="entitlemendId"
              value={this.state.entitlementId}
              onDOMChange={this.handleChange}
            />
          </FormField>

          <FormField>
            <Label>Type Code</Label>
            <Select
              options={[
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
              ]}
              value={undefined}
              onChange={null}
            />
          </FormField>

          <Footer pad={{ vertical: "medium" }}>
            <Button
              label="Submit"
              type="submit"
              primary={true}
              onClick={null}
            />
          </Footer>
        </Form>
      </Box>
    );
  }
}

export default APIService;
