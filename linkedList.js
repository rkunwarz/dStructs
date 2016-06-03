//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha chai sinon sinon-chai moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

function List(){
    List.makeNode = function(){
        return {
            data:null,
            next:null
        }
    };
    
    this.showList=function(){
        var loc = this.start;
        while(loc!=this.end){
            console.log(loc.data);
            loc= loc.next;
        }
        console.log(loc.data);
    }
    
    this.deleteNode= function(data){
        var loc = this.start;
        while(loc.next.data!=this.end && loc.next.data!==data){
            loc= loc.next;
        }
        if(loc.next.data===data){
            console.log('Node found with data' + data + 'deleting it now');
            var delNode = loc.next;
            loc.next = loc.next.next;
            delNode = null;
        }
    }
    

this.start = null;
this.end = null;

this.add = function(data){
    if(this.start===null){
        this.start=List.makeNode();
        this.end=this.start;
    }else{
        this.end.next=List.makeNode();
        this.end= this.end.next;
    }
    this.end.data = data;
   };
    
};

var list = new List();
for(var i=0;i<5;i++){
    list.add(i);
};

list.showList();
list.deleteNode(3);
list.showList();
