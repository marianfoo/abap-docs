  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL Services, ABENABAP_SQL_SERVICES_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP SQL Services

Represent an access mechanism of the [Application Server ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") providing SQL-level access to published, ABAP-managed [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") for consumers outside the system.

Instead of directly querying the underlying, ABAP-owned [database objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_object_glosry.htm "Glossary Entry") via the SQL layer of the ABAP system's database, all SQL requests are routed through the Application Server ABAP and behave just like they would do if executed from within an ABAP program. In doing so, concepts including client handling and security mechanisms for data access control, (read access) logging, etc. are effectively bypassed.