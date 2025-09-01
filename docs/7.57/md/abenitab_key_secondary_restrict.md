  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key.htm) →  [itab - Secondary Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_secondary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Restrictions for Secondary Keys, ABENITAB_KEY_SECONDARY_RESTRICT, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for internal tables where the use of secondary keys does not make sense and is therefore not supported there.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   Internal tables of any table type but without secondary keys are possible for the following:
    -   itab in [SEARCH itab for ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch_itab.htm) (only index tables, no hashed tables).
    -   Actual parameters for a [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination_para.htm) parameter for RFC.
-   Only standard tables without secondary keys are possible for the following:
    -   rspar in [SUBMIT WITH rspar](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_selscreen_parameters.htm) and range\_tab in [SUBMIT WITH sel IN range\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_selscreen_parameters.htm)
    -   itab in [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_itab.htm) and [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_itab.htm)
    -   result\_tab in [SPLIT INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsplit.htm)
    -   column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm), in [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm), and in [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm)
    -   cond\_syntax in [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_dynamic.htm)
    -   source\_syntax in [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm)
    -   target\_syntax in [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm), [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm), [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm), and [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm)
    -   expr\_syntax in [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate_set_expression.htm)
    -   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexec_procedure.htm)
    -   itab in [EXPORT TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm)
    -   itab in [GENERATE SUBROUTINE POOL itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subroutine_pool.htm), [READ REPORT INTO itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_report.htm), [INSERT REPORT FROM itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report.htm), and [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm).
    -   itab in [EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeditor-call_for_itab.htm)
    -   itab in [WRITE TO itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to_itab.htm)