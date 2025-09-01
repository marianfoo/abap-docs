  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) → 

CDS DDL - DDIC-Based View, SELECT, Associations

[CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") offer an advanced modelling capability for CDS data models. A CDS association defines a relationship between two [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). A CDS association can be used to include fields from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") in the current view, and/or it can be published for usage in other CDS entities or in ABAP SQL.

As soon as an association is used in a [path expression](javascript:call_link\('abenpath_expression_glosry.htm'\) "Glossary Entry"), for example, to specify a field from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") in the element list of a view, it is internally transformed into a [join](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry"). So technically, a CDS association is instantiated as join. The benefit of a CDS association compared to a join is that it can be reused in different positions and that it renders the task of coding complex [join expressions](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry") superfluous. Further details about the use cases of CDS associations and by which join type they are represented are explained in the topic below about CDS associations and joins.

[Compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry") and [to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") are special kinds of CDS associations. They define an existential dependency of the composition child to its composition parent. For example, a sales order item (composition child) always belongs to a sales order header (composition parent).

For further details, read the following sections:

-   [Details on CDS Associations: Use cases and Join types](javascript:call_link\('abencds_assoc_join_v1.htm'\))
-   [Association](javascript:call_link\('abencds_simple_association_v1.htm'\))
-   [Composition](javascript:call_link\('abencds_composition_v1.htm'\))
-   [To-parent Association](javascript:call_link\('abencds_to_parent_assoc_v1.htm'\))

Continue
[CDS DDL - DDIC-Based View, Associations and Joins](javascript:call_link\('abencds_assoc_join_v1.htm'\))
[CDS DDL - DDIC-based View, ASSOCIATION](javascript:call_link\('abencds_simple_association_v1.htm'\))
[CDS DDL - DDIC-Based View, COMPOSITION](javascript:call_link\('abencds_composition_v1.htm'\))
[CDS DDL - DDIC-based View, ASSOCIATION TO PARENT](javascript:call_link\('abencds_to_parent_assoc_v1.htm'\))
[CDS DDL - DDIC-based View, cds\_cond, ON, CDS Association](javascript:call_link\('abencds_cond_expr_on_assoc_v1.htm'\))