  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

dynpro sequence

The sequence in which [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") are processed whose flow is determined by the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") for each dynpro in the sequence. The first dynpro in a dynpro sequence is the [initial dynpro](javascript:call_link\('abeninitial_dynpro_glosry.htm'\) "Glossary Entry"). Dynpro sequences are called using [transaction codes](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") or [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). A dynpro sequence always part of a single [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") and is executed in a single [GUI window](javascript:call_link\('abengui_window_glosry.htm'\) "Glossary Entry"). A dynpro sequence is ended when the next dynpro with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") 0 is called.

[→ More](javascript:call_link\('abenabap_dynpros_processing.htm'\))