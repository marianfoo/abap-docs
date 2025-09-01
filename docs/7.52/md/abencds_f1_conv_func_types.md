---
title: "ABAP CDS - Type Conversion Functions"
description: |
  Syntax ... FLTP_TO_DEC( arg AS dtype ) ... ... BINTOHEX( arg ) ... ... HEXTOBIN( arg ) ... Variants: 1. ... FLTP_TO_DEC( arg AS dtype )(#!ABAP_VARIANT_1@1@) 2a. ... BINTOHEX( arg )(#!ABAP_VARIANT_2A@2@) 2b. ... HEXTOBIN( arg )(#!ABAP_VARIANT_2B@3@) Effect Functions for conversions between
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm"
abapFile: "abencds_f1_conv_func_types.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "conv", "func"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_builtin_functions.htm) →  [ABAP CDS - Special Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_special_functions.htm) →  [ABAP CDS - Conversion Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conversion_functions.htm) → 

ABAP CDS - Type Conversion Functions

Syntax

... FLTP\_TO\_DEC( arg AS dtype ) ...
... BINTOHEX( arg ) ...
... HEXTOBIN( arg ) ...

Variants:

[1\. ... FLTP\_TO\_DEC( arg AS dtype )](#!ABAP_VARIANT_1@1@)
[2a. ... BINTOHEX( arg )](#!ABAP_VARIANT_2A@2@)
[2b. ... HEXTOBIN( arg )](#!ABAP_VARIANT_2B@3@)

Effect

Functions for conversions between data types in a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry").

Notes

-   These functions execute special conversions that cannot be handled in a general [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression.htm) expression.

-   If an argument has the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the conversion function is also the null value.
    

Variant 1

... FLTP\_TO\_DEC( arg AS dtype )

Effect

Conversion of an argument arg of type [FLTP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) to a packed number. [Literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_literal.htm) and [fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_field.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) of the current CDS view can be specified for arg. arg must have the type [FLTP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm).

A target data type [DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), or [QUAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) must be specified with dtype for a packed number, as follows:

-   Using a [data element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_element_glosry.htm "Glossary Entry") with this type.

-   Directly as a [built-in data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

The value range of the data type dtype must cover the value range of the operand type. An exception occurs if the value range of the target data type is not sufficient. Any surplus decimal places are cut off without rounding.

Notes

-   The conversion of type FLTP to a packed number using the function FLTP\_TO\_DEC is platform dependent and does not have to be reversible using a [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression.htm).

-   The general [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression.htm) is designed to be platform-independent, which means it does not permit conversions of type FLTP to other numeric data types.

-   Since a literal with a prefixed sign is interpreted as an arithmetic expression, the argument arg of the function FLTP\_TO\_DEC cannot be a negative literal. Instead, the sign can usually be specified before the function.

-   More specifically, the built-in conversion function FLTP\_TO\_DEC can be used to convert literals with a decimal point to a packed number.

Example

The following CDS view applies the function FLTP\_TO\_DEC in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_FLTP\_TO\_DEC uses SELECT to access the view. Note that there is no rounding.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_FLTPDEC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_fltp\_to\_dec
  as select from
    demo\_expressions
    {
      fltp\_to\_dec( fltp1 as abap.dec(10,0) ) as dec1\_10\_0,
      fltp\_to\_dec( fltp1 as abap.dec(10,3) ) as dec1\_10\_3,
      fltp\_to\_dec( fltp2 as abap.dec(10,0) ) as dec2\_10\_0,
      fltp\_to\_dec( fltp2 as abap.dec(10,3) ) as dec2\_10\_3
    }  

Variant 2a

... BINTOHEX( arg )

Variant 2b

... HEXTOBIN( arg )

Effect

The functions BINTOHEX and HEXTOBIN convert byte strings to character strings and back:

-   BINTOHEX takes a byte string and converts it to a character string containing the half bytes of arg, converted to the hexadecimal characters "0" to "9" and "A" to "F" (left justified). The valid argument type is [RAW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with a maximum length of 255. The result has the type [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with twice the length of arg. Only fields of data sources can be specified as arguments.

-   HEXTOBIN converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of arg. Any leading blanks are removed before the conversion from arg and all trailing blanks are then replaced by "0". The valid argument types are is [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) or [NUMC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with a maximum length of 510. The result has the type [RAW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with half the length of arg. Only fields of data sources and literals can be specified as arguments. The total of all characters must be even and it can contain only the hexadecimal characters "0" to "9" and "A" to "F" (uppercase or lowercase) and leading and trailing blanks. Literals cannot contain any leading blanks.

Example

The following CDS view applies the conversion functions for byte strings in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_BYTE uses SELECT to access the view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_BINFUNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sql\_functions\_byte
as select from
demo\_expressions
{
bintohex( raw1 ) as r\_bintohex,
hextobin( char1 ) as r\_hextobin
}