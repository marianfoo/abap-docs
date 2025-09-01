  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

shared lock

[Lock](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlock_glosry.htm "Glossary Entry") that allows other users to set further shared locks but no simultaneous [exclusive locks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") for the locked data. The [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) without the addition [FOR UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm) as well as the corresponding [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") statement or a SELECT statement in an [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_method_glosry.htm "Glossary Entry") method do not set such a [database lock](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_lock_glosry.htm "Glossary Entry") for the addressed lines by default. A shared lock is set as an [SAP lock](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_lock_glosry.htm "Glossary Entry") via a correspondingly parameterized call of a [lock function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlock_function_module_glosry.htm "Glossary Entry").