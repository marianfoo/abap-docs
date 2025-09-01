  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

exclusive lock

[Lock](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry") that does not allow other users to set simultaneous locks for the data in question. The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) and [UPDATE](javascript:call_link\('abapupdate.htm'\)), [SELECT](javascript:call_link\('abapselect.htm'\)) with the addition [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)) , as well as all relevant [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements or statements in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") set the relevant [database locks](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") on the specified rows. As an [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry"), an exclusive lock is set by calling a [lock function module](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") with the appropriate parameters.