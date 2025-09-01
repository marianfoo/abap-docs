  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: shared lock, ABENSHARED_LOCK_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

shared lock

[Lock](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry") that allows other users to set further shared locks but no simultaneous [exclusive locks](javascript:call_link\('abenexclusive_lock_glosry.htm'\) "Glossary Entry") for the locked data. The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement [SELECT](javascript:call_link\('abapselect.htm'\)) without the addition [FOR UPDATE](javascript:call_link\('abapselect_single.htm'\)) as well as the corresponding [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement or a SELECT statement in an [AMDP](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") method do not set such a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") for the addressed lines by default. A shared lock is set as an [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") via a correspondingly parameterized call of a [lock function module](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry").