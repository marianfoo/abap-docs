  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Object Services in Release 7.0

[1\. Loading multiple persistent objects](#!ABAP_MODIFICATION_1@1@)
[
2\. Query service](#!ABAP_MODIFICATION_2@2@)

Modification 1

Loading Multiple Persistent Objects

From Release 7.0, the interface IF\_OS\_CA\_PERSISTENCY of the [persistence service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_persist.htm) contains the methods GET\_PERSISTENT\_BY\_OID\_TAB, GET\_PERSISTENT\_BY\_KEY\_TAB, and GET\_PERSISTENT\_BY\_QUERY. This makes it possible to retrieve more than one persistent object at once from the database and to create the appropriate instances in the ABAP program.

Modification 2

Query Service

From Release 7.0, the [object services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_services_glosry.htm "Glossary Entry") offer a [query service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_query.htm) to find and load [persistent objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpersistent_object_glosry.htm "Glossary Entry") from the database.