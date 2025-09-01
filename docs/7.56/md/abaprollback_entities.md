  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

ROLLBACK ENTITIES

Syntax

ROLLBACK ENTITIES.

Effect

Rolls back all changes of the current [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") in the context of RAP. This includes data changes (for example, changes stored in the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") by calling the [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) method) and enqueue locks. The statement does not provide any output parameters, for example, response or result parameters. ROLLBACK ENTITIES cannot be called within the processing of the LUW within a RAP BO, i. e. within the RAP BO implementation.

In case of a natively supported RAP scenario (for example, [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry")), the ROLLBACK ENTITIES call is performed by RAP. In other cases, for example, manually implemented services or applications, the ROLLBACK ENTITIES call must be done explicitly.

Executable Example

The program DEMO\_RAP\_EML\_ROLLBACK\_ENTITIES demonstrates the effect of the ROLLBACK ENTITIES statement with a managed [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). Two modify operations are executed, the one including the creation of data sets only, the other creating and deleting data sets. Each modify operation gets [committed](javascript:call_link\('abapcommit_entities.htm'\)) separately. The database tables are then emptied and the very same operations are carried out again, yet the second modify operation includes the ROLLBACK ENTITIES statement which rolls back the modifications that have not yet been saved from the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). Consequently, the output table does not show the changes.