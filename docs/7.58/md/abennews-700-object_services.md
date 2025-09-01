  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for ABAP Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Object%20Services%20in%20ABAP%20Release%207.0%2C%20ABENNEWS-700-OBJECT_SERVICES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Object Services in ABAP Release 7.0

[1\. Loading Multiple Persistent Objects](#!ABAP_MODIFICATION_1@1@)
[2\. Query Service](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Loading Multiple Persistent Objects

From ABAP release 7.0, the interface IF\_OS\_CA\_PERSISTENCY of the [persistence service](javascript:call_link\('abenabap_object_services_persist.htm'\)) contains the methods GET\_PERSISTENT\_BY\_OID\_TAB, GET\_PERSISTENT\_BY\_KEY\_TAB, and GET\_PERSISTENT\_BY\_QUERY. This makes it possible to retrieve more than one persistent object at once from the database and to create the appropriate instances in the ABAP program.

Modification 2   

Query Service

From ABAP release 7.0, the [object services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") offer a [query service](javascript:call_link\('abenabap_object_services_query.htm'\)) to find and load [persistent objects](javascript:call_link\('abenpersistent_object_glosry.htm'\) "Glossary Entry") from the database.