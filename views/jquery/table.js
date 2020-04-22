// function draw_table()
// {
// 	$("#results").empty();
// 	$.getJSONuncached = function (url)
// 	{
// 		return $.ajax(
// 		{
// 			url: url,
// 			type: 'GET',
// 			cache: false,
// 			success: function (html)
// 			{
//                 $("#results").append(html);
// 				select_row();
// 			}
// 		});
// 	};
// 	$.getJSONuncached("/movies")
// };

// function select_row()
// {
// 	$("#menuTable tbody tr[id]").click(function ()
// 	{
// 		$(".selected").removeClass("selected");
// 		$(this).addClass("selected");
// 		var mov = $(this).attr("id");
// 		delete_row(mov);
// 	})
// };

// function delete_row(id){

// 	$("#delete").click(function ()
// 	{
// 		$.ajax(
// 		{
// 			url: "/movies/del/"+id,
// 			type: "delete",
// 			data:
// 			{
// 				movie: mov
// 			},
// 			cache: false,
// 			success: setTimeout(draw_table, 1000)
// 		})
// 	})
// };



// $(document).ready(function ()
// {
    
// });


// document.getElementById('delete').addEventListener('click', function() {
//     var tableRef = document.getElementById('links-list');
//     var tableRows = document.getElementById('links-list').rows;

//     var checkedRows = [];
//     for (var i = 0; i < tableRows.length; i++) {
//         if (tableRows[i].querySelector('input').checked) {
//             checkedRows.push(tableRows[i]);
//         }
//     }

//     for (var k = 0; k < checkedRows.length; k++) {
//         checkedRows[k].parentNode.removeChild(checkedRows[k]);
//     }
// });