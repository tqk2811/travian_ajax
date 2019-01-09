function ally_roa_attackcount()
{
	var allianceMembers = document.getElementsByClassName("allianceMembers");
	if(allianceMembers.length == 1)
	{
		var attacks = allianceMembers[0].getElementsByClassName("attack");
		for(var  i = 0; i < attacks.length; i++ )
		{
			var counts= attacks[i].getAttribute("alt").split(" ");
			if(counts.length >= 1)
			{
				var e_numattack = document.createElement("a1");
				e_numattack.setAttribute("style","color:red;");
				e_numattack.innerText = "( " + counts[0] + " ) ";
				attacks[i].insertAdjacentElement("beforebegin",e_numattack);
			}
		}
	}
}

function ally_main()
{
	if(window.location.href.indexOf("allianz.php")>=0)
	{
		if (window.Current.tabActives.length == 2 && 
			window.Current.tabActives[0].getElementsByTagName("a")[0].getAttribute("href").indexOf("s=1") >= 0 &&
			window.Current.tabActives[1].getElementsByTagName("a")[0].getAttribute("href").indexOf("action=members") >= 0
			)
		{
			ally_roa_attackcount();
		}
	}
}
ally_main();