  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Object Services in Release 7.0

[1\. Loading Multiple Persistent Objects](#!ABAP_MODIFICATION_1@1@)
[2\. Query Service](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Loading Multiple Persistent Objects

From Release 7.0, the interface IF\_OS\_CA\_PERSISTENCY of the [persistence service](javascript:call_link\('abenabap_object_services_persist.htm'\)) contains the methods GET\_PERSISTENT\_BY\_OID\_TAB, GET\_PERSISTENT\_BY\_KEY\_TAB, and GET\_PERSISTENT\_BY\_QUERY. This makes it possible to retrieve more than one persistent object at once from the database and to create the appropriate instances in the ABAP program.

Modification 2   

Query Service

From Release 7.0, the [object services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") offer a [query service](javascript:call_link\('abenabap_object_services_query.htm'\)) to find and load [persistent objects](javascript:call_link\('abenpersistent_object_glosry.htm'\) "Glossary Entry") from the database.