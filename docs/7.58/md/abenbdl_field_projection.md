  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [RAP - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) →  [RAP - Entity Behavior Body, Projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Field%20Characteristics%2C%20Projection%20BDEF%2C%20ABENBDL_FIELD_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

RAP - Field Characteristics, Projection BDEF

Syntax Forms

Field Characteristics That Can Be Added for Regular Fields

... field(readonly) Field1, Field2, ...;
  *|* field(mandatory:create) Field1, Field2, ...;
  *|* field(readonly:update) Field1, Field2, ...;
  *|* field(suppress) Field1, Field2, ...;

Field Characteristics That Can Be Added for Virtual Fields

... field(modify*\[*,FieldChar*\]*)VirtualField1, VirtualField2, ...;

Alternatives:

[1\. field(FieldChar) Field1, Field2, ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. field(modify*\[*,FieldChar*\]*)VirtualField1, VirtualField2, ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

A [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") automatically and implicitly inherits all [field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)) of its underlying projected BDEF. Field characteristics that do not require an implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") can be added in the projection layer under the condition that the base BDEF hasn't already specified any field characteristics for the respective field.

Field characteristics that require an implementation (currently, this is the case only for features:instance) cannot be added for regular fields in the projection layer, but for augmented [virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry").

Read the sections below for further details.

Hints

-   Managed internal numbering, specified using the keyword [numbering:managed](javascript:call_link\('abenbdl_field_numbering.htm'\)), is inherited and it cannot be newly defined in a projection BDEF.
-   In UI scenarios, field characteristics are displayed as [RAP consumer hint](javascript:call_link\('abenrap_consumer_hint_glosry.htm'\) "Glossary Entry").

Alternative 1   

field(FieldChar) Field1, Field2, ...

Effect

The following field characteristics can be newly added in a projection BDEF:

-   readonly
-   mandatory:create
-   readonly:update
-   suppress

Topic [RAP BDL - field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)) describes how they work.

If there is already field control defined in the underlying base BDEF, the projection BDEF cannot define other field characteristics for the same field(s). Any such attempt leads to a syntax check error.

In a managed or unmanaged RAP BO, multiple field characteristics can be combined. In a projection BDEF, there is only one valid combination: mandatory:create, readonly:update.

Commas can be used to classify multiple fields in the same way. Example: field(readonly) Field1, Field2, Field3;.

Example

The following example demonstrates inheritance. The projection BDEF inherits managed internal numbering from its projected BDEF and therefore, the primary key field KEY\_FIELD is automatically assigned a value.

Note: This example does not fully meet the requirements of the [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

projection;
define behavior for DEMO\_RAP\_PROJECTION\_NUMBERING
{
  use create;
  use update;
  use delete;
  field(readonly) int\_field1;
}

The ABAP class CL\_DEMO\_RAP\_PROJECTION\_NMBRNG uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access to [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") and performs the following steps:

-   It creates three entity instances by specifying a value for the field char\_field1.
-   It commits the three new entity instances to the database.
-   Using the ABAP SQL SELECT statement, it displays the content of the underlying database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of managed [early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry").

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

[CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") may contain [CDS virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") (defined using the keyword [VIRTUAL](javascript:call_link\('abencds_proj_view_virtual_element.htm'\))), [fields defined by association traversal](javascript:call_link\('abencds_proj_view_element.htm'\)) (path expressions), or [localized fields](javascript:call_link\('abencds_proj_view_element.htm'\)) (defined using the keyword LOCALIZED). Such fields are automatically and implicitly set to read-only. They are excluded from the [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") and a RAP BO consumer cannot update those fields.

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

For further details on the operation augment, see topic [RAP BDL - augment, projection BDEF](javascript:call_link\('abenbdl_augment_projection.htm'\)).