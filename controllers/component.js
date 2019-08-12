app.controller('weatherController',['$scope', '$http', function ($scope, $http){
    $scope.cities = [];
    for (let i = 0; i < citiesList.length; i++) {
        $http({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + citiesList[i] + '&appid=2cf4a8dcbcb34243d79209b5e359c656',
        }).then(function(response) {
            const k = i;
            $scope.cities[k] = response.data;            
            $scope.Math = window.Math;
            var a = new Date($scope.cities[k].dt * 1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var time = date + ' ' + month + ' ' + year;
            //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    
            var sr = new Date($scope.cities[k].sys.sunset * 1000);
            var hour2 = sr.getHours();
            var min2 = sr.getMinutes();
            if(hour2 > 10) {
                var time2 = hour2 + ':' + min2;
            }

            if(hour2 < 10) {
                var time2 = '0' + hour2 + ':' + min2;
            }

            if(min2 < 10) {
                var time2 = hour2 + ':' + '0' + min2;
            }   

            $scope.cities[i].date = time;
            $scope.cities[i].sr = time2;
           
        });

    }



  }]);
 