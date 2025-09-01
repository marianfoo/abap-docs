  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70_ehps.htm) →  [News for Release 7.0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Object Services in Release 7.0, ABENNEWS-700-OBJECT_SERVICES, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Object Services in Release 7.0

[1\. Loading Multiple Persistent Objects](#!ABAP_MODIFICATION_1@1@)
[2\. Query Service](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Loading Multiple Persistent Objects

From Release 7.0, the interface IF\_OS\_CA\_PERSISTENCY of the [persistence service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_persist.htm) contains the methods GET\_PERSISTENT\_BY\_OID\_TAB, GET\_PERSISTENT\_BY\_KEY\_TAB, and GET\_PERSISTENT\_BY\_QUERY. This makes it possible to retrieve more than one persistent object at once from the database and to create the appropriate instances in the ABAP program.

Modification 2   

Query Service

From Release 7.0, the [object services](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_services_glosry.htm "Glossary Entry") offer a [query service](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_object_services_query.htm) to find and load [persistent objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpersistent_object_glosry.htm "Glossary Entry") from the database.