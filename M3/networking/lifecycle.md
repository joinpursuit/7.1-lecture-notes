
constructor()
  this.state.imgURL = ""

render()
  this.state.imgURL is empty

componentDidMount()
  this.getRandomImage()
    this.setState()
      setstate sets imgURL
      setstate calls render

render()
  this.state.imgURL = "a real url"


when we click - onClick()
  this.getRandomImage()
    this.setState()
      setstate sets imgURL
      setstate calls render

render()




// dogCount

constructor()
  initial state = { dogCount: 0 }

render() 
  this.state.dogCount is 0
  renders <NumberOfDogs>
    value=props.dogCount is 0
  renders <Dog>
    this.props.dogCount is 0
    <Dog> is using it for an API parameter
  both get dogCount as a prop

in Dog.js
  componentDidMount()
    calls this.getDogImage()

  this.getDogImage() makes axios request USING prop dogCount
  this.getDogImage() sets imgURL state

  this.setState() runs render()

render()
  makes cute dog appear


## mapping over state

constructor() 
  this.state = { imgURL : [] }

render()
  map over this.state.imgURL
    its empty so nothing appears

componentDidMount()
  triggers network request
  