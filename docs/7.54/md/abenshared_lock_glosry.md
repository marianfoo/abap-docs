  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

shared lock

[Lock](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry") that allows other users to set further shared locks but no simultaneous [exclusive locks](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") for the locked data. The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement [SELECT](javascript:call_link\('abapselect.htm'\)), without the addition [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)), and the corresponding [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement or a SELECT statement in an [](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry")[AMDP](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") method do not set a corresponding [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") for the rows in question by default. A shared lock is set as an [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") using a call of a [lock function module](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") with the appropriate parameters.