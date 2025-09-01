  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) →  [ABAP CDS - DEFINE ROLE, conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) → 

ABAP CDS - DEFINE ROLE, cond\_expr

Syntax

... [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\))
  | *\[*NOT*\]* cond\_expr *\[*AND*|*OR cond\_expr*\]* ...

Effect

Formulates an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The result of an access condition is true or false.

An access condition is either a single condition, [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)), or an expression constructed from the Boolean operators NOT, AND, and OR in which parenthesized full conditions cond\_expr using parentheses ( ... ) are possible. The Boolean operators work as follows:

-   NOT negates the result of the following condition. It cannot be used if cond\_expr is one of the following conditions:

-   A PFCG condition [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) whose left side specifies CDS elements that themselves are assigned authorization fields on the right side after ASPECT pfcg\_auth using mapped\_field1, mapped\_field2, ...

-   A generic aspect generic\_aspect.

-   An inheritance condition [inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\)).

-   An AND join is true if both joined conditions are true.

-   An OR join is true if at least one of the joined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a strong binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

When an access condition is evaluated using CDS access control, only those lines are selected for which the access condition is true.