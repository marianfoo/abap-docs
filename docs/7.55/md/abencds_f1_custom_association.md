  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element\_list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY, element](javascript:call_link\('abencds_f1_custom_element.htm'\)) → 

CDS DDL - DEFINE CUSTOM ENTITY, association

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target ON [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\))
                *\[* WITH DEFAULT FILTER [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) *\]* ...

Effect

Defines a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of a [CDS custom entity](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)). The CDS association uses an ON condition to associate the current CDS entity with the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target.

The syntax has basically the same meaning as the addition [ASSOCIATION](javascript:call_link\('abencds_simple_association_v2.htm'\)) in the SELECT statement of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") with the following exceptions:

-   The addition AS \_assoc is not used.

-   The CDS association is declared using the name \_assoc in the [element list](javascript:call_link\('abencds_f1_custom_element.htm'\)) of the CDS custom entity, after which the addition ASSOCIATION is specified in the element list.

-   No [session variables](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") can be used in the conditions [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)).

A CDS association defined using the addition ASSOCIATION in the element list of a CDS custom entity is always exposed. It cannot, however, be used in any [SQL path expressions](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry"), either in ABAP CDS or in ABAP SQL.