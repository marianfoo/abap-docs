  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - COMMIT ENTITIES

\* Work in progress \*

Syntax

COMMIT ENTITIES
  *\[*RESPONSE OF root\_name\_1
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*
  *\[*RESPONSE OF root\_name\_2
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*.

Effect

If MODIFY statements are not executed within a [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") and are executed by an ABAP report instead, they would be ignored by the database at first. This is because they are applied only to the transactional buffer (by definition) and the buffer content disappears at the end of the ABAP session. This means the save sequence must be triggered in this scenario. The statement COMMIT ENTITIES is used to do this.

The statement COMMIT ENTITIES saves all [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that are changed within the [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry").

In its simplest form, the statement COMMIT ENTITIES does not have any parameters.

RESPONSE can be used to obtain the response information of one or more business objects manipulated previously using [MODIFY](javascript:call_link\('abeneml_modify_entities.htm'\)). A RESPONSE clause is then created for each root entity involved (root\_name\_1, root\_name\_2, ...):

The response variables are structures with n component (one component for each entity in the business object). Up to two variables can be specified for holding the response information for each [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") in question. FAILED and REPORTED. There are no key assignments in the statement COMMIT, which is why the response structure MAPPED is not used. The response variables must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)). These are the late response types: Instances are identified using the keys valid in the save phase.

The line type of the response structures FAILED and REPORTED has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME     Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   ENTRIES       Type  REF TO DATA
    Contains the derived table type for FAILED*|*REPORTED

Statement successful if sy-subrc is 0. It is not enough to evaluate the result of FAILED.

Note

Within a [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)), COMMIT ENTITIES is one of the forbidden statements. This restriction is also checked dynamically. If violated, the runtime error BEHAVIOR\_ILLEGAL\_STATEMENT occurs.

Continue
[ABAP EML - COMMIT ENTITIES RESPONSES](javascript:call_link\('abeneml_commit_dynamic.htm'\))
[ABAP EML - COMMIT ENTITIES BLOCK](javascript:call_link\('abeneml_commit_block.htm'\))