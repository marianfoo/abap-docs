  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Special Functions](javascript:call_link\('abencds_special_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Conversion Functions](javascript:call_link\('abencds_conversion_functions_v2.htm'\)) → 

CDS DDL - CDS View Entity, Type Conversion Functions

Syntax

... FLTP\_TO\_DEC( arg AS dtype ) ...
... BINTOHEX( arg ) ...
... HEXTOBIN( arg ) ...

Variants:

[1\. ... FLTP\_TO\_DEC( arg AS dtype )](#!ABAP_VARIANT_1@1@)
[2a. ... BINTOHEX( arg )](#!ABAP_VARIANT_2A@2@)
[2b. ... HEXTOBIN( arg )](#!ABAP_VARIANT_2B@3@)

Effect

Functions for conversions between data types in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

Hints

-   These functions execute special conversions that cannot be handled in a general [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)) expression.
-   If an argument has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the conversion function is also the null value.

Variant 1   

... FLTP\_TO\_DEC( arg AS dtype )

Effect

Conversion of an argument arg of type [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)) to a packed number. [Literals](javascript:call_link\('abencds_literal_v2.htm'\)), [fields](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)), and [path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) can be specified for arg. arg must have the type [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\)).

A target data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), or [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified with dtype for a packed number, as follows:

-   Using a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") with this type.
-   Directly as a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places
Note: The only valid value for decimals is 2.

abap.quan(len,decimals)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len with decimals decimal places

The value range of the data type dtype must cover the value range of the operand type. An exception occurs if the value range of the target data type is not sufficient. Any surplus decimal places are cut off without rounding.

Hints

-   If arg is assigned a currency key using the annotation [Semantics.amount.currencyCode](javascript:call_link\('abencds_f1_element_annotation.htm'\)), then the result field must also be assigned a currency key using the same annotation.
-   If arg is assigned a unit of measurement key using the annotation [Semantics.quantity.unitofMeasure](javascript:call_link\('abencds_f1_element_annotation.htm'\)), then the result field must also be assigned a unit of measurement key using the same annotation.
-   The conversion of type FLTP to a packed number using the function FLTP\_TO\_DEC is platform dependent and does not have to be reversible using a [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)).
-   The general [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\)) is designed to be platform-independent, which means it does not allow conversions of type FLTP to other numeric data types.
-   Since a literal with a prefixed sign is interpreted as an arithmetic expression, the argument arg of the function FLTP\_TO\_DEC cannot be a negative literal. Instead, the sign can usually be specified before the function.
-   The built-in conversion function FLTP\_TO\_DEC is especially useful for converting literals with a decimal point to a packed number.

Example

The following CDS view entity applies the function FLTP\_TO\_DEC in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_FLTP\_TO\_DEC\_VE uses SELECT to access the view. Note that there is no rounding.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_FLTP\_TO\_DEC\_VE
  as select from demo\_expressions
  association to demo\_ddic\_types as \_a
    on demo\_expressions.id = \_a.id
  {
    \_a.cuky                                 as currencyCode,
    \_a.unit3                                as unitOfMeasure,
    fltp\_to\_dec( fltp1 as abap.dec(10,0) )  as dec1\_10\_0,
    fltp\_to\_dec( fltp1 as abap.dec(10,3) )  as dec1\_10\_3,
    @Semantics.amount.currencyCode: 'currencyCode'
    fltp\_to\_dec( fltp2 as abap.curr(10,2) ) as curr\_10\_2,
    @Semantics.quantity.unitOfMeasure: 'unitOfMeasure'
    fltp\_to\_dec( fltp2 as abap.quan(10,3) ) as quan\_10\_3
  }

Variant 2a   

... BINTOHEX( arg )

Variant 2b   

... HEXTOBIN( arg )

Effect

The functions BINTOHEX and HEXTOBIN convert byte strings to character strings and back:

-   BINTOHEX takes a byte string and converts it to a character string containing the half bytes of arg, converted to the hexadecimal characters "0" to "9" and "A" to "F" (left-aligned). The valid argument type is [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with a maximum length of 255. The result has the type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with twice the length of arg. Only fields of data sources can be specified as arguments.
-   HEXTOBIN converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of arg. Any leading blanks are removed before the conversion from arg and all trailing blanks are then replaced by "0". The valid argument types are is [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with a maximum length of 510. The result has the type [RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) with half the length of arg. Fields of data sources, path expressions, and literals can be specified as arguments. The total of all characters must be even and it can contain only the hexadecimal characters "0" to "9" and "A" to "F" (uppercase or lowercase) and leading and trailing blanks. Literals cannot contain any leading blanks.

Example

The following CDS view entity applies the conversion functions for byte strings in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_BYTE\_VE uses SELECT to access the view.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SQL\_FUNCTIONS\_BYTE\_VE
  as select from
    demo\_expressions
    {
      bintohex(  raw1  ) as r\_bintohex,
      hextobin(  char1 ) as r\_hextobin
    }