  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) → 

Shared Objects - CL\_IMODE\_AREA

The class CL\_IMODE\_AREA is a subclass of [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) and a predefined [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") that enables the current internal session to be handled as an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"). There can be exactly one instance of the class CL\_IMODE\_AREA (a singleton) in an internal session. This instance is an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") for the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Static Methods

GET\_IMODE\_HANDLE

Returns a reference to the area handle for the current internal session.

Return Value

-   HANDLE of type REF TO cl\_imode\_area