  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

field exit

Obsolete [customer exit](javascript:call_link\('abencustomer_exit_glosry.htm'\) "Glossary Entry") that can be associated with [data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") in customer systems. If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is defined with reference to a data element of this type, a function module called FIELD\_EXIT\_dtel is called in data transports from the dynpro to the ABAP program at [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") time. Here, dtel is the name of the data element. The value of the dynpro field can be modified in the function module. The function module of a field exit cannot currently be debugged.