  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_v2.htm) →  [CDS DDL - CDS View Entity, literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Untyped%20Literal%2C%20ABENCDS_UNTYPED_LITERAL_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CDS DDL - CDS View Entity, Untyped Literal

Syntax

... 'character\_literal'*|*numeric\_literal ...

Effect

[Untyped literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuntyped_literal_glosry.htm "Glossary Entry") in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). It is either a [character literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_literal_glosry.htm "Glossary Entry") or a [numeric literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_literal_glosry.htm "Glossary Entry"):

-   Untyped character literal
    
    A character literal 'character\_literal' is a character string enclosed in quotation marks. If the character string consists exclusively of digits, it is handled as a [numeric text literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_text_literal_glosry.htm "Glossary Entry") and the data type of the literal is [NUMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If this is not the case, the data type is [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). When activated, the length of the corresponding field in the database system is set to a size at least as large as the actual length of the literal. A character literal can have a maximum of 1333 characters.
    
-   Untyped numeric literal
    
    A numeric literal numeric\_literal is a series of digits between 0 and 9. It can be directly prefixed by a + or \- sign and can contain a decimal point (.) after the first digit. A numeric literal without a decimal point is handled as an [integer literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninteger_literal_glosry.htm "Glossary Entry") of the type [INT1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [INT8](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), depending on the value. A numeric literal with a decimal point is a [binary floating point literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinfloat_literal_glosry.htm "Glossary Entry") of the type [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The value of a numeric literal must be within the value range of the valid types.
    

Literals can be used at all operand positions where this is documented.

Hints

-   0.5 is a valid numeric literal, but .5 is not.
-   A literal prefixed with a sign is interpreted as an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm) and can be specified in all operand positions where [arithmetic expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm) are allowed.
-   The built-in conversion function [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v2.htm) can be used to convert literals with a decimal point to a packed number.
-   Literals can be of data type CHAR, NUMC, INT1, INT2, INT4, INT8, or FLTP. If an operand expects input of any other data type, then a literal is not possible in this operand position. There are a few exceptions to this rule, for example, some date and time conversion functions accept literal input which is then interpreted as date or time data type. These exceptions are mentioned in the documentation of the respective functions.

Example

The CDS view entity demonstrates various literals at operand positions while making use of the database table SPFLI. The class CL\_DEMO\_CDS\_LITERALS\_VE uses SELECT to access the view entity.

@EndUserText.label: 'CDS View Entity with Literals'
define view entity DEMO\_CDS\_LITERALS\_VE
  as select from spfli
{
  airpfrom,
  airpto,
  deptime,
  fltime,
  'Minutes' as fltime\_unit,
  case countryfr
    when countryto then 'Domestic'
    else 'International'
  end       as fl\_form
}
where
      fltime  < 500
  and deptime > '100000'