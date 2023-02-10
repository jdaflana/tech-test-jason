import { useNavigate, useParams } from "react-router-dom";
import { Col, Row, Badge, Card, Typography, Button } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { ITitles } from "../../types/titlesType";
import GoogleMaps from "./GoogleMaps";
import { useMediaQuery } from 'react-responsive'


const TitleDetails: React.FC = () => {
    const titles = useSelector((state: any) => state?.titles?.titles) || undefined
    const { titleNum } = useParams()

    const selectedTitle: ITitles = titles.find((d: ITitles) => d["Title Number"] === titleNum?.toString())
    const navigate = useNavigate();

    const address = selectedTitle && selectedTitle["Property Address"]
        .split(", ")
        .map((d: string) => <div key={d}>{d}</div>)

    const cordinateXDesc = [<div key={selectedTitle && selectedTitle["X"]}>X: {selectedTitle && selectedTitle["X"]}</div>]
    const cordinateYDesc = [<div key={selectedTitle && selectedTitle["Y"]}>Y: {selectedTitle && selectedTitle["Y"]}</div>]

    const fullDescription = address && cordinateXDesc && cordinateYDesc && address.concat(cordinateXDesc, cordinateYDesc)

    const googleCoOrd = {
        lat: selectedTitle as any ? selectedTitle["X"] : 0,
        lng: selectedTitle as any ? selectedTitle["Y"] : 0,
        text: selectedTitle ? selectedTitle["Property Address"] : ""
    }

    const isMobile = useMediaQuery({ query: '(max-width: 850px)' })
    return (
        <Typography>
            <Row data-cy={"non-mobile-googlemaps"}>
                <Col span={isMobile ? 24 : 8}> 
                    <Badge.Ribbon text={selectedTitle && selectedTitle?.Tenure || "Sorry there isn't a title number match"}>
                        <Card data-cy={"title-details-title"} title={`Title Details for ${selectedTitle && selectedTitle["Title Number"] || ""}`}>
                            {fullDescription}
                            <Button 
                                type="primary" 
                                onClick={() => navigate(-1)}
                                size={"small"}
                                data-cy={"title-back-button"}
                            >
                                    <CaretLeftOutlined /> Back
                            </Button>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                    {!isMobile && 
                    <Col span={16}> 
                        <GoogleMaps googleCoOrd={googleCoOrd}/>
                    </Col>
                    } 
                </Row>
                    {
                        isMobile && 
                        <Row data-cy={"mobile-googlemaps"}>
                            <Col span={24}> 
                                <GoogleMaps isMobile={isMobile} googleCoOrd={googleCoOrd}/>
                            </Col>
                        </Row>
                    }


                    
        </Typography>
    )
}

export default TitleDetails;