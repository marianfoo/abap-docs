---
title: "ABP - Global class"
description: |
  Work in progress  Syntax CLASS class_name DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF CDS_entity_behavior. PUBLIC SECTION. PROTECTED SECTION. PRIVATE SECTION. ENDCLASS. CLASS class_name IMPLEMENTATION. ENDCLASS. Effect The behavior pool(https://help.sap.com/doc/abapdo
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_global_class.htm"
abapFile: "abenabp_global_class.htm"
keywords: ["update", "do", "if", "try", "method", "class", "data", "types", "abenabp", "global"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) → 

ABP - Global class

\* Work in progress \*

Syntax

CLASS class\_name DEFINITION PUBLIC
  *\[*ABSTRACT*\]*
  *\[*FINAL*\]*
  FOR BEHAVIOR OF CDS\_entity\_behavior.
  PUBLIC SECTION.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.
CLASS class\_name IMPLEMENTATION.
ENDCLASS.

Effect

The [behavior pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), a special global ABAP class, is used to implement the transactional behavior of a [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The global class is implicitly defined as abstract and final.

The [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") CDS\_entity\_behavior specifies the behavior of the business object. ABAP Compiler derives both the operations to implement and the structure types and table types used from behavior definitions. The behavior pool depends on the behavior definition: Changes to the behavior definition lead to its regeneration.

Any number of behavior pools can be assigned to a behavior definition (1:n relation). This way, applications can structure their implementations in multiple units.

The behavior pool can have static methods, CLASS-DATA, CONSTANTS and TYPES.

The actual substance of a behavior pool is located in the local classes. Two types of special local classes can be defined:

-   one or more [handler classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm) to implement the interaction phase of the business object behavior

-   and a [saver class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) to implement the save phase of the business object behavior.

Note

The behavior pool is not instantiated or inherited.

Example

In the following example, the data from the ABAP flight data reference scenario (short flight data scenario) is used. It represents a legacy business logic that can be used to create and update flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in the CDS BDL - Example.

The following example shows the global class of the behavior implementation of the business object.

CLASS zcl\_travel DEFINITION
  PUBLIC
  ABSTRACT
  FINAL
  FOR BEHAVIOR OF travel.
  PUBLIC SECTION.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.
CLASS zcl\_travel IMPLEMENTATION.
ENDCLASS.