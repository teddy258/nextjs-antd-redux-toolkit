import styled from "@emotion/styled";
import { Card } from "antd";
import { useAppDispatch, useAppSelector } from "../store";
import { slice } from "../store/main/slice";

export default function Home() {
  const value = useAppSelector((state) => state.mainReducer.value);
  const dispath = useAppDispatch();

  return (
    <Layout>
      <Card title="hello world" size="small">
        <div onClick={() => dispath(slice.actions.setValue(value + 1))}>
          {value}
        </div>
      </Card>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
`;
