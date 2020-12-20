// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: calendar-alt;

let widget = new ListWidget()
const titleFont = { COLOR: Color.black(), FAMILY: 'ArialRoundedMTBold', SIZE: 30, OPACITY: 1 }

// let url = "https://coronavirus-19-api.herokuapp.com/countries/UK"
let url = "https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST?disableRedirect=true"
let req = new Request(url)
let json = await req.loadJSON()



// let imgReq = new Request('https://i.imgur.com/WYmGnnH.jpg')
// let img = await imgReq.loadImage()

let date = new Date(json['lastUpdatedAtSource'])
let todayCases = json['dailyConfirmed'].toString()
let todayDeaths = json['dailyDeceasedWithin28Days'].toString()

// Store current datetime
// const date = new Date()


const widgetTitle = widget.addText("🦠 " + date.toLocaleDateString('en-GB'))
// widgetTitle.textColor = Color.red()
widgetTitle.font = Font.systemFont(20)

widget.addText("")

widget.addText(todayCases)
const subt1 = widget.addText("cases today")
subt1.font = Font.systemFont(13)
subt1.textColor = Color.gray()

widget.addText("")

widget.addText(todayDeaths)
const subt2 = widget.addText("deaths today")
subt2.font = Font.systemFont(13)
subt2.textColor = Color.gray()
// widget.addText(img)

 
// Finalize widget settings
widget.setPadding(16,16,16,0)
widget.spacing = -3
// widget.backgroundImage(img)
 
Script.setWidget(widget)
widget.presentSmall()
Script.complete()

