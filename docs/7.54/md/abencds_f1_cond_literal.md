  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, literal\_condition

Syntax

... *{* element [operator](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)) *\[*'*\]*value*\[*'*\]* *}* ...
  *|* *{* element *\[*NOT*\]* BETWEEN *\[*'*\]*value1*\[*'*\]* AND *\[*'*\]*value2*\[*'*\]* *}*
  *|* *{* element *\[*NOT*\]* LIKE 'value' *\[*ESCAPE 'esc'*\]* *}*
  *|* *{* element IS *\[*NOT*\]* NULL *}* ...

Effect

Literal condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A literal condition can be one of the following relational expressions for an element element of the CDS entity for which the access condition is defined.

-   Comparison with a literal value value using a logical operator [operator](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)).

-   Check using *\[*NOT*\]* BETWEEN to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values value1 and value2.

-   Check using *\[*NOT*\]* LIKE to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (%) can be used as a placeholder for any string and the underscore character (\_) for any single character. The addition ESCAPE can be used to define a single character escape character 'esc’ in quotation marks for the placeholders.

-   Check using IS *\[*NOT*\]* NULL to verify whether the left side is (or is not) the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The element element can be specified directly or by using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) and must have one of the valid [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the [CDS element](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)), [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)), or as individual conditions.

-   The character # is recommended as the escape character esc for the operator LIKE.

Example

The following CDS role defines an access condition for the CDS view demo\_cds\_auth\_literal. A single literal condition is specified for the element carrid in the CDS view.

@MappingRole: true
define role demo\_cds\_role\_literal {
  grant select on demo\_cds\_auth\_literal
  where carrid = 'LH'; }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_LITERAL'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_literal
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_LITERAL uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

Continue
[ABAP CDS - DEFINE ROLE, operator](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\))