import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminAPI } from "..";

//Dashborard
const TOTALPROFIT = async () => {
  // console.log("값 들어간다11111");
  const res = await adminAPI.totalProfit();
  // console.log("값 돌아왔다22222");
  return res.data;
};

const LASTSIXMONTH = async () => {
  console.log("값 들어간다11111");
  const res = await adminAPI.lastSixMonth();
  console.log("값 돌아왔다22222");

  return res.data;
};
const YEARCHART = async () => {
  console.log("YEARCHART 값 들어간다11111");
  const res = await adminAPI.yearchart();
  console.log("YEARCHART 값 돌아왔다22222");

  return res.data;
};

//Dashborard
export const totalProfit = createAsyncThunk(
  "admin/dashboard/totalprofit",
  TOTALPROFIT
);
export const lastSixMonth = createAsyncThunk(
  "admin/dashboard/lastsixmonth",
  LASTSIXMONTH
);
export const yearchart = createAsyncThunk(
  "admin/dashboard/yearchat",
  YEARCHART
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    totalProfitState: {
      price__sum: "",
    },
    lastSixMonthState: {},
    // yearchartState: [],

    //     usersState: [],
    type: "",
    keyword: "",
    params: {},
  },
  reducers: {},
  extraReducers: {
    //dashboard
    [totalProfit.fulfilled]: (state, action) => {
      // console.log(`redux data: ${action.payload["price__sum"]}`);
      state.totalProfitState = action.payload;
    },
    [lastSixMonth.fulfilled]: (state, action) => {
      console.log(`redux data: ${action.payload}`);
      console.log(
        `페이로드의 영번째를 알아보자: ${JSON.stringify(action.payload)}`
      );
      state.lastSixMonthState = action.payload;
    },
    [yearchart.fulfilled]: (state, action) => {
      console.log(`redux data: ${action.payload}`);
      console.log(
        `페이로드의 영번째를 알아보자: ${JSON.stringify(action.payload)}`
      );
      state.yearchartState = action.payload;
    },
  },
});

export const currentTotalState = (state) => state.admin.totalProfitState;
export const currentLastSixMonthState = (state) =>
  state.admin.lastSixMonthState;
export const currentYearchartState = (state) => state.admin.yearchartState;
// export const currentUserState = (state) => state.users.userState;
// export const currentUsersState = (state) => state.users.usersState;
// export const currentUserParam = (state) => state.user.param;
export default adminSlice.reducer;
