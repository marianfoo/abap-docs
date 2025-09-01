---
title: "Static Methods"
description: |
  GET_IMODE_HANDLE Returns a reference to the area handle for the current internal session. Return Value -   HANDLE of type REF TO cl_imode_area
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_imode_area.htm"
abapFile: "abenshm_cl_imode_area.htm"
keywords: ["do", "try", "method", "class", "abenshm", "imode", "area"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_classes.htm) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_abap_memory_area.htm) → 

Shared Objects - CL\_IMODE\_AREA

The class CL\_IMODE\_AREA is a subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_abap_memory_area.htm) and a predefined [area class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_class_glosry.htm "Glossary Entry") that enables the current internal session to be handled as an [area instance version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). There can be exactly one instance of the class CL\_IMODE\_AREA (singleton) in an internal session. This instance is an [area handle](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_handle_glosry.htm "Glossary Entry") for the current [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Static Methods

GET\_IMODE\_HANDLE

Returns a reference to the area handle for the current internal session.

Return Value

-   HANDLE of type REF TO cl\_imode\_area