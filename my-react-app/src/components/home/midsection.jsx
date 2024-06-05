import { imageURL } from "../../constants/data"
import { Grid,styled } from "@mui/material";

const Wrapper=styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
`

const Midsection=()=>{
    return(
    <Wrapper lg={12} sm={12} xs={12} md={12} container>
        {
            imageURL.map(image=>(
                <Grid item lg={4} sm={4} xs={4} md={4}>
                <img src={image} style={{width:'100%'}}></img>
                </Grid>
            ))
        }
    </Wrapper>
    )
}

export default Midsection;