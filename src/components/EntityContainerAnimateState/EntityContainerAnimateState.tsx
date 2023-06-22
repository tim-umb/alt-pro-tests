/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Button, Divider, SvgIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VectorImage from 'src/assets/images/EntityContainerAnimateState_Vector_3.png';
import { ReactComponent as StarFilled } from 'src/assets/images/_StarFilled.svg';
import { ReactComponent as StarFilled1 } from 'src/assets/images/_StarFilled.svg';
import { styled } from '@mui/material/styles';
import { EntityContainerAnimateStateProps } from 'src/types';
import { animated, useSpring, easings } from 'react-spring';
import useEntityContainerAnimateState from 'src/components/EntityContainerAnimateState/useEntityContainerAnimateState';

const StateOpen: any = styled('div')(({ theme }: any) => ({
  boxShadow: theme.customShadows['elevation']['4'].boxShadow,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `709px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Content: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `709px`,
  width: `1400px`,
  margin: `0px`,
});

const ProfileContainer: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  height: `709px`,
  left: `0px`,
  top: `0px`,
});

const Body: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const ContainerHeader: any = styled('div')({
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame3: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const LeftContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 8px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Icon1: any = styled(SvgIcon)(({ theme }: any) => ({
  color: theme.palette['action']['active'],
  margin: `0px`,
}));

const Content1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 5px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
  margin: `0px`,
}));

const Subheader: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const RightContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button1: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['main'],
  fontStyle: theme.typography['Components']['button-small'].fontStyle,
  fontFamily: theme.typography['Components']['button-small'].fontFamily,
  fontWeight: theme.typography['Components']['button-small'].fontWeight,
  fontSize: theme.typography['Components']['button-small'].fontSize,
  letterSpacing: theme.typography['Components']['button-small'].letterSpacing,
  lineHeight: theme.typography['Components']['button-small'].lineHeight,
  textDecoration: theme.typography['Components']['button-small'].textDecoration,
  textTransform: theme.typography['Components']['button-small'].textTransform,
}));

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const ProfileContent: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ theme, data }: any) => ({
    backgroundColor: theme.palette['background']['default'],
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    alignSelf: `stretch`,
    height: `646px`,
    margin: `0px`,
    borderRadius: 'unset',
  }))
);

const FormContainer: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['100'],
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `500px`,
  height: `709px`,
  left: `400px`,
  top: `0px`,
}));

const DividerVertical: any = styled(Divider)(({ theme }: any) => ({
  height: `709px`,
  margin: `0px`,
}));

const Body1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const ContainerHeader1: any = styled('div')({
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame31: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const LeftContent1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 8px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Icon2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const CloseOutlined: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector: any = styled('img')({
  height: `14px`,
  width: `14px`,
  position: `absolute`,
  left: `5px`,
  top: `5px`,
});

const Content2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 5px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Title1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
  margin: `0px`,
}));

const Subheader1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const RightContent1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button2: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['main'],
  fontStyle: theme.typography['Components']['button-small'].fontStyle,
  fontFamily: theme.typography['Components']['button-small'].fontFamily,
  fontWeight: theme.typography['Components']['button-small'].fontWeight,
  fontSize: theme.typography['Components']['button-small'].fontSize,
  letterSpacing: theme.typography['Components']['button-small'].letterSpacing,
  lineHeight: theme.typography['Components']['button-small'].lineHeight,
  textDecoration: theme.typography['Components']['button-small'].textDecoration,
  textTransform: theme.typography['Components']['button-small'].textTransform,
}));

const DividerHorizontal1: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const FormContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `652px`,
  margin: `0px`,
});

const InvestorContainer: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ theme, data }: any) => ({
    backgroundColor: theme.palette['colors']['grey']['100'],
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `500px`,
    height: `709px`,
    left: `900px`,
    top: `0px`,
  }))
);

const DividerVertical1: any = styled(Divider)(({ theme }: any) => ({
  height: `709px`,
  margin: `0px`,
}));

const Body2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const ContainerHeader2: any = styled('div')({
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame32: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const LeftContent2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 8px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Icon3: any = styled(SvgIcon)(({ theme }: any) => ({
  color: theme.palette['action']['active'],
  margin: `0px`,
}));

const Content3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 5px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Title2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
  margin: `0px`,
}));

const Subheader2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const RightContent2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button3: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['main'],
  fontStyle: theme.typography['Components']['button-small'].fontStyle,
  fontFamily: theme.typography['Components']['button-small'].fontFamily,
  fontWeight: theme.typography['Components']['button-small'].fontWeight,
  fontSize: theme.typography['Components']['button-small'].fontSize,
  letterSpacing: theme.typography['Components']['button-small'].letterSpacing,
  lineHeight: theme.typography['Components']['button-small'].lineHeight,
  textDecoration: theme.typography['Components']['button-small'].textDecoration,
  textTransform: theme.typography['Components']['button-small'].textTransform,
}));

const DividerHorizontal2: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const InvestorContent: any = styled('div')({
  borderRadius: `0px 0px 6px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `32px`,
  boxSizing: `border-box`,
  width: `499px`,
  margin: `0px`,
});

const Button4: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['contrast'],
  fontStyle: theme.typography['Components']['button-medium'].fontStyle,
  fontFamily: theme.typography['Components']['button-medium'].fontFamily,
  fontWeight: theme.typography['Components']['button-medium'].fontWeight,
  fontSize: theme.typography['Components']['button-medium'].fontSize,
  letterSpacing: theme.typography['Components']['button-medium'].letterSpacing,
  lineHeight: theme.typography['Components']['button-medium'].lineHeight,
  textDecoration:
    theme.typography['Components']['button-medium'].textDecoration,
  textTransform: theme.typography['Components']['button-medium'].textTransform,
}));

function EntityContainerAnimateState(
  props: EntityContainerAnimateStateProps
): JSX.Element {
  const { data, fns } = useEntityContainerAnimateState();

  const ProfileContentStateopen = { borderRadius: 'unset' };
  const ProfileContentStateclose = { borderRadius: `0px 0px 0px 6px` };
  const [ProfileContentStateStyles, ProfileContentStateApi] = useSpring(() => ({
    from: eval('ProfileContent' + data.currentVariant),
    config: { duration: 1000 },
    delay: 500,
  }));

  const InvestorContainerStateopen = { width: `500px`, left: `900px` };
  const InvestorContainerStateclose = { width: `1000px`, left: `400px` };
  const [InvestorContainerStateStyles, InvestorContainerStateApi] = useSpring(
    () => ({
      from: eval('InvestorContainer' + data.currentVariant),
      config: { duration: 1000 },
      delay: 500,
    })
  );

  const switchStateToStateopen: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    ProfileContentStateApi.start({
      ...ProfileContentStateopen,
      delay,
      config: { duration, easing: easings[easing] },
    });
    InvestorContainerStateApi.start({
      ...InvestorContainerStateopen,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };

  const switchStateToStateclose: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    ProfileContentStateApi.start({
      ...ProfileContentStateclose,
      delay,
      config: { duration, easing: easings[easing] },
    });
    InvestorContainerStateApi.start({
      ...InvestorContainerStateclose,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };
  return (
    <StateOpen className={props.className}>
      <Content>
        <ProfileContainer>
          <Body>
            <ContainerHeader>
              <Frame3>
                {false && (
                  <LeftContent>
                    <Icon1 fontSize={'medium'} component={StarFilled} />
                  </LeftContent>
                )}
                <Content1>
                  <Title>{`Entity`}</Title>
                  {false && <Subheader>{`{Subheader}`}</Subheader>}
                </Content1>
                <RightContent>
                  <Button1
                    size={'small'}
                    color={'primary'}
                    disabled={false}
                    variant={'text'}
                    onClick={() => {
                      switchStateToStateopen(250, 0, 'easeOutSine');
                      fns.setCurrentVariant('Stateopen');
                    }}
                    data={data}
                  >
                    {'Edit'}
                  </Button1>
                </RightContent>
              </Frame3>
              <DividerHorizontal orientation="horizontal" />
            </ContainerHeader>
            <ProfileContent
              data={data}
              style={{ ...ProfileContentStateStyles }}
            ></ProfileContent>
          </Body>
        </ProfileContainer>
        <FormContainer>
          <DividerVertical orientation="vertical" />
          <Body1>
            <ContainerHeader1>
              <Frame31>
                <LeftContent1>
                  <Icon2
                    onClick={() => {
                      switchStateToStateclose(250, 0, 'easeOutSine');
                      fns.setCurrentVariant('Stateclose');
                    }}
                  >
                    <CloseOutlined>
                      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                    </CloseOutlined>
                  </Icon2>
                </LeftContent1>
                <Content2>
                  <Title1>{`Add Entity`}</Title1>
                  {false && <Subheader1>{`{Subheader}`}</Subheader1>}
                </Content2>
                {false && (
                  <RightContent1>
                    <Button2
                      size={'small'}
                      color={'primary'}
                      disabled={false}
                      variant={'text'}
                      data={data}
                    >
                      {'Button'}
                    </Button2>
                  </RightContent1>
                )}
              </Frame31>
              {false && <DividerHorizontal1 orientation="horizontal" />}
            </ContainerHeader1>
            <FormContent></FormContent>
          </Body1>
        </FormContainer>
        <InvestorContainer
          data={data}
          style={{ ...InvestorContainerStateStyles }}
        >
          <DividerVertical1 orientation="vertical" />
          <Body2>
            <ContainerHeader2>
              <Frame32>
                {false && (
                  <LeftContent2>
                    <Icon3 fontSize={'medium'} component={StarFilled1} />
                  </LeftContent2>
                )}
                <Content3>
                  <Title2>{`Individual`}</Title2>
                  {false && <Subheader2>{`{Subheader}`}</Subheader2>}
                </Content3>
                {false && (
                  <RightContent2>
                    <Button3
                      size={'small'}
                      color={'primary'}
                      disabled={false}
                      variant={'text'}
                      data={data}
                    >
                      {'Button'}
                    </Button3>
                  </RightContent2>
                )}
              </Frame32>
              <DividerHorizontal2 orientation="horizontal" />
            </ContainerHeader2>
            <InvestorContent>
              <Button4
                size={'medium'}
                color={'primary'}
                disabled={false}
                variant={'contained'}
                endIcon={
                  <SvgIcon
                    component={AddIcon}
                    htmlColor={`rgba(255, 255, 255, 1)`}
                  ></SvgIcon>
                }
                data={data}
              >
                {'Add Individual'}
              </Button4>
            </InvestorContent>
          </Body2>
        </InvestorContainer>
      </Content>
    </StateOpen>
  );
}

export default EntityContainerAnimateState;