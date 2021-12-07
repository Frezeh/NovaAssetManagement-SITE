import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { FadeTransform } from "react-animation-components";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Advisory() {
  const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
      margin: "auto",
      borderRadius: spacing(2), // 16px
      transition: "0.3s",
      boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
      position: "relative",
      maxWidth: 1000,
      marginLeft: "auto",
      overflow: "initial",
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: spacing(2),
      [breakpoints.up("md")]: {
        flexDirection: "row",
        paddingTop: spacing(2),
      },
    },
    media: {
      width: "88%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: spacing(-3),
      height: 0,
      paddingBottom: "48%",
      borderRadius: spacing(2),
      backgroundColor: "#fff",
      position: "relative",
      [breakpoints.up("md")]: {
        width: "100%",
        marginLeft: spacing(-3),
        marginTop: 0,
        transform: "translateX(-8px)",
      },
      "&:after": {
        content: '" "',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: "initial",
    },
  }));

  const Advisory1 = React.memo(function BlogCard() {
    const styles = useStyles();
    const { button: buttonStyles, ...contentStyles } =
      useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <div style={{ paddingTop: 50, paddingBottom: 20 }}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={styles.media}
              image={"assets/images/risk.png"}
            />
            <CardContent>
              <TextInfoContent
                classes={contentStyles}
                overline={"08 MAY 2021"}
                heading={"UNDERSTANDING INVESTMENT RISKS VS RETURNS"}
                body={
                  "What does risk mean to you? It could be making certain business or personal decisions, skydiving, or even as simple as eating a new delicacy you haven’t tried before. When we hear the word “risk”, we instantly become worried about what happens next, especially if it involves finances – no one really wants to lose money. It is important to understand the concept of risk to return and ensure that the right investment opportunities are what you should consider. Risk and return are opposite concepts in the financial world. Risk-return shows that the more the potential returns, the higher the risk. However, risk does not always mean the possibility of losing your money, it could mean that investment outcomes could vary actual expectations. As you embark on your investment journey, it is key to examine and make calculated risks in order to minimise loss and reap returns that are consistent with your financial objectives. 1. Learn the variety of risks in investments– This could be interest rate risk, which is a risk that arises from fluctuating interest rates; business risks, usually influenced from the profit or loss of a business; or dividend risk – which is basically a drop in share prices. Be sure to understand what level of risk applies to your investment to guide you in making an objective investment decision. 2. Diversify your assets- Diversification simply means investing in more than one industry or financial product so that all your eggs are not in one basket. This will help you spread your risks. By selecting different investments in various asset classes, you are reducing your exposure to risks. 3. You need a financial expert or risk advisor– A professional asset manager sets you on the right path to risk mitigation. They can help you evaluate, predict, and ascertain potential risks. They can identify high risk to high return products, low risk with minimal returns and more. Most importantly, an expert will show you the best ways to manage your risks."
                }
              />
              <Button className={buttonStyles}>
                Call us for more advise on +234 1 280 4000
              </Button>
            </CardContent>
          </Card>
        </div>
      </FadeTransform>
    );
  });

  const Advisory2 = React.memo(function BlogCard() {
    const styles = useStyles();
    const { button: buttonStyles, ...contentStyles } =
      useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <div style={{ paddingTop: 50, paddingBottom: 20 }}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={styles.media}
              image={"assets/images/roi.png"}
            />
            <CardContent>
              <TextInfoContent
                classes={contentStyles}
                overline={"28 JAN 2021"}
                heading={"CONTEXTUALISING RETURN OF INVESTMENT"}
                body={
                  "The word “return” in general terms is a measure of profit generated over a period of time on an invested amount. The concept of return can sometimes be confusing because of the varying measures that can be used to compute return. This article seeks to identify the popular measures of return and how to apply them in evaluating investment performance and in making apple-to-apple comparisons. Relative Return: Relative return is an important measure of return because it provides a reasonable basis for measuring/comparing the performance of actively managed funds or investment managers. A question that is often asked is: how does an investor or analyst determine if a Fund Manager is doing a good job or note? A Fund Manger’s performance should be judged relative to peers and the state of economy e.g. a gain of 3% in a bull market (market where stocks are generally performing well) may be considered poor if peer Fund Managers are recording gains of 10% conversely a 1% gain in a bear market (market where stocks are generally performing poorly) is good where compared to peer fund managers making losses of 6%. Therefore, an absolute return figure of 10% does not say much; for this figure to be meaningful it must be evaluated in the context of current market conditions and relative to peers."
                }
              />
              <Button className={buttonStyles}>
                Call us for more advise on +234 1 280 4000
              </Button>
            </CardContent>
          </Card>
        </div>
      </FadeTransform>
    );
  });

  const Advisory3 = React.memo(function BlogCard() {
    const styles = useStyles();
    const { button: buttonStyles, ...contentStyles } =
      useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <div style={{ paddingTop: 50, paddingBottom: 20 }}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={styles.media}
              image={"assets/images/steps.png"}
            />
            <CardContent>
              <TextInfoContent
                classes={contentStyles}
                overline={"02 JAN 2021"}
                heading={"5 STEPS TO START INVESTING"}
                body={
                  "1. Make wiser spending decisions: focus on your needs rather than your wants. Once you have made the decision to begin your investment journey, it is important to cut down on unnecessary expenses. 2. Master the art of budgeting: set a goal on how much you can invest either monthly or quarterly. Create a realistic monthly budget and set aside a percentage to be invested; remember to spend less than you earn. 3. Spend what is left after investing: once you have identified the amount you can invest as a beginner, only spend what is remaining. It is the wise thing to do which will guide you on a path to financial discipline. 4. You can start small: setting up an investment account does not mean you require a huge amount of money to begin. Different investment categories are available for you to choose from based on your earnings and goals. 5. Seek expert financial advice: contact an asset manager like Nova Asset Management to discuss your financial goals with an expert, so that you are clear on your investment strategy and achieving these goals in the long run."
                }
              />
              <Button className={buttonStyles}>
                Call us for more advise on +234 1 280 4000
              </Button>
            </CardContent>
          </Card>
        </div>
      </FadeTransform>
    );
  });

  const Advisory4 = React.memo(function BlogCard() {
    const styles = useStyles();
    const { button: buttonStyles, ...contentStyles } =
      useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <div style={{ paddingTop: 50, paddingBottom: 20 }}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
              className={styles.media}
              image={"assets/images/building.png"}
            />
            <CardContent>
              <TextInfoContent
                classes={contentStyles}
                overline={"20 DEC 2020"}
                heading={
                  "ACHIEVING LIFE GOALS WITH INVESTMENTS: The Concept of Building Together"
                }
                body={
                  "As individuals, we journey across different stages in life working towards a desired goal. These goals may be financial or not, but at the end of the day, a life of fulfilment and good fortune is of utmost importance. People are naturally inquisitive and would tend to gather relevant knowledge that can enable them to build a life of purpose from one phase to another, discovering new things and sharing valuable experiences. As with most ambitious, achieving life goals requires a concept of building systematically, until the end goal is accomplished. Put into perspective, the process of producing coffee for example. It begins with harvesting the raw coffee bean, roasting, grinding, before the final process of brewing to enjoy a cup of coffee. While many people may only be interested in having a cup of coffee, a few others might be interested in the intricate details of the value creation story. Like the intricacies of coffee making, planning your future requires attention to the little details on how best you can structure your finances to achieve these goals- maybe funding your education or that of your kids, buying a new car, starting a business venture, paying for your fabulous wedding, or simply saving for retirement. While all of these may come off as easy, the real question is, who is your go-to financial partner and how are you building to achieve these life goals together? In choosing a partner to walk this journey with, plan with an asset manager who sees you as part of the team, a financial advisor who is passionate about creating a collaborative dynamic between the two of you, and an organisation that leaps on your behalf, even before you run. The right asset manager will work tirelessly to help bring your goals to life, as the importance of working together lies within their path."
                }
              />
              <Button className={buttonStyles}>
                Call us for more advise on +234 1 280 4000
              </Button>
            </CardContent>
          </Card>
        </div>
      </FadeTransform>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Advisory</BreadcrumbItem>
        </Breadcrumb>
        <div className="row align-items-start">
          <Advisory1 />
          <Advisory2 />
          <Advisory3 />
          <Advisory4 />
        </div>
      </div>
    </div>
  );
}
