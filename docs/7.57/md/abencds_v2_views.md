  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - View Entities, ABENCDS_V2_VIEWS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

ABAP CDS - View Entities

A [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") is a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined using the statement [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of ABAP Core Data Services (CDS). A CDS view entity can be used to select fields from one or more data sources (database tables or other CDS entities). Additional semantic properties can be added by using annotations. CDS view entities are the successor of [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). They have the same structure and serve the same purpose as [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). Generally spoken, they represent an improved version of "classic" [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

When a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") is activated, a repository object is created. This repository object can be accessed using the name of the CDS view entity. As a global data type, each CDS view entity represents a structured type with the [elements of the CDS view entity](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) as components and can be used like any [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   In ABAP CDS, the CDS entity can be used as a data source of other CDS entities.
-   In ABAP programs, the CDS entity can be used as a data type and in ABAP SQL read statements.
-   The CDS entity cannot be used as a data type for definitions of [dictionary objects](javascript:call_link\('abendictionary_object_glosry.htm'\) "Glossary Entry").

The name of the CDS entity is in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

The following sections describe client handling and table buffering for CDS view entities. Afterwards, the statement [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) and all possible additions are described.

-   [Client handling](javascript:call_link\('abencds_v2_view_client_handling.htm'\))
-   [Table buffering](javascript:call_link\('abencds_v2_view_buffering.htm'\))
-   [Creation of a CDS view entity](javascript:call_link\('abencds_define_view_entity.htm'\))

Hint

The programming of [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") using the DDL of the Core Data Services is one of the tasks included in the implementation of data models and is not usually the responsibility of regular ABAP application programmers. Once created, [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

Continue
[ABAP CDS - Client Handling in CDS View Entities](javascript:call_link\('abencds_v2_view_client_handling.htm'\))
[ABAP CDS - Table Buffering of CDS View Entities](javascript:call_link\('abencds_v2_view_buffering.htm'\))
[CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\))