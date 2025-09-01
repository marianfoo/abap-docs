# ABAP - Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Access Control / ABAP CDS - DCL Statements / ABAP CDS - DEFINE ROLE / ABAP CDS - DEFINE ROLE, condition

Included pages: 9


### abencds_dcl_role_conditions.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) → 

ABAP CDS - DEFINE ROLE, condition

Syntax

... [literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\))*|* [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))*|*[user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\))  ...

Effect

Part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abenaccess_rule_glosry.htm'\) "Glossary Entry") of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). Three categories of conditions can be specified, which can be combined using AND or OR:

-   Literal conditions [literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) that compare an element of a CDS entity with fixed values.

-   PFCG conditions [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) that associate an element of a CDS entity with [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") in the [SAP authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)) (which are based on [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry")).

-   User conditions [user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\)) as a special case of a literal condition on whose right side the user name of the current user is used as an operand.

On the left side of a condition of this type, it is possible to specify elements of the CDS entity for which the access condition is defined directly or using [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)). The following restrictions apply:

-   Only certain [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)) are permitted.

-   Path expressions path\_expr in CDS DCL have the same syntax as [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

The result of a condition is true or false.

Notes

-   It is advisable to specify an element in a CDS entity directly in the CDS DCL and to only use path expressions in exceptional cases.

-   The way an access condition defined in a CDS role for a CDS entity is characterized when the CDS entity is accessed using Open SQL can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05), for example as additional [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"). This implementation is not fixed, however, and can change between releases. More specifically, if further conditions exist, the part condition that results from a CDS role may be reduced (or even omitted). This makes it impossible to detect the access condition in the SQL trace.

Continue
[ABAP CDS - DEFINE ROLE, literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\))
[ABAP CDS - DEFINE ROLE, pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\))
[ABAP CDS - DEFINE ROLE, user\_condition](javascript:call_link\('abencds_f1_cond_user.htm'\))
[ABAP CDS - DEFINE ROLE, Data Types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\))


### abencds_f1_cond_literal.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

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

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the CDS element element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) or [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)) or as individual conditions.

-   As with a CDS role that contains a [full control rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)), a CDS role that contains literal conditions only results in a syntax check warning. The access conditions of a CDS role should always be user-specific.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

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


### abencds_f1_dcl_cond_expression.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [ABAP CDS - DEFINE ROLE, literal\_condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) → 

ABAP CDS - DEFINE ROLE, operator

Syntax

... operator ...

Effect

Operator of a comparison expression in a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) in an [access rule](javascript:call_link\('abenaccess_rule_glosry.htm'\) "Glossary Entry") in the definition of a role using [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The operator compares a left side and a right side. The left side is always an element of the CDS entity to which the rule applies. The right side is represented using a literal value.

operator

True if

\=

The value of the left side is equal to the value of the right side.

<>

The value of the left side is not equal to the value of the right side.

<

The value of the left side is less than the value of the right side.

\>

The value of the left side is greater than the value of the right side.

<=

The value of the left side is less than or equal to the value of the right side.

\>=

The value of the left side is greater than or equal to the value of the right side.

?=

Like the operator \=. The condition is also met, however, if the value of the left side is the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") or a type-dependent initial value.


### abencds_f1_cond_literal.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

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

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the CDS element element meets the condition.

Notes

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) or [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)) or as individual conditions.

-   As with a CDS role that contains a [full control rule](javascript:call_link\('abencds_dcl_role_grant_rule.htm'\)), a CDS role that contains literal conditions only results in a syntax check warning. The access conditions of a CDS role should always be user-specific.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

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


### abencds_f1_cond_pfcg.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *\[*, element2 ...*\]**\]* ) =|?=
        ASPECT pfcg\_auth
          ( object, *\[*mapped\_field1 *\[*, mapped\_field2 ...*\]**\]*
              *\[*, auth\_field1 = 'value' *\[*, auth\_field2= 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG)). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   The left side is a parenthesized comma-separated list consisting of multiple CDS elements of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) and must have one of the valid [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   The predefined [aspect](javascript:call_link\('abencds_aspect_glosry.htm'\) "Glossary Entry") pfcg\_auth must be specified on the right side introduced using ASPECT. This aspect is used to associate the CDS elements with the [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for an [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") in the [authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map the same authorization field to multiple CDS elements, but it is not possible to specify multiple authorization fields for a single CDS element. By default, CDS access control evaluates all [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") or their type-dependent initial value.

The operator [NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the hierarchy of the evaluation of a PFCG condition:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") are compared with content from CDS elements. Here, the field values are [mapped](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In Open SQL reads, the additional conditions can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object object. Those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [transformed](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object ); }

Examples

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( object ) ...

The access condition is true if the current user is not assigned the authorization object object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role defines an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

@MappingRole: true
define role demo\_cds\_role\_pfcg {
  grant select on demo\_cds\_auth\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03'); }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_pfcg
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_PFCG accesses the view.

-   There is no implicit authorization check when the CDS database view is accessed. Instead, the rows without authorization are removed from the results later using the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

-   When the CDS is accessed, the SELECT statement only reads the data for which the current user has authorization.

Continue
[ABAP CDS - DEFINE ROLE, Mapping of Field Values](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\))


### abencds_f1_dcl_pfcg_mapping.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [ABAP CDS - DEFINE ROLE, pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) → 

ABAP CDS - DEFINE ROLE, Mapping of Field Values

Elements of CDS entities are associated with an [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") in [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") itself is generated from [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for the authorization object. Here, comparisons of the content of CDS elements with field values of the authorizations are created. The following points should be noted.

-   [Invalid Values](#abencds-f1-dcl-pfcg-mapping-1--------wildcard-characters---@ITOC@@ABENCDS_F1_DCL_PFCG_MAPPING_2)

Invalid Values

The field values of authorizations are saved as text fields with length 40. For comparisons, they must be convertible to the [data type](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)) of the CDS elements:

-   The rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") must be followed. If this is not possible, the field value is ignored.

-   If an authorization requests a pattern comparison using a wildcard character (\*), the data type of the CDS element must be character-like.

If a field value cannot be converted, the field value is ignored.

Notes

-   Field values that are ignored are, for example, field values that are longer than the CDS element or field values with a non-numeric content for a numeric CDS element.

-   If field values are ignored, CDS access control may block access completely.

-   Ignored field values are not logged, which means that they cannot be known to the system administrator or to the user.

Wildcard Characters

If a field value contains a wildcard character (\*) as its final character, it is used to create a LIKE condition in which the wildcard character \* is replaced by the SQL wildcard character %.

If the field value contains the SQL wildcard characters % and \_, the escape character # is assigned to them implicitly. This means that CDS access control checks the characters % and \_ in field values like regular characters.

Example

The field value "10%\*" produces the condition LIKE '10#%%' ESCAPE '#'.


### abencds_f1_cond_pfcg.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *\[*, element2 ...*\]**\]* ) =|?=
        ASPECT pfcg\_auth
          ( object, *\[*mapped\_field1 *\[*, mapped\_field2 ...*\]**\]*
              *\[*, auth\_field1 = 'value' *\[*, auth\_field2= 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG)). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   The left side is a parenthesized comma-separated list consisting of multiple CDS elements of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) and must have one of the valid [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   The predefined [aspect](javascript:call_link\('abencds_aspect_glosry.htm'\) "Glossary Entry") pfcg\_auth must be specified on the right side introduced using ASPECT. This aspect is used to associate the CDS elements with the [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for an [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") in the [authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map the same authorization field to multiple CDS elements, but it is not possible to specify multiple authorization fields for a single CDS element. By default, CDS access control evaluates all [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") or their type-dependent initial value.

The operator [NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the hierarchy of the evaluation of a PFCG condition:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") are compared with content from CDS elements. Here, the field values are [mapped](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In Open SQL reads, the additional conditions can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object object. Those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [transformed](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( object ); }

Examples

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( object ) ...

The access condition is true if the current user is not assigned the authorization object object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role defines an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

@MappingRole: true
define role demo\_cds\_role\_pfcg {
  grant select on demo\_cds\_auth\_pfcg
  where (carrid) =
  aspect pfcg\_auth (s\_carrid, carrid, actvt='03'); }

The CDS view is as follows:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PFCG'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_pfcg
as select from
scarr
{
key carrid,
carrname,
currcode,
url
};    

The program DEMO\_CDS\_AUTH\_PFCG accesses the view.

-   There is no implicit authorization check when the CDS database view is accessed. Instead, the rows without authorization are removed from the results later using the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

-   When the CDS is accessed, the SELECT statement only reads the data for which the current user has authorization.

Continue
[ABAP CDS - DEFINE ROLE, Mapping of Field Values](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\))


### abencds_f1_cond_user.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, user\_condition

Syntax

... element [\=*|*<>*|*?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)) ASPECT user ...

Effect

User condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in the [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). In a user condition, the predefined [aspect](javascript:call_link\('abencds_aspect_glosry.htm'\) "Glossary Entry") user is specified on the right side introduced with ASPECT.

The left side is compared with the [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry") of the user currently logged on to AS ABAP by using one of the three operators [\=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), [<>](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), [?=](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)), as in a [literal condition](javascript:call_link\('abencds_f1_dcl_cond_expression.htm'\)).

Notes

-   User conditions can be combined within an access rule using [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)) and [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)).

-   A user condition acts like a comparison with the session variable [$session.user](javascript:call_link\('abencds_f1_session_variable.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). Session variables cannot currently be used in the DCL.

Example

The following CDS view contains an element uname, which contains a user name:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_USR'
@AccessControl.authorizationCheck: #CHECK
define view demo\_cds\_auth\_user
  as select from
    abdocmode
    {
      key uname,
      key langu,
          flag
    };  

The following role can be defined for the view:

@MappingRole: true
define role demo\_cds\_role\_user {  
  grant select on demo\_cds\_auth\_user
    where
      uname ?= aspect user; }

The role grants a user AS ABAP access to his or her own entries in the database table ABDOCMODE, as well as to entries in which the UNAME column is initial or contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").


### abencds_f1_dcl_cond_data_types.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, Data Types

The operand specified on the left side of a [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) of an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") of declarable operand cannot all the [predefined data types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)). Only the following types are permitted:

-   Numeric Types

-   INT1, INT2, INT4, INT8

-   DEC

-   DF16\_DEC, DF16\_RAW

-   DF34\_DEC, DF34\_RAW

-   Character-Like Types

-   CHAR

-   SSTRING

-   Special Types

-   DATS, TIMS

-   NUMC

Any other data types generally produce a syntax error in the definition of a CDS role. In [PFCG conditions](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)), however, invalid data types are sometimes not detected until runtime.

In PFCG conditions, field values of [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") are compared with CDS elements of the permitted data types and an appropriate [mapping](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) takes place.
