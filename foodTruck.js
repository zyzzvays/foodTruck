h1 = [1, 3]
h2 = [4, 2]
h3 = [7, 5]
h4 = [3, 1]

list = [h1, h2, h3, h4]
// I have not yet learned or practiced with a user input interface, so for now extra houses have to be manually typed in and added to the list

function truckCheckList(houseList){
    // This function checks the house's minimum and maximum coordinates and returns the bounding box of spots that should be checked
    minX = 100
    minY = 100
    maxX = 0
    maxY = 0
    for(i=0; i < houseList.length; i++){
        location = houseList[i]
        if(location[0] < minX){
            minX = location[0]
        }
        if(location[0] > maxX){
            maxX = location[0]
        }
        if(location[1] < minY){
            minY = location[1]
        }
        if(location[1] > maxY){
            maxY = location[1]
        }
    }
    listOfSpots = []
    for(i = minX; i <= maxX; i++){
        for(j = minY; j <= maxY; j++)
        listOfSpots.push([i,j])
    }
    return listOfSpots
}

function spotCheck(spots, houses){
    // This function takes the list of houses and spots to check, and returns the total distance from every house (added together) to the given spot, in an array
    lengthList = []
    for(i=0; i < spots.length; i++){
        distanceX = 0
        distanceY = 0
        currentCheck = spots[i]
        for(j=0; j < houses.length; j++){
            currentHouse = houses[j]
            houseDistanceX = Math.abs(currentCheck[0] - currentHouse[0])
            houseDistanceY = Math.abs(currentCheck[1] - currentHouse[1])
            distanceX = distanceX + houseDistanceX
            distanceY = distanceY + houseDistanceY
        }
        totalDistance = distanceX + distanceY
        lengthList.push(totalDistance)
    }
    return lengthList
}

function truckSpot(houseList){
    // This function uses the house list, calling the other functions, and checks the total distances, and returns the coordinates of the most optimal spot
    spotList = truckCheckList(houseList)
    spotLengths = spotCheck(spotList, houseList)
    bestLength = 100
    bestSpot = 0
    for(i=0; i < spotLengths.length; i++){
        if(spotLengths[i] < bestLength){
            bestLength = spotLengths[i]
            bestSpot = i
            // The "bestSpot" variable can only go down, and so it will return the first of the lowest values it finds (ex: it finds 3 values at 10, it will return the first one in the "spotList" array)
        }
    }
    console.log(spotList[bestSpot])
}

truckSpot(list)