  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_special_functions_v2.htm) →  [CDS DDL - CDS View Entity, Conversion Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conversion_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Unit and Currency Conversion Functions, ABENCDS_CONV_FUNC_
UNIT_CURR_V2, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Unit and Currency Conversion Functions

Syntax

... UNIT\_CONVERSION(    quantity           => arg1,
                        source\_unit        => arg2,
                        target\_unit        => arg3*\[*,
                        client             => arg4*\]**\[*,
                        error\_handling     => arg5*\]*)
  *|* CURRENCY\_CONVERSION(amount             => arg1,
                        source\_currency    => arg2,
                        target\_currency    => arg3,
                        exchange\_rate\_date => arg4*\[*,
                        exchange\_rate\_type => arg5*\]**\[*,
                        client             => arg6*\]**\[*,
                        round              => arg7*\]**\[*,
                        decimal\_shift      => arg8*\]**\[*,
                        decimal\_shift\_back => arg9*\]**\[*,
                        error\_handling     => arg10*\]*)
  *|* GET\_NUMERIC\_VALUE( arg )
  *|* CURR\_TO\_DECFLOAT\_AMOUNT( arg ) ...

Variants:

[1\. ... UNIT\_CONVERSION( ... )](#!ABAP_VARIANT_1@1@)
[2\. ... CURRENCY\_CONVERSION( ... )](#!ABAP_VARIANT_2@2@)
[3\. ... GET\_NUMERIC\_VALUE( arg )](#!ABAP_VARIANT_3@3@)
[4\. ... CURR\_TO\_DECFLOAT\_AMOUNT( arg )](#!ABAP_VARIANT_4@4@)

Effect

Functions for converting between units and between currencies in a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

The functions UNIT\_CONVERSION and CURRENCY\_CONVERSION have [keyword parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry") quantity, source\_unit, ... (some of which are optional), to which actual parameters arg1, arg2, ... can or must be assigned when called using \=>.

The functions GET\_NUMERIC\_VALUE and CURR\_TO\_DECFLOAT\_AMOUNT each have one mandatory [positional parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") arg.

Hint

The function DECIMAL\_SHIFT is currently not supported in [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

Variant 1   

... UNIT\_CONVERSION( ... )

Effect

The function UNIT\_CONVERSION performs a unit conversion for the value passed to the keyword parameter quantity.

The unit conversion is performed on the basis of the client-dependent rules saved in transaction CUNI and in the DDIC database tables T006... of the package SZME.

The table below shows all available keyword parameters and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter arg

quantity

\-

Inbound value

[QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), [expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm)

source\_unit

\-

Source currency from column MSEHI of DDIC database table T006

[UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), [case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), [cast expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm)

target\_unit

\-

Target unit from column MSEHI of DDIC database table T006

[UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), [case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), [cast expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm)

client

X, \-

Client whose rules are used to perform the unit conversion. Since client handling takes place implicitly for CDS view entities, it is not possible to explicitly specify any client column as actual parameter. For client-dependent sources, there are two options:
\- either, the parameter can be left out and the client column is implicitly added, or
\- the actual parameter can be specified as expression, literal, or session variable (but not as field of a data source).

[CLNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

[Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm)

error\_handling

X

Error handling.
'FAIL\_ON\_ERROR': an error raises an exception (default)
'SET\_TO\_NULL': the result is set to the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry")
'KEEP\_UNCONVERTED': the source value is not changed.

[CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 20

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm)

The data type of the result depends on the data type of the formal parameter quantity:

-   If quantity has data type QUAN, DEC, INT1, INT2, INT4, or FLTP, the result has data type QUAN with the length 31 and 14 decimal places.
-   If quantity has data type DECFLOAT16, the result has data type DECFLOAT16.
-   If quantity has data type DECFLOAT34, the result has data type DECFLOAT34.

Hint

The precision of the result of the unit conversion depends on the database platform. The highest precision is achieved on databases that support [decimal floating point numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecfloat_glosry.htm "Glossary Entry"). Due to rounding, the result can be different from a unit conversion performed using ABAP methods, such as a standard function module.

Example

The following CDS view entity calls a unit conversion in the SELECT list for the column DEC3 of the DDIC database table DEMO\_EXPRESSIONS. The source unit is specified using a typed literal. The target unit must be passed as a parameter. In the event of an error, for example if a conversion between the entered units is impossible, the result is set to null.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_UNIT\_CONVERSION\_VE
  with parameters
    to\_unit :abap.unit( 3 )
  as select from demo\_expressions
{
  id,
  dec3                                               as original\_value,
  abap.unit'MI'                                      as original\_unit,
  @Semantics.quantity.unitOfMeasure: 'converted\_unit'
  unit\_conversion( quantity => dec3,
                  source\_unit => abap.unit'MI',
                  target\_unit => $parameters.to\_unit,
                  error\_handling => 'SET\_TO\_NULL' ) as converted\_value,
  $parameters.to\_unit                                as converted\_unit
}

The program DEMO\_CDS\_UNIT\_CONVERSION\_VE accesses the view in a SELECT statement. The target unit is passed to the respective formal parameter. As a comparison, the same conversion is also performed using the function module UNIT\_CONVERSION\_SIMPLE. As prerequisite for the example, the units and their conversion rules must be available in the corresponding DDIC database tables.

Variant 2   

... CURRENCY\_CONVERSION( ... )

Effect

The function CURRENCY\_CONVERSION performs a currency conversion for the value passed to the keyword parameter amount. The result has the data type [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) or [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with the same technical properties as the actual parameter passed to amount. The currency conversion is performed on the basis of the client-dependent rules saved in the DDIC database tables TCUR... of package SFIB. These rules can be edited using transaction OB08.

The table below shows all available keyword parameters and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter arg

amount

\-

Inbound value

[CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), [expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm)

source\_currency

\-

Source currency from column WAERS of DDIC database table TCURC

[CUKY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [cast expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm)

target\_currency

\-

Target currency from column WAERS of DDIC database table TCURC

[CUKY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [cast expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm)

exchange\_rate\_date

\-

Exchange rate date for column GDATU of DDIC database table TCURR

[DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm), [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm).

exchange\_rate\_type

X

Exchange rate type from column KURST of DDIC database table TCURR, default value: 'M'

[CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 4

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm)

client

X, \-

Client whose rules are used to perform the currency conversion. Since client handling takes place implicitly for CDS view entities, it is not possible to explicitly specify any client column as actual parameter. For client-dependent sources, there are two options:
\- either, the parameter can be left out and the client column is implicitly added, or
\- the actual parameter can be specified as expression, literal, or session variable (but not as field of a data source).

[CLNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

[Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), [literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm)

round

X

If X (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; else it is truncated

[CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm)

decimal\_shift

X

This formal parameter can only be used with data type CURR for amount.
If X (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below).

[CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm)

decimal\_shift\_back

X

This formal parameter can only be used with data type CURR for amount.
If 'X' (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below).

[CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm)

error\_handling

X

Error handling. If 'FAIL\_ON\_ERROR' (default value), an error raises an exception; if 'SET\_TO\_NULL', the result is set to the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"); if 'KEEP\_UNCONVERTED', the source value is not changed.

[CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 20

[Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm)

The input parameters round, decimal\_shift, and decimal\_shift\_back accept the literals 'true', 'false', 'X', or ' '. #cdsboolean.true and #cdsboolean.false with the domain prefix CDSBOOLEAN are also possible. Internally, these literals are handled like the values X or blank.

Caution: The literal values 'true' and 'false' (with and without domain prefix) are case-sensitive. Upper-case letters, such as #cdsboolean.TRUE and #cdsboolean.FALSE, are not valid input. No error message occurs, but these values are not considered valid input and unexpected behavior may occur.

Handling the Decimal Places

-   The inbound value is rounded to two decimal places before it is converted.
-   Before the conversion, the value passed is multiplied by 10 to the power of the number of decimal places of the source currency.
-   If the value 'X' or 'true' is passed to the parameter decimal\_shift, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.
-   If the value 'X' or 'true' is passed to the parameter decimal\_shift\_back, the result is divided by 10 to the power of two minus the number of decimal places of the target currency after the conversion.
-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

Hint

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. The results might differ from the results returned when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.
-   The parameter decimal\_shift is intended to set the source value to the number of decimal places of the source currency before the conversion. This assumes that its technical type, [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_currency_field.htm), has two decimal places as usual. The parameter decimal\_shift\_back is intended to perform the reverse operation.
-   If the technical type [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_currency_field.htm) of the source value does not have two decimal places, the behavior of the CURRENCY\_CONVERSION function can be unexpected.

Example

The following CDS view entity performs a currency conversion in the SELECT list for the column AMOUNT of the DDIC database table DEMO\_PRICES. The target currency must be passed as a parameter. In the event of an error, for example, when a currency is not available, the result is set to zero.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_CURR\_CONV\_VE
  with parameters
    to\_currency :abap.cuky( 5 ),
    exc\_date    :abap.dats
  as select from
    demo\_prices
    {
      key id,
      @Semantics.amount.currencyCode: 'currency'
      currency\_conversion( amount => amount,
                          source\_currency => currency,
                          round =>  'X',
                          target\_currency => $parameters.to\_currency,
                          exchange\_rate\_date => $parameters.exc\_date,
                          error\_handling => 'SET\_TO\_NULL' ) as amount,
      $parameters.to\_currency                               as currency
    }

The program DEMO\_CDS\_CURRENCY\_CONV\_VE accesses the view in a SELECT statement, passing the target currency. As a comparison, the same conversion is also performed using the function module CONVERT\_TO\_LOCAL\_CURRENCY. As prerequisite for the example, the currencies and conversion rules must be available in the corresponding DDIC database tables.

Example

In program DEMO\_CDS\_FUNC\_CURR\_CONV\_VE, the above CDS view entity is used in a subquery of an ABAP SQL MODIFY statement.

DATA currency TYPE c LENGTH 5 VALUE 'USD'.
...
MODIFY demo\_prices FROM
  ( SELECT id, amount, currency
           FROM demo\_cds\_curr\_conv\_ve(
                  to\_currency = @currency, exc\_date = @sy-datlo )
           ORDER BY id )  ##null\_values.

Variant 3   

... GET\_NUMERIC\_VALUE( arg )

Effect

GET\_NUMERIC\_VALUE returns the numeric value of a [currency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_field_glosry.htm "Glossary Entry") or [quantity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquantity_glosry.htm "Glossary Entry") field without its [currency](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry") or [unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry") key. arg must be a [field of a data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm). No other [elementary operand](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_v2.htm), [expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm), or [function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm) is possible. The argument arg can have any data type that supports reference annotations, namely: INT1, INT2, INT4, DEC, FLTP, DECFLOAT16, DECFLOAT34, CURR, or QUAN. The result of the function GET\_NUMERIC\_VALUE has data type DECFLOAT34 and it has no reference information assigned. That means that no currency or unit key is assigned.

Hints

If arg has data type CURR, an implicit decimal shift takes place.

Example

The following CDS view entity applies the function GET\_NUMERIC\_VALUE to calculate the number of bookings. It divides the total value of current bookings (field paymentsum) by the price of a flight (field price). This would not be possible without the function GET\_NUMERIC\_VALUE, since elements of data type CURR are not allowed in [arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm).

Details on the elements:

-   paymentsum has data type CURR, a reference annotation that assigns a currency key, and it contains the total value of current bookings.
-   price has data type CURR, a reference annotation that assigns a currency key, and it contains the price of a flight.
-   number\_of\_bookings has data type DECFLOAT34 and it has no currency key assigned.
    
    @AccessControl.authorizationCheck: #NOT\_REQUIRED
    @EndUserText.label: 'CDS view entity, GET\_NUMERIC\_VALUE'
    @Metadata.ignorePropagatedAnnotations: true
    define view entity DEMO\_CDS\_GET\_NUMERIC\_VALUE
      as select from sflight
    {
      key carrid,
      key connid,
      key fldate,
          @Semantics.amount.currencyCode: 'currency'
          price,
          currency,
          @Semantics.amount.currencyCode: 'currency'
          paymentsum,
          GET\_NUMERIC\_VALUE( paymentsum )
            / GET\_NUMERIC\_VALUE( price ) as number\_of\_bookings
    }
    

The program DEMO\_CDS\_GET\_NUMERIC\_VALUE accesses the view and performs the following steps:

-   It displays the element annotations of price. One of them is the Semantics.amount.currencyCode annotation that assigns a currency key.
-   It displays the element annotations of number\_of\_bookings. This field does not have any annotations.
-   It displays the structure of the CDS view entity. The element number\_of\_bookings has type e, which corresponds to the built-in DDIC type DECFLOAT34.

Variant 4   

... CURR\_TO\_DECFLOAT\_AMOUNT( arg )

Effect

The function CURR\_TO\_DECFLOAT\_AMOUNT converts a [currency field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_field_glosry.htm "Glossary Entry") of data type CURR into a [currency field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_field_glosry.htm "Glossary Entry") of data type DECFLOAT34. arg must have data type CURR and a [currency key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry") must be assigned using the annotation [Semantics.amount.currencyCode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm). The result has the data type [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and exactly the same currency key that is assigned to arg must be assigned.

Hints

This functions performs an implicit decimal shift.

Example

The following CDS view entity demonstrates the CURR\_TO\_DECFLOAT\_AMOUNT function. Field curr10\_4 is converted from data type CURR to data type DECFLOAT34. The source and the target field require a currency key assignment.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, CURR\_TO\_DEC'
define view entity DEMO\_CDS\_CURR\_TO\_DEC
  as select from demo\_ddic\_types
{
  key id,
      cuky                              as currency,
      @Semantics.amount.currencyCode: 'currency'
      curr10\_4                          as amount,
      @Semantics.amount.currencyCode: 'currency'
      CURR\_TO\_DECFLOAT\_AMOUNT(curr10\_4) as curr\_conv
}

The program DEMO\_CDS\_CURR\_TO\_DEC accesses the view and performs the following steps:

-   It displays all element annotations of the view DEMO\_CDS\_CURR\_TO\_DEC. Both source and target field have a currency key assigned.
-   It evaluates the components of the CDS view entity. The element curr\_conv has type e, which corresponds to the built-in DDIC type DECFLOAT34.