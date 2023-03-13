import React, { Component } from 'react';
import myApi from '../../service/service';
import './Upload.css'

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      productImg: ''
    }
  }
  onFileChange(e) {
    this.setState({ productImg: e.target.files[0] })
  }
  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    const url = `/`
    formData.append('productImg', this.state.productImg)
    myApi.post(url, formData, {
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <>
        {/* <form onSubmit={this.onSubmit}> */}
        <div className="form-group">
          <input type="file" onChange={this.onFileChange} />
        </div>
        {/* <div className="form-group">
          <button className="btn" type="submit">Upload</button>
        </div> */}
        {/* </form> */}
      </>
    )
  }
}