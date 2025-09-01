  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_classes.htm) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_abap_memory_area.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - CL_IMODE_AREA, ABENSHM_CL_IMODE_AREA, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - CL\_IMODE\_AREA

The class CL\_IMODE\_AREA is a subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_abap_memory_area.htm) and a predefined [area class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_class_glosry.htm "Glossary Entry") that enables the current internal session to be handled as an [area instance version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). There can be exactly one instance of the class CL\_IMODE\_AREA (singleton) in an internal session. This instance is an [area handle](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_handle_glosry.htm "Glossary Entry") for the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Static Methods   

GET\_IMODE\_HANDLE   

Returns a reference to the area handle for the current internal session.

Return Value

-   HANDLE of type REF TO cl\_imode\_area