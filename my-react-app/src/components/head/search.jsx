import {InputBase,styled,Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyleBase=styled(InputBase)`
 width:100%;
 padding-left:12px;
`

const StyleBox=styled(Box)`
  background: #fff;
  width:50%;
  border-radius:5px;
  margin-left:12px;
  margin-right:40px;
  display:flex;
`
const Searchwrapper=styled(Box)`
    color:#000000;
    margin-top:1.5%;
    margin-right:2%;
`
function search(){
    return(
        <StyleBox>
            <StyleBase placeholder='Search for Products,Brands and More' />
            <Searchwrapper>
                <SearchIcon/>
            </Searchwrapper>
        </StyleBox>
    )
}

export default search;