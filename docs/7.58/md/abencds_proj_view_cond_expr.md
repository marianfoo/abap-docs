  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_pv_transactional_query.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20WHERE%2C%20Transactional%20Query%2C%20ABENCDS_PROJ_VIEW_COND_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CDS DDL - WHERE, Transactional Query

Syntax

... WHERE cds\_cond ...

Effect

Defines a WHERE condition for the result set of a [CDS projection view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_projection_view_glosry.htm "Glossary Entry"). When the CDS projection view is accessed, the result set contains only the data from the projected entity [cds\_entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_as_projection.htm) that meets the condition cds\_cond specified after WHERE.

The condition is either a single relational expression rel\_expr or an expression constructed from the Boolean operators NOT, AND, and OR.

In CDS projection views, the following rules apply to the operands and syntax of the WHERE condition:

-   Comparison operators, BETWEEN, LIKE, and IS \[NOT\] INITIAL are allowed as operators.
-   The Boolean operators NOT, AND, and OR are supported.
-   lhs expects a field of the projected entity. The field does not necessarily have to be included in the projection list.
-   rhs can be a field of the projected entity, an [untyped literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_untyped_literal_v2.htm), or a [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm). When using the operator LIKE, rhs must be a character literal.
    
    Note: [typed literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_typed_literal_v2.htm) are currently not supported in this position.