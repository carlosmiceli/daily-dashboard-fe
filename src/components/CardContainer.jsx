import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardContainer(props) {

    // let content

switch(props.type) { 
  case 'spotify': { 
  //statements; 
  break; 
} 
case 'quote': { 
//statements; 
break; 
}
case 'usd': { 
//statements; 
break; 
}
case 'soundcloud': { 
//statements; 
break; 
}
case 'dev-wiki': { 
//statements; 
break; 
}
case 'history-wiki': { 
//statements; 
break; 
}
case 'time-left': { 
//statements; 
break; 
}
case 'nba': { 
//statements; 
break; 
}
case 'dev-jobs': { 
//statements; 
break; 
}
default: {
break;
}
} 

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          {props.title}
        </Typography>

      </CardContent>
    </Card>
  );
}