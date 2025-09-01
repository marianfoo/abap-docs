---
title: "ABAP SQL - Read Access"
description: |
  The ABAP SQL language elements for performing reads on the database are: -   SELECT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) -   WITH(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm) -   OPEN CURSOR(https://help.sap.com/doc/abapdocu_757
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm"
abapFile: "abenabap_sql_reading.htm"
keywords: ["select", "do", "if", "data", "abenabap", "sql", "reading"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Read Access, ABENABAP_SQL_READING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

ABAP SQL - Read Access

The ABAP SQL language elements for performing reads on the database are:

-   [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm)
-   [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm)
-   [OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm)
    -   [FETCH NEXT CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfetch.htm)
    -   [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclose_cursor.htm)
-   [UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm), [INTERSECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm), [EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm)

Continue
[SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm)
[WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm)
[OPEN CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm)
[UNION, INTERSECT, EXCEPT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapunion.htm)
[SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm)