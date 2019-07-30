import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";


const theme = createMuiTheme();
 
export default class UserPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
			offset: 0 
		};
  }
  handleClick(offset) {
		this.setState({ offset: offset });
		this.props.onPageChanged(offset / this.props.pageSize + 1);
	}	
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
				<Pagination 
          limit={this.props.pageSize}
          offset={this.state.offset}
					total={this.props.totalUsersCount}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </MuiThemeProvider>
    );
  }
}
