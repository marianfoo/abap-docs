---
title: "OS - Exception Classes"
description: |
  The exception classes of the Object Services start with the prefix CX_OS_. The exceptions of category CX_DYNAMIC_CHECK are propagated to the caller by Object Services and must be handled by the consumer. The subclasses CX_OS_NO_CHECK_CONTAINER and CX_OS_MIGRATION of CX_NO_CHECK are for i
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenos_exceptions.htm"
abapFile: "abenos_exceptions.htm"
keywords: ["select", "insert", "update", "delete", "do", "while", "class", "data", "abenos", "exceptions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Object Services (OS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_object_services.htm) → 

OS - Exception Classes

The exception classes of the Object Services start with the prefix CX\_OS\_. The exceptions of category CX\_DYNAMIC\_CHECK are propagated to the caller by Object Services and must be handled by the consumer.

The subclasses CX\_OS\_NO\_CHECK\_CONTAINER and CX\_OS\_MIGRATION of CX\_NO\_CHECK are for internal purposes: The first, as a container, allows exceptions of the CX\_DYNAMIC\_CHECK category from internal event handlers to be propagated, while the second is used for migration purposes.

For a more detailed description of the exception classes, see the relevant class documentation.

CX\_ROOT
  |
  |--CX\_DYNAMIC\_CHECK
  |    |
  |    |--CX\_OS\_ERROR
  |         |
  |         |--CX\_OS\_CHECK\_AGENT\_FAILED
  |         |
  |         |--CX\_OS\_CLASS\_NOT\_FOUND
  |         |
  |         |--CX\_OS\_OBJECT
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_NOT\_FOUND
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_EXISTING
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_NOT\_EXISTING
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_NOT\_REFRESHABLE
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_NOT\_RELEASABLE
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_REFERENCE
  |         |    |
  |         |    |--CX\_OS\_OBJECT\_STATE
  |         |
  |         |--CX\_OS\_QUERY\_ERROR
  |         |    |
  |         |    |--CX\_OS\_QUERY\_ATTRIBUTE\_ERROR
  |         |    |
  |         |    |--CX\_OS\_QUERY\_EXPR\_FACT\_ERROR
  |         |    |
  |         |    |--CX\_OS\_QUERY\_PARAMETER\_ERROR
  |         |    |
  |         |    |--CX\_OS\_QUERY\_PARSE\_ERROR
  |         |
  |         |--CX\_OS\_TRANSACTION
  |
  |--CX\_NO\_CHECK
       |
       |--CX\_OS\_SYSTEM\_ERROR
       |    |
       |    |--CX\_OS\_DB
       |    |    |
       |    |    |--CX\_OS\_DB\_SELECT
       |    |    |
       |    |    |--CX\_OS\_DB\_INSERT
       |    |    |
       |    |    |--CX\_OS\_DB\_UPDATE
       |    |    |
       |    |    |--CX\_OS\_DB\_DELETE
       |    |
       |    |--CX\_OS\_DUPLICATE\_OBJECT
       |    |
       |    |--CX\_OS\_INCONSISTENT\_OBJECT
       |    |
       |    |--CX\_OS\_INTERNAL\_ERROR
       |    |
       |    |--CX\_OS\_NO\_IMPLEMENTATION
       |    |
       |    |--CX\_OS\_OBJECT\_REFERENCE
       |    |
       |    |--CX\_OS\_OBJECT\_STATE
       |    |
       |    |--CX\_OS\_SYSTEM
       |    |
       |    |--CX\_OS\_TRANSACTION\_MODE
       |
       |--CX\_OS\_MIGRATION
       |
       |--CX\_OS\_NO\_CHECK\_CONTAINER