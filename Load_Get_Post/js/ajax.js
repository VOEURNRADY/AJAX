$(document).ready(function(){
	document.getElementById("id").focus();
	/*=============================================================*/
	// this is method load
	$(".loads").click(function(){
		$("p").load("http://110.74.194.125:1301/v1/api/articles?page=1&limit=15"
			,function(data,status,request){
				if(status=="success"){
					/*var lengths=data.DATA.length;*/
					document.getElementById("title").innerHTML="load method";
					console.log(data);
				}
		});
	});
	/*=============================================================*/
	// this is method get()
	$(".loads-1").click(function(){
		$.get("http://110.74.194.125:1301/v1/api/articles?page=1&limit=15",function(data,status,request){
			console.log(data);
			var result="";
			if(status=="success"){
				document.getElementById("title").innerHTML="get method";
				var trHTML = '';            
			    $.each(data.DATA, function (i, value) {			        
			        trHTML += '<tr><td>' + value.ID + '</td><td>' +value.TITLE +
			        '</td><td>'+value.STATUS + '</td><td>'+value.IMAGE + '</td></tr>';
			    });
			    $('#location').append(trHTML);
			}
		});
	});
	/*=============================================================*/
	// this is method ajax[get]
	$(".loads-2").click(function(){
		document.getElementById("title").innerHTML="ajax[get] method";
		var trHTML='';
		$.ajax({
			type: "GET",
			url: "http://110.74.194.125:1301/v1/api/articles?page=1&limit=15",
			success: function(data){
				console.log(data);
				$.each(data.DATA,function(i,value){
					trHTML+='<tr><td>'+value.ID+'</td><td>'+value.TITLE+'</td><td>'+
					value.STATUS+'</td><td>'+value.IMAGE+'</td></tr>';
				});
				$('#location').append(trHTML);
			},
			error : function(){
				alert("Error");
			}
		});
	});

	/*=============================================================*/
	/*// this is method ajax[get]
	$(".loads-3").click(function(){
		var id=document.getElementById("id").value;
		var title=document.getElementById("name").value;
		var status=document.getElementById("status").value;
		var image=document.getElementById("image").value;
		var obj = {
			"TITLE": "KPS Post Test",
			"DESCRIPTION": "Keep on Fighting",
			"AUTHOR": 0,
			"CATEGORY_ID": 0,
			"STATUS": "1",
			"IMAGE": "Image not found, unknown sources"
		};
		$.post("http://110.74.194.125:1301/v1/api/articles?page=1&limit=15",obj,function(data,status,request){
			if(status=="success"){
				alert(obj);
			}
		});
	});*/
	/*=============================================================*/
	$(".loads-4").click(function(){	
		var id=document.getElementById("id").value;
		var title=document.getElementById("name").value;
		var status=document.getElementById("status").value;
		var image=document.getElementById("image").value;			
		var obj = {
	    	"TITLE": title,
		    "DESCRIPTION": "Keep on Fighting",
		    "AUTHOR": 0,
			"CATEGORY_ID": 0,
			"STATUS": status,
			"IMAGE": image
		};
	    $.ajax({
			type : "POST",
		    url : "http://110.74.194.125:1301/v1/api/articles",
			data : JSON.stringify(obj),
			datatype : "json",
			contentType : "application/json"
			,success : function(data){
				console.log(data);
			},error : function(){
				alert("Error");
			}
		});
	});
	/*=============================================================*/
	// this is method ajax[get]
	$(".loads-5").click(function(){
		var id=document.getElementById("id").value;
		var trHTML='';
		if(id!=""){
			$.ajax({
				type: "DELETE",
				url: "http://110.74.194.125:1301/v1/api/articles/"+id,
				success: function(data){
					document.getElementById("title").innerHTML="delete method";
					alert(data.DATA.ID);
				},
				error : function(){
					alert("Error");
				}
			});
		}else{
			alert("Please input ID");
			document.getElementById("id").focus();
		}
	});
	/*=============================================================*/
});