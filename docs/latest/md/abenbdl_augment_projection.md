  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_projection_bo.htm) →  [RAP - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_projection.htm) →  [RAP - Entity Behavior Body, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20augment%2C%20Projection%20BDEF%2C%20ABENBDL_AUGMENT_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - augment, Projection BDEF

Syntax Forms

Augmenting Operations

... augment ...

Augmenting Fields

... modify ... ...

Alternatives:

[1\. ... augment ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... modify ... ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

With the operation augmentation, it is possible to add data or modify incoming requests on the projection layer before data reaches the transactional buffer. This is described under Alternative 1, augmenting operations.

Moreover, the operation augmentation can include [virtual elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") that are defined in the projection view layer, in the derived types of the [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") and work with them. This is described under Alternative 2, augmenting fields.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Augmentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/346c2b7516ce4176bbb4daebaa80c2ca?version=sap_cross_product_abap).

Alternative 1   

... augment ...

Effect

With an augmentation implementation, you can add data requests reaching the [projection BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") before the request is passed to the handler of the base BO. Modify operations can be augmented in the [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"). They are implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm) in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") of the projection layer.

The following operations can be augmented:

-   [create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm)
-   [update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm)
-   [create by association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry")

An augmenting operation can refer to original base instances and add field values. It can also create new base instances. In the former case, if an instance from the original request is augmented, it is subject to the following regulations:

-   To augment an original update, issue an augmenting operation update on the same instance.
-   To augment an original create, issue an augmenting operation create on the same instance.
    
    Do not issue an augmenting update, as the base BO would then see the un-augmented create operation, which it may refuse (for example because of a missing mandatory field) or handle in an unwanted manner.
    
-   To augment an original create by association, issue an augmenting operation create by association on the same instance.

It is not possible to set a field in augment which was already set for the original instance. The [RAP runtime](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_runt_framework_glosry.htm "Glossary Entry") discards such augment fields. For example, values set in the original request cannot be changed. Only fields which are unset in the original request can be added.

It is not possible to set fields in augment that are defined as [readonly](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm). Augment is handled like an external access and therefore, any attempt to access a readonly field leads to a runtime error.

When the augmentation operation is executed, the original base instances have already been locked by the framework. If the augment contains new instances, then the runtime attempts to lock them. Instances for which locking fails are included in the FAILED response of the projection request, and are removed from the base request.

Hint

It is possible to combine augment and [precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm). If both the base BO and the projection BO define a precheck method, the execution order is as follows:

1.  precheck on projection
2.  augment on projection
3.  precheck on base

This way, the request including the augmentation can be checked by the base precheck.

Example

The following example shows a projection BDEF that demonstrates how to define and implement the operation augmentation for modify operations.

The base BDEF is DEMO\_RAP\_MANAGED\_ASSOC\_ROOT.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

projection
implementation in class bp\_demo\_rap\_proj\_augment unique;
define behavior for DEMO\_RAP\_PROJ\_AUGMENT alias \_Parent
{
  use create(augment);
  use update(augment);
  use delete;
  use association \_child { create(augment); }
  field(modify) VirtualElement;
}
define behavior for DEMO\_RAP\_PROJ\_AUGMENT\_CHILD alias \_Child
{
  use update;
  use delete;
  use association \_parent;
}

For the implementation in the ABAP behavior pool, see CCIMP include.

The ABAP class CL\_DEMO\_RAP\_PROJ\_AUGMENT uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"). It performs a create, an update, and a [create-by-association operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry"). The augmentations are automatically performed, they add field values and / or add new entity instances.

Executable Example

The example listed above is displayed an explained in detail in topic [RAP BDL - operation augmentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_abexa.htm).

Alternative 2   

... modify ...

Effect

[CDS projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_projection_view_glosry.htm "Glossary Entry") may contain [CDS virtual elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_virtual_element_glosry.htm "Glossary Entry") (defined using the keyword [VIRTUAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_virtual_element.htm)), [fields defined by association traversal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm) (path expressions), or [localized fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_element.htm) (defined using the keyword LOCALIZED). Such fields are by default excluded from the [BDEF derived types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") for the [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), because they are non-transactional in character. Augmentation provides a means to include such fields in transactional handling. As a prerequisite, they must be marked in the projection BDEF as follows:

field (modify) VirtualField;

This causes VirtualField to appear in types like [table for create ProjectionEntity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm).

Then, by augment-enabling the required modify operations and implementing the augment exit, the field can be part of a projection modify request, and translated to the necessary augment operations on the base BO (where the field has no direct counterpart). For example, a localized field can be translated into a create or update of the associated text entity, using the current language as additional key. (The text entity may not even be exposed as a projection entity; it only occurs in the projection BO by means of virtual field\[s\].)

Limitation: Currently, the operation augmentation is not available for the [RAP read operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_read_operation_glosry.htm "Glossary Entry") and therefore, virtual fields cannot be read enabled.

Hint

For an augmented virtual field, field characteristics, such as features:instance, can be defined. For further details, see topic [RAP - Field Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_projection.htm).

Example

The following example shows a projection BDEF that augments a virtual element. The base BDEF is DEMO\_RAP\_MANAGED\_ASSOC\_ROOT.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

projection
implementation in class bp\_demo\_rap\_proj\_augment unique;
define behavior for DEMO\_RAP\_PROJ\_AUGMENT alias \_Parent
{
  use create(augment);
  use update(augment);
  use delete;
  use association \_child { create(augment); }
  field(modify) VirtualElement;
}
define behavior for DEMO\_RAP\_PROJ\_AUGMENT\_CHILD alias \_Child
{
  use update;
  use delete;
  use association \_parent;
}

As a result, the field is part of the BDEF derived types:

![Figure](abdoc_virtual.jpg)

For a complete end-to-end example, see the Development guide for the ABAP RESTful Application Programming Model, section [Editing Language-Dependent Fields](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/fc374ac9b02e4dbcba356afc77432dc2?version=sap_cross_product_abap).

Continue
![Example](exa.gif "Example") [RAP - Operation Augmentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_abexa.htm)