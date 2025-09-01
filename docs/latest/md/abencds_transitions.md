  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Changing%20the%20Type%20of%20a%20CDS%20Entity%2C%20ABENCDS_TRANSITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

ABAP CDS - Changing the Type of a CDS Entity

A [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") can be changed into another [CDS source type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_type_glosry.htm "Glossary Entry") by replacing the source code. This can be done even after the respective CDS entity has been activated and transported.

Example: You have an active [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and want to change it into a [CDS custom entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").

Steps:

1.  Replace the statement [DEFINE VIEW ENTITY CDSEntityName AS SELECT FROM ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) by [DEFINE CUSTOM ENTITY EntityName...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_custom_entity.htm).
2.  Adapt the source code to comply with all rules for CDS custom entities.
3.  Activate the custom entity.

Result: The entity is changed from CDS view entity to CDS custom entity.

The following type changes are supported:

From

To

CDS view entity

\- CDS custom entity
\- CDS abstract entity

CDS projection view

\- CDS custom entity
\- CDS abstract entity

CDS hierarchy

\- CDS custom entity
\- CDS abstract entity

CDS custom entity

\- CDS view entity
\- CDS projection view
\- CDS abstract entity
\- CDS hierarchy
\- CDS DDIC-based view (obsolete)

CDS abstract entity

\- CDS view entity
\- CDS projection view
\- CDS custom entity
\- CDS hierarchy
\- CDS DDIC-based view (obsolete)

CDS DDIC-based view (obsolete)

\- CDS view entity
\- CDS projection view
\- CDS custom entity
\- CDS abstract entity

[CDS DDIC-based view extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_extend_glosry.htm "Glossary Entry")
(EXTEND VIEW)

[CDS view entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry")
(EXTEND VIEW ENTITY)

The documented ABAP program RUTDDLSV2MIGRATION supports the migration from CDS DDIC-based views (obsolete) to CDS view entities.

The names of elements from the element list, associations, annotations, and clauses can be changed freely and without any restrictions, as long as consumers of the respective CDS entity are not affected.

Restrictions

-   CDS table functions cannot be turned into any other entity type after activation.
-   Changing a [CDS view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") into a [non-SQL CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_non_sql_entity_glosry.htm "Glossary Entry") is possible only if there are no consumers. The reason is that view building on CDS custom entities and CDS abstract entities is not supported. Example: A CDS view entity which serves as data source of another CDS view entity must not be changed into a CDS custom entity.

Hint

Certain type changes are not supported, for example, a CDS view entity cannot be changed into a CDS hierarchy. As a workaround, the CDS view entity can first be changed into a CDS custom entity and as a second step, it can be changed into a CDS hierarchy.