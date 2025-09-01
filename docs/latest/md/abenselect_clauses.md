---
title: "SELECT, clauses"
description: |
  This section describes the clauses and additions possible for the SELECT statements of main queries(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmainquery_glosry.htm 'Glossary Entry') and subqueries(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubque
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm"
abapFile: "abenselect_clauses.htm"
keywords: ["select", "do", "if", "try", "data", "abenselect", "clauses"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20clauses%2C%20ABENSELECT_CLAUSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, clauses

This section describes the clauses and additions possible for the SELECT statements of [main queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmainquery_glosry.htm "Glossary Entry") and [subqueries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry"). Information on which clauses are possible in which queries can be found in the relevant statements and clauses.

-   [SINGLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm)
-   [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm)
-   [FIELDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfields_clause.htm)
-   [SELECT clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm)
-   [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_all_entries.htm)
-   [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm)
-   [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm)
-   [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm)
-   [ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm)
-   [INTO*|*APPENDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
-   [abap\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_additions.htm)
    -   [PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_privileged_access.htm)
    -   [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_up_to_offset.htm)
    -   [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_bypassing_buffer.htm)
    -   [CONNECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_connection.htm)

Continue
[SELECT, SINGLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_single.htm)
[SELECT, FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm)
[SELECT, FIELDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfields_clause.htm)
[SELECT, select\_clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm)
[SELECT, FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_all_entries.htm)
[SELECT, WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm)
[SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm)
[SELECT, HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm)
[SELECT, ORDER BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm)
[SELECT, INTO, APPENDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
[SELECT, abap\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_additions.htm)