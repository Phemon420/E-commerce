import {InputBase,styled,Box,List,ListItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts } from '../../redux/actions/productactions';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const StyleBase=styled(InputBase)`
 width:100%;
 padding-left:12px;
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
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

    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const gfg = useSelector(state => state.getProducts);
    const { products } = gfg;

    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return(
        <StyleBox>
            <StyleBase placeholder='Search for Products,Brands and More' 
                onChange={(e) => getText(e.target.value)}
            />
            <Searchwrapper>
                <SearchIcon/>
            </Searchwrapper>

            {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title_long.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title_long}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </StyleBox>
    )
}

export default search;