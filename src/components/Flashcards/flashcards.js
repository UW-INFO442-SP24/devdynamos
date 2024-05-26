import React from 'react';
import { Button, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import ReactCardFlipper from 'react-card-flipper';
import { useState } from 'react';
import { Link as RouterLink} from 'react-router-dom';

function CategoryCard(props) {  
    const [flip, setFlip] = useState(false);
    return (
        <div className="col-12 col-md-3 d-flex flex-column category-card-wrapper">
            <ReactCardFlipper width="18rem" height="21rem" behavior="hover" sx={{padding: '0 5rem', position: 'relative'}}>
                <div>
                    <Card sx={{ maxWidth: "18rem", borderRadius: "20px"}} className='category-card'>
                        <CardMedia
                            className="category-card-img"
                            component="img"
                            sx={{height: "21rem"}}
                            image={props.category.img}
                            alt={props.category.alt}
                            onMouseOver={() => setFlip(!flip)}
                        />
                        <Button variant="contained" className="category-button" sx={{position: "absolute", top: "50%", textAlign: "center", left: "50%", backgroundColor: "rgba(255, 255, 255, 0.7)", color: "#800000", fontWeight: "600", borderStyle: "solid", borderWidth: ".1rem", borderColor: "white", height: "5rem", fontSize: "1.5rem", width: "16rem", borderRadius: "10px", '&:hover': {backgroundColor: 'rgba(255, 204, 204, 0.7)',}}}>{props.category.name}</Button>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: "18rem", borderRadius: "20px"}} className='category-card' onMouseLeave={() => setFlip(!flip)}>
                        <CardActionArea component={RouterLink} to={`/explore/${props.category.name}`}>
                            <CardContent sx={{height: "21rem"}}>
                                <Typography sx={{fontSize: "1.5rem", textAlign: "center"}}>
                                    {props.category.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </ReactCardFlipper>
        </div>
    );
}

export default function CategoriesList(props) {
    const { cardData } = props;

    // Check if cardData is defined and is an array before mapping over it
    const categoryCards = cardData && Array.isArray(cardData) ? (
        cardData.map((category) => (
            <CategoryCard key={category.id} category={category} />
        ))
    ) : null;

    return (
        <section className="homepage-cards-section" aria-label="a collection of cards">
            <div className="container homepage-cards"> 
                <div className="row">
                    {categoryCards}
                </div> 
            </div>
        </section>
    );
}
