---
title: "Static Methods"
description: |
  BUILD Interface method for implementing the area constructor of an area. input parameter -   INST_NAME of type SHM_INST_NAME Name of the area instance version. Entering a name is optional. The default value is the value of constant CL_SHM_AREA=>DEFAULT_INSTANCE. -   INVOCATION_MODE of type i
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_if_shm_build_instance.htm"
abapFile: "abenshm_if_shm_build_instance.htm"
keywords: ["do", "while", "if", "method", "class", "abenshm", "shm", "build", "instance"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_classes.htm) → 

Shared Objects - IF\_SHM\_BUILD\_INSTANCE

Interface IF\_SHM\_BUILD\_INSTANCE must be included by an [area constructor class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm) that implements an area's optional area constructor.

Static Methods

BUILD

Interface method for implementing the area constructor of an area.

input parameter

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. Entering a name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   INVOCATION\_MODE of type i

This parameter can be used to determine the type of call in the area constructor. The default value CL\_SHM\_AREA=>INVOCATION\_MODE\_EXPLICIT is used for the explicit call. CL\_SHM\_AREA=>INVOCATION\_MODE\_AUTO\_BUILD is passed with the automatic call.

Exceptions

-   CX\_SHM\_BUILD\_FAILED

An error has occurred while executing the area constructor.

Note

The BUILD method does not have an input parameter for the client identifier. The area is built in the current client when the method is called.

Continue
[Shared Objects - Area Constructor Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm)