  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Abstract Entities](javascript:call_link\('abencds_abstract_entities.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) →  [CDS DDL - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) → 

CDS DDL - DEFINE ABSTRACT ENTITY, association

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target ON [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\))
                *\[* WITH DEFAULT FILTER [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) *\]* ...

Effect

Defines a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"). The CDS association uses an ON condition to associate the current CDS entity with a [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") target. The same rules apply that are described in topic [CDS view entity, ASSOCIATION](javascript:call_link\('abencds_simple_association_v2.htm'\)) with the following differences:

-   The addition AS \_assoc is not used. The CDS association is declared using the name \_assoc, after which the addition ASSOCIATION is specified in the element list.
-   No [session variables](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") can be used in the conditions [cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)).

A CDS association defined using the addition ASSOCIATION in the element list of a CDS abstract entity is always exposed. It cannot, however, be used in any [SQL path expressions](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry"), neither in ABAP CDS or in ABAP SQL.

Hint

A CDS association of a CDS abstract entity cannot be used anywhere where it could produce instances of join expressions.

Example

The following DDL source code shows a CDS abstract entity that exposes a CDS association with another CDS abstract entity:

define abstract entity demo\_cds\_abstract\_entity\_assoc
  {  
    key key\_col: abap.char(3);
        \_assoc : association \[1..1\] to demo\_cds\_abstract\_entity on
                   demo\_cds\_abstract\_entity\_assoc.key\_col = \_assoc.col1;
  }