  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) → 

ABAP CDS - DEFINE ROLE, pfcg\_condition

Syntax

... ( *\[*element1 *|*[{ element1*\[*, element2 ...*\]* }](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\))
    *\[*, element2 *|*[{ element1*\[*, element2 ...*\]* }](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) ...*\]**\]* )
         =|?= ASPECT pfcg\_auth
                ( auth\_object *\[*IN SCENARIO 'scenario'*\]*,
                 *\[*mapped\_field1*|**{* [PFCG\_MAPPING = pfcg\_mapping](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\))*}**\[*,
                  mapped\_field2*|**{* [PFCG\_MAPPING = pfcg\_mapping](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\))*}* ...*\]**\]**\[*,
                  auth\_field1 = 'value'*\[*,
                  auth\_field2 = 'value' ...*\]**\]* ) ...

Effect

PFCG condition as part of an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") [cond\_expr](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) in an [access rule](javascript:call_link\('abencds_dcl_role_rules.htm'\)) of the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). A PFCG condition joins the elements of the CDS entity specified on the left side of the operator \= or ?= with the [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") specified on the right side (and granted using the classic role editor (transaction PFCG) ). CDS access control takes this information and the authorizations of the current user and uses it to create fixed logical conditions, which are evaluated each time the object is accessed.

-   Left Side

-   The left side is a parenthesized comma-separated list consisting of multiple [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") of a CDS entity (or one element or no elements) for which the access condition is defined. An element element can be specified directly or by using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) and must have one of the valid [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)). In a multivalue path expression, it is sufficient for the condition to be true for just one of the values.

-   As an alternative to a single element element, an element list in curly brackets [{ element1*\[*, element2 ...*\]* }](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) can be specified instead. A [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") must be mapped to this list using [PFCG\_MAPPING = pfcg\_mapping](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)).

-   Right Side

The right side is introduced using ASPECT pfcg\_auth. Here, pfcg\_auth is a predefined [aspect](javascript:call_link\('abencds_aspect_glosry.htm'\) "Glossary Entry") used to associate the CDS elements with the [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for an [authorization object](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") of the [SAP authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)). This association is made in a parenthesized comma-separated list:

-   The name of an existing authorization object is defined using auth\_object.

-   mapped\_field1, mapped\_field2 are used to specify the names of the [authorization fields](javascript:call_link\('abenauthorization_field_glosry.htm'\) "Glossary Entry") of the authorization object to map them to the CDS elements on the left side in the specified order. The number of CDS elements must match the number of authorization fields. It is possible to map a single authorization field to multiple CDS elements. By default, CDS access control evaluates all [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user for the specified CDS elements in accordance with this assignment. The PFCG condition is true whenever an authorization is present.

-   If a CDS element is specified on the left side as an element list in curly brackets [{ element1*\[*, element2 ...*\]* }](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) rather than being specified directly, [PFCG\_MAPPING = pfcg\_mapping](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\)) must be used to specify a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") instead of the name of an authorization field mapped\_field.

-   Further optional authorization fields auth\_field1, auth\_field2 of the authorization object can be specified to which literal values can be mapped using \=. In this case, the evaluation only respects those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user in which all values specified in this way exist. Here, the same authorization field can be specified more than once with different values.

-   If the parentheses on the left side are empty, which means that no element from the CDS entity is specified, no authorization field mapped\_field can be specified after auth\_object. If further optional authorization fields auth\_field1, auth\_field1, ... are specified, the same applies as before. CDS access control evaluates all [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") (or those authorizations specified using auth\_field1, auth\_field1, ...) of the current user for the authorization object. If there is at least one authorization, the PFCG condition is true, else false.

If the operator ?= is used, the evaluation is made in the same way as when using \=. The condition is also met, however, if all CDS elements in the left parentheses have the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") or their type-dependent initial value. This applies even if the user does not have an authorization for the specified authorization object.

The operator [NOT](javascript:call_link\('abencds_dcl_role_cond_expr.htm'\)) can only be specified in front of PFCG conditions with empty parentheses on the left side, namely those without CDS elements element and mapped authorization fields mapped\_field. The following applies with respect to the order in which a PFCG condition is evaluated:

-   If multiple authorizations are evaluated, the resulting conditions are joined using a logical "or".

-   In the conditions of each authorization used, the values for the authorization fields in question are joined using a logical "and".

-   If there are multiple values for an authorization field, they are joined using a logical "or".

When these rules are applied to the access condition actually used by CDS access control, field values from [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") are compared with content from CDS elements. Here, the field values are [converted](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) to the dictionary types of the CDS elements.

Notes

-   The access conditions produced by the rules above are transformed internally to selection statements by the ABAP runtime environment. In ABAP SQL reads, the additional conditions can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tools (transaction ST05). The internal implementation can be made using WHERE conditions or [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") and can change between releases.

-   The key elements of the CDS entity play a key part in internal selection statements. In the CDS data definition, these elements should either be defined so that they identify a unique row or no key elements should be defined at all. If this is not the case. unexpected results can arise.

-   PFCG conditions with non-empty parentheses on the left side cannot be negated using the operator NOT, since this entails the opposite of an authorization check and hence unexpected results.

-   PFCG conditions can be combined within an access rule using [literal conditions](javascript:call_link\('abencds_f1_cond_literal.htm'\)), [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)), and [inheritance conditions](javascript:call_link\('abencds_f1_cond_inherit.htm'\)).

-   If a full authorization exists within a PFCG condition for an authorization field, no condition is created for the CDS element specified on the left side. This makes the PFCG condition accept all values, including the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). If this behavior is unwanted, AND can be used to expand a [literal condition](javascript:call_link\('abencds_f1_cond_literal.htm'\)) element IS NOT NULL.

-   It is advisable to specify an element of the CDS entity directly and to only use path expressions in exceptional cases.

-   The operator ?= is applied to all CDS elements in the left parentheses. It cannot be restricted to individual elements.

-   The global and context-specific disabling of authorization checks (in transactions SU24 and SU25) is respected.

Addition

... IN SCENARIO

The optional addition IN SCENARIO can be used to apply the switchable authorization (transaction SACF) to an authorization object.

The following applies to the addition IN SCENARIO:

-   Unlike direct use in program code (CL\_SACF=>AUTH\_CHECK\_SPEC), the use of switchable authorizations has the restriction that there is no interaction with the user interface (such as warning messages or dialogs in recording mode). The recording modes behave as if the check method were called using the parameter ID\_SILENT = 'X' and do not persist any data in the SACF configuration.

-   The security audit log, which can be enabled from the SACF configuration contains the name of the CDS entity with the “STOB” flag, as well as the name of the authorization object and the requested and filter fields.

-   If the PFCG condition uses PFCG mappings, these must also have the addition IN SCENARIO and name the same scenario.

Examples

The following abstract examples explain various types of PFCG conditions:

-   The following example is a typical case. Multiple elements, element1, element2, are mapped to different authorization fields, field1, field2, of an authorization object auth\_object. Those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user are evaluated in which a particular activity is allowed.

@MappingRole: 'true'
DEFINE ROLE demo\_role {
    grant SELECT ON entity  WHERE
      ( element1, element2 ) = ASPECT pfcg\_auth
          ( auth\_object,
            field1,
            field2,
            ACTVT = '02'); }

The current user has two authorizations for the authorization object auth\_object:

-   An authorization with the values "a", "b" for the authorization field field1 and the values "c", "d" for the authorization field field2

-   An authorization with the value "X\*" for the authorization field field1 and the value "Y" for the authorization field field2

The access condition added to the CDS entity entity by CDS access control using a logical "and" can appear as follows (when expressed in SQL):

... ... AND ( ( element1 = 'a' OR element2 = 'b' ) AND
          ( element2 = 'c' OR element2 = 'd' ) OR
          element1 LIKE 'X%' AND
          element2 = 'Y' )

The values of each authorization are joined using AND and the conditions of both authorizations are joined using OR. The wildcard character \* is [converted](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\)) to a LIKE condition. The actual variant in question, however, can have a different appearance.

If ?= instead of \= is used in the example above, the access condition is expanded roughly as follows:
          ...
          element2 = 'Y' OR
          ( ( element1 IS NULL or element1 = '' ) AND
            ( element2 IS NULL or element2 = '' ) ) )

-   The following example illustrates how the evaluated authorizations are restricted using further authorization fields. Only those [authorizations](javascript:call_link\('abenauthorization_glosry.htm'\) "Glossary Entry") of the current user are used that contain both the activities "02" and "03", plus the authorization field country with the value "DE". Only those rows are read for which the CDS element element matches the authorization field field of these authorizations.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( auth\_object,
                                field,
                                actvt   = '02',
                                actvt   = '03',
                                country = 'DE' );}

-   In the following example, the same authorization field field is used for the items mapped\_field and auth\_field. If the current user has an authorization with the values "X", "Y", and "Z" for this authorization field, this authorization is used by specifying field = 'X'. CDS access control then uses all three permitted values "X", "Y", and "Z" when the CDS entity is accessed.

@MappingRole: true
DEFINE ROLE demo\_role {
GRANT SELECT ON entity WHERE
  (element) = ASPECT pfcg\_auth( auth\_object,
                                field,
                                field = 'X' ); }

-   No CDS element is specified in the following example. CDS access control prevents data from being read in full if the current user does not have at least an authorization for the authorization object auth\_object with the activity "03".

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( auth\_object, ACTVT = '03' ); }

-   No CDS element or authorization field is specified in the following example. Here, the only requirement is that the current user has at least one authorization (any authorization) for the authorization object auth\_object (with any values).

@MappingRole: true
DEFINE ROLE demo\_role {
  GRANT SELECT ON entity WHERE
    ( ) = ASPECT pfcg\_auth( auth\_object ); }

Example

The following abstract example shows a valid negation of a PFCG condition using empty parentheses on the left side with the Boolean operator NOT:

... WHERE NOT ( ) = ASPECT pfcg\_auth( auth\_object ) ...

The access condition is true if the current user is not assigned the authorization object auth\_object. This property can be used, for example, to implement the replacement of one authorization object with another authorization object.

Example

The following CDS role constructs an access rule for the CDS view demo\_cds\_auth\_pfcg. A PFCG condition is specified that associates the CDS element carrid with the authorization field CARRID of the authorization object S\_CARRID. If specified, actvt='03' restricts the CDS access control check to the associated authorizations of the current user that have the value "3" in ACTVT.

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
[ABAP CDS - DEFINE ROLE, pfcg\_mapping](javascript:call_link\('abencds_f1_cond_pfcg_mapping.htm'\))
[ABAP CDS - DEFINE ROLE, Converting Field Values](javascript:call_link\('abencds_f1_dcl_pfcg_mapping.htm'\))