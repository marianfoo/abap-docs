  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) → 

Initializations

The following statements initialize data objects, which means they set the content of a data object to an initial value:

-   [CLEAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclear.htm)

-   [FREE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_dataobject.htm)

Initialization does not delete the data objects in question. Data objects created by declarative statements are only deleted from the memory when leaving a program, together with the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Objects created dynamically by the statement [CREATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object.htm) are deleted by [Garbage Collector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The initialization of reference variables can, however, cause [Garbage Collector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengarbage_collector_glosry.htm "Glossary Entry") to delete the referenced objects.

Note

[REFRESH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaprefresh_itab.htm) is an obsolete statement used to initialize internal tables.

Continue
[CLEAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclear.htm)
[FREE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_dataobject.htm)