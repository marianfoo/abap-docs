  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) → 

ABAP EML - Consuming RAP BOs

The [ABAP Entity Manipulation Language (EML)](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry") is a subset of ABAP for accessing RAP business objects (RAP BOs). EML statements allow the data content of a RAP BO (transactional buffer) to be read or modified and the persistent storage of modified data to be triggered.

ABAP EML can be used in all ABAP programs to consume RAP BOs. In particular, they can be used in the implementation of a RAP BO in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") itself. For the latter there are some special [EML variants](javascript:call_link\('abeneml_in_abp.htm'\)).

The execution of an EML statement triggers processes in the [RAP runtime framework](javascript:call_link\('abenrap_runt_framework_glosry.htm'\) "Glossary Entry") that call the implementation of the RAP BOs. For [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or unmanaged parts of [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") the implementation is part of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). Otherwise, it is part of the RAP provider framework.

The operands of EML statements are mainly special messenger tables for passing data to and receiving results or messages from RAP BOs. These messenger tables are internal tables whose line type is tailor-made for this purpose.

Continue
[ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\))
[COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\))
[GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\))
[MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\))
[READ ENTITY, ENTITIES](javascript:call_link\('abapread_entity_entities.htm'\))
[ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\))
[SET LOCKS](javascript:call_link\('abapset_locks.htm'\))