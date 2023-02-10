import { useNavigate } from "react-router-dom";
import { Col, Row, Table, Typography } from 'antd';

import { useSelector } from 'react-redux'

const Titles = () => {
    const titles = useSelector((state: any) => state.titles.titles)
    const navigate = useNavigate();
    const { Title } = Typography;

    const columns = [
        {
          title: 'Title Number',
          dataIndex: 'Title Number',
          key: 'title',
          sorter: (a: any, b: any) => {
              // As there are letters on some of the title numbers, I'm unsure on what sorting function
              // you'd want me to apply there. For now I'll just do it like so:
              return a["Title Number"] - b["Title Number"]
          },
          render: (text: any, record: any, index: any) => {
              return (
                <span data-cy={`title-row-click-${index}`}>{text}</span>
              )
          }
          
        },
        {
          title: 'Tenure',
          dataIndex: 'Tenure',
          key: 'tenure',
        }
      ];


    return (
        <>
            <Typography>
                <Title data-cy={"titles-text"}>Titles</Title>
                <Row>
                    <Col span={24}> 
                        <Table 
                            dataSource={titles} 
                            columns={columns}
                            pagination={{ defaultPageSize: 5}}
                            rowKey={(record) => record["Title Number"]}
                            onRow={(record) => {
                                return {
                                    onClick: (e) => {
                                        navigate(`/${record["Title Number"]}`)
                                    }
                                }
                            }}
                        />
                    </Col>
                </Row>
            </Typography>
        </>
    )
}

export default Titles;