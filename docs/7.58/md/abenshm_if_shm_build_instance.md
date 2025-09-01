---
title: "Static Methods"
description: |
  BUILD Interface method for implementing the area constructor of an area. Input Parameters -   INST_NAME of type SHM_INST_NAME Name of the area instance version. Specifying the name is optional. The default value is the value of the constant CL_SHM_AREA=>DEFAULT_INSTANCE. -   INVOCATION_MODE o
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_if_shm_build_instance.htm"
abapFile: "abenshm_if_shm_build_instance.htm"
keywords: ["do", "if", "method", "class", "abenshm", "shm", "build", "instance"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20IF_SHM_BUILD_INSTANCE%2C%20ABENSHM_IF_SHM_BUILD_INSTANCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Shared Objects - IF\_SHM\_BUILD\_INSTANCE

The interface IF\_SHM\_BUILD\_INSTANCE must be included by an [area constructor class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_constructor_class.htm) that implements the optional area constructor of an area.

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
[Shared Objects - Area Constructor Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_constructor_class.htm)