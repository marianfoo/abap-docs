---
title: "ABAP EML - READ ENTITIES OPERATIONS"
description: |
  Work in progress  Syntax READ ENTITIES OPERATIONS operations FAILED   it_failed  DATA(it_failed) REPORTED it_reported  DATA(it_reported). Effect The dynamic form READ ENTITIES OPERATIONS does not specify an introductory name of the RAP business object(https://help.sa
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entities_op.htm"
abapFile: "abeneml_read_entities_op.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abeneml", "read", "entities"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) →  [ABAP EML - READ ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm) → 

ABAP EML - READ ENTITIES OPERATIONS

\* Work in progress \*

Syntax

READ ENTITIES
    OPERATIONS operations
   *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
   *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The dynamic form READ ENTITIES OPERATIONS does not specify an introductory name of the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") (OF root\_name). It allows to merge operations on multiple business objects in a statement.

The table type of an operation operation has the type ABP\_BEHV\_RETRIEVALS\_TAB and consists of following fields:

-   OP            Type  ABP\_BEHV\_OP\_MODIFY
    Operation: IF\_ABAP\_BEHV=>R\_OP-READ|READ\_BA

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   SUB\_NAME      Type  C  Length  30
    Contains the function or association name (for read-by-association), is empty otherwise.

-   INSTANCES     Type  REF  TO  DATA
    Contains the derived table type for the operation.

-   FULL          Type  C  Length 1
    Flag: Retrieve target instances (not just links)

-   RESULTS       Type  REF  TO  DATA
    Contains the derived table type for the target entity.

-   LINKS                       Type  REF  TO  DATA
    Contains the derived table type for the relationships between source-and target key.

The line type of the response structures FAILED and REPORTED has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME     Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   ENTRIES       Type  REF TO DATA
    Contains the derived table type for FAILED*|*REPORTED

During runtime, REF TO DATA contain the same derived types as in static cases.