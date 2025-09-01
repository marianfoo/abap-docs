  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_special_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Conversion Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conversion_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, Type Conversion Functions, ABENCDS_CONV_FUNC_TYPES_V1, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, Type Conversion Functions

Syntax

... FLTP\_TO\_DEC( arg AS dtype ) ...
... BINTOHEX( arg ) ...
... HEXTOBIN( arg ) ...

Variants:

[1\. ... FLTP\_TO\_DEC( arg AS dtype )](#!ABAP_VARIANT_1@1@)
[2a. ... BINTOHEX( arg )](#!ABAP_VARIANT_2A@2@)
[2b. ... HEXTOBIN( arg )](#!ABAP_VARIANT_2B@3@)

Effect

Functions for conversions between data types in a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

Hints

-   These functions execute special conversions that cannot be handled in a general [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm) expression.
-   If an argument has the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the conversion function is also the null value.

Variant 1   

... FLTP\_TO\_DEC( arg AS dtype )

Effect

Conversion of an argument arg of type [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to a packed number. [Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v1.htm), [fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm), and [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm) can be specified for arg. arg must have the type [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

A target data type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), or [QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) must be specified with dtype for a packed number, as follows:

-   Using a [DDIC data element](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_element_glosry.htm "Glossary Entry") with this type.
-   Directly as a [built-in data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

The value range of the data type dtype must cover the value range of the operand type. An exception occurs if the value range of the target data type is not sufficient. Any surplus decimal places are cut off without rounding.

Hints

-   The conversion of type FLTP to a packed number using the function FLTP\_TO\_DEC is platform dependent and does not have to be reversible using a [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm).
-   The general [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v1.htm) is designed to be platform-independent, which means it does not allow conversions of type FLTP to other numeric data types.
-   Since a literal with a prefixed sign is interpreted as an arithmetic expression, the argument arg of the function FLTP\_TO\_DEC cannot be a negative literal. Instead, the sign can usually be specified before the function.
-   More specifically, the built-in conversion function FLTP\_TO\_DEC can be used to convert literals with a decimal point to a packed number.

Example

The following CDS view applies the function FLTP\_TO\_DEC in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_FLTP\_TO\_DEC uses SELECT to access the view. Note that there is no rounding.

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

-   BINTOHEX takes a byte string and converts it to a character string containing the half bytes of arg, converted to the hexadecimal characters "0" to "9" and "A" to "F" (left-aligned). The valid argument type is [RAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with a maximum length of 255. The result has the type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with twice the length of arg. Only fields of data sources can be specified as arguments.
-   HEXTOBIN converts a character string to a byte string whose half bytes are determined from the hexadecimal characters of arg. Any leading blanks are removed before the conversion from arg and all trailing blanks are then replaced by "0". The valid argument types are is [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) or [NUMC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with a maximum length of 510. The result has the type [RAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with half the length of arg. Only fields of data sources and literals can be specified as arguments. The total of all characters must be even and it can contain only the hexadecimal characters "0" to "9" and "A" to "F" (uppercase or lowercase) and leading and trailing blanks. Literals cannot contain any leading blanks.

Example

The following CDS view applies the conversion functions for byte strings in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_BYTE uses SELECT to access the view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_BINFUNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sql\_functions\_byte
  as select from
    demo\_expressions
    {
      bintohex(  raw1  ) as r\_bintohex,
      hextobin(  char1 ) as r\_hextobin
    }