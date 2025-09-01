  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm) → 

LOB Interfaces

Open SQL supports access to [LOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") using [streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_streaming.htm) and [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocators.htm). For a similar read access to these streams and locators, there are the interfaces

-   IF\_ABAP\_DB\_BLOB\_HANDLE and

-   IF\_ABAP\_DB\_CLOB\_HANDLE,

which both include the superordinate interface

-   IF\_ABAP\_DB\_LOB\_HANDLE

which then also includes the <>IF\_ABAP\_CLOSE\_RESOURCE interface.

The connection to streams and locators is as follows:

-   The system classes CL\_ABAP\_DB\_C\_READER and CL\_ABAP\_DB\_C\_LOCATOR both implement the IF\_ABAP\_DB\_CLOB\_HANDLE interface.

-   The system classes CL\_ABAP\_DB\_X\_READER and CL\_ABAP\_DB\_X\_LOCATOR both implement the IF\_ABAP\_DB\_BLOB\_HANDLE interface.

-   The IF\_ABAP\_DB\_READER interface includes IF\_ABAP\_DB\_LOB\_HANDLE.

The instances of the system classes which implement the IF\_ABAP\_DB\_LOB\_HANDLE interface are called [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry").

Note

The LOB interfaces shown here can only be used for read accesses. Reference variables for LOB handles which are specified as read targets of the [INTO clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement can be typed statically using these interfaces. The class which is used to create the object must then be specified using the special addition [CREATING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_creating.htm) in the SELECT statement. For write accesses with the statements [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm), the reference variables which are used as a source must be typed using the classes for write streams or locators.