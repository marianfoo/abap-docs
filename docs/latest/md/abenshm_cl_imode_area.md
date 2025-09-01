  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_classes.htm) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_cl_abap_memory_area.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20CL_IMODE_AREA%2C%20ABENSHM_CL_IMODE_AREA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Shared Objects - CL\_IMODE\_AREA

The class CL\_IMODE\_AREA is a subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_cl_abap_memory_area.htm) and a predefined [area class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_class_glosry.htm "Glossary Entry") that enables the current internal session to be handled as an [area instance version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). There can be exactly one instance of the class CL\_IMODE\_AREA (singleton) in an internal session. This instance is an [area handle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_handle_glosry.htm "Glossary Entry") for the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Static Methods   

GET\_IMODE\_HANDLE   

Returns a reference to the area handle for the current internal session.

Return Value

-   HANDLE of type REF TO cl\_imode\_area