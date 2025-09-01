  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) → 

Global class

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

The [behavior pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), a special global ABAP class, is used to implement the transactional behavior of a [business object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry"). The global class is implicitly defined as abstract and final.

The [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry") CDS\_entity\_behavior specifies the behavior of the business object. ABAP Compiler derives both the operations to implement and the structure types and table types used from behavior definitions. The behavior pool depends on the behavior definition: Changes to the behavior definition lead to its regeneration.

Any number of behavior pools can be assigned to a behavior definition (1:n relation) This way, applications can structure their implementations in multiple units.

The behavior pool can have static methods, CLASS-DATA, CONSTANTS and TYPES.

The actual substance of a behavior pool is located in the local classes. Two types of special local classes can be defined:

-   one or more [handler classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm) to implement the interaction phase of the business object behavior

-   and a [saver class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) to implement the save phase of the business object behavior.

Note

The behavior pool is not instantiated or inherited.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

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