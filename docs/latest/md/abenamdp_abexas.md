---
title: "AMDP - Examples"
description: |
  -   AMDP - Procedures and Functions in a Nutshell(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensheet_amdp_abexa.htm) -   AMDP - Implementation of an SQLScript Procedure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexa.htm) -   AMDP - Calling
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexas.htm"
abapFile: "abenamdp_abexas.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenamdp", "abexas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP Managed Database Procedures (AMDP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20-%20Examples%2C%20ABENAMDP_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP - Examples

-   [AMDP - Procedures and Functions in a Nutshell](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensheet_amdp_abexa.htm)
-   [AMDP - Implementation of an SQLScript Procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexa.htm)
-   [AMDP - Calling an AMDP Procedure from SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_call_amdp_abexa.htm)
-   [AMDP - Calling an SQLScript Procedure from AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_call_abexa.htm)
-   [AMDP - AMDP Methods in Interfaces and Superclasses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_polymorphism_abexa.htm)
-   [AMDP - SQLScript with Tabular CHANGING Parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_changing_abexa.htm)
-   [AMDP - Method with Specified Service Connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_connection_abexa.htm)
-   [AMDP - Filling a Mesh with SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_amdp_abexa.htm)
-   [AMDP - Comparison of SQLScript with ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_vs_abap_sql_abexa.htm)
-   [AMDP - AMDP Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_functions_abexa.htm)
-   [AMDP - Access to ABAP Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abap_types_abexa.htm)
-   [AMDP - Access to Database Schemas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_db_schema_abexa.htm)
-   [AMDP - Implementation of an L Procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_l_abexa.htm)
-   [AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_graph_abexa.htm)

Continue
![Example](exa.gif "Example") [AMDP - Procedures and Functions in a Nutshell](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensheet_amdp_abexa.htm)
![Example](exa.gif "Example") [AMDP - Implementation of an SQLScript Procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abexa.htm)
![Example](exa.gif "Example") [AMDP - Calling an AMDP Procedure from SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_call_amdp_abexa.htm)
![Example](exa.gif "Example") [AMDP - Calling an SQLScript Procedure from AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_call_abexa.htm)
![Example](exa.gif "Example") [AMDP - AMDP Methods in Interfaces and Superclasses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_polymorphism_abexa.htm)
![Example](exa.gif "Example") [AMDP - SQLScript with Tabular CHANGING Parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_changing_abexa.htm)
![Example](exa.gif "Example") [AMDP - Method with Specified Service Connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_connection_abexa.htm)
![Example](exa.gif "Example") [AMDP - Filling a Mesh with SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmesh_amdp_abexa.htm)
![Example](exa.gif "Example") [AMDP - Comparison of SQLScript with ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_vs_abap_sql_abexa.htm)
![Example](exa.gif "Example") [AMDP - AMDP Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_functions_abexa.htm)
![Example](exa.gif "Example") [AMDP - Access to ABAP Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_abap_types_abexa.htm)
![Example](exa.gif "Example") [AMDP - Access to Database Schemas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_db_schema_abexa.htm)
![Example](exa.gif "Example") [AMDP - Implementation of an L Procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_l_abexa.htm)
![Example](exa.gif "Example") [AMDP - Graph Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_graph_abexa.htm)