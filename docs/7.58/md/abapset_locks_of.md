---
title: "SET LOCKS OF, Long Form"
description: |
  Syntax SET LOCKS OF bdef ENTITY entity1 FROM inst1 ENTITY entity2 FROM inst2 ... response_param(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm). Addition: ... response_param.(#!ABAP_ONE_ADD@1@) Effect The long form of the SET LOCKS state
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks_of.htm"
abapFile: "abapset_locks_of.htm"
keywords: ["insert", "delete", "do", "if", "try", "class", "internal-table", "abapset", "locks"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [SET LOCKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20LOCKS%20OF%2C%20Long%20Form%2C%20ABAPSET_LOCKS_OF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET LOCKS OF, Long Form

Syntax

SET LOCKS OF bdef
   ENTITY entity1 FROM inst1
  *\[*ENTITY entity2 FROM inst2*\]*
  *\[*...*\]*
  *\[*[response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm)*\]*.

Addition:

[... response\_param.](#!ABAP_ONE_ADD@1@)

Effect

The long form of the SET LOCKS statement is used to exclusively lock instances of multiple RAP BO entities.

bdef must be a root entity followed by a list of locks grouped by individual entities. entity1, entity2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the root entity bdef. The root entity itself can also be inserted in the position of entity1, for example. Each part of the list specified after SET LOCKS OF bdef has the same syntax as the [short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks_entity.htm). At least one entry (ENTITY bdef1 FROM inst) must be specified. The root entity name in the position of the first statement, SET LOCKS OF bdef, must be the full entity name. entity1, and so on, should be the entity alias names if provided in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

inst1, inst2, and so on, are internal tables specifying the instances that are to be locked. The tables must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR KEY OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm). They can be constructed in an operand position using [constructor expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), for example with the [value operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_operator_glosry.htm "Glossary Entry") (VALUE) and other [constructor operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) to fill the internal tables with instances as input parameters after the keyword FROM.

Addition   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Hint

The internal tables inst1, inst2, and so on, can also be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR LOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_table_for.htm).

Example

The class CL\_DEMO\_RAP\_EML\_SET\_LOCKS covers all forms of the SET LOCKS statement. It accesses a RAP BO using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and creates several BO instances. A SET LOCKS statement follows that exclusively locks instances via the keys. The following SET LOCKS statement (long form) is used in the middle of the example:

SET LOCKS OF demo\_managed\_root
ENTITY demo\_managed\_root
  FROM VALUE #( ( key\_field = 4 ) )
ENTITY child
  FROM VALUE #( ( key\_field = 6 ) )
   FAILED   FINAL(lt\_failed2)
   REPORTED FINAL(lt\_reported2).

The following image shows the global lock table (transaction SM12) during the transaction, before the ROLLBACK ENTITIES statement is executed. The newly created instances are locked. After the ROLLBACK ENTITIES statement is executed, the entries are automatically deleted from the lock table.

![Figure](abdoc_set_locks_2.png)