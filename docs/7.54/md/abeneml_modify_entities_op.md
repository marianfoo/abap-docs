---
title: "ABAP EML - MODIFY ENTITIES OPERATIONS"
description: |
  Syntax MODIFY ENTITIES OPERATIONS operation FAILED   it_failed    DATA(it_failed) MAPPED   it_mapped    DATA(it_mapped) REPORTED it_reported  DATA(it_reported). Effect The dynamic form MODIFY ENTITIES OPERATIONS does not specify an introductory name of the bus
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities_op.htm"
abapFile: "abeneml_modify_entities_op.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "abeneml", "modify", "entities"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) →  [ABAP EML - MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities.htm) → 

ABAP EML - MODIFY ENTITIES OPERATIONS

Syntax

MODIFY ENTITIES
    OPERATIONS operation
   *\[*FAILED   it\_failed   *|* DATA(it\_failed)*\]*
   *\[*MAPPED   it\_mapped   *|* DATA(it\_mapped)*\]*
   *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The dynamic form MODIFY ENTITIES OPERATIONS does not specify an introductory name of the [business object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") (OF root\_name). It allows to merge operations on multiple business objects in a statement.

The row type of an operation operation has the type ABP\_BEHV\_CHANGES\_TAB and consists of following fields:

-   OP             Type  ABP\_BEHV\_OP\_MODIFY
    Operation: IF\_ABAP\_BEHV=>M\_OP-CREATE*|*UPDATE*|*DELETE*|*EXECUTE

-   ENTITY\_NAME    Type  ABP\_ENTITY\_NAME

-   SUB\_NAME       Type  C  Length  30
    Contains the function or association name (for create-by-association); is empty otherwise.

-   INSTANCES      Type  REF  TO  DATA
    Contains the derived table type for the operation.

-   RESULTS        Type  REF  TO  DATA
    Contains the derived type for the results of an action; is empty otherwise.

The response structures FAILED, MAPPED and REPORTED must either have the matching type or be declared inline (for example REPORTED DATA(ls\_repd)). The row type of the response structures has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME    Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME  Type  ABP\_ENTITY\_NAME

-   ENTRIES      Type  REF TO DATA
    Contains the derived table type for FAILED*|*MAPPED*|*REPORTED
    REF TO DATA contains the same derived types during runtime as in static cases.