  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20shared%20lock%2C%20ABENSHARED_LOCK_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

shared lock

[Lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlock_glosry.htm "Glossary Entry") that allows other users to set further shared locks but no simultaneous [exclusive locks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") for the locked data. The [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) without the addition [FOR UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm) as well as the corresponding [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") statement or a SELECT statement in an [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") method do not set such a [database lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_lock_glosry.htm "Glossary Entry") for the addressed lines by default. A shared lock is set as an [SAP lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_lock_glosry.htm "Glossary Entry") via a correspondingly parameterized call of a [lock function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlock_function_module_glosry.htm "Glossary Entry").