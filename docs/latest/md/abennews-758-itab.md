  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.58](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-758.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internal%20Tables%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internal Tables in ABAP Release 7.58

Modification

Improved Optimization of the WHERE Condition

Up to now, an [optimization of the WHERE condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm) by using key access took place only under very limited circumstances where the key value pairs had to be compared explicitly for equality and combined by AND. Now, the compiler analyzes the WHERE condition thoroughly and tries itself to extract the key/value pairs that are necessary for the key access.

Furthermore, any [binary comparison operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_any_operand.htm) and [BETWEEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_between.htm) are now also respected for sorted keys.