  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - CDS Projection View, Transactional Queries](javascript:call_link\('abencds_pv_transactional_query.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20WHERE%2C%20Transactional%20Query%2C%20ABENCDS_PROJ_VIEW_COND_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CDS DDL - WHERE, Transactional Query

Syntax

... WHERE cds\_cond ...

Effect

Defines a WHERE condition for the result set of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). When the CDS projection view is accessed, the result set contains only the data from the projected entity [cds\_entity](javascript:call_link\('abencds_define_view_as_projection.htm'\)) that meets the condition cds\_cond specified after WHERE.

The condition is either a single relational expression rel\_expr or an expression constructed from the Boolean operators NOT, AND, and OR.

In CDS projection views, the following rules apply to the operands and syntax of the WHERE condition:

-   Comparison operators, BETWEEN, LIKE, and IS \[NOT\] INITIAL are allowed as operators.
-   The Boolean operators NOT, AND, and OR are supported.
-   lhs expects a field of the projected entity. The field does not necessarily have to be included in the projection list.
-   rhs can be a field of the projected entity, an [untyped literal](javascript:call_link\('abencds_untyped_literal_v2.htm'\)), or a [session variable](javascript:call_link\('abencds_session_variable_v2.htm'\)). When using the operator LIKE, rhs must be a character literal.
    
    Note: [typed literals](javascript:call_link\('abencds_typed_literal_v2.htm'\)) are currently not supported in this position.