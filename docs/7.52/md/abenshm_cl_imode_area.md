  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_classes.htm) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm) → 

Shared Objects - CL\_IMODE\_AREA

The class CL\_IMODE\_AREA is a subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm) and a predefined [area class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_class_glosry.htm "Glossary Entry") that enables the current internal session to be handled as an [area instance version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). There can be exactly one instance of the class CL\_IMODE\_AREA (singleton) in an internal session. This instance is an [area handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_handle_glosry.htm "Glossary Entry") for the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Static Methods

GET\_IMODE\_HANDLE

Returns a reference to the area handle for the current internal session.

Return Value

-   HANDLE of type REF TO cl\_imode\_area