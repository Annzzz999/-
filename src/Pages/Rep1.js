import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
   marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)', // угол стрелки
  },
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
      title="Овощной суп с сырными шариками "
      
        
       // title="Shrimp and Chorizo Paella"
        //subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Soup.jpg/420px-Soup.jpg"
       
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Ингредиенты для «Овощной суп с сырными шариками»:<br/>
        Бульон (или вода) — 2,5 л<br/>
        Перец болгарский (крупный) — 1 шт<br/>
        Морковь (крупная) — 1 шт<br/>
        Лук репчатый (средний) — 1 шт<br/>
        Картофель (средний) — 5 шт<br/>
        Сыр голландский (для шариков) — 100 г<br/>
        Яйцо куриное (для шариков) — 1 шт<br/>
        Мука пшеничная / Мука (для шариков) — 100 г<br/>
        Зелень (петрушка) — по вкусу<br/>
        Соль — по вкусу<br/>
        Перец черный — по вкусу<br/>
        Специи (у меня "Летняя зелень") — по вкусу<br/>
        Масло сливочное (для шариков) — 70 г<br/>
        Масло растительное — 4 ст. л.<br/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="delete" className={classes.margin} >
        
        {/* className={
      this.props.deleteBlock(this.props.index)}, */}

        <DeleteIcon fontSize="large" />
      </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        <CardContent>
          <Typography paragraph>Способ приготовления:</Typography>
          <Typography paragraph>
            В среднем по времени 1-1,5 часа
          </Typography>
          <Typography paragraph>
          1.Сыр натрем на мелкой терке, добавим сливочное масло (комнатной температуры), муку, яйцо, соль и "Летнюю зелень".<br/>


2.Хорошо вымешиваем и убираем на 30 минут в холодильник.<br/>


3.Морковь натрем на крупной терке, перец нарежем небольшой соломкой, лук - кубиками, картофель - крупными кубиками.<br/>


4.В сковороде разогреем растительное масло и обжарим лук до слегка золотистого цвета.<br/>


5.Добавим морковь и, периодически помешивая, обжариваем минуты 3-4.<br/>


6.Добавляем болгарский перец и обжариваем еще минут 5. Отключаем огонь, добавляем черный перец и специи. Перемешиваем.<br/>


7.В кипящий бульон (или воду) опускаем картофель и обжаренные овощи. Доводим до кипения, огонь убавляем и варим 15 минут.<br/>


8.Тем временем, достаем из холодильника наше "тесто" и скатываем небольшие (величиной с фундук) шарики. Больше не делайте, т. к. при варке они сильно увеличатся в размере.<br/>


9.Опускаем в кастрюлю "шарики", перемешиваем и варим минут 10-15. При необходимости досаливаем и подперчиваем.<br/>


10.Наш ароматный суп готов. Отключаем огонь и добавляем (по желанию) нарезанную зелень петрушки.<br/>
          </Typography>
          
          
        </CardContent>
      </Collapse>

          {/*////////////////////////// */}

     

    </Card>
    
  );
}