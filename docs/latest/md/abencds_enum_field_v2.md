  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](javascript:call_link\('abencds_operands_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20EnumConstant%2C%20ABENCDS_ENUM_FIELD_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CDS DDL - CDS View Entity, EnumConstant

Syntax

... EnumType.#EnumConstant ...

Effect

Specifies an [enumerated constant](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") EnumConstant of a [CDS enumerated type](javascript:call_link\('abencds_enum_type_glosry.htm'\) "Glossary Entry") EnumType in the SELECT list of a CDS view entity. An enumerated constant EnumConstant defines a value of the value set of an enumerated type. A CDS enumerated constant is specified using the name of the enumerated type EnumType, followed by a period (.), a hash character (#), and the name of an enumerated constant EnumConstant. An enumerated constant has the data type ENUM.

Further Information

-   [ABAP CDS - Enumerated Types](javascript:call_link\('abencds_enumeration_types.htm'\))

Example

The CDS view entity shown below specifies the element friday as enumerated constant in the SELECT list.

@EndUserText.label: 'CDS view entity, enumerated types'
define view entity DEMO\_CDS\_ENUM\_TYPE\_USAGE\_1
  as select from demo\_expressions
{
  key id                       as Id,
  num1 as integer1,
      DEMO\_CDS\_ENUM\_STACK.#FRI as friday
}