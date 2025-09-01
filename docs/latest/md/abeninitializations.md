  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Initializations%2C%20ABENINITIALIZATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Initializations

The following statements initialize data objects, which means they set the content of a data object to an initial value:

-   [CLEAR](javascript:call_link\('abapclear.htm'\))
-   [FREE](javascript:call_link\('abapfree_dataobject.htm'\))

Initialization does not delete the corresponding data objects. Data objects created by declarative statements are only deleted from the memory when exiting a program, together with the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). Objects created dynamically by the statement [CREATE](javascript:call_link\('abapcreate_object.htm'\)) are deleted by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). The initialization of reference variables can, however, cause the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") to delete the referenced objects.

Hint

[REFRESH](javascript:call_link\('abaprefresh_itab.htm'\)) is an obsolete statement used to initialize internal tables.

Continue
[CLEAR](javascript:call_link\('abapclear.htm'\))
[FREE](javascript:call_link\('abapfree_dataobject.htm'\))