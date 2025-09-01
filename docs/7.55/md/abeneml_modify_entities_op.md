  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) →  [ABAP EML - MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm) → 

ABAP EML - MODIFY ENTITIES OPERATIONS

\* Work in progress \*

Syntax

MODIFY ENTITIES
    OPERATIONS operation
   *\[*FAILED   it\_failed   *|* DATA(it\_failed)*\]*
   *\[*MAPPED   it\_mapped   *|* DATA(it\_mapped)*\]*
   *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The dynamic form MODIFY ENTITIES OPERATIONS does not specify an introductory name of the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") (OF root\_name). It allows to merge operations on multiple business objects in a statement.

The line type of an operation operation has the type ABP\_BEHV\_CHANGES\_TAB and consists of following fields:

-   OP             Type  ABP\_BEHV\_OP\_MODIFY
    Operation: IF\_ABAP\_BEHV=>OP-M-CREATE*|*UPDATE*|*DELETE*|*EXECUTE

-   ENTITY\_NAME    Type  ABP\_ENTITY\_NAME

-   SUB\_NAME       Type  C  Length  30
    Contains the function or association name (for create-by-association); is empty otherwise.

-   INSTANCES      Type  REF  TO  DATA
    Contains the derived table type for the operation.

-   RESULTS        Type  REF  TO  DATA
    Contains the derived type for the results of an action; is empty otherwise.

The response structures FAILED, MAPPED and REPORTED must either have the matching type or be declared inline (for example REPORTED DATA(ls\_repd)). The line type of the response structures has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME    Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME  Type  ABP\_ENTITY\_NAME

-   ENTRIES      Type  REF TO DATA
    Contains the derived table type for FAILED*|*MAPPED*|*REPORTED
    REF TO DATA contains the same derived types during runtime as in static cases.