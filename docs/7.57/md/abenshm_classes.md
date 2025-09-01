---
title: "Shared Objects - Classes and Interfaces"
description: |
  The hierarchy of global classes that are involved when working with shared objects is as follows: CL_ABAP_MEMORY_AREA(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_abap_memory_area.htm)  --CL_SHM_AREA(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abens
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_classes.htm"
abapFile: "abenshm_classes.htm"
keywords: ["do", "if", "try", "class", "abenshm", "classes"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Classes and Interfaces, ABENSHM_CLASSES, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Classes and Interfaces

The hierarchy of global classes that are involved when working with shared objects is as follows:

[CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_abap_memory_area.htm)
  |
  |--[CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm)
  |    |
  |    |--[Area Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm)
  |
  |--[CL\_IMODE\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_imode_area.htm)

The meaning of the three predefined system classes:

-   [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_abap_memory_area.htm) is the superclass of all area classes.
-   [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) is the superclass of all self-defined area classes.
-   [CL\_IMODE\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_imode_area.htm) is a predefined area class for the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

There is also a system interface that must be implemented by the class for the optional area constructor:

[IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_if_shm_build_instance.htm)
  |
  |--[Area Constructor Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_constructor_class.htm)

Continue
[Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_abap_memory_area.htm)
[Shared Objects - IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_if_shm_build_instance.htm)