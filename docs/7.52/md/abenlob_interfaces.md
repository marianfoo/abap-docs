  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) → 

LOB Interfaces

Open SQL supports access to [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") using [streams](javascript:call_link\('abenopen_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)). For a similar read access to these streams and locators, there are the interfaces

-   IF\_ABAP\_DB\_BLOB\_HANDLE and

-   IF\_ABAP\_DB\_CLOB\_HANDLE,

which both include the superordinate interface

-   IF\_ABAP\_DB\_LOB\_HANDLE

which then also includes the <>IF\_ABAP\_CLOSE\_RESOURCE interface.

The connection to streams and locators is as follows:

-   The system classes CL\_ABAP\_DB\_C\_READER and CL\_ABAP\_DB\_C\_LOCATOR both implement the IF\_ABAP\_DB\_CLOB\_HANDLE interface.

-   The system classes CL\_ABAP\_DB\_X\_READER and CL\_ABAP\_DB\_X\_LOCATOR both implement the IF\_ABAP\_DB\_BLOB\_HANDLE interface.

-   The IF\_ABAP\_DB\_READER interface includes IF\_ABAP\_DB\_LOB\_HANDLE.

The instances of the system classes which implement the IF\_ABAP\_DB\_LOB\_HANDLE interface are called [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry").

Note

The LOB interfaces shown here can only be used for read accesses. Reference variables for LOB handles which are specified as read targets of the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement can be typed statically using these interfaces. The class which is used to create the object must then be specified using the special addition [CREATING](javascript:call_link\('abapselect_creating.htm'\)) in the SELECT statement. For write accesses with the statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), the reference variables which are used as a source must be typed using the classes for write streams or locators.