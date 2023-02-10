import GoogleMapReact from 'google-map-react';
import { Card } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';

const GoogleMaps = ({ googleCoOrd, isMobile }: any) => {

    const AddressCard = ({ text } : "" | any) => (
        <Card style={{ width: 200 }}>
            <PushpinOutlined />
            {text}
        </Card>
    )

    const center = {
        lat: googleCoOrd.lat,
        lng: googleCoOrd.lng,
        text: ""
      }
      
      return (
            <div 
                style={{ 
                    height: '80vh', 
                    width: '100%', 
                    paddingLeft: `${isMobile ? '0px' : '24px'}`,
                    paddingTop: `${isMobile ? '12px' : '0px'}`
                }}
                data-cy={"google-maps"}
            >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBEyHuJ07omhqazihW_PyTyzSAAFXnVBAg" }}
                    defaultCenter={center}
                    defaultZoom={9}
                >
                    <AddressCard 
                        lat={googleCoOrd.lat}
                        lng={googleCoOrd.lng}
                        text={googleCoOrd.text}
                    />
                </GoogleMapReact>
            </div>
      )
}

export default GoogleMaps;