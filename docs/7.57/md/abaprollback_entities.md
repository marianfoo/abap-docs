  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ROLLBACK ENTITIES, ABAPROLLBACK_ENTITIES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

ROLLBACK ENTITIES

Syntax

ROLLBACK ENTITIES.

Effect

Rolls back all changes of the current [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry"). This includes data changes (for example, changes stored in the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") by calling the [cleanup](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_cleanup.htm) method) and enqueue locks. The statement does not provide any output parameters, for example, response or result parameters. ROLLBACK ENTITIES cannot be called within the processing of the LUW within a RAP BO, i. e. within the RAP BO implementation.

In case of a natively supported RAP scenario (for example, [OData](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenodata_glosry.htm "Glossary Entry")), the ROLLBACK ENTITIES call is performed by RAP. In other cases, for example, manually implemented services or applications, the ROLLBACK ENTITIES call must be done explicitly.

Hint

-   ABAP EML statements should not be used within loops.

Further Information

Make sure that you fulfill the [RAP Business Object Contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_bo_contract.htm).

Executable Example

The program DEMO\_RAP\_EML\_ROLLBACK\_ENTITIES demonstrates the effect of the ROLLBACK ENTITIES statement with a managed [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"). Two modify operations are executed, the one including the creation of data sets only, the other creating and deleting data sets. Each modify operation gets [committed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) separately. The database tables are then emptied and the very same operations are carried out again, yet the second modify operation includes the ROLLBACK ENTITIES statement which rolls back the modifications that have not yet been saved from the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"). Consequently, the output table does not show the changes.