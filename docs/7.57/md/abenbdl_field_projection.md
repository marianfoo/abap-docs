---
title: "CDS BDL - Field Characteristics, Projection BDEF"
description: |
  Syntax Forms Field characteristics that can be added for regular fields ... field(readonly) Field1, Field2, ...;  field(mandatory) Field1, Field2, ...;  field(mandatory:create) Field1, Field2, ...;  field(readonly:update) Field1, Field2, ...;  field(suppress) Field1, Field2, ...; Field c
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_projection.htm"
abapFile: "abenbdl_field_projection.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenbdl", "field", "projection"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - CDS Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_projection_bo.htm) →  [CDS BDL - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh_projection.htm) →  [CDS BDL - Entity Behavior Body, Projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body_projection.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Field Characteristics, Projection BDEF, ABENBDL_FIELD_PROJECTION, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Field Characteristics, Projection BDEF

Syntax Forms

Field characteristics that can be added for regular fields

... field(readonly) Field1, Field2, ...;
  *|* field(mandatory) Field1, Field2, ...;
  *|* field(mandatory:create) Field1, Field2, ...;
  *|* field(readonly:update) Field1, Field2, ...;
  *|* field(suppress) Field1, Field2, ...;
Field characteristics that can be added for virtual fields
... field(modify*\[*,FieldChar*\]*)VirtualField1, VirtualField2, ...;

Alternatives:

[1\. field(FieldChar) Field1, Field2, ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. field(modify*\[*,FieldChar*\]*)VirtualField1, VirtualField2, ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

A [projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") automatically and implicitly inherits all [field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm) of its underlying projected BDEF. Field characteristics that do not require an implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") can be added in the projection layer under the condition that the base BDEF hasn't already specified any field characteristics for the respective field.

Field characteristics that require an implementation (currently, this is the case only for features:instance) cannot be newly added for regular fields, but for augmented [virtual elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_virtual_element_glosry.htm "Glossary Entry").

Read the sections below for further details.

Hints

-   Managed internal numbering, specified using the keyword [numbering:managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_numbering.htm), is inherited and it cannot be newly defined in a projection BDEF.
-   In UI scenarios, field characteristics are displayed as [RAP consumer hint](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_consumer_hint_glosry.htm "Glossary Entry").

Alternative 1   

field(FieldChar) Field1, Field2, ...

Effect

The following field characteristics can be newly added in a projection BDEF:

-   mandatory
-   readonly
-   mandatory:create
-   readonly:update
-   suppress

Topic [CDS BDL - field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm) describes how they work.

If there is already field control defined in the underlying base BDEF, the projection BDEF cannot define other field characteristics for the same field(s). Any such attempt leads to a syntax check error.

In a managed or unmanaged RAP BO, multiple field characteristics can be combined. In a projection BDEF, there is only one valid combination: mandatory:create, readonly:update.

Commas can be used to classify multiple fields in the same way. Example: field(readonly) Field1, Field2, Field3;.

Example

The following example demonstrates inheritance. The projection BDEF inherits managed internal numbering from its projected BDEF and therefore, the primary key field KEY\_FIELD is automatically assigned a value.

projection;
define behavior for DEMO\_RAP\_PROJECTION\_NUMBERING
{
  use create;
  use update;
  use delete;
}

The ABAP program DEMO\_RAP\_PROJECTION\_NUMBERING uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access to [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") and performs the following steps:

-   It creates three entity instances by specifying a value for the field char\_field1.
-   It commits the three new entity instances to the database.
-   Using the ABAP SQL SELECT statement, it displays the content of the underlying database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of managed [early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_early_numbering_glosry.htm "Glossary Entry").

Code Snippet:

MODIFY ENTITIES OF DEMO\_RAP\_PROJECTION\_NUMBERING
         ENTITY DEMO\_RAP\_PROJECTION\_NUMBERING
         CREATE FIELDS ( char\_field1 ) WITH VALUE #(
              ( %cid = '1' char\_field1 = 'A'  )
              ( %cid = '2' char\_field1 = 'B'  )
              ( %cid = '3' char\_field1 = 'C'  ) )
                MAPPED FINAL(mapped)
               FAILED FINAL(failed)
               REPORTED FINAL(reported).
    COMMIT ENTITIES.

Result: values for the primary key field are generated automatically.

![Figure](abdoc_internal_numb.png)

Alternative 2   

field(modify*\[*,FieldChar*\]*) Virt1, ...

Effect

[CDS projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry") may contain [CDS virtual elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") (defined using the keyword [VIRTUAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_virtual_element.htm)), [fields defined by association traversal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element.htm) (path expressions), or [localized fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_element.htm) (defined using the keyword LOCALIZED). Such fields are automatically and implicitly set to read-only. They are excluded from the [BDEF derived types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and a RAP BO consumer cannot update those fields.

A way to enable those field for transactional processing is by using the [operation augment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm). The following syntax can be used to augment a field and thus include it in transactional handling:

field(modify*\[*, FieldChar*\]*) VirtualField;

An augment-enabled virtual field can be controlled with the following field characteristics FieldChar:

-   mandatory
-   readonly
-   mandatory:create
-   readonly:update
-   features:instance
    -   A prerequisite for using features:instance on a virtual field is that [BDEF strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is enabled.
    -   An implementation in the [RAP handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE FEATURES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_features.htm) in the ABAP behavior pool of the projection layer is required.

For further details on the operation augment, see topic [CDS BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm).