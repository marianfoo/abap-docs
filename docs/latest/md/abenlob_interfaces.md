  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20LOB%20Interfaces%2C%20ABENLOB_INTERFACES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - LOB Interfaces

ABAP SQL supports access to [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") using [streams](javascript:call_link\('abenabap_sql_streaming.htm'\)) and [locators](javascript:call_link\('abenlocators.htm'\)). For similar reads on these streams and locators, there are the interfaces

-   IF\_ABAP\_DB\_BLOB\_HANDLE and
-   IF\_ABAP\_DB\_CLOB\_HANDLE,

which both include the superordinate interface

-   IF\_ABAP\_DB\_LOB\_HANDLE

which then also includes the interface IF\_ABAP\_CLOSE\_RESOURCE.

The connection to streams and locators is as follows:

-   The system classes CL\_ABAP\_DB\_C\_READER and CL\_ABAP\_DB\_C\_LOCATOR both implement the interface IF\_ABAP\_DB\_CLOB\_HANDLE.
-   The system classes CL\_ABAP\_DB\_X\_READER and CL\_ABAP\_DB\_X\_LOCATOR both implement the interface IF\_ABAP\_DB\_BLOB\_HANDLE.
-   The interface IF\_ABAP\_DB\_READER includes IF\_ABAP\_DB\_LOB\_HANDLE.

The instances of the system classes that implement the interface IF\_ABAP\_DB\_LOB\_HANDLE are called [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry").

Hints

-   The LOB interfaces shown here can only be used for reads. Reference variables for LOB handles that are specified as read targets of the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement can be typed statically using these interfaces. The class used to create the object must then be specified using the special addition [CREATING](javascript:call_link\('abapselect_creating.htm'\)) in the statement SELECT. For writes with the statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), or [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), the reference variables that are used as a source must be typed using the classes for writer streams or locators.
-   The LOB interfaces shown here cannot be used in combination with SQL expressions. To use streaming and locators on SQL expressions, the system classes for handling LOBs must be used directly.