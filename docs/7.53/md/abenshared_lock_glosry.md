---
title: "shared_lock_glosry"
description: |
  shared_lock_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_lock_glosry.htm"
abapFile: "abenshared_lock_glosry.htm"
keywords: ["select", "update", "do", "try", "method", "data", "abenshared", "lock", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

shared lock

[Lock](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlock_glosry.htm "Glossary Entry") that allows other users to set further shared locks but no simultaneous [exclusive locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") for the locked data. The [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm), without the addition [FOR UPDATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_single.htm), and the corresponding [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") statement or a SELECT statement in an [](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_lock_glosry.htm "Glossary Entry")[AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry") method do not set a corresponding [database lock](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_lock_glosry.htm "Glossary Entry") for the rows in question by default. A shared lock is set as an [SAP lock](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock_glosry.htm "Glossary Entry") using a call of a [lock function module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlock_function_module_glosry.htm "Glossary Entry") with the appropriate parameters.