---
title: "Shared Objects - Classes and Interfaces"
description: |
  The hierarchy of global classes that are involved when working with shared objects is as follows: CL_ABAP_MEMORY_AREA(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm)  --CL_SHM_AREA(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abens
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_classes.htm"
abapFile: "abenshm_classes.htm"
keywords: ["do", "if", "try", "class", "abenshm", "classes"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Classes and Interfaces

The hierarchy of global classes that are involved when working with shared objects is as follows:

[CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm)
  |
  |--[CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm)
  |    |
  |    |--[Area Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm)
  |
  |--[CL\_IMODE\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_imode_area.htm)

Meaning of the three predefined system classes:

-   [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm) is the superclass of all area classes.

-   [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) is the superclass of all self-defined area classes.

-   [CL\_IMODE\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_imode_area.htm) is a predefined area class for the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry").

There is also a system interface, which must be implemented by the class for the optional area constructor:

[IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_if_shm_build_instance.htm)
  |
  |--[Area Constructor Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm)

Continue
[Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm)
[Shared Objects - IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_if_shm_build_instance.htm)