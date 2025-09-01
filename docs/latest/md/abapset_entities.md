  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20ENTITIES%2C%20ABAPSET_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET ENTITIES

Syntax

SET ENTITIES OF root\_ent BLOCKED*|*UNBLOCKED.

Additions:

[1\. ... BLOCKED](#!ABAP_ADDITION_1@1@)
[2\. ... UNBLOCKED](#!ABAP_ADDITION_2@2@)

Effect

Blocks or unblocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

root\_ent stands for the full name of a [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") which must be specified. The statement is only allowed in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") of the specified RAP BO root entity. The following restrictions apply to the specification of root\_ent. These are not allowed:

-   [Child entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchild_entity_glosry.htm "Glossary Entry")
-   [Abstract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") root entities
-   [Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") root entities
-   [Projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") root entities
-   [Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_extension_glosry.htm "Glossary Entry")

ABAP EML requests are blocked or unblocked for the following statements when using the SET ENTITIES statements for the specified root entities:

-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm)
-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities.htm)
-   [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_permissions.htm)
-   [SET LOCKS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locks.htm)

The blocking is valid until the end of a [RAP transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_glosry.htm "Glossary Entry"). For each RAP BO root entity blocked in one or more statements, an internal counter is incremented in case of a SET ENTITIES OF ... BLOCKED statement and decremented in case of a SET ENTITIES OF ... UNBLOCKED statement. The counter cannot be negative. The value 0 in the counter means unblocked and a value greater than 0 means blocked. The value in the counter is only visible in the short dump message mentioned below.

sy-subrc is set by the statement with both additions BLOCKED and UNBLOCKED in the same way:

-   0: The blocking status has changed successfully.
-   4: Set whenever the status blocked or unblocked has not changed for the specified root entity.

Hints

-   A [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry") is raised for blocked statements with the exception CX\_ABAP\_BEHV\_RUNTIME\_ERROR. The short dump contains the following information:
    -   The affected RAP BO root entity
    -   The current blocking counter for the affected root entity
    -   The source position of the last SET ENTITIES OF ... BLOCKED statement for the affected root entity
-   ABAP EML statements with the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm) are affected in the same way as ABAP EML statements without the addition.
-   In [RAP create-by-association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") and [read-by-association operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") in the context of [cross-BO associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry"), the affected source root entity and affected target root entity are checked for blockings.

Addition 1   

... BLOCKED.

Effect

Blocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Addition 2   

... UNBLOCKED.

Effect

Unblocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Executable Example

The example [SET ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_set_entities_abexa.htm) demonstrates the SET ENTITIES statements with a managed RAP BO. Note that this example produces a short dump.

Continue
![Example](exa.gif "Example") [SET ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_set_entities_abexa.htm)