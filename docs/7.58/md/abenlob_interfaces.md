  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreams_locators.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20LOB%20Interfaces%2C%20ABENLOB_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - LOB Interfaces

ABAP SQL supports access to [LOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry") using [streams](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_streaming.htm) and [locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocators.htm). For similar reads on these streams and locators, there are the interfaces

-   IF\_ABAP\_DB\_BLOB\_HANDLE and
-   IF\_ABAP\_DB\_CLOB\_HANDLE,

which both include the superordinate interface

-   IF\_ABAP\_DB\_LOB\_HANDLE

which then also includes the interface IF\_ABAP\_CLOSE\_RESOURCE.

The connection to streams and locators is as follows:

-   The system classes CL\_ABAP\_DB\_C\_READER and CL\_ABAP\_DB\_C\_LOCATOR both implement the interface IF\_ABAP\_DB\_CLOB\_HANDLE.
-   The system classes CL\_ABAP\_DB\_X\_READER and CL\_ABAP\_DB\_X\_LOCATOR both implement the interface IF\_ABAP\_DB\_BLOB\_HANDLE.
-   The interface IF\_ABAP\_DB\_READER includes IF\_ABAP\_DB\_LOB\_HANDLE.

The instances of the system classes that implement the interface IF\_ABAP\_DB\_LOB\_HANDLE are called [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry").

Hints

-   The LOB interfaces shown here can only be used for reads. Reference variables for LOB handles that are specified as read targets of the [INTO clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement can be typed statically using these interfaces. The class used to create the object must then be specified using the special addition [CREATING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_creating.htm) in the statement SELECT. For writes with the statements [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm), or [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm), the reference variables that are used as a source must be typed using the classes for writer streams or locators.
-   The LOB interfaces shown here cannot be used in combination with SQL expressions. To use streaming and locators on SQL expressions, the system classes for handling LOBs must be used directly.