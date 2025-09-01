  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Input Parameter Type

Syntax

TYPES type\_for\_import\_parameter TYPE TABLE FOR
      CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT
      CDS\_entity\_name.
TYPES type\_for\_action\_import\_parameter TYPE TABLE FOR
      ACTION IMPORT entity\_name~action\_name.

Effect

Each individual type declaration for input parameters consists of a combination of an operation (CREATE, UPDATE, DELETE, LOCK or READ IMPORT) and an entity or an entity part (for actions).

The type name of the input parameter type\_for\_import\_parameter can be specified freely.

If available, the [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) specified in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry") should be used to reference a CDS entity Therefore, CDS\_entity\_name refers to the name of the CDS entity or the alias as defined in the behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_create   TYPE TABLE FOR CREATE      travel
      tt\_travel\_update   TYPE TABLE FOR UPDATE      travel
      tt\_travel\_delete   TYPE TABLE FOR DELETE      travel
      tt\_travel\_key      TYPE TABLE FOR LOCK        travel
      it\_booking\_read\_in TYPE TABLE FOR READ IMPORT booking.
    TYPES tt\_travel\_set\_status\_booked\_in
      TYPE TABLE FOR ACTION IMPORT travel~set\_status\_booked.
    TYPES tt\_travel\_get\_status\_booked\_in
      TYPE TABLE FOR ACTION IMPORT travel~get\_status.
    ...
ENDCLASS.