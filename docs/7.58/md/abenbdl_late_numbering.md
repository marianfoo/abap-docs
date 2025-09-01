  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20late%20numbering%2C%20ABENBDL_LATE_NUMBERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - late numbering

Syntax

...
late numbering
...

Effect

Defines [internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_numbering_glosry.htm "Glossary Entry") [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry") for all primary key fields of a [business object entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). Internal late numbering means:

-   The [RAP runtime engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") assigns values to the primary key fields.
-   In the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), the [RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) must be implemented to assign a final primary key value for each entity instance.
-   The key value for an instance is assigned just before the instance is saved on the database. Thus, a gapless assignment of unique keys is ensured.

Internal late numbering must be defined in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each [entity behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") separately. If the [parent node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparent_node_glosry.htm "Glossary Entry") of an entity defines late numbering, then its direct [child node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_node_glosry.htm "Glossary Entry") must also define late numbering.

When using late numbering for a draft-enabled scenario, it is mandatory that the [RAP draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_table.htm) has an additional key field DRAFTUUID of data type raw(16).

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   Managed and [draft-enabled](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm) RAP BOs
-   Unmanaged and [draft-enabled](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_with_draft.htm) RAP BOs
-   In a [projection BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), late numbering is automatically reused from the base BDEF and does not need to be explicitly defined. For details, see topic [RAP - Entity Behavior Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character_projection.htm).
-   In a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"), late numbering is automatically reused from the base BDEF and does not need to be explicitly defined. For details, see topic [RAP - Entity Behavior Definition, Interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_interface.htm).

Further Information

For further conceptual background on early and late numbering, see the development guide for the ABAP RESTful Application Programming Model, section [Numbering](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d85aec25222145f0b0cbbe8b02db51f0?version=sap_cross_product_abap).

Hint

Alternative options for numbering:

-   [early numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_early_numb.htm)
-   [numbering:managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_numbering.htm)

Example

The following example shows an unmanaged BDEF that defines late numbering for the root view entity DEMO\_UNMANAGED\_LATE\_NUMBERING.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and focuses on specific RAP aspects. For example, [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is not enabled. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

unmanaged implementation in class bp\_demo\_unmanaged\_late\_numberi unique;
define behavior for DEMO\_UNMANAGED\_LATE\_NUMBERING
late numbering
{
  create;
  field (readonly:update) key\_field;
}

The ABAP behavior pool implements the local handler class adjust\_numbers. In this class, values are defined for the primary key field key\_field. The first new entity instance is assigned the value '1' and each new entity instance is assigned the next higher integer.

Code snippet:

METHOD adjust\_numbers.
  DATA number TYPE i.
  number = 1.
LOOP AT lcl\_buffer=>root\_buffer ASSIGNING FIELD-SYMBOL(<ls\_create>).
    <ls\_create>-key\_field = number.
    number = number + 1.
    APPEND VALUE #( %pid     = <ls\_create>-pid
                    key\_field = number )
                    TO mapped-demo\_unmanaged\_late\_numbering.
  ENDLOOP.
ENDMETHOD.

You can see the complete source code in the CCIMP include.

-   The ABAP class CL\_DEMO\_RAP\_UNMANAGED\_LATE\_NMB uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") and performs the following steps:
    -   It creates three entity instances by specifying a value for the field data\_field1\_root.
    -   It commits the three new entity instances to the database.
    -   Using the ABAP SQL SELECT statement, it displays the content of the database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of late numbering.

Result: the values for the primary key field KEY\_FIELD are generated automatically.

![Figure](abdoc_late_numb.png)