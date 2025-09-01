  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20shared%20lock%2C%20ABENSHARED_LOCK_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

shared lock

[Lock](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry") that allows other users to set further shared locks but no simultaneous [exclusive locks](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") for the locked data. The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [SELECT](javascript:call_link\('abapselect.htm'\)) without the addition [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)) as well as the corresponding [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement or a SELECT statement in an [AMDP](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") method do not set such a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") for the addressed lines by default. A shared lock is set as an [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") via a correspondingly parameterized call of a [lock function module](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry").