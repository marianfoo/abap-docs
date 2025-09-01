---
title: "RAP - foreign entity"
description: |
  Syntax ... foreign entity ForeignEntityName alias AliasName; ... Effect Defines a RAP BO entity(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm 'Glossary Entry') which is not part of the CDS composition tree(https://help.sap.com/doc/abapdocu_l
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_foreign.htm"
abapFile: "abenbdl_foreign.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "types", "abenbdl", "foreign"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Behavior Definition Header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_header.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20foreign%20entity%2C%20ABENBDL_FOREIGN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - foreign entity

Syntax

...
foreign entity ForeignEntityName *\[*alias AliasName*\]*;
...

Effect

Defines a [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") which is not part of the [CDS composition tree](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the current RAP BO as part of the [response structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm), thus enabling message mapping for other BOs. An alias name AliasName can be specified. The length of this alias name can be a maximum of 30 characters.

A [foreign entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") is defined in the [RAP behavior definition header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") and is therefore included in the response structures of all BO nodes of the current RAP BO. A foreign entity includes the specified entity in the response structures, not a complete foreign BO. It is possible to specify multiple foreign entities, if required.

A business object [determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm) may trigger an operation of another business object that then returns messages. To receive and adapt the messages from a foreign business object, the foreign business object can be registered in the current BO. The messages are mapped during the [save sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_seq_glosry.htm "Glossary Entry").

A reimplementation of the method map\_messages in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is optional.

Available for business objects of type [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), [projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), and [interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Mapping Messages Between Business Objects](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/6a0e78d79b0a4f7e8d3298dbd99c8d09?version=sap_cross_product_abap).

Hint

The [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") of a [cross-BO association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry") in a BDEF is automatically included in the response types as a foreign entity. This default behavior can be disabled using the syntax addition [without response](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association.htm).

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_FOREIGN\_ENTITY. It establishes a connection to the foreign entity DEMO\_SALES\_CDS\_SO\_1.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") are not implemented here.

managed implementation in class bp\_demo\_rap\_foreign\_entity unique;
strict(2);
//enables MAP\_MESSAGES:
foreign entity DEMO\_SALES\_CDS\_SO\_1;
define behavior for DEMO\_RAP\_FOREIGN\_ENTITY alias RootEntity
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master (global)
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}

The class CL\_DEMO\_RAP\_FOREIGN\_ENTITY accesses the BDEF and creates three new entity instances.

Code snippet:

DELETE FROM demo\_dbtab\_root.
    MODIFY ENTITIES OF DEMO\_RAP\_FOREIGN\_ENTITY
         ENTITY RootEntity
         CREATE FIELDS ( key\_field ) WITH VALUE #(
              ( %cid = '1' key\_field = 1  )
              ( %cid = '2' key\_field = 2  )
              ( %cid = '3' key\_field = 3  ) )
                MAPPED FINAL(mapped)
               FAILED FINAL(failed)
               REPORTED FINAL(reported).
    COMMIT ENTITIES.

Result: The entities of the referenced foreign business object are added to the reported structure.

![Figure](abdoc_foreign_entity.png)