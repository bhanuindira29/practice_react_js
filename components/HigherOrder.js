import React from "react"
const UpdateComp = OrginialComp=>{
    class NewComp extends React.Component{
        render(){
            return <OrginialComp name="The user" />
        }
    }
    return NewComp
}
export default UpdateComp