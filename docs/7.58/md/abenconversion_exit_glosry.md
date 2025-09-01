  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20conversion%20exit%2C%20ABENCONVERSION_EXIT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

conversion exit

A conversion exit defines rules that overwrite standard conversions that take place when values are passed as input from user interfaces to ABAP or as output from ABAP to user interfaces. Version exits can be linked to UI elements in different ways. Conversion exits can be implemented by [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") and can be assigned directly to a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") or a [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry"). The conversion routines execute the conversions implicitly for such dynpro fields and also in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) for [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") that refer to such domains.

[→ More about](javascript:call_link\('abenconversion_exits.htm'\))