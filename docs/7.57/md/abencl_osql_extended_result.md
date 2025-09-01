  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - System Classes](javascript:call_link\('abencl_osql.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CL_OSQL_EXTENDED_RESULT, Extended Result, ABENCL_OSQL_EXTENDED_RESULT, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CL\_OSQL\_EXTENDED\_RESULT, Extended Result

An object of the system class CL\_OSQL\_EXTENDED\_RESULT can be specified with the addition [EXTENDED RESULT](javascript:call_link\('abapselect_extended_result.htm'\)) of an [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause as the target object for an extended result of a [SELECT](javascript:call_link\('abapselect.htm'\)), [WITH](javascript:call_link\('abapwith.htm'\)), or [FETCH](javascript:call_link\('abapfetch.htm'\)) statement. First, the object must be created, and the instance constructor must be informed which values the extended result should contain.

Currently, an extended result can be used to check whether a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") has read data from the cache when accessing a [cached view](javascript:call_link\('abenhana_cached_views.htm'\)) of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Example

See [SAP HANA, Cached Views](javascript:call_link\('abenhana_cached_views_abexa.htm'\))