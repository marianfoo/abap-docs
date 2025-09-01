  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [CDS BDL - entity behavior definition, projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) →  [CDS BDL - entity behavior body, projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\)) → 

CDS BDL - field characteristics, projection BDEF

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

A [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") automatically and implicitly inherits all [field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)) of its underlying projected BDEF. Field characteristics that don't require an implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") can be added in the projection layer under the condition that the base BDEF hasn't already specified any field characteristics for the respective field.

Field characteristics that require an implementation (currently, this is the case only for features:instance) can't be newly added for regular fields, but for augmented [virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry").

Read the sections below for further details.

Hints

-   Managed internal numbering, specified using they keyword [numbering:managed](javascript:call_link\('abenbdl_field_numbering.htm'\)), is inherited and it can't be newly defined in a projection BDEF.
-   In UI scenarios, field characteristics are displayed as [RAP consumer hint](javascript:call_link\('abenrap_consumer_hint_glosry.htm'\) "Glossary Entry").

Alternative 1   

field(FieldChar) Field1, Field2, ...

Effect

The following field characteristics can be newly added in a projection BDEF:

-   mandatory
-   readonly
-   mandatory:create
-   readonly:update
-   suppress

Variants 1 to 4 work in the same way as described in topic [CDS BDL - field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)).

Field(suppress) can be used to remove a field from the BDEF derived types, OData, and all RAP APIs. As a prerequisite, the field in question must be annotated with Consumption.hidden in the underlying CDS projection view. This is possible for all fields except of key fields. This field characteristic is available in projection BDEFs and in [abstract BDEFs](javascript:call_link\('abenbdl_field_abstract.htm'\)).

If there's already field control defined in the underlying base BDEF, the projection BDEF can't define other field characteristics for the same field(s). Any such attempt leads to a syntax check error.

In a managed or unmanaged RAP BO, multiple field characteristics can be combined. In a projection BDEF, there's only one valid combination: mandatory:create, readonly:update.

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

The ABAP program DEMO\_RAP\_PROJECTION\_NUMBERING uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access to [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") and performs the following steps:

-   It creates three entity instances by specifying a value for the field char\_field1.
-   It commits the three new entity instances to the database.
-   Using the ABAP SQL SELECT statement, it displays the content of the underlying database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of managed [early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry").

Code Snippet:

MODIFY ENTITIES OF DEMO\_RAP\_PROJECTION\_NUMBERING
         ENTITY DEMO\_RAP\_PROJECTION\_NUMBERING
           CREATE
             SET FIELDS WITH VALUE #(
              ( %cid = '1' char\_field1 = 'A'  )
              ( %cid = '2' char\_field1 = 'B'  )
              ( %cid = '3' char\_field1 = 'C'  ) )
                MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.

Result: values for the primary key field are generated automatically.

![Figure](bdoc_internal_numb.png)

Alternative 2   

field(modify*\[*,FieldChar*\]*) Virt1, ...

Effect

[CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") may contain [CDS virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") (defined using the keyword [VIRTUAL](javascript:call_link\('abencds_proj_view_virtual_element.htm'\))), [fields defined by association traversal](javascript:call_link\('abencds_proj_view_element.htm'\)) (path expressions), or [localized fields](javascript:call_link\('abencds_proj_view_element.htm'\)) (defined using the keyword LOCALIZED). Such fields are automatically and implicitly set to read-only. They are excluded from the [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") and a RAP BO consumer can't update those fields.

A way to enable those field for transactional processing is by using the [operation augment](javascript:call_link\('abenbdl_augment_projection.htm'\)). The following syntax can be used to augment a field and thus include it in transactional handling:

field(modify*\[*, FieldChar*\]*) VirtualField;

An augment-enabled virtual field can be controlled with the following field characteristics FieldChar:

-   mandatory
-   readonly
-   mandatory:create
-   readonly:update
-   features:instance
    -   A prerequisite for using features:instance on a virtual field is that [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") is enabled.
    -   An implementation in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR INSTANCE FEATURES](javascript:call_link\('abaphandler_meth_features.htm'\)) in the ABAP behavior pool of the projection layer is required.

For further details on the operation augment, see topic [CDS BDL - augment, projection BDEF](javascript:call_link\('abenbdl_augment_projection.htm'\)).