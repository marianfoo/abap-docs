---
title: "itab_key_secondary_restrict"
description: |
  itab_key_secondary_restrict - ABAP latest language reference documentation
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_secondary_restrict.htm"
abapFile: "abenitab_key_secondary_restrict.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "data", "types", "internal-table", "abenitab", "key", "secondary", "restrict"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendobj_itab.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm) →  [itab - Secondary Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_secondary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Restrictions%20for%20Secondary%20Keys%2C%20ABENITAB_KEY_SECONDARY_RESTRICT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

itab - Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for internal tables where the use of secondary keys does not make sense and is therefore not supported there.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   Internal tables of any table type but without secondary keys are possible for the following:
    -   itab in [SEARCH itab for ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsearch_itab.htm) (only index tables, no hashed tables).
    -   Actual parameters for a [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_destination_para.htm) parameter for RFC.
-   Only standard tables without secondary keys are possible for the following:
    -   rspar in [SUBMIT WITH rspar](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm) and range\_tab in [SUBMIT WITH sel IN range\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm)
    -   itab in [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind_itab.htm) and [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace_itab.htm)
    -   result\_tab in [SPLIT INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsplit.htm)
    -   column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm), in [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm), and in [ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm)
    -   cond\_syntax in [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_dynamic.htm)
    -   source\_syntax in [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm)
    -   target\_syntax in [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm), [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm), [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm), and [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm)
    -   expr\_syntax in [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_expression.htm)
    -   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexec_procedure.htm)
    -   itab in [EXPORT TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm)
    -   itab in [GENERATE SUBROUTINE POOL itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgenerate_subroutine_pool.htm), [READ REPORT INTO itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_report.htm), [INSERT REPORT FROM itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_report.htm), and [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsyntax-check_for_itab.htm).
    -   itab in [EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeditor-call_for_itab.htm)
    -   itab in [WRITE TO itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_itab.htm)