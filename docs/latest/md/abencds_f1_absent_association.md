  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_abstract_entity.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_list_element.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20ABSTRACT%20ENTITY%2C%20association%2C%20ABENCDS_F1_ABSENT_ASSOCIATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

CDS DDL - DEFINE ABSTRACT ENTITY, association

Syntax

... ASSOCIATION *\[* [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cardinality_v2.htm)*\]* TO target ON [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm)
                *\[* WITH DEFAULT FILTER [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) *\]* ...

Effect

Defines a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_glosry.htm "Glossary Entry") in the [element list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"). The CDS association uses an ON condition to associate the current CDS entity with a [association target](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenassociation_target_glosry.htm "Glossary Entry") target. The same rules apply that are described in topic [CDS view entity, ASSOCIATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v2.htm) with the following differences:

-   The addition AS \_assoc is not used. The CDS association is declared using the name \_assoc, after which the addition ASSOCIATION is specified in the element list.
-   No [session variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry") can be used in the conditions [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm).

A CDS association defined using the addition ASSOCIATION in the element list of a CDS abstract entity is always exposed. It cannot, however, be used in any [SQL path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_path_expression_glosry.htm "Glossary Entry"), neither in ABAP CDS or in ABAP SQL.

Hints

-   A CDS association of a CDS abstract entity cannot be used anywhere where it could produce instances of join expressions.
-   For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_matrix.htm).

Example

The following DDL source code shows a CDS abstract entity that exposes a CDS association with another CDS abstract entity:

define abstract entity demo\_cds\_abstract\_entity\_assoc
  {  
    key key\_col: abap.char(3);
        \_assoc : association of many to one demo\_cds\_abstract\_entity on
                   demo\_cds\_abstract\_entity\_assoc.key\_col = \_assoc.col1;
  }