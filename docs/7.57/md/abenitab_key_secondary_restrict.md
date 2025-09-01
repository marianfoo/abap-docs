  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Overview](javascript:call_link\('abenitab_oview.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) →  [itab - Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Restrictions for Secondary Keys, ABENITAB_KEY_SECONDARY_RESTRICT, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](javascript:call_link\('abentable_processing_statements.htm'\)) and other statements that work with internal tables. However, there are also operand positions for internal tables where the use of secondary keys does not make sense and is therefore not supported there.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   Internal tables of any table type but without secondary keys are possible for the following:
    -   itab in [SEARCH itab for ...](javascript:call_link\('abapsearch_itab.htm'\)) (only index tables, no hashed tables).
    -   Actual parameters for a [TABLES](javascript:call_link\('abapcall_function_destination_para.htm'\)) parameter for RFC.
-   Only standard tables without secondary keys are possible for the following:
    -   rspar in [SUBMIT WITH rspar](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) and range\_tab in [SUBMIT WITH sel IN range\_tab](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\))
    -   itab in [FIND IN TABLE itab](javascript:call_link\('abapfind_itab.htm'\)) and [REPLACE IN TABLE itab](javascript:call_link\('abapreplace_itab.htm'\))
    -   result\_tab in [SPLIT INTO TABLE result\_tab](javascript:call_link\('abapsplit.htm'\))
    -   column\_syntax in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), in [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), and in [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\))
    -   cond\_syntax in [WHERE](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))
    -   source\_syntax in [SELECT](javascript:call_link\('abapfrom_clause.htm'\))
    -   target\_syntax in [INSERT](javascript:call_link\('abapiumd_target.htm'\)), [UPDATE](javascript:call_link\('abapiumd_target.htm'\)), [MODIFY](javascript:call_link\('abapiumd_target.htm'\)), and [DELETE](javascript:call_link\('abapiumd_target.htm'\))
    -   expr\_syntax in [UPDATE](javascript:call_link\('abapupdate_set_expression.htm'\))
    -   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](javascript:call_link\('abapexec_procedure.htm'\))
    -   itab in [EXPORT TO INTERNAL TABLE itab](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) and [IMPORT FROM INTERNAL TABLE itab](javascript:call_link\('abapimport_medium.htm'\))
    -   itab in [GENERATE SUBROUTINE POOL itab](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)), [READ REPORT INTO itab](javascript:call_link\('abapread_report.htm'\)), [INSERT REPORT FROM itab](javascript:call_link\('abapinsert_report.htm'\)), and [SYNTAX-CHECK FOR itab](javascript:call_link\('abapsyntax-check_for_itab.htm'\)).
    -   itab in [EDITOR-CALL FOR itab](javascript:call_link\('abapeditor-call_for_itab.htm'\))
    -   itab in [WRITE TO itab](javascript:call_link\('abapwrite_to_itab.htm'\))