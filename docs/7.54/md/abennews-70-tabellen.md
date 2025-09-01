  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70.htm) → 

Internal Tables in Release 7.0

In Release 7.0, additional functions in internal tables have been introduced as follows:

[1\. Addition CASTING after ASSIGNING](#!ABAP_MODIFICATION_1@1@)

[2\. Sort key specified dynamically in SORT](#!ABAP_MODIFICATION_2@2@)

[3\. Optimization when specifying a WHERE condition](#!ABAP_MODIFICATION_3@3@)

Modification 1

Addition CASTING After ASSIGNING

In all statements for processing internal tables in which the addition [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm) can be specified for the output behavior, it is now also possible to use the addition [CASTING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_casting.htm) (familiar from the statement [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm)) to cast a table row to the type of the field symbol.

Modification 2

Sort Key Specified Dynamically in SORT

In the statement [SORT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm), the sort key, sort direction, and the text sorting can be specified in a new variant of the addition BY in a special internal table otab of type ABAP\_SORTORDER\_TAB.

Modification 3

Optimization when Specifying a WHERE Condition

Until now, the optimized table reads performed when specifying an initial segment of the table key (using equality queries joined using AND) in cases where a WHERE condition was specified in the statements [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm), [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab_lines.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab_multiple.htm) were only optimized for [sorted tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry"). From Release 7.0, this is done for [hashed tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhashed_table_glosry.htm "Glossary Entry") too. In hashed tables, however, the entire table key must be specified for the optimization to take place.