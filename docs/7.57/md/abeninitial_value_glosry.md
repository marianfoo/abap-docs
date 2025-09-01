  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: initial value, ABENINITIAL_VALUE_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

initial value

The ABAP runtime framework defines an initial value for each [data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry"). The initial values of the [elementary data types](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") depend on the corresponding [built-in ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). The initial value of [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") is the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"). The initial value of an [internal table](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") is an empty table without lines. The initial value of [structured types](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") is produced from the initial values of the individual [components](javascript:call_link\('abencomponent_glosry.htm'\) "Glossary Entry"). The statement [CLEAR](javascript:call_link\('abapclear.htm'\)) with no additions sets a [data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") to the appropriate initial value for its type. Initial values are also assigned to most [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"), but those are not evaluated in ABAP programs.