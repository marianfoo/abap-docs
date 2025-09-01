  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20Associations%2C%20ABENCDS_ASSOCIATION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

CDS DDL - DDIC-Based View, SELECT, Associations

[CDS associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry") offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"). A CDS association can be used to include fields from the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpath_expression_glosry.htm "Glossary Entry"), for example, to specify a field from the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") in the element list of a view, it is internally transformed into a [join](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm "Glossary Entry"). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_expression_glosry.htm "Glossary Entry") superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained in the topic below about CDS associations and joins.

[Compositions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") are special kinds of CDS associations. A CDS composition consists of a [CDS to-parent association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_parent_association_glosry.htm "Glossary Entry") and a [CDS to-child association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abento_child_association_glosry.htm "Glossary Entry") and it defines an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

For an overview of all possible association targets of all CDS entities that can define associations, see [Data Source Matrix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_matrix.htm).

For further details, read the following sections:

-   [Details on CDS Associations: Use cases and Join types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_assoc_join_v1.htm)
-   [Association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v1.htm)
-   [Composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_v1.htm)
-   [To-parent Association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_to_parent_assoc_v1.htm)

Continue
[CDS DDL - DDIC-Based View, Associations and Joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_assoc_join_v1.htm)
[CDS DDL - DDIC-Based View, ASSOCIATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_association_v1.htm)
[CDS DDL - DDIC-Based View, COMPOSITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_v1.htm)
[CDS DDL - DDIC-Based View, ASSOCIATION TO PARENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_to_parent_assoc_v1.htm)
[CDS DDL - DDIC-Based View, cds\_cond, ON, CDS Association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_on_assoc_v1.htm)