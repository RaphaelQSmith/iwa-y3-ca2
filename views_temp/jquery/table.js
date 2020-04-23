function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function ('/movies')
	{
		return $.ajax(
		{
			url: '/movies',
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/movies")
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var mov = $(this).attr("id") - 1;
		delete_row(mov);
	})
};

function delete_row(mov)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/movies/del",
			type: "POST",
			data:
			{
				movie: mov
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});