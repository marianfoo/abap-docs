---
title: "Syntax"
description: |
  SET LOCKS lock_tab response_param(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm). Addition: ... response_param(#!ABAP_ONE_ADD@1@) Effect The dynamic form of the SET LOCKS statement is used to collect instances of multiple RAP BO entities that are
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locks_dyn.htm"
abapFile: "abapset_locks_dyn.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "internal-table", "abapset", "locks", "dyn"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [SET LOCKS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20LOCKS%20lock_tab%2C%20Dynamic%20Form%2C%20ABAPSET_LOCKS_DYN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET LOCKS lock\_tab, Dynamic Form

Syntax

SET LOCKS lock\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Addition:

[... response\_param](#!ABAP_ONE_ADD@1@)

Effect

The dynamic form of the SET LOCKS statement is used to collect instances of multiple RAP BO entities that are to be locked exclusively in one single SET LOCKS statement.

lock\_tab must be an internal table of type ABP\_BEHV\_LOCKS\_TAB. This table has specific components:

Component

Details

entity\_name

Specifies the name of the RAP BO entity for which exclusive locking is intended. The name must be provided using capital letters.

instances

Specifies a reference to an internal table that is typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR KEY OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm).

Addition   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) represents the response parameters that can be specified. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

Hint

The internal tables that are referenced to within lock\_tab as parameters of INSTANCES can also be typed with the [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") [TYPE TABLE FOR LOCK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptype_table_for.htm).

Example

The class CL\_DEMO\_RAP\_EML\_SET\_LOCKS covers all forms of the SET LOCKS statement. It accesses a RAP BO using [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") and creates multiple BO instances. A SET LOCKS statement follows that exclusively locks instances via the keys. The following SET LOCKS statement (dynamic form) is used at the end of the example:

DATA inst TYPE TABLE FOR KEY OF demo\_managed\_root.
DATA inst2 TYPE TABLE FOR KEY OF demo\_managed\_child.
inst  = VALUE #( ( key\_field = 7 ) ).
inst2 = VALUE #( ( key\_field = 9 )
                 ( key\_field = 10 ) ).
FINAL(lt\_lock) = VALUE abp\_behv\_locks\_tab(
( entity\_name = 'DEMO\_MANAGED\_ROOT' instances = REF #( inst ) )
( entity\_name = 'DEMO\_MANAGED\_CHILD' instances = REF #( inst2 ) ) ).
SET LOCKS lt\_lock FAILED   FINAL(lt\_failed3)
                  REPORTED FINAL(lt\_reported3).

The following image shows the global lock table (transaction SM12) during the transaction, before the ROLLBACK ENTITIES statement is executed. The newly created instances are locked. After the ROLLBACK ENTITIES statement is executed, the entries are automatically deleted from the lock table.

![Figure](abdoc_set_locks_3.png)