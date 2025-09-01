  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary.htm) → 

Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for internal tables for which it does not make sense to use secondary keys. Secondary keys are therefore not supported for those operand positions.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   An internal table as an actual parameter for a [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_para.htm) parameter for RFC can have any table type but no secondary key.

-   Only standard tables without secondary keys are possible for the following:

-   rspar in [SUBMIT WITH rspar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_selscreen_parameters.htm) and range\_tab in [SUBMIT WITH sel IN range\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_selscreen_parameters.htm)

-   itab in [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfind_itab.htm) and [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreplace_itab.htm)

-   result\_tab in [SPLIT INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsplit.htm)

-   column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm), in [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm), and in [ORDER BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaporderby_clause.htm)

-   cond\_syntax in [WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_dynamic.htm)

-   source\_syntax in [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm)

-   target\_syntax in INSERT, UPDATE, MODIFY, and DELETE

-   expr\_syntax in [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate_set_expression.htm)

-   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexec_procedure.htm)

-   itab in [EXPORT TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_medium.htm)

-   itab in [GENERATE SUBROUTINE POOL itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subroutine_pool.htm), [READ REPORT INTO itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_report.htm), [INSERT REPORT FROM itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report.htm), and [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_for_itab.htm).

-   itab in [EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapeditor-call_for_itab.htm)

-   itab in [WRITE TO itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_itab.htm)