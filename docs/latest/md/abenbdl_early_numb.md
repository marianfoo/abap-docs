  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20early%20numbering%2C%20ABENBDL_EARLY_NUMB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - early numbering

Syntax

...
early numbering
...

Effect

Defines unmanaged [early numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_early_numbering_glosry.htm "Glossary Entry") for all primary key fields of a [business object entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). Unmanaged early numbering means:

-   The [RAP runtime engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") assigns values to the primary key fields.
-   How the value assignment takes place is defined by the application developer in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") (therefore, it is called unmanaged). The implementation must be done in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR NUMBERING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_numbering.htm).
-   The key value for an instance is available in the transactional buffer instantly after the [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) request for CREATE (which is why it is called early numbering, as opposed to [late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm)).

Unmanaged early numbering is defined in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each [entity behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") separately. That means that some business object entities may use unmanaged early numbering, while others use different methods to fill the primary key fields. The affected key fields must be specified as readonly.

Currently available for [managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and for [unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), [draft-enabled](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) RAP BOs. In [projection business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") and [RAP BO interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"), early numbering is automatically reused from the base BDEF and does not need to be explicitly defined.

Further Information

For further conceptual background on early and late numbering, see the development guide for the ABAP RESTful Application Programming Model, section [Numbering](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d85aec25222145f0b0cbbe8b02db51f0?version=sap_cross_product_abap).

Hint

Alternative options for numbering:

-   [numbering:managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_numbering.htm)
-   [RAP late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_late_numbering.htm)

Example

The following example shows a managed BDEF that defines unmanaged early numbering for the root view entity DEMO\_RAP\_EARLY\_NUMBERING. The primary key field KeyField is defined as readonly.

Note: This example is intentionally kept short and simple and serves demonstration purposes only.

managed implementation in class bp\_demo\_rap\_early\_numbering unique;
strict(2);
define behavior for DEMO\_RAP\_EARLY\_NUMBERING alias RootEntity
persistent table demo\_dbtab\_root
lock master
early numbering
authorization master (global)
{
  create;
  update;
  delete;
  field(readonly) KeyField;
  mapping for demo\_dbtab\_root
  {
    KeyField = key\_field;
    DataField = data\_field;
    CharField = char\_field;
  }
}

The ABAP behavior pool implements the local handler class earlynumbering\_create. This class assigns ascending integer values as primary keys for each entity instance.

Code snippet:

METHOD earlynumbering\_create.
  SELECT SINGLE
  FROM demo\_dbtab\_root
  FIELDS MAX( key\_field )
  INTO @DATA(dobj).
  LOOP AT entities INTO DATA(entity).
    dobj += 1.
    APPEND VALUE #(
        %cid      = entity-%cid
        KeyField  = dobj
      ) TO mapped-rootentity.
  ENDLOOP.
ENDMETHOD.

You can see the complete source code in the CCIMP include.

-   The ABAP class CL\_DEMO\_RAP\_MANAGED\_EARLY\_NUMB uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access to [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") and performs the following steps:
    -   It creates three entity instances by specifying a value for the field CharField.
    -   It commits the three new entity instances to the database.
    -   Using the ABAP SQL SELECT statement, it displays the content of the database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of unmanaged early numbering.