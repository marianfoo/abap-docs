---
title: "SET LOCKS ENTITY, Short Form"
description: |
  Syntax SET LOCKS ENTITY bdef FROM inst response_param(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm). Addition: ... response_param.(#!ABAP_ONE_ADD@1@) Effect Used to exclusively lock instances of a single RAP BO entity. The entity name (bdef) can be sp
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks_entity.htm"
abapFile: "abapset_locks_entity.htm"
keywords: ["delete", "do", "if", "try", "data", "internal-table", "abapset", "locks", "entity"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [SET LOCKS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locks.htm) → 

SET LOCKS ENTITY, Short Form

Syntax

SET LOCKS ENTITY bdef FROM inst *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.

Addition:

[... response\_param.](#!ABAP_ONE_ADD@1@)

Effect

Used to exclusively lock instances of a single RAP BO entity.

The entity name (bdef) can be specified directly. The entity name must be the full entity name and cannot be an alias name because the context of a RAP BO is unknown.

inst is an internal table specifying the instances that are to be locked. The table must be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR KEY OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm). It can be constructed in an operand position using [constructor expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), for example with the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_operator_glosry.htm "Glossary Entry") (VALUE) and other [constructor operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expressions.htm) to fill the internal table with instances as input parameters after the keyword FROM.

Addition   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Hints

The internal table inst can also be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR LOCK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm).

Example

The program DEMO\_RAP\_EML\_SET\_LOCKS covers all forms of the SET LOCKS statement. It accesses a RAP BO using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and creates several BO instances. A SET LOCKS statement follows that exclusively locks instances via the keys. The following SET LOCKS statement (short form) is used at the beginning of the example:

SET LOCKS ENTITY demo\_managed\_root
   FROM VALUE #( ( key\_field = 1 )
                 ( key\_field = 2 ) )
    FAILED   DATA(lt\_failed1)
    REPORTED DATA(lt\_reported1).

The following image shows the global lock table (transaction SM12) during the transaction, before the ROLLBACK ENTITIES statement is executed. The newly created instances are locked. After the ROLLBACK ENTITIES statement is executed, the entries are automatically deleted from the lock table.

![Figure](bdoc_set_locks_1.png)