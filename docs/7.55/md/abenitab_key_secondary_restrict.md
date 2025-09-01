---
title: "itab_key_secondary_restrict"
description: |
  itab_key_secondary_restrict - ABAP 7.55 language reference documentation
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_secondary_restrict.htm"
abapFile: "abenitab_key_secondary_restrict.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "data", "internal-table", "abenitab", "key", "secondary", "restrict"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm) →  [itab - Secondary Table Key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key_secondary.htm) → 

itab - Restrictions for Secondary Keys

Internal tables with secondary keys can be used in all [processing statements for internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) and other statements that work with internal tables. However, there are also operand positions for internal tables where the use of secondary keys is not useful and is therefore not supported there.

The use of tables with secondary keys causes syntax or runtime errors for the following operand positions:

-   An internal table as an actual parameter for a [TABLES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_destination_para.htm) parameter for RFC can have any table type but no secondary key.

-   Only standard tables without secondary keys are possible for the following:

-   rspar in [SUBMIT WITH rspar](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_selscreen_parameters.htm) and range\_tab in [SUBMIT WITH sel IN range\_tab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_selscreen_parameters.htm)

-   itab in [FIND IN TABLE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_itab.htm) and [REPLACE IN TABLE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace_itab.htm)

-   result\_tab in [SPLIT INTO TABLE result\_tab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsplit.htm)

-   column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), in [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm), and in [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm)

-   cond\_syntax in [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_dynamic.htm)

-   source\_syntax in [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm)

-   target\_syntax in [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_target.htm), [UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_target.htm), [MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_target.htm), and [DELETE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_target.htm)

-   expr\_syntax in [UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_expression.htm)

-   IN, OUT, INOUT parameters in [EXEC SQL - EXECUTE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexec_procedure.htm)

-   itab in [EXPORT TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm) and [IMPORT FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_medium.htm)

-   itab in [GENERATE SUBROUTINE POOL itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgenerate_subroutine_pool.htm), [READ REPORT INTO itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report.htm), [INSERT REPORT FROM itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_report.htm), and [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_for_itab.htm).

-   itab in [EDITOR-CALL FOR itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapeditor-call_for_itab.htm)

-   itab in [WRITE TO itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_itab.htm)