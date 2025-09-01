---
title: "CDS DDL - CDS View Entity, Type Conversion Functions"
description: |
  Syntax ... FLTP_TO_DEC( arg AS dtype ) ... ... BINTOHEX( arg ) ... ... HEXTOBIN( arg ) ... Variants: 1. ... FLTP_TO_DEC( arg AS dtype )(#!ABAP_VARIANT_1@1@) 2a. ... BINTOHEX( arg )(#!ABAP_VARIANT_2A@2@) 2b. ... HEXTOBIN( arg )(#!ABAP_VARIANT_2B@3@) Effect Functions for conversions between
version: "latest"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conv_func_types_v2.htm"
abapFile: "abencds_conv_func_types_v2.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "conv", "func"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_special_functions_v2.htm) →  [CDS DDL - CDS View Entity, Conversion Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conversion_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Type%20Conversion%20Functions%2C%20ABENCDS_CONV_FUNC_TYPES_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

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

Functions for conversions between data types in a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

Hints

-   These functions execute special conversions that cannot be handled in a general [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) expression.
-   If an argument has the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the conversion function is also the null value.

Variant 1   

... FLTP\_TO\_DEC( arg AS dtype )

Effect

Conversion of an argument arg of type [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) to a packed number. [Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v2.htm), [fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v2.htm), and [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm) can be specified for arg. arg must have the type [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

A target data type [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) must be specified with dtype for a packed number, as follows:

-   Using a [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") or a [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry") with this type.
-   Directly as a [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places
Note: The only valid value for decimals is 2.

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

The value range of the data type dtype must cover the value range of the operand type. An exception occurs if the value range of the target data type is not sufficient. Any surplus decimal places are cut off without rounding.

Hints

-   If arg is assigned a currency key using the annotation [Semantics.amount.currencyCode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm), then the result field must also be assigned a currency key using the same annotation.
-   If arg is assigned a unit of measurement key using the annotation [Semantics.quantity.unitofMeasure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_element_annotation.htm), then the result field must also be assigned a unit of measurement key using the same annotation.
-   The conversion of type FLTP to a packed number using the function FLTP\_TO\_DEC is platform dependent and does not have to be reversible using a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm).
-   The general [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) is designed to be platform-independent, which means it does not allow conversions of type FLTP to other numeric data types.
-   Since a literal with a prefixed sign is interpreted as an arithmetic expression, the argument arg of the function FLTP\_TO\_DEC cannot be a negative literal. Instead, the sign can usually be specified before the function.
-   The built-in conversion function FLTP\_TO\_DEC is especially useful for converting literals with a decimal point to a packed number.

Example

The following CDS view entity applies the function FLTP\_TO\_DEC in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_CDS\_FLTP\_TO\_DEC\_VE uses SELECT to access the view. Note that there is no rounding.

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

-   BINTOHEX takes a byte string and converts it to a character string containing the half bytes of arg, converted to the hexadecimal characters 0 to 9 and A to F (left-aligned). The valid argument type is [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with a maximum length of 255. The result has the type [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with twice the length of arg. Only fields of data sources can be specified as arguments.
-   HEXTOBIN converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of arg. Any leading blanks are removed before the conversion from arg and all trailing blanks are then replaced by 0. The valid argument types are is [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [NUMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with a maximum length of 510. The result has the type [RAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with half the length of arg. Fields of data sources, path expressions, and literals can be specified as arguments. The total of all characters must be even and it can contain only the hexadecimal characters 0 to 9 and A to F (uppercase or lowercase) and leading and trailing blanks. Literals cannot contain any leading blanks.

Example

The following CDS view entity applies the conversion functions for byte strings in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_CDS\_SQL\_FNCTNS\_BYTE\_VE uses SELECT to access the view.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SQL\_FUNCTIONS\_BYTE\_VE
  as select from demo\_expressions
{
  bintohex(  raw1  ) as r\_bintohex,
  hextobin(  char1 ) as r\_hextobin
}