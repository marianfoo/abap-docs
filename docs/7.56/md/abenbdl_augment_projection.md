  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [CDS BDL - entity behavior definition, projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) →  [CDS BDL - entity behavior body, projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\)) → 

CDS BDL - augment, projection BDEF

Syntax Forms

Augmenting operations

... augment ...

Augmenting fields
... modify ... ...

Alternatives:

[1\. ... augment ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... modify ... ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

With the operation augmentation, it is possible to add data or modify incoming requests on the projection layer before data reaches the transactional buffer. This is described under Alternative 1, augmenting operations.

Moreover, the operation augmentation can include [virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") that are defined in the projection view layer, in the derived types of the [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") and work with them. This is described under Alternative 2, augmenting fields.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Operation Augmentation.

Alternative 1   

... augment ...

Effect

With an augmentation implementation, you can add data requests reaching the [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") before the request is passed to the handler of the base BO. Modify operations can be augmented in the [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). They are implemented in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)) in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") of the projection layer.

The following operations can be augmented:

-   [create](javascript:call_link\('abenbdl_standard_operations.htm'\))
-   [update](javascript:call_link\('abenbdl_standard_operations.htm'\))
-   [create by association](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry")

An augmenting operation can refer to original base instances and add field values. It can also create new base instances. In the former case, if an instance from the original request is augmented, it is subject to the following regulations:

-   To augment an original update, issue an augmenting operation update on the same instance.
-   To augment an original create, issue an augmenting operation create on the same instance.
    
    Do not issue an augmenting update, as the base BO would then see the un-augmented create operation, which it may refuse (for example because of a missing mandatory field) or handle in an unwanted manner.
    
-   To augment an original create by association, issue an augmenting operation create by association on the same instance.

It is not possible to set a field in augment which was already set for the original instance. The [RAP runtime](javascript:call_link\('abenrap_runt_framework_glosry.htm'\) "Glossary Entry") discards such augment fields. For example, values set in the original request cannot be changed. Only fields which are unset in the original request can be added.

It is not possible to set fields in augment that are defined as [readonly](javascript:call_link\('abenbdl_field_char.htm'\)). Augment is treated like an external access and therefore, any attempt to access a readonly field leads to a runtime error.

When the augmentation operation is executed, the original base instances have already been locked by the framework. If the augment contains new instances, then the runtime attempts to lock them. Instances for which locking fails are included in the FAILED response of the projection request, and are removed from the base request.

Hint

It is possible to combine augment and [precheck](javascript:call_link\('abenbdl_precheck.htm'\)). If both the base BO and the projection BO define a precheck method, the execution order is as follows:

1.  precheck on projection
2.  augment on projection
3.  precheck on base

This way, the request including the augmentation can be checked by the base precheck.

Example

The following example shows a projection BDEF that demonstrates how to define and implement the operation augmentation for modify operations.

The base BDEF is DEMO\_RAP\_MANAGED\_ASSOC\_ROOT.

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

The ABAP program DEMO\_RAP\_PROJ\_AUGMENT uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). It performs a create, an update, and a [create-by-association operation](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry"). The augmentations are automatically performed, they add field values and / or add new entity instances.

Executable Example

The example listed above is displayed an explained in detail in topic [CDS BDL - operation augmentation](javascript:call_link\('abenbdl_augment_abexa.htm'\)).

Alternative 2   

... modify ...

Effect

[CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") may contain [CDS virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") (defined using the keyword [VIRTUAL](javascript:call_link\('abencds_proj_view_virtual_element.htm'\))), [fields defined by association traversal](javascript:call_link\('abencds_proj_view_element.htm'\)) (path expressions), or [localized fields](javascript:call_link\('abencds_proj_view_element.htm'\)) (defined using the keyword LOCALIZED). Such fields are by default excluded from the [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") for the [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), because they are non-transactional in character. Augmentation provides a means to include such fields in transactional handling. As a prerequisite, they must be marked in the projection BDEF as follows:

field (modify) VirtualField;

This causes VirtualField to appear in types like [table for create ProjectionEntity](javascript:call_link\('abaptype_table_for.htm'\)).

Then, by augment-enabling the required modify operations and implementing the augment exit, the field can be part of a projection modify request, and translated to the necessary augment operations on the base BO (where the field has no direct counterpart). For example, a localized field can be translated into a create or update of the associated text entity, using the current language as additional key. (The text entity may not even be exposed as a projection entity; it only occurs in the projection BO by means of virtual field\[s\].)

Limitation: Currently, the operation augmentation is not available for the [RAP read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") and therefore, virtual fields can't be read enabled.

Hint

For an augmented virtual field, field characteristics, such as features:instance, can be defined. For further details, see topic [CDS BDL - field characteristics, projection BDEF](javascript:call_link\('abenbdl_field_projection.htm'\)).

Example

The following example shows a projection BDEF that augments a virtual element. The base BDEF is DEMO\_RAP\_MANAGED\_ASSOC\_ROOT.

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

![Figure](bdoc_virtual.jpg)

For a complete end-to-end example, see the Development guide for the ABAP RESTful Application Programming Model, section Editing Language-Dependent Fields.

Continue
![Example](exa.gif "Example") [CDS BDL - operation augmentation](javascript:call_link\('abenbdl_augment_abexa.htm'\))