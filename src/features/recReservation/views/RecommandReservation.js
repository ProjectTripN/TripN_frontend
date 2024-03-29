import * as React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import { TripLayout } from "features/common";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  Paper,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "features/recReservation/styles/RecReservation.module.scss";
import { recommandSave } from "features/recommand/reducer/recommandSlice";
import EventMarkerContainer from "../components/EventMarkerContainer";

export function RecommandReservation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommandlist = useSelector(
    (state) => state.recommandSlice.recommandState[0]
  );
  const plane = recommandlist[0]["plane"];
  const acc = recommandlist[1]["acc"][0];
  const activity = recommandlist[2]["activity"];
  const plan = recommandlist[3];

  useEffect(() => {
    dispatch(
      recommandSave({
        date1: localStorage.getItem("start"),
        date2: localStorage.getItem("end"),
        start: localStorage.getItem("airstart"),
        Number: localStorage.getItem("number"),
        // user: localStorage.getItem("userId"),
        // mbti: localStorage.getItem("user_mbti"),
        user: 2,
        mbti: "iiessstffpjp",
        relationship: localStorage.getItem("relationship"),
        plane: [
          localStorage.getItem("depplane"),
          localStorage.getItem("arrplane"),
        ],
        acc: localStorage.getItem("acc"),
        activty: [
          localStorage.getItem("activty1"),
          localStorage.getItem("activty2"),
        ],
        olle: [],
      })
    );
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [map, setMap] = useState();
  let points = plan[`0day-${acc["name"]}`].map((x) => {
    return {
      content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
      latlng: { lat: x.lat, lng: x.log },
    };
  });

  let points1 = plan[`day-${activity[0]}`].map((x) => {
    return {
      content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
      latlng: { lat: x.lat, lng: x.log },
    };
  });

  let points2 = plan[`day-${activity[1]}`].map((x) => {
    return {
      content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
      latlng: { lat: x.lat, lng: x.log },
    };
  });
  return (
    <>
      <br />
      <br />
      <TripLayout>
        {/* <VoucherTab /> */}
        <div alignItems={"center"}>
          <h1> Travel Plan </h1>
          <Box component={Paper} sx={{ maxWidth: 1550, typography: "body1" }}>
            <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">비행편</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div>
                  <div className={styles.box}>
                    <Typography variant="h6">출발편</Typography>
                    비행편명 : {plane[0]["vihicleId"]}
                    <br />
                    비행시간 : {plane[0]["depPlandTime"]} -{" "}
                    {plane[0]["arrPlandTime"]} <br />
                    요금 : ₩{" "}
                    {plane[0]["economyCharge"]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    <br />
                    예약 : {window.localStorage.getItem("number")} 좌석 <br />
                  </div>
                  <Divider />
                  <div className={styles.box}>
                    <Typography variant="h6">도착편</Typography>
                    비행편명: {plane[1]["vihicleId"]}
                    <br />
                    비행시간: {plane[1]["depPlandTime"]} -{" "}
                    {plane[1]["arrPlandTime"]} <br />
                    요금: ₩{" "}
                    {plane[1]["economyCharge"]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    <br />
                    예약 : {window.localStorage.getItem("number")} 좌석
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">숙소</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.activity}>
                  <div className={styles.box}>
                    <img
                      width={"500vh"}
                      height={"400vh"}
                      src={`${acc["url"]}?w=161&fit=crop&auto=format`}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.box}>
                    <br />
                    이름 : {acc["name"]}
                    <br />
                    주소 : {acc["loc"]}
                    <br />
                    {acc["standard_number"]}인실 박당가격 :{" "}
                    {acc["price"]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    ₩/박 <br />
                    예약 : {window.localStorage.getItem("day")} 박 ,{" "}
                    {window.localStorage.getItem("number")} 인<br />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>
          <br />
          {/* ----------------------------------------------------------------------------------------------------------------------------- */}
          <Box component={Paper} sx={{ maxWidth: 1550, typography: "body1" }}>
            <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">DAY 1</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                  <div className={styles.mapBox}>
                    <Map
                      center={{
                        lat: acc["lat"],
                        lng: acc["log"],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={8}
                      onCreate={setMap}
                    >
                      <MapMarker
                        position={{
                          lat: acc["lat"],
                          lng: acc["log"],
                        }}
                        // title='현재 위치'
                        image={{
                          // 무료 마커이미지의 주소: https://www.flaticon.com/kr/
                          // src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95",
                          src:
                            "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                          size: {
                            width: 45,
                            height: 45,
                          },
                          options: {
                            offset: {
                              x: 25,
                              y: 45,
                            },
                          },
                        }}
                        onClick={(marker) => map.panTo(marker.getPosition())}
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                      >
                        {isOpen && (
                          <div style={{ padding: "5px", color: "#000" }}>
                            {acc["name"]}
                          </div>
                        )}
                      </MapMarker>
                      {points.map((value) => (
                        <EventMarkerContainer
                          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                          position={value.latlng}
                          content={value.content}
                        />
                      ))}
                    </Map>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.restaurant}>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 1</Typography>
                        {/* <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`0day-${acc["name"]}`][2]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />

<img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`0day-${acc["name"]}`][0]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      /> */}

                        <div>
                          이름 : {plan[`0day-${acc["name"]}`][0]["name"]}
                          <br />
                          주소 : {plan[`0day-${acc["name"]}`][0]["loc"]}
                          <br />
                          추천 메뉴 :{" "}
                          {plan[`0day-${acc["name"]}`][0]["recommend"]}
                          <br />
                        </div>
                      </div>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 2</Typography>
                        이름 : {plan[`0day-${acc["name"]}`][1]["name"]}
                        <br />
                        주소 : {plan[`0day-${acc["name"]}`][1]["loc"]}
                        <br />
                        추천 메뉴 :{" "}
                        {plan[`0day-${acc["name"]}`][1]["recommend"]}
                      </div>
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 1</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`0day-${acc["name"]}`][2]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`0day-${acc["name"]}`][2]["name"]}
                      <br />
                      주소 : {plan[`0day-${acc["name"]}`][2]["address"]}
                      <br />
                      설명 : {plan[`0day-${acc["name"]}`][2]["explanation"]}
                      <br />
                    </div>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 2</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`0day-${acc["name"]}`][3]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`0day-${acc["name"]}`][3]["name"]}
                      <br />
                      주소 : {plan[`0day-${acc["name"]}`][3]["address"]}
                      <br />
                      설명 : {plan[`0day-${acc["name"]}`][3]["explanation"]}
                      <br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* ---------------------------------------------------------------------------------------------------- */}
            <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">DAY 2</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                  <div className={styles.mapBox}>
                    <Map
                      center={{
                        lat: plan[`day-${activity[0]}`][0]["lat"],
                        lng: plan[`day-${activity[0]}`][0]["log"],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={8}
                      onCreate={setMap}
                    >
                      <MapMarker
                        position={{
                          lat: plan[`day-${activity[0]}`][0]["lat"],
                          lng: plan[`day-${activity[0]}`][0]["log"],
                        }}
                        // title='현재 위치'
                        image={{
                          // 무료 마커이미지의 주소: https://www.flaticon.com/kr/
                          // src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95",
                          src:
                            "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                          size: {
                            width: 45,
                            height: 45,
                          },
                          options: {
                            offset: {
                              x: 25,
                              y: 45,
                            },
                          },
                        }}
                        onClick={(marker) => map.panTo(marker.getPosition())}
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                      >
                        {isOpen && (
                          <div style={{ padding: "5px", color: "#000" }}>
                            {plan[`day-${activity[0]}`][0]["name"]}
                          </div>
                        )}
                      </MapMarker>
                      {points1.map((value) => (
                        <EventMarkerContainer
                          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                          position={value.latlng}
                          content={value.content}
                        />
                      ))}
                    </Map>
                  </div>
                  <Typography variant="h6">추천 체험</Typography>
                  <div className={styles.activity}>
                    <div className={styles.box}>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[0]}`][0]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.box}>
                      이름 : {plan[`day-${activity[0]}`][0]["name"]}
                      <br />
                      영업시간 :{" "}
                      {
                        plan[`day-${activity[0]}`][0]["start_business_time"]
                      } - {plan[`day-${activity[0]}`][0]["end_business_time"]}{" "}
                      <br />
                      체험시간 : {plan[`day-${activity[0]}`][0]["time"]}
                      <br />
                      주소 : {plan[`day-${activity[0]}`][0]["loc"]}
                      <br />
                      금액 : ₩{" "}
                      {plan[`day-${activity[0]}`][0]["price"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      / 인당
                    </div>
                    <br />
                  </div>

                  <div className={styles.box}>
                    <div className={styles.restaurant}>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 1</Typography>

                        <div>
                          이름 : {plan[`day-${activity[0]}`][1]["name"]}
                          <br />
                          주소 : {plan[`day-${activity[0]}`][1]["loc"]}
                          <br />
                          추천 메뉴 :{" "}
                          {plan[`day-${activity[0]}`][1]["recommend"]}
                          <br />
                        </div>
                      </div>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 2</Typography>
                        이름 : {plan[`day-${activity[0]}`][2]["name"]}
                        <br />
                        주소 : {plan[`day-${activity[0]}`][2]["loc"]}
                        <br />
                        추천 메뉴 : {plan[`day-${activity[0]}`][2]["recommend"]}
                      </div>
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 1</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[0]}`][3]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[0]}`][3]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[0]}`][3]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[0]}`][3]["explanation"]}
                      <br />
                    </div>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 2</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[0]}`][4]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[0]}`][4]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[0]}`][4]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[0]}`][4]["explanation"]}
                      <br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            {/* --------------------------------------------------------------------- */}
            <Accordion sx={{ minWidth: 700, maxWidth: 1570 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">DAY 3</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                  <div className={styles.mapBox}>
                    <Map
                      center={{
                        lat: plan[`day-${activity[1]}`][0]["lat"],
                        lng: plan[`day-${activity[1]}`][0]["log"],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={8}
                      onCreate={setMap}
                    >
                      <MapMarker
                        position={{
                          lat: plan[`day-${activity[1]}`][0]["lat"],
                          lng: plan[`day-${activity[1]}`][0]["log"],
                        }}
                        image={{
                          src:
                            "https://cdn-icons-png.flaticon.com/512/5717/5717262.png",
                          size: {
                            width: 45,
                            height: 45,
                          },
                          options: {
                            offset: {
                              x: 25,
                              y: 45,
                            },
                          },
                        }}
                        onClick={(marker) => map.panTo(marker.getPosition())}
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                      >
                        {isOpen && (
                          <div style={{ padding: "5px", color: "#000" }}>
                            {plan[`day-${activity[1]}`][0]["name"]}
                          </div>
                        )}
                      </MapMarker>
                      {points2.map((value) => (
                        <EventMarkerContainer
                          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                          position={value.latlng}
                          content={value.content}
                        />
                      ))}
                    </Map>
                  </div>
                  {/* ----------------------------------------------------------------- */}
                  <Typography variant="h6">추천 체험</Typography>
                  <div className={styles.activity}>
                    <div className={styles.box}>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[1]}`][0]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.box}>
                      이름 : {plan[`day-${activity[1]}`][0]["name"]}
                      <br />
                      영업시간 :{" "}
                      {
                        plan[`day-${activity[1]}`][0]["start_business_time"]
                      } - {plan[`day-${activity[1]}`][0]["end_business_time"]}{" "}
                      <br />
                      체험시간 : {plan[`day-${activity[1]}`][0]["time"]}
                      <br />
                      주소 : {plan[`day-${activity[1]}`][0]["loc"]}
                      <br />
                      금액 : ₩{" "}
                      {plan[`day-${activity[1]}`][0]["price"]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      / 인당
                    </div>
                    <br />
                  </div>

                  <div className={styles.box}>
                    <div className={styles.restaurant}>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 1</Typography>
                        <div>
                          이름 : {plan[`day-${activity[1]}`][1]["name"]}
                          <br />
                          주소 : {plan[`day-${activity[1]}`][1]["loc"]}
                          <br />
                          추천 메뉴 :{" "}
                          {plan[`day-${activity[1]}`][1]["recommend"]}
                          <br />
                        </div>
                      </div>
                      <div className={styles.box}>
                        <Typography variant="h6">추천 식당 2</Typography>
                        이름 : {plan[`day-${activity[1]}`][2]["name"]}
                        <br />
                        주소 : {plan[`day-${activity[1]}`][2]["loc"]}
                        <br />
                        추천 메뉴 : {plan[`day-${activity[1]}`][2]["recommend"]}
                      </div>
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 1</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[1]}`][3]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[1]}`][3]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[1]}`][3]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[1]}`][3]["explanation"]}
                      <br />
                    </div>
                    <div className={styles.imageBox}>
                      <Typography variant="h6">추천 관광지 2</Typography>
                      <img
                        width={"500vh"}
                        height={"400vh"}
                        src={`${
                          plan[`day-${activity[1]}`][4]["url"]
                        }?w=161&fit=crop&auto=format`}
                        loading="lazy"
                      />
                      <br />
                      이름 : {plan[`day-${activity[1]}`][4]["name"]}
                      <br />
                      주소 : {plan[`day-${activity[1]}`][4]["address"]}
                      <br />
                      설명 : {plan[`day-${activity[1]}`][4]["explanation"]}
                      <br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>
          <br />
          <br />
          <div align={"center"}>
            <Button
              onClick={() => {
                navigate("/invoice");
              }}
              sx={{
                border: "4px solid currentColor",
                borderRadius: 0,
                alignItems: "center",
                height: "auto",
                py: 2,
                px: 5,
              }}
            >
              <Typography variant="h4" component="span">
                결제하기
              </Typography>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
              버튼을 누르시면 결제창으로 이동합니다.
            </Typography>
          </div>
        </div>
      </TripLayout>
    </>
  );
}
