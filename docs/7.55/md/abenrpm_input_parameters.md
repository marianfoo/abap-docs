---
title: "Input Parameter Type"
description: |
  Work in progress  Syntax TYPES type_for_import_parameter TYPE TABLE FOR CREATEUPDATEDELETELOCKREAD IMPORT CDS_entity_name. TYPES type_for_action_import_parameter TYPE TABLE FOR ACTION IMPORT entity_name~action_name. Effect Each individual type declaration for input parame
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_input_parameters.htm"
abapFile: "abenrpm_input_parameters.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "types", "abenrpm", "input", "parameters"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) → 

Input Parameter Type

\* Work in progress \*

Syntax

TYPES type\_for\_import\_parameter TYPE TABLE FOR
      CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT
      CDS\_entity\_name.
TYPES type\_for\_action\_import\_parameter TYPE TABLE FOR
      ACTION IMPORT entity\_name~action\_name.

Effect

Each individual type declaration for input parameters consists of a combination of an operation (CREATE, UPDATE, DELETE, LOCK or READ IMPORT) and an entity or an entity part (for actions).

IMPORT, RESULT, or LINK entity-association is expected after READ.

The type name of the input parameter type\_for\_import\_parameter can be specified freely.

If available, the [alias](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_alias.htm) specified in the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") should be used to reference a CDS entity. Therefore, CDS\_entity\_name refers to the name of the CDS entity or the alias as defined in the behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (short flight data scenario) is used. It represents a legacy business logic that can be used to create and update flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in the CDS BDL - Example.

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