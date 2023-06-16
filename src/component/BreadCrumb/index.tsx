import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';

type IBreadCrumb = {
     label?:string[],
     href?:string[],
     
}

const BreadCrumb = ({label,href}:IBreadCrumb) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} style={{opacity:"0.5"}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" style={{color:"#FFAC69"}}/>}
        aria-label="breadcrumb"
      >
        {
         label && label.map((item,i)=>{
            return <Link underline="hover" key="1" color="#F5F5FF" href={href && href[i]} onClick={(e)=>{
               e.preventDefault();
               href && navigate(`${href[i]}`)

            }} >
            {item}
          </Link>
          })
        }
      </Breadcrumbs>
    </Stack>
  );
}



export default BreadCrumb