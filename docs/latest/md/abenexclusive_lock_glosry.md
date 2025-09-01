  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20exclusive%20lock%2C%20ABENEXCLUSIVE_LOCK_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

exclusive lock

[Lock](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry") that does not allow other users to set simultaneous locks for the exclusively locked data. The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [UPDATE](javascript:call_link\('abapupdate.htm'\)), [SELECT](javascript:call_link\('abapselect.htm'\)) with the addition [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)), and all corresponding [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements or statements in [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") set corresponding [database locks](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") on the rows they address. An exclusive lock is set as an [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") by calling a [lock function module](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") with the appropriate parameters.