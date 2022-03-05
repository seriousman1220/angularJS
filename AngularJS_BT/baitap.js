var app = angular.module("myApp", ["ngRoute"]);
app.controller("myController", function ($scope) {
  $scope.Edit_yn = false;

  $scope.khoa_hoc = [
    {
      ma_khoa: "HTML_CSS",
      ten_khoa: "HTML - CSS",
      fdate: new Date("2022-01-01"),
      tdate: new Date("2022-03-01"),
    },
    {
      ma_khoa: "JS",
      ten_khoa: "Javascript",
      fdate: new Date("2022-01-05"),
      tdate: new Date("2022-03-05"),
    },
    {
      ma_khoa: "API",
      ten_khoa: "Kết nối API",
      fdate: new Date("2022-01-10"),
      tdate: new Date("2022-03-10"),
    },
  ];

  $scope.highlightAll = function (f) {
    if (!f) return false;
    else return true;
  };

  $scope.ngayhoc = function () {
    for (var i = 0; i < $scope.khoa_hoc.length; i++) {
      if ($scope.khoa_hoc[i].ma_khoa == $scope.khoa_dt) {
        $scope.ngay_bd = $scope.khoa_hoc[i].fdate;
        $scope.ngay_kt = $scope.khoa_hoc[i].tdate;
        break;
      }
    }
  };

  $scope.bp = [
    { ma_bp: "bp1", ten_bp: "Dự án", diem_cong: 0.5 },
    { ma_bp: "bp2", ten_bp: "Khách hàng", diem_cong: 0.25 },
    { ma_bp: "bp3", ten_bp: "Kinh Doanh", diem_cong: 0.75 },
  ];

  $scope.diemcong = function () {
    for (var i = 0; i < $scope.bp.length; i++) {
      if ($scope.bo_phan == $scope.bp[i].ma_bp) {
        $scope.bonus = $scope.bp[i].diem_cong;
        break;
      }
    }
  };

  $scope.tt = [
    {
      tt_yn: 1,
      tt_title: "Sử dụng",
    },
    {
      tt_yn: 0,
      tt_title: "Không Sử dụng",
    },
  ];
  $scope.dssv = [
    {
      id: 1,
      ma_khoa: "HTML_CSS",
      ten_khoa: "HTML - CSS",
      ten_sv: "Nguyễn Tuấn Anh",
      bp: "Dự án",
      ngay_dg: new Date("2022-01-10"),
      ten_hd: "Nguyễn A",
      tong_diem: 6,
      trang_thai: "Sử dụng",
      selected: false,
    },
    {
      id: 2,
      ma_khoa: "JS",
      ten_khoa: "Javascript",
      ten_sv: "Nguyễn Anh",
      bp: "Dự án",
      ngay_dg: new Date("2022-01-11"),
      ten_hd: "Nguyễn A",
      tong_diem: 8,
      trang_thai: "Sử dụng",
      selected: false,
    },
    {
      id: 3,
      ma_khoa: "API",
      ten_khoa: "Kết nối API",
      ten_sv: "Nguyễn An",
      bp: "Dự án",
      ngay_dg: new Date("2022-01-15"),
      ten_hd: "Nguyễn A",
      tong_diem: 9,
      trang_thai: "Sử dụng",
      selected: false,
    },
    {
      id: 4,
      ma_khoa: "HTML_CSS",
      ten_khoa: "HTML - CSS",
      ten_sv: "Nguyễn Tuấn Anh",
      bp: "Dự án",
      ngay_dg: new Date("2022-01-10"),
      ten_hd: "Nguyễn A",
      tong_diem: 6,
      trang_thai: "Sử dụng",
      selected: false,
    },
    {
      id: 5,
      ma_khoa: "HTML_CSS",
      ten_khoa: "HTML - CSS",
      ten_sv: "Nguyễn Tuấn Anh",
      bp: "Dự án",
      ngay_dg: new Date("2022-01-10"),
      ten_hd: "Nguyễn A",
      tong_diem: 6,
      trang_thai: "Sử dụng",
      selected: false,
    },
    {
      id: 6,
      ma_khoa: "HTML_CSS",
      ten_khoa: "HTML - CSS",
      ten_sv: "Nguyễn Tuấn Anh",
      bp: "Dự án",
      ngay_dg: new Date("2022-01-10"),
      ten_hd: "Nguyễn A",
      tong_diem: 4,
      trang_thai: "Sử dụng",
      selected: false,
    },
  ];

  $scope.selectedRow = [];
  $scope.select_all = function () {
    if ($scope.all == true) {
      for (var i = 0; i < $scope.dssv.length; i++) {
        $scope.selectedRow.push($scope.dssv[i].id);
      }
    } else {
      $scope.selectedRow = [];
    }
  };
  $scope.getRow = function (id) {
    if ($scope.selectedRow.includes(id)) {
      for (var i = 0; i < $scope.selectedRow.length; i++) {
        if ($scope.selectedRow[i] == id) {
          $scope.selectedRow.splice(i, 1);

          console.log("xoa " + id);
          console.log($scope.selectedRow);
          i--;
        }
      }
    } else {
      $scope.selectedRow.push(id);
      console.log("them " + id);
      console.log($scope.selectedRow);
    }
  };

  var validateEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  var validateNumber = /^[0-9]*$/;
  var validateID = /^[A-Za-z0-9_-]+$/;

  function validateInput() {
    var check_khoa_dt = $scope.khoa_dt;
    var check_ngay_dg = $scope.ngay_dg;
    if (!check_khoa_dt || !check_ngay_dg) {
      alert("Thông tin chưa đầy đủ!");
      return false;
    }
    return true;
  }

  $scope.luu = function () {
    var id_next = 0;
    for(var i in $scope.dssv){
      if(id_next < $scope.dssv[i].id_next){
        id_next = $scope.dssv[i].id;
      }
    }
    id_next++;
    if(validateInput()){
      var sv = [];

    }
    
  };

  $scope.modalTitleId = "Thêm kết quả đánh giá nhân viên";
  $scope.sua = function () {
    if ($scope.selectedRow.length == 0) {
      alert("Please select at least one row");
    } else if ($scope.selectedRow.length == 1) {
      $("#modelId").modal("show");
      $scope.modalTitleId = "Cập nhật kết quả đánh giá nhân viên";
    } else {
      alert("Chỉ được chọn 1 dòng để sửa ");
      return;
    }
    $scope.Edit_yn = true;
  };

  //ng-options = "x.ten_khoa for x in ds_khoadt track by x.ma_khoa"
  //xoa 1 sv
  $scope.xoa = function (id) {
    if (id.length == 0) {
      alert("Không có dòng nào cần xóa!");
      return;
    }
    var r = confirm("Xóa các bản ghi này ?");
    if (r) {
      for (var i = 0; i < $scope.dssv.length; i++) {
        if (id.includes($scope.dssv[i].id)) {
          $scope.dssv.splice(i, 1);
          i--;
        }
      }
    }
  };

  $scope.refresh = function () {
    location.reload();
  };
});
