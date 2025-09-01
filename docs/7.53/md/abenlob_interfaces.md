  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstreams_locators.htm) → 

LOB Interfaces

ABAP SQL supports access to [LOBs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_glosry.htm "Glossary Entry") using [streams](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_streaming.htm) and [locators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocators.htm). For similar reads on these streams and locators, there are the interfaces

which both include the superordinate interface

which then also includes the interface IF\_ABAP\_CLOSE\_RESOURCE.

The connection to streams and locators is as follows:

-   The system classes CL\_ABAP\_DB\_C\_READER and CL\_ABAP\_DB\_C\_LOCATOR both implement the interface IF\_ABAP\_DB\_CLOB\_HANDLE.

-   The system classes CL\_ABAP\_DB\_X\_READER and CL\_ABAP\_DB\_X\_LOCATOR both implement the interface IF\_ABAP\_DB\_BLOB\_HANDLE.

-   The interface IF\_ABAP\_DB\_READER includes IF\_ABAP\_DB\_LOB\_HANDLE.

The instances of the system classes that implement the interface IF\_ABAP\_DB\_LOB\_HANDLE are called [LOB handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlob_handle_glosry.htm "Glossary Entry").

Note

The LOB interfaces shown here can only be used for reads. Reference variables for LOB handles that are specified as read targets of the [INTO clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement can be typed statically using these interfaces. The class used to create the object must then be specified using the special addition [CREATING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_creating.htm) in the statement SELECT. For writes with the statements [INSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_dbtab.htm), the reference variables which are used as a source must be typed using the classes for writer streams or locators.