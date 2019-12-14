import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader, Button, CardColumns
} from 'reactstrap';
import { Link } from "react-router-dom";


const PostCard = ({ postList, showHandler}) => {
  return (
    <div className="communityCardClass">
        <CardColumns>
            {
                postList.map((val, idx) =>  (
                    <Card>
                        <CardHeader tag="h6">{idx}</CardHeader>
                        <CardBody>
                              <CardText>{JSON.stringify(postList[idx].fieldValueMap)}</CardText>
                            
                        </CardBody>
                    </Card>      
                ))
            }
        </CardColumns>
      </div>
  );
};

export default PostCard;