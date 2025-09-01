---
title: "RAP - Saving Options"
description: |
  Syntax ... with additional save and cleanupwith full data  with unmanaged save and cleanupwith full data ... Variants: 1. ... with additional save and cleanupwith full data(#!ABAP_VARIANT_1@1@) 2. ... with unmanaged save and cle
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_saving.htm"
abapFile: "abenbdl_saving.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenbdl", "saving"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Saving%20Options%2C%20ABENBDL_SAVING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Saving Options

Syntax

... *{*with additional save *\[*and cleanup*\]**\[*with full data*\]**}*
  *|* *{*with unmanaged save *\[*and cleanup*\]**\[*with full data*\]**}* ...

Variants:

[1\. ... with additional save *\[*and cleanup*\]**\[*with full data*\]*](#!ABAP_VARIANT_1@1@)
[2\. ... with unmanaged save *\[*and cleanup*\]**\[*with full data*\]*](#!ABAP_VARIANT_2@2@)

Additions:

[1\. ... and cleanup](#!ABAP_ADDITION_1@1@)
[2\. ... with full data](#!ABAP_ADDITION_2@2@)

Effect

The syntax additions described in this topic are available only in a [managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").

The additions with additional save and with unmanaged save can be used to enhance or to replace the default save sequence in a managed RAP BO. Per default, the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry") performs a managed save. With an [additional save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_add_save_glosry.htm "Glossary Entry"), steps can be added to the managed save. An [unmanaged save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_unman_save_glosry.htm "Glossary Entry") prevents the default and allows the implementation of a dedicated saving strategy. Both additions require a reimplementation of the [save\_modified](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_saver_meth_save_modified.htm) method of the [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class.htm) in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

When one of the additions with additional save or with unmanaged save is specified, per default, only the values of key fields and changed fields are handed over to the save\_modified method of the RAP saver class. The addition with full data can be used to hand over the full instance data - that means, the values of all fields that are part of the [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") [%data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_data.htm) - to the save\_modified method. Further details are described below.

There are two options for notation:

-   In the [BDEF header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry"), directly after the keyword managed. In this case, the additional save or unmanaged save is enabled for all entities of the business object.
    
    Example: managed with additional save implementation in class ...;
    
-   As an [entity behavior property](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_properties_glosry.htm "Glossary Entry"). In this case, it can be specified for each entity individually.

Example

The following example shows a managed BDEF that defines an additional save in the BDEF header.

managed with additional save with full data
implementation in class bp\_demo\_managed\_additional\_sav unique;
strict(2);
define behavior for DEMO\_MANAGED\_ADDITIONAL\_SAVE
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}

In the ABAP behavior pool, the method save\_modified tracks data changes in a log table. The complete implementation can be seen in the CCIMP include.

The ABAP class CL\_DEMO\_RAP\_MANAGED\_ADD\_SAVE uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object. It performs a create, update, and delete operations. The changes are saved and tracked in internal log tables.

Executable Example

The example shown above is displayed and explained in detail in topic [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Additional Save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_additional_save_abexa.htm).

Variant 1   

... with additional save

Effect

Allows additional functionality to be called during the standard save sequence, for example, change documents and an application log.

An implementation in the local saver class is required.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Additional Save](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ca7097c8ea404b11b1f1334fd54cdd15?version=sap_cross_product_abap).

Variant 2   

... with unmanaged save

Effect

Prevents the BO's managed runtime from saving changes and allows the implementation of a dedicated saving strategy instead. In case of an unmanaged save, a [persistent table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_persistent_table.htm) cannot be specified.

An implementation in the local saver class is required.

Executable Example

An example for a managed RAP BO with unmanaged save is shown in topic [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_managed_unm_save_abexa.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Unmanaged Save](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/2c2bec28fff6475f922f9f876491826d?version=sap_cross_product_abap).

Addition 1   

... and cleanup

Effect

If specified, the RAP saver method [cleanup](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_method_cleanup.htm) must be redefined.

Addition 2   

... with full data

Effect

If specified, then the full instance data is handed over to the [save\_modified](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_saver_meth_save_modified.htm) method of the [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class.htm) in the ABAP behavior pool. In other words, all fields that are part of the component group [%data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_data.htm) are filled with values when the save\_modified method is called.

Hints

-   The fields of the [component group](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_group_glosry.htm "Glossary Entry") [%control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_control.htm) are not affected by this. Still, only the changed fields of %control are flagged.
-   In scenarios where all fields, not only changed fields, are required for further processing, the addition with full data can be used. This spares the RAP BO consumer an additional READ operation.

Example

The following example shows a managed BDEF that defines an additional save with full data in the BDEF header.

managed with additional save with full data
implementation in class bp\_demo\_managed\_additional\_sav unique;
strict(2);
define behavior for DEMO\_MANAGED\_ADDITIONAL\_SAVE
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}

In the ABAP behavior pool, the method save\_modified tracks data changes in a log table. The complete implementation can be seen in the CCIMP include.

The ABAP class CL\_DEMO\_RAP\_MANAGED\_FULL\_DATA uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object. First, it creates two entity instances, filling values into all entity fields. Then, it updates both entity instances, changing the values of two fields, namely field1 and field2. Without the addition with full data, only the values of the changed fields are respected in the save\_modified method. The fields that are not changed have their initial value. But since this example uses with full data, even the values of fields field3 and field4 are respected.

Code Snippet: Note that field3 and field4 are not updated.

MODIFY ENTITY demo\_managed\_additional\_save
     UPDATE FROM VALUE #(
        ( key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'update\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_2'
          %control-field2 = if\_abap\_behv=>mk-on
)
        ( key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'update\_3'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_4'
          %control-field2 = if\_abap\_behv=>mk-on
)
        ).
    COMMIT ENTITIES.

Variable lt\_update in the ABAP behavior pool when the addition with full data is specified: all fields are listed with their values, even the fields which are not included in the update operation.

![Figure](with_full_data.png)

Variable lt\_update in the ABAP behavior pool when the addition with full data is not specified: fields that are not updated are filled with initial values.

![Figure](without_full_data.png)

Note: In this example, fields that are not updated are filled with initial values. Note that this is not always the case. Fields which are not updated do not contain consistent values and the values must therefore not be evaluated.