---
title: "Static Methods"
description: |
  BUILD Interface method for implementing the area constructor of an area. Input Parameters -   INST_NAME of type SHM_INST_NAME Name of the area instance version. Specifying the name is optional. The default value is the value of the constant CL_SHM_AREA=>DEFAULT_INSTANCE. -   INVOCATION_MODE o
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_if_shm_build_instance.htm"
abapFile: "abenshm_if_shm_build_instance.htm"
keywords: ["do", "if", "method", "class", "abenshm", "shm", "build", "instance"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_classes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - IF_SHM_BUILD_INSTANCE, ABENSHM_IF_SHM_BUILD_INSTANCE, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - IF\_SHM\_BUILD\_INSTANCE

The interface IF\_SHM\_BUILD\_INSTANCE must be included by an [area constructor class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_constructor_class.htm) that implements the optional area constructor of an area.

Static Methods   

BUILD   

Interface method for implementing the area constructor of an area.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is the value of the constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   INVOCATION\_MODE of type i
    
    This parameter can be used to determine the type of call in the area constructor. The default value CL\_SHM\_AREA=>INVOCATION\_MODE\_EXPLICIT is used for the explicit call. CL\_SHM\_AREA=>INVOCATION\_MODE\_AUTO\_BUILD is passed with the automatic call.
    

Exceptions

-   CX\_SHM\_BUILD\_FAILED
    
    An error occurred when the area constructor was executed.
    

Note

The method BUILD does not have an input parameter for the client ID. The area is built in the current client when the method is called.

Continue
[Shared Objects - Area Constructor Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_constructor_class.htm)