---
title: "exclusive_lock_glosry"
description: |
  exclusive_lock_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexclusive_lock_glosry.htm"
abapFile: "abenexclusive_lock_glosry.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "data", "abenexclusive", "lock", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20exclusive%20lock%2C%20ABENEXCLUSIVE_LOCK_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

exclusive lock

[Lock](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlock_glosry.htm "Glossary Entry") that does not allow other users to set simultaneous locks for the exclusively locked data. The [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm), [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm), [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm), and [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm), [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) with the addition [FOR UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_single.htm), and all corresponding [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") statements or statements in [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") set corresponding [database locks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_lock_glosry.htm "Glossary Entry") on the rows they address. An exclusive lock is set as an [SAP lock](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_lock_glosry.htm "Glossary Entry") by calling a [lock function module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlock_function_module_glosry.htm "Glossary Entry") with the appropriate parameters.