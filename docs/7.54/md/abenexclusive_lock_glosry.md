  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

exclusive lock

[Lock](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlock_glosry.htm "Glossary Entry") that does not allow other users to set simultaneous locks for the data in question. The [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm), [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab.htm), [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm), and [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm), [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) with the addition [FOR UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm) plus all corresponding [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry") statements or statements in [AMDP methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") set appropriate [database locks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_lock_glosry.htm "Glossary Entry") on the rows they address. As an [SAP lock](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_lock_glosry.htm "Glossary Entry"), an exclusive lock is set by calling a [lock function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlock_function_module_glosry.htm "Glossary Entry") with the appropriate parameters.