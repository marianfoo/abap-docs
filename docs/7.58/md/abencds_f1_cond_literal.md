  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_conditions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20literal_condition%2C%20ABENCDS_F1_COND_LITERAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CDS DCL - DEFINE ROLE, literal\_condition

Syntax

... *\[*ALL*|*EXISTS*\]* *{*
    *{* element *\[*BYPASS WHEN bypass\_condition*\]* [operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_expression.htm) *\[*'*\]*value*\[*'*\]* *}*...
  *|* *{* element *\[*BYPASS WHEN bypass\_condition*\]* *\[*NOT*\]* BETWEEN *\[*'*\]*value1*\[*'*\]* AND *\[*'*\]*value2*\[*'*\]* *}*
  *|* *{* element *\[*BYPASS WHEN bypass\_condition*\]* *\[*NOT*\]* LIKE 'value' *\[*ESCAPE 'esc'*\]* *}*
  *|* *{* element *\[*BYPASS WHEN bypass\_condition*\]* IS *\[*NOT*\]* NULL *}*
  *|* *{* element *\[*BYPASS WHEN bypass\_condition*\]* IS *\[*NOT*\]* INITIAL *}* *}* ...

Additions:

[1\. ... ALL](#!ABAP_ADDITION_1@1@)
[2\. ... EXISTS](#!ABAP_ADDITION_2@2@)
[3\. ... BYPASS WHEN ...](#!ABAP_ADDITION_3@3@)

Effect

Literal condition as part of an [access condition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaccess_condition_glosry.htm "Glossary Entry") [cds\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_cond_expr.htm) in an [access rule](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_role_rules.htm) of the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_role.htm) in [CDS DCL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry"). A literal condition can be one of the following relational expressions for an element element of the CDS entity for which the access condition is defined.

-   Comparison with a literal value value using a logical operator [operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_expression.htm).
-   Check using *\[*NOT*\]* BETWEEN to verify whether the value on the left side is (or is not) within the interval limits specified by two literal values value1 and value2.
-   Check using *\[*NOT*\]* LIKE to verify whether a string on the left side matches (or does not match) the pattern on the right side. The percent sign (%) can be used as a placeholder for any string and the underscore character (\_) for any single character. The addition ESCAPE can be used to define a single character escape character 'esc' in quotation marks for the placeholders.
-   Check using IS *\[*NOT*\]* NULL to verify whether the left side is (or is not) the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry").
-   IS *\[*NOT*\]* INITIAL, check to verify whether the value of the left side matches (does not match) the initial value of the ABAP data type of the element.
-   When element is declared as optional and does not exist at runtime, the effect of the condition matches the DEFAULT value of the element (logical true or false). To avoid that a safe default of FALSE is flipped to TRUE accidentally, the use of an element marked as optional inside of a NOT operator leads to an error.

The element element can be specified directly or by using a path expression [path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_path_expression_glosry.htm "Glossary Entry") and must have one of the valid [data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_data_types.htm). A numeric literal value can be specified in quotation marks but this is not mandatory. A character-like literal value must be specified in quotation marks. In a set-valued path expression, it is sufficient for the condition to be true for just one of the values.

When a literal condition is evaluated by CDS access control, only those rows are selected in which the content of the [CDS element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_element_glosry.htm "Glossary Entry") element meets the condition.

Hints

-   Within the definition of an access rule, literal conditions can be used together with [PFCG conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_pfcg.htm), [user conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_user.htm), [inheritance conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_cond_inherit.htm), or as individual conditions.
-   The character # is recommended as the escape character esc for the operator LIKE.
-   For element, some variants of this condition type support the function CONTEXT\_NODE\_VALUES. This function is reserved for use by SAP.

Addition 1   

... ALL

When element contains at least one set-valued association, the basic form of the condition will allow access when it is fulfilled for any of the resulting values.

For example, when the values are A, B and C, the condition element = 'B' will give access.

When access is only granted when the condition is fulfilled for all values, this can be specified by the ALL quantifier.

In the example above, ALL element = 'B' will not give access due to the existence of A and C.

However, ALL element < 'D' will give access.

Hints

-   The ALL quantifier results in an additional EXISTS statement on the database, formulated on the protected entity. It cannot be guaranteed that the database optimizer recognizes this constellation properly as self-join. The performance of the database selection can therefore be impacted.
-   The quantifier ALL can be applied to a condition regardless of whether element contains a set-valued association at all. However, it will then not have an effect but lead to the potential performance degradation when applied unnecessarily.
-   An association with an empty result set is handled in the same way as a single result with a null value.

Addition 2   

... EXISTS

The basic form of the statement already implements EXISTS like semantics, however, it provides a coupling of multiple set-valued elements in the same entity row.

For example, we consider an association toSetVal stemming from an entity row and with the following value in two of its columns:

toSetVal Row Number

toSetVal.F1

toSetVal.F2

1

A

B

2

C

D

The access condition

toSetVal.F1 = 'A' and toSetVal.F2 = 'D'

intuitively would be considered to be true, because for each constituent, the condition is true.

However, at runtime, the association toSetVal will be realized by the database interface as a single join operation (exceptions apply when path filters are used or in [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") using annotation compareFilter), so there is a coupling between F1 and F2.

Due to this coupling, the condition will not be fulfilled.

This situation can be resolved by introduction of the explicit EXISTS quantifier, which breaks-up this coupling and lets the condition be evaluated for each EXISTS condition individually:

EXISTS toSetVal.F1 = 'A' and EXISTS toSetVal.F2 = 'D'

Addition 3   

... BYPASS WHEN ...

Effect

The addition BYPASS WHEN bypass\_condition can be used to specify that the element is not used for authorization filtering if it meets the specified condition.

The following are possible for bypass\_condition:

-   IS NULL
-   IS INITIAL
-   IS INITIAL OR NULL

This addition is useful when using quantifier ALL to express that some of the association values may have this value and still satisfy the condition.

For example, when these are the values of a set-valued association

toSetVal Row Number

F

1

A

2

<NULL>

3

A

This condition

ALL toSetVal.F = 'A'

will not return the entity row, but this condition will:

ALL toSetVal.F BYPASS WHEN IS NULL = 'A'

Example

The following CDS role defines an access condition for the CDS view entity demo\_cds\_authority\_literal\_2. A single literal condition is specified for the element carrid in the CDS view.

@MappingRole: true
define role demo\_cds\_role\_literal\_2 {
  grant select on demo\_cds\_authority\_literal\_2
  where carrid = 'LH'; }

The CDS view entity is as follows:

@AccessControl.authorizationCheck: #CHECK
define view entity demo\_cds\_authority\_literal\_2
  as select from
    scarr
    {
      key carrid,
          carrname,
          currcode,
          url
    }

The class CL\_DEMO\_CDS\_AUTH\_LITERAL uses [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) to access the view. CDS access control selects only that data that matches the literal condition. This means that a maximum of one row is selected regardless of any other conditions in the view.

Continue
[CDS DCL - DEFINE ROLE, operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_dcl_cond_expression.htm)