  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) → 

Specific Derived Types

\* Work in progress \*

Syntax

TYPES type\_for\_update TYPE TABLE FOR UPDATE CDS\_entity\_name.
TYPES type\_for\_id     TYPE LINE OF          type\_for\_update-%key.
TYPES type\_for\_data   TYPE LINE OF          type\_for\_update-%data.
TYPES type\_for\_row    TYPE STRUCTURE FOR    type\_for\_update.

Effect

Alongside derived parameter types (the types of the [input parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_input_parameters.htm) and [output parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_export_parameters.htm)), certain derived data types can also be defined for the ID fields and data fields.

Using TYPE STRUCTURE FOR it is possible to directly get the row type of a derived table type. This way, the two-stage solution using LINE OF can be avoided.

Example

In the following example, the data from a function module is used. It represents a legacy business logic that can be used to create and update flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in CDS BDL - Example.

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_update       TYPE TABLE FOR UPDATE  travel
      ts\_travel\_update\_id    TYPE LINE OF   tt\_travel\_update-%key
      ts\_travel\_update\_data  TYPE LINE OF   tt\_travel\_update-%data
      tt\_travel\_update\_row   TYPE STRUCTURE FOR   tt\_travel\_update.
    ...
ENDCLASS.