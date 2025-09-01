  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

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