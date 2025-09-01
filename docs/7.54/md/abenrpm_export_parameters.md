---
title: "Type of the Output Parameter"
description: |
  Syntax TYPES type_for_export_parameter TYPE TABLE FOR FAILED LATE MAPPED LATE REPORTED LATE READ RESULT CDS_entity_name. TYPES type_for_action_export_parameter TYPE TABLE FOR ACTION RESULT CDS_entity_name~action_name. TYPES ts_reported TYPE RESPONSE FOR
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm"
abapFile: "abenrpm_export_parameters.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abenrpm", "export", "parameters"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Type of the Output Parameter

Syntax

TYPES type\_for\_export\_parameter TYPE TABLE FOR
         FAILED *\[*LATE*\]**|*
         MAPPED *\[*LATE*\]**|*
         REPORTED *\[*LATE*\]**|*
         READ RESULT
      CDS\_entity\_name.
TYPES type\_for\_action\_export\_parameter TYPE TABLE FOR
         ACTION RESULT
      CDS\_entity\_name~action\_name.
TYPES ts\_reported TYPE RESPONSE FOR
         FAILED *\[*LATE*\]**|*
         MAPPED *\[*LATE*\]**|*
         REPORTED *\[*LATE*\]*
      behavior\_definition\_name.

Effect

The output parameters FAILED, MAPPED, and REPORTED are structure types that contain one component for each entity of the business object:

-   MAPPED *\[*LATE*\]*
    Provides the consumer with ID mapping information.
    The mapping information is available in the interaction phase by default. The [%CID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) is then mapped to the real key or to the [%PID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm). The addition LATE specifies that the mapping information is available only when saving. This is important when [late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlate_numbering_glosry.htm "Glossary Entry") is used (the method [adjust\_numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_adjust_numbers.htm)), during which the %PID is mapped to the real key.

-   FAILED *\[*LATE*\]*
    Contains information that identifies the data record when an error occurs.
    FAILED is provided during the [interaction phase](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) and contains the %CID or the [%KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) to specify instances for which an operation (CREATE, UPDATE, DELETE, LOCK, or READ IMPORT) has failed. FAILED with the addition LATE is provided during the [save phase](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) only and contains the %PID or the %KEY, but not the %CID.

-   REPORTED *\[*LATE*\]*
    This parameter is used to send error messages.
    REPORTED is provided during the interaction phase and contains the %CID or the %KEY to specify instances for which an operation has failed. REPORTED LATE is provided when saving only and contains the %PID or the %KEY, but not the %CID.

-   READ RESULT
    This parameter is used to return the result of the operation READ.

The type name of the output parameter (type\_for\_export\_parameter, type\_for\_action\_export\_parameter, and ts\_reported) can be specified freely.

CDS\_entity\_name refers to the name of the CDS entity or the [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) as defined in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) for the CDS entity.

...TYPE RESPONSE FOR... are structures that contain one component for each entity of the business object.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_failed      TYPE TABLE FOR FAILED      travel
      tt\_travel\_mapped      TYPE TABLE FOR MAPPED      travel
      tt\_travel\_mapped\_late TYPE TABLE FOR MAPPED LATE travel
      tt\_travel\_reported    TYPE TABLE FOR REPORTED    travel
      tt\_booking\_read\_out   TYPE TABLE FOR READ RESULT booking.
    TYPES:
      tt\_travel\_set\_status\_booked\_ou
       TYPE TABLE FOR ACTION RESULT travel~set\_status\_booked.
      tt\_travel\_get\_status\_out
       TYPE TABLE FOR ACTION RESULT travel~get\_status.
    ...
ENDCLASS.