---
title: "CDS BDL - early numbering"
description: |
  Syntax ... early numbering ... Effect Defines unmanaged early numbering(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_early_numbering_glosry.htm 'Glossary Entry') for all primary key fields of a business object entity(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-U
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_early_numb.htm"
abapFile: "abenbdl_early_numb.htm"
keywords: ["select", "update", "delete", "loop", "do", "while", "if", "try", "method", "class", "data", "abenbdl", "early", "numb"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character.htm) → 

CDS BDL - early numbering

Syntax

...
early numbering
...

Effect

Defines unmanaged [early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_early_numbering_glosry.htm "Glossary Entry") for all primary key fields of a [business object entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). Unmanaged early numbering means:

-   The [RAP runtime engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") assigns values to the primary key fields.
-   How the value assignment takes place is defined by the application developer in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") (therefore, it's called unmanaged). The implementation must be done in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR NUMBERING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_numbering.htm).
-   The key value for an instance is available in the transactional buffer instantly after the [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_entity_entities.htm) request for CREATE (that is why it is called early numbering, as opposed to [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm)).

Unmanaged early numbering is defined in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") separately. That means that some business object entities may use unmanaged early numbering, while others use different methods to fill the primary key fields. The affected key fields must be specified as readonly.

Currently available for [managed RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and for [unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), [draft-enabled](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm) RAP BOs. In a [projection business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), early numbering is automatically reused from the base BDEF and doesn't need to be explicitly defined. For details, see topic [CDS BDL - entity behavior characteristics, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character_projection.htm).

Further Information

For further conceptual background on early and late numbering, see the development guide for the ABAP RESTful Application Programming Model, section Numbering.

Hints

Alternative options for numbering:

-   [numbering:managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_numbering.htm)
-   [RAP late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm)

Example

The following example shows a managed BDEF that defines unmanaged early numbering for the root view entity DEMO\_RAP\_EARLY\_NUMBERING. The primary key field KeyField is defined as readonly.

managed implementation in class bp\_demo\_rap\_early\_numbering unique;
strict;
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

The ABAP behavior pool implements the local handler class earlynumbering\_create. This class uses the class [cl\_abap\_random\_int](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrandom_number_class.htm) to generate a random integer value for the primary key field for each entity instance.

Code snippet:

METHOD earlynumbering\_create.
  DATA(random) = cl\_abap\_random\_int=>create( min = 1 max = 100 ).
  LOOP AT entities INTO DATA(entity).
    DATA(KeyField) = random->get\_next(  ).
    APPEND VALUE #(
        %cid      = entity-%cid
        %key      = entity-%key
        KeyField  = KeyField
      ) TO mapped-rootentity.
  ENDLOOP.
ENDMETHOD.

You can see the complete source code in the CCIMP include.

-   The ABAP program DEMO\_RAP\_MANAGED\_EARLY\_NUMB uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access to [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") and performs the following steps:
    -   It creates three entity instances by specifying a value for the field CharField.
    -   It commits the three new entity instances to the database.
    -   Using the ABAP SQL SELECT statement, it displays the content of the database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of unmanaged early numbering.

Result: the values for the primary key field KEY\_FIELD are generated automatically.

![Figure](bdoc_numbering.png)