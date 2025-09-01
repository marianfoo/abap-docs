  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20sequence%2C%20ABENDYNPRO_SEQUENCE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro sequence

Processing sequence of [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") whose flow is determined by the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") for each dynpro involved. The first dynpro in a dynpro sequence is the [initial dynpro](javascript:call_link\('abeninitial_dynpro_glosry.htm'\) "Glossary Entry"). Dynpro sequences are called using [transaction codes](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") or [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). A dynpro sequence always belongs to a single [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") and is executed in a single [GUI window](javascript:call_link\('abengui_window_glosry.htm'\) "Glossary Entry"). A dynpro sequence is ended when the next dynpro with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") 0 is called.

[→ More about](javascript:call_link\('abenabap_dynpros_processing.htm'\))