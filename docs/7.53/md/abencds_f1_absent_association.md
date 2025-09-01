  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) →  [ABAP CDS - DEFINE ABSTRACT ENTITY, element\_list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) →  [ABAP CDS - DEFINE ABSTRACT ENTITY, element](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, association

Syntax

... ASSOCIATION *\[* \[min..max\] *\]* TO target ON [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\))
                *\[* WITH DEFAULT FILTER [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) *\]* ...

Effect

Defines and publishes a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") in the [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry"). The association uses an ON condition to associate the current CDS entity with a target data source target. The syntax has basically the same meaning as the addition [ASSOCIATION](javascript:call_link\('abencds_f1_association.htm'\)) in the [SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) statement of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") with the following exceptions:

-   The addition AS \_assoc is not used. The association is declared using the name \_assoc, after which the addition ASSOCIATION is specified in the element list.

-   No [session variables](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") can be used in the conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)).

-   The prefix $projection, used to make reference to an element in the element list, is not supported.

An association defined using the addition ASSOCIATION in the element list of an abstract CDS entity is always published. It cannot, however, be used in any [CDS path expressions](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry"), either in ABAP CDS or in ABAP SQL.

Note

An association of an abstract CDS entity cannot be used anywhere where it could produce instances of join expressions.

Example

The following DDL source code shows an abstract CDS entity that publishes an association with another abstract CDS entity:

define abstract entity demo\_cds\_abstract\_entity\_assoc
  {
    key key\_col: abap.char(3);
        \_assoc : association \[1..1\] to demo\_cds\_abstract\_entity on
                   demo\_cds\_abstract\_entity\_assoc.key\_col = \_assoc.col1;
  }