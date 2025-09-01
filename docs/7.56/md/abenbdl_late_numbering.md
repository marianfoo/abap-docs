---
title: "CDS BDL - late numbering"
description: |
  Syntax ... late numbering ... Effect Defines internal(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_int_numbering_glosry.htm 'Glossary Entry') late numbering(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_late_numbering_glosry.htm 'Glossary Entry') for al
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm"
abapFile: "abenbdl_late_numbering.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "abenbdl", "late", "numbering"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character.htm) → 

CDS BDL - late numbering

Syntax

...
late numbering
...

Effect

Defines [internal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_int_numbering_glosry.htm "Glossary Entry") [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry") for all primary key fields of a [business object entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). Internal late numbering means:

-   The [RAP runtime engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") assigns values to the primary key fields.
-   In the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), the [RAP saver method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm) must be implemented to assign a final primary key value for each entity instance.
-   The key value for an instance is assigned just before the instance is saved on the database. Thus, a gapless assignment of unique keys is ensured.

Internal late numbering must be defined in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") separately. If the [parent node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_node_glosry.htm "Glossary Entry") of an entity defines late numbering, then its direct [child node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_node_glosry.htm "Glossary Entry") must also define late numbering.

When using late numbering for a draft-enabled scenario, it is mandatory that the [RAP draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_table.htm) has an additional key field DRAFTUUID of data type raw(16).

Availability

-   [Unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")

In a [projection BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), late numbering is automatically reused from the base BDEF and doesn't need to be explicitly defined. For details, see topic [CDS BDL - entity behavior characteristics, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character_projection.htm).

Further Information

For further conceptual background on early and late numbering, see the development guide for the ABAP RESTful Application Programming Model, section Numbering.

Hints

Alternative options for numbering:

-   [early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_early_numb.htm)
-   [numbering:managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_numbering.htm)

Example

The following example shows an unmanaged BDEF that defines late numbering for the root view entity DEMO\_UNMANAGED\_LATE\_NUMBERING.

unmanaged implementation in class bp\_demo\_unmanaged\_late\_numberi unique;
define behavior for DEMO\_UNMANAGED\_LATE\_NUMBERING
late numbering
{
  create;
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

-   The ABAP program DEMO\_RAP\_UNMANAGED\_LATE\_NUMB uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access to [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") and performs the following steps:
    -   It creates three entity instances by specifying a value for the field data\_field1\_root.
    -   It commits the three new entity instances to the database.
    -   Using the ABAP SQL SELECT statement, it displays the content of the database table. It can be seen that the primary key field KEY\_FIELD of each entity instance contains a value, which was generated by means of late numbering.

Result: the values for the primary key field KEY\_FIELD are generated automatically.

![Figure](bdoc_late_numb.png)