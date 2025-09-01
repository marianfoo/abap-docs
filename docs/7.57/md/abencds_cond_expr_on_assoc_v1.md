  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, cds_cond, ON, CDS Association, ABENCDS_COND_EXPR_ON_ASSOC_
V1, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, cds\_cond, ON, CDS Association

Rules for conditions [cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v1.htm) in an [ON condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_v1.htm) of a [CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_association_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   All relational operators are allowed.
-   A [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v1.htm) of one of the two data sources [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm) of the CDS association can be specified for lhs.
-   A [field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v1.htm) of both data sources [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm) of the CDS association, a [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v1.htm) with optional domain prefix, a [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v1.htm), or a [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) can be specified for rhs (with the exception of the operator [LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_like_v1.htm)).
-   A field of the [association source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_source_glosry.htm "Glossary Entry") can also be specified by an alternative element name (defined using [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm)) of the current CDS view.
-   At least one comparison for equality between a field of the initial data source and a field of the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") of the CDS association must be performed.
-   No path expressions or other expressions or function calls can be specified.