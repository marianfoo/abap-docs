  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20field%20exit%2C%20ABENFIELD_EXIT_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

field exit

Obsolete [customer exit](javascript:call_link\('abencustomer_exit_glosry.htm'\) "Glossary Entry") that can be linked with [DDIC data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") in customer systems. If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is defined with reference to such a data element, a function module named FIELD\_EXIT\_dtel is called during the data transport from the dynpro to the ABAP program at the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry"). Here, dtel is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot be debugged at present.