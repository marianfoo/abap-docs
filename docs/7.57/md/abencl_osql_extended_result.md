---
title: "Example"
description: |
  See SAP HANA, Cached Views(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views_abexa.htm)
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_osql_extended_result.htm"
abapFile: "abencl_osql_extended_result.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abencl", "osql", "extended", "result"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - System Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_osql.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CL_OSQL_EXTENDED_RESULT, Extended Result, ABENCL_OSQL_EXTENDED_RESULT, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CL\_OSQL\_EXTENDED\_RESULT, Extended Result

An object of the system class CL\_OSQL\_EXTENDED\_RESULT can be specified with the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_extended_result.htm) of an [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause as the target object for an extended result of a [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm), [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm), or [FETCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfetch.htm) statement. First, the object must be created, and the instance constructor must be informed which values the extended result should contain.

Currently, an extended result can be used to check whether a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry") has read data from the cache when accessing a [cached view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry").

Example

See [SAP HANA, Cached Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_cached_views_abexa.htm)