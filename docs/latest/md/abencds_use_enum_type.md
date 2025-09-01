  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Type Definitions](javascript:call_link\('abencds_tdl.htm'\)) →  [ABAP CDS - TDL for Type Definitions](javascript:call_link\('abencds_types.htm'\)) →  [CDS TDL - DEFINE TYPE](javascript:call_link\('abencds_define_type.htm'\)) →  [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\)) →  [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20Using%20CDS%20Enumerated%20Types%2C%20ABENCDS_USE_ENUM_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

CDS TDL - Using CDS Enumerated Types

This section summarizes the use of [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") with an enumerated type.

-   [Declaration](#abencds-use-enum-type-1-------operand-positions-for-cds-elements-with-an-enumerated-type---@ITOC@@ABENCDS_USE_ENUM_TYPE_2)
    -   [CDS Enumerated Type](#abencds-use-enum-type-3-----------cds-enumerated-constant---@ITOC@@ABENCDS_USE_ENUM_TYPE_4)
    -   [CDS Enumerated Element](#abencds-use-enum-type-5-------case-expressions---@ITOC@@ABENCDS_USE_ENUM_TYPE_6)
-   [Cast Expressions](#abencds-use-enum-type-7-------comparisons---@ITOC@@ABENCDS_USE_ENUM_TYPE_8)
-   [Parameter Passing](#abencds-use-enum-type-9-------type-descriptions---@ITOC@@ABENCDS_USE_ENUM_TYPE_10)

Executable Example

[CDS Enumerated Type, Use](javascript:call_link\('abencds_enum_abexa.htm'\))

Declaration   

The following enumerated operands are available:

-   CDS enumerated type
    
    The [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") EnumType itself.
    
-   CDS enumerated constant
    
    An [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") EnumConstant defines a value of the value set of an enumerated type. A CDS enumerated constant is specified using the name of the enumerated type EnumType, followed by a period (.), a hash character (#), and the name of an enumerated constant EnumConstant.
    
    Example: EnumType.#EnumConstant
    
-   CDS enumerated element
    
    A [CDS enumerated element](javascript:call_link\('abencds_enum_element_glosry.htm'\) "Glossary Entry") contains one of the enumerated values of the respective enumerated type. CDS enumerated elements can be defined as follows:
    
    1.  Using a [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
    2.  Exposing an [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry"), defined in the parameter list after [WITH PARAMETERS](javascript:call_link\('abencds_parameter_list_v2.htm'\)), typed with an enumerated type EnumType as an element in the SELECT list of a CDS entity.
    3.  Exposing a field typed with an enumerated type from a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)) or from an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry").
    4.  Using a [case expression](javascript:call_link\('abencds_case_expression_v2.htm'\)) with operands of an enumerated type.
    5.  Reusing an expression from the SELECT list via [$projection](javascript:call_link\('abencds_reusable_expression_v2.htm'\)).
    6.  Using an enumerated constant in the element list of a CDS entity.

The technical storage type of the content of an operand of an enumerated element is the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the CDS enumerated type. However, in the code element information in ADT or in the debugger, the data type of CDS enumerated elements is displayed as ENUM. The possible content is defined by the [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") EnumValue1, EnumValue2, ..., of which exactly one value must have the type-specific initial value.

Example

The following CDS view entity demonstrates operands of an enumerated type.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, enum demo'
define view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_2
  with parameters
    p1 : DEMO\_CDS\_ENUM\_CHAR
  as select from DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1
{
  key Id,
      friday,
      cast(abap.char'A' as DEMO\_CDS\_ENUM\_CHAR) as CastExp,
      $parameters.p1                           as EnumParameterField,
      DEMO\_CDS\_ENUM\_CHAR.#second\_value         as EnumConstantField,
      case friday
      when DEMO\_CDS\_ENUM\_STACK.#FRI
      then DEMO\_CDS\_ENUM\_STACK.#SAT
      else null
      end                                      as EnumCase,
      $projection.EnumCase                     as ReuseField
}

The following image of the code element information of the CDS view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_2 shows that the input parameter p1 and all the fields, except for the key field Id, are typed with an enumerated type.

![Figure](enum1.jpg)

Operand Positions for CDS Elements with an Enumerated Type   

CDS enumerated elements are currently available in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"), [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") and [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") in the following operand positions:

CDS Enumerated Type   

A CDS enumerated type EnumType can be used in the following places:

-   To type another CDS enumerated type as described in the topic [CDS TDL - DEFINE TYPE ENUM](javascript:call_link\('abencds_define_enum_type.htm'\)).
    
    Note: The maximum nesting depth is five. This means that a stack of enumerated types can have a maximum of five layers, from base to top-most.
    
-   In [cast expressions in CDS view entities](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
-   In [cast expressions in CDS projection views](javascript:call_link\('abencds_proj_view_element.htm'\)).
    
    Note: Remember that casting in CDS projection views is only possible with the addition PRESERVING TYPE.
    
    Example: cast(ProjField as MyEnumType preserving type) as NewProjField
    
-   For [typing](javascript:call_link\('abencds_typing.htm'\)) of elements in [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry") and in [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").
-   For [typing](javascript:call_link\('abencds_typing.htm'\)) of parameters in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), CDS custom entities, and CDS abstract entities
-   In ABAP for typing data objects with the statement TYPE.

CDS Enumerated Constant   

A CDS enumerated constant can be used in the following places:

-   As a CDS element in the SELECT list of a CDS view entity,
    
    Syntax: MyEnum.#EnumConstant as FieldName
    
-   As actual parameters for input parameters of CDS view entities and [CDS analytical queries](javascript:call_link\('abencds_analytic_query_glosry.htm'\) "Glossary Entry").
    
    Note: An enumerated constant of an enumerated type EnumType can be passed to an input parameter that is typed with the same CDS enumerated type EnumType.
    
-   In a simple case expression in the WHEN, THEN, and ELSE branches. However, an enumerated constant is not valid as operand after CASE.
-   In a complex case expression as right-hand operand of the WHEN condition and as operand after THEN.
-   As right-hand operand in a [WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\)) clause in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry"), and [CDS analytical query](javascript:call_link\('abencds_analytic_query_glosry.htm'\) "Glossary Entry").
-   In ABAP for value assignments and in comparisons as described in topic [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\)).

CDS Enumerated Element   

A CDS enumerated element can be used in the following places:

-   As an element in the SELECT list of a CDS entity.
-   As an element in the projection list of a [CDS transactional query](javascript:call_link\('abencds_transactional_pv_glosry.htm'\) "Glossary Entry").
-   In a simple case expression of a CDS view entity.
-   In a complex case expression of a CDS view entity.
-   In a reuse expression using $projection in the SELECT list of a CDS view entity and a CDS analytical query.
-   As right-hand operand of a WHERE clause in a CDS entity.
-   As field of the [GROUP BY](javascript:call_link\('abencds_group_by_v2.htm'\)) clause of a CDS entity.
-   As operand of a [HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\)) clause in a CDS entity.
-   As an operand of an association ON condition of a CDS association and of a to-parent association in a CDS view entity, CDS custom entity, CDS abstract entity and CDS transactional query.
-   As an operand of a join ON condition of a join between two data sources in a CDS view entity.
-   In a default filter condition of a CDS association, defined using [WITH DEFAULT FILTER](javascript:call_link\('abencds_simple_association_v2.htm'\)).
-   In ABAP for value assignments and in comparisons as described in topic [Enumerated Objects (enum)](javascript:call_link\('abenenumerated_types_usage.htm'\)).

Example

The following CDS view entity defines a WHERE condition with the CDS enumerated element WEEKDAY and the parameter P\_WEEKDAY. The parameter is also typed with a CDS enumerated type.

@AbapCatalog.viewEnhancementCategory: \[#NONE\]
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, enum'
define view entity DEMO\_CDS\_ENUM\_3
  with parameters
    p\_weekday : DEMO\_CDS\_ENUM\_WEEKDAY
  as select from DEMO\_CDS\_ENUM\_1
{
  key carrid,
  key connid,
  key fldate,
      weekday
}
where
  weekday = $parameters.p\_weekday

The following code snippet accesses the view entity displayed above, passes an actual parameter to the input parameter P\_WEEKDAY, and displays the result.

SELECT \*
FROM demo\_cds\_enum\_3( p\_weekday = @demo\_cds\_enum\_weekday-fri )
INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Example

The following code snippet defines an enumerated variable with reference to a CDS enumerated type in ABAP. It assigns an enumerated constant from the same enumerated type to the variable.

DATA wd\_cds  TYPE demo\_cds\_enum\_weekday.
wd\_cds = demo\_cds\_enum\_weekday-tue.

Case Expressions   

CDS enumerated elements can be used in [simple case expressions](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) and in [complex case expressions](javascript:call_link\('abencds_searched_case_expr_v2.htm'\)) in CDS entities. The following rules apply:

Simple Case expression

-   The operand after CASE must be a CDS enumerated element. CDS enumerated constants and CDS enumerated types are not possible.
-   The operands after WHEN, THEN, and ELSE can be CDS fields with an enumerated data type or CDS enumerated constants.
-   The operands after CASE and WHEN must have the same CDS enumerated type, and also the operands after THEN and ELSE must be of the same CDS enumerated type.

Complex case expression

-   The following rules apply to the condition specified after WHEN:
    -   The left side of the condition must be a CDS enumerated element. CDS enumerated constants and CDS enumerated types are not possible.
    -   The right side of the condition can be a CDS enumerated element or a CDS enumerated constant.
    -   As relational operators, all [comparison operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)), [BETWEEN](javascript:call_link\('abencds_cond_expr_betw_v2.htm'\)), [IS NULL](javascript:call_link\('abencds_cond_expr_null_v2.htm'\)), and [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) are allowed.
    -   The Boolean operators NOT, AND, and OR are allowed.
-   The operands specified in the condition after WHEN must be of the same CDS enumerated type. Otherwise, a syntax check error occurs.

Cast Expressions   

When [casting](javascript:call_link\('abencds_cast_expression_v2.htm'\)) to a CDS enumerated type, the operand of the cast expression must be compatible with the base type of the CDS enumerated type. The [cast matrix](javascript:call_link\('abencds_cast_expression_v2.htm'\)) and the [conversion rules](javascript:call_link\('abencds_cast_expression_rules_v2.htm'\)) for casting apply with respect to the base type.

If the addition PRESERVING TYPE is specified, the data type and length of the operand and the base type of the CDS enumerated type must match exactly.

Comparisons   

For comparisons between operands of an enumerated data type, the rule applies that an operand can only be compared with an operand with the same enumerated type. The values of the operands are compared in accordance with their base type.

An exception to this rule are type stacks. If an enumerated type is defined with reference to another CDS enumerated type, these two types are compatible with each other.

Each enumerated type has an initial enumerated value, which makes checks with the predicate expression [IS INITIAL](javascript:call_link\('abencds_cond_expr_initial_v2.htm'\)) possible.

Example

The following CDS enumerated type DEMO\_CDS\_ENUM\_STACK is based on the CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY. It inherits the definition and the annotations of the referenced type.

@EndUserText.label: 'CDS enum typed with another enum'
define type DEMO\_CDS\_ENUM\_STACK: DEMO\_CDS\_ENUM\_WEEKDAY

DEMO\_CDS\_ENUM\_STACK and DEMO\_CDS\_ENUM\_WEEKDAY are compatible with each other and can be used in comparisons. Example:

IF demo\_cds\_enum\_stack-mon = demo\_cds\_enum\_weekday-fri. ENDIF.

Parameter Passing   

Input parameters that are typed with a CDS enumerated type can have the following actual parameters:

-   A CDS enumerated constant of the same CDS enumerated type.
-   An input parameter that is typed with the same CDS enumerated type.

Type Descriptions   

In [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry"), enumerated operands are described by objects of the class CL\_ABAP\_ENUMDESCR. This class can be used for [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry") and [RTTC](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") purposes. Like any enumerated type, an enumerated type created using RTTC is only compatible with itself.

The following attributes exist in a type description of the class CL\_ABAP\_ENUMDESCR:

-   KIND always has the value E for the elementary base type.
-   TYPE\_KIND always has the value k.
-   BASE\_TYPE\_KIND describes the base type.
-   MEMBERS is a table of the enumerated constants and the associated enumerated values.

Executable Example

[Enumerated Elements, Type Description](javascript:call_link\('abencds_enum_description_abexa.htm'\))

Restrictions

-   CDS enumerated types cannot be used in [CDS DDIC-based views (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").
-   CDS enumerated types cannot be used for typing in DDIC objects such as [DDIC data types](javascript:call_link\('abenddic_data_types.htm'\)), [DDIC views](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry"), and [DDIC extensions](javascript:call_link\('abenddic_extension_glosry.htm'\) "Glossary Entry").

Hints

-   An enumerated type is always an elementary data type. Likewise, the associated type description class CL\_ABAP\_ENUMDESCR is a subclass of CL\_ABAP\_ELEMDESCR.
-   The base type describes how each enumerated value of the value set is stored internally, but it is not the type of the associated enumerated constant that can be used in a program. Its type is the enumerated type ENUM itself.