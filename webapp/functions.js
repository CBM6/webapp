
var textObj
var list;
var list2;
async function fetchExam(id) {
    const response = await fetch(id, {
        method: 'GET',
    });
    const exam = await response.json();
    return exam;
}

async function myfunction() {
    var t1 = performance.now()
    var url;
    url = "https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=creation&site=stackoverflow&filter=!oDlfh44krmGiDjaQglwdNd8yTuMU(s-*XS.ZPceIeb5";
    var url2;
    url2 = "https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=votes&site=stackoverflow&filter=!oDlfh44krmGiDjaQglwdNd8yTuMU(s-*XS.ZPceIeb5";
    textObj = document.getElementById("search").value;
    var date = new Date();
    var from = date.getTime();
    var to = from;
    from = Math.round(from/1000);
    to = Math.round(to/1000)-604800;
    url = url + "&tagged=" + textObj+"&fromdate="+to+"&todate="+from;
    url2 = url2 + "&tagged=" + textObj+"&fromdate="+to+"&todate="+from;
    list = await fetchExam(url);
    list2 = await fetchExam(url2);
    var list3 = {items:[]};
    list3.items = list.items.concat(list2.items);
    list3.items.sort(function(a,b){return b.creation_date - a.creation_date});
    var posq;
    var posqb ;
    var posqc;
    var posqa;
    for(var i = 0;i<20;i++){
        posq = "question"+i;
        posqb = "questionbody"+i;
        posqc = "questioncom"+i;
        posqa = "questionans"+i;
        document.getElementById(posq).innerHTML = "Question:"+list3.items[i].title+" Creation date:"+list3.items[i].creation_date+" votes:"+list3.items[i].score;
        document.getElementById(posqb).innerHTML = "This is question body:\n"+list3.items[i].body+"This is creation date for the question:"+list3.items[i].creation_date+" This is votes for the question:"+list3.items[i].score;
        if (list3.items[i].hasOwnProperty("comments")){
            //put question comments
            document.getElementById(posqc).innerHTML = "This is comments for question:------------------------------"+"<br/>";
            for(var k = 0;k<list3.items[i].comments.length;k++){
                document.getElementById(posqc).innerHTML += (k+1)+": "+list3.items[i].comments[k].body+"<br/>"+" votes: "+list3.items[i].comments[k].score+" creation date:"+list3.items[i].comments[k].creation_date+"<br/>";
            }
        }
        if(list3.items[i].hasOwnProperty("answers")){
            document.getElementById(posqa).innerHTML = "This is answers for question:------------------------------"+"<br/>";
            for(var j = 0;j<list3.items[i].answers.length;j++){
                document.getElementById(posqa).innerHTML += (j+1)+": "+list3.items[i].answers[j].body+" votes: "+list3.items[i].answers[j].score+" creation date: "+list3.items[i].answers[j].creation_date+"<br/>";
                if(list3.items[i].answers[j].hasOwnProperty("comments")){
                    document.getElementById(posqa).innerHTML += "This is comments for answers:------------------------------"+"<br/>"
                    for(var l = 0;l<list3.items[i].answers[j].comments.length;l++){
                        document.getElementById(posqa).innerHTML +=(l+1)+": "+list3.items[i].answers[j].comments[l].body+"<br/>"+" votes: "+list3.items[i].answers[j].comments[l].score+" creation date: "+list3.items[i].answers[j].comments[l].creation_date+"<br/>";
                    }
                }
                document.getElementById(posqa).innerHTML+="This is end of the answer==========================================================="+"<br/>";
            }

        }
    }
    var t2 = performance.now();
    var res = t2-t1;
    document.getElementById("demo").innerHTML = "Response Time(in millisec):"+res;
}