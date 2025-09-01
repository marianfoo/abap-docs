  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: exclusive lock, ABENEXCLUSIVE_LOCK_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

exclusive lock

[Lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlock_glosry.htm "Glossary Entry") that does not allow other users to set simultaneous locks for the exclusively locked data. The [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm), [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab.htm), [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_dbtab.htm), and [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm), [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) with the addition [FOR UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_single.htm), and all corresponding [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") statements or statements in [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") set corresponding [database locks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_lock_glosry.htm "Glossary Entry") on the rows they address. An exclusive lock is set as an [SAP lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_lock_glosry.htm "Glossary Entry") by calling a [lock function module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlock_function_module_glosry.htm "Glossary Entry") with the appropriate parameters.