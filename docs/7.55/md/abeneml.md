  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

ABAP Entity Manipulation Language

\* Work in progress \*

Entity Manipulation Language (or EML for short) is a set of ABAP statements for manipulating the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are granted a behavior by the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). EML statements allow:

-   Modifying operations on CDS entities.
    For this purpose, the statement MODIFY ENTITIES is available in different variants, which reference one or more entities of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), statically or dynamically: [MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)), [MODIFY ENTITY](javascript:call_link\('abeneml_modify_entity.htm'\)) and [MODIFY ENTITIES OPERATIONS](javascript:call_link\('abeneml_modify_entities_op.htm'\)).

-   Read operations on CDS entities.
    For this purpose, the statement READ ENTITIES is available in different variants, which reference one or more entities of a business object, statically or dynamically: [READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)), [READ ENTITY](javascript:call_link\('abeneml_read_entity.htm'\)) and [READ ENTITIES OPERATIONS](javascript:call_link\('abeneml_read_entities_op.htm'\)).

-   Triggering the saver sequence.
    For this purpose the statement [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) is available in different variants: COMMIT ENTITIES and COMMIT ENTITIES RESPONSES.

-   Handling the result of the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method.
    For this purpose there is the block-constructing variant of COMMIT ENTITIES and the [CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\)) statement.

-   Rolling back all changes since the last COMMIT.
    For this purpose there is the [ROLLBACK ENTITIES](javascript:call_link\('abeneml_rollback_entities.htm'\)) statement.

-   Explicit locking of instances for a following modification.
    For this purpose the statement [SET LOCKS](javascript:call_link\('abeneml_set_locks.htm'\)) is available in different variants: SET LOCKS OF and SET LOCKS ENTITY.

If the IMPORT table is empty, the method is not called.

Continue
[ABAP EML - MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\))
[ABAP EML - READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\))
[ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\))
[ABAP EML - CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\))
[ABAP EML - ROLLBACK ENTITIES](javascript:call_link\('abeneml_rollback_entities.htm'\))
[ABAP EML - SET LOCKS](javascript:call_link\('abeneml_set_locks.htm'\))
[ABAP EML - GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\))