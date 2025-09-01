---
title: "ABAP EML - COMMIT ENTITIES"
description: |
  Syntax COMMIT ENTITIES RESPONSE OF root_name_1 FAILED    it_failed    DATA(it_failed) REPORTED  it_reported  DATA(it_reported) RESPONSE OF root_name_2 FAILED    it_failed    DATA(it_failed) REPORTED  it_reported  DATA(it_reported)
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_entities.htm"
abapFile: "abeneml_commit_entities.htm"
keywords: ["do", "if", "try", "data", "types", "abeneml", "commit", "entities"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) → 

ABAP EML - COMMIT ENTITIES

Syntax

COMMIT ENTITIES
  *\[*RESPONSE OF root\_name\_1
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*
  *\[*RESPONSE OF root\_name\_2
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*.

Effect

If MODIFY statements are not executed within a [behavior pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") and are executed by an ABAP report instead, they would be ignored by the database at first. This is because they are applied only to the transactional buffer (by definition) and the buffer content disappears at the end of the ABAP session. This means the save sequence must be triggered in this scenario. The statement COMMIT ENTITIES is used to do this.

The statement COMMIT ENTITIES saves all [business objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") that are changed within the [LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry").

In its simplest form, the statement COMMIT ENTITIES does not have any parameters.

RESPONSE can be used to obtain the response information of one or more business objects manipulated previously using [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities.htm). A RESPONSE clause is then created for each root entity involved (root\_name\_1, root\_name\_2, ...):

The response variables are structures with n component (one component for each entity in the business object). Up to two variables can be specified for holding the response information for each [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry") in question. FAILED and REPORTED. There are no key assignments in the statement COMMIT, which is why the response structure MAPPED is not used. The response variables must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)). These are the late response types: Instances are identified using the keys valid in the save phase.

The row type of the response structures FAILED and REPORTED has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME     Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   ENTRIES       Type  REF TO DATA
    Contains the derived table type for FAILED*|*REPORTED

Note

Within a [behavior implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm), COMMIT ENTITIES is one of the forbidden statements. This restriction is also checked dynamically. If violated, the runtime error BEHAVIOR\_ILLEGAL\_STATEMENT occurs.

Continue
[ABAP EML - COMMIT ENTITIES RESPONSES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_dynamic.htm)
[ABAP EML - COMMIT ENTITIES BLOCK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_block.htm)