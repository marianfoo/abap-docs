---
title: "ROLLBACK ENTITIES"
description: |
  Syntax ROLLBACK ENTITIES. Effect Rolls back all changes of the current RAP transaction(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_glosry.htm 'Glossary Entry'). This includes data changes (for example, changes stored in the transactional buffer(https://help.sap.co
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback_entities.htm"
abapFile: "abaprollback_entities.htm"
keywords: ["select", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abaprollback", "entities"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ROLLBACK%20ENTITIES%2C%20ABAPROLLBACK_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ROLLBACK ENTITIES

Syntax

ROLLBACK ENTITIES.

Effect

Rolls back all changes of the current [RAP transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_glosry.htm "Glossary Entry"). This includes data changes (for example, changes stored in the [transactional buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") by calling the [cleanup](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_cleanup.htm) method) and enqueue locks. In [unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") scenarios and in [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) scenarios that include an [unmanaged or additional save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm), the [RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must be implemented in a way that it can carry out the tasks mentioned before.

The statement does not provide any output parameters, for example, response or result parameters. ROLLBACK ENTITIES cannot be called within the RAP BO implementation.

In case of a natively supported RAP scenario (for example, [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry")), the ROLLBACK ENTITIES call is performed by RAP. In other cases, for example, manually implemented services or applications, the ROLLBACK ENTITIES call must be done explicitly.

Hints

-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.
-   The rollback request triggers the calling of the [cleanup](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_cleanup.htm) method that clears the transactional buffer.
-   The rollback request (implicitly) triggers the calling of [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback.htm) if the current RAP transaction includes [RAP modify operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry").

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_impl_rules.htm).

Example

The following source code demonstrates the effect of the ROLLBACK ENTITIES statements. The instance of the first modify request is saved to the database. The second ABAP EML MODIFY statement is followed by a ROLLBACK ENTITIES statement that clears the instance data from the transactional buffer. Since there is no data in the transactional buffer to be persisted, the following COMMIT ENTITIES statement does not save any data to the database. Consequently, the internal table that is filled by a SELECT statement shows the same content for the second internal table as the first internal table.

DELETE FROM demo\_tab\_root.
MODIFY ENTITY demo\_managed\_root
  CREATE FIELDS ( key\_field data\_field1\_root
                  data\_field2\_root )
  WITH VALUE #( ( %cid = 'cid1'
                key\_field = 1
                data\_field1\_root = 'aaa'
                data\_field2\_root = 'bbb' ) ).
COMMIT ENTITIES.
IF sy-subrc = 0.
  SELECT \* FROM demo\_tab\_root
    INTO TABLE @FINAL(itab1).
ENDIF.
cl\_demo\_output=>write( itab1 ).
MODIFY ENTITY demo\_managed\_root
  CREATE FIELDS ( key\_field data\_field1\_root
                  data\_field2\_root )
  WITH VALUE #( ( %cid = 'cid2'
                key\_field = 2
                data\_field1\_root = 'ccc'
                data\_field2\_root = 'ddd' ) ).
ROLLBACK ENTITIES.
COMMIT ENTITIES.
IF sy-subrc = 0.
  SELECT \* FROM demo\_tab\_root
    INTO TABLE @FINAL(itab2).
ENDIF.
cl\_demo\_output=>write( itab2 ).
cl\_demo\_output=>display( ).

Executable Example

The class CL\_DEMO\_RAP\_EML\_ROLLBACK\_ENTTS demonstrates the effect of the ROLLBACK ENTITIES statement with a managed [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"). Two modify operations are executed, the one including the creation of data sets only, the other creating and deleting data sets. Each modify operation is [committed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) separately. The database tables are then emptied and the same operations are carried out again. However, the second modify operation includes the ROLLBACK ENTITIES statement which rolls back the modifications that have not yet been saved from the [transactional buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"). Consequently, the output table does not show the changes.