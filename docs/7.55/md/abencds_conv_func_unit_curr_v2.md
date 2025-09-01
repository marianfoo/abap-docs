  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Special Functions](javascript:call_link\('abencds_special_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Conversion Functions](javascript:call_link\('abencds_conversion_functions_v2.htm'\)) → 

CDS DDL - CDS View Entity, Unit and Currency Conversion Functions

Syntax

... UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )
  *|* CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... ) ...

Variants:

[1\. ... UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )](#!ABAP_VARIANT_1@1@)
[2\. ... CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )](#!ABAP_VARIANT_2@2@)

Effect

Conversion functions for converting between units and between currencies in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The functions have [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry") p1, p2, ... (some of which are optional), to which actual parameters a1, a2, ... must be assigned using \=> when the function is called.

Hint

The function DECIMAL\_SHIFT is currently not supported in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

Variant 1

... UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )

Effect

The function UNIT\_CONVERSION performs a unit conversion for the value passed to the formal parameter quantity.

The unit conversion is performed on the basis of the client-dependent rules saved in transaction CUNI and in the DDIC database tables T006... of the package SZME.

The table below shows the formal parameters p1, p2, ... and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

quantity

\-

Inbound value

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_literal_v2.htm'\)), field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), [expression](javascript:call_link\('abencds_expressions_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

source\_unit

\-

Source currency from column MSEHI of DDIC database table T006

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)), [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

target\_unit

\-

Target unit from column MSEHI of DDIC database table T006

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)), [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

client

X, \-

Client whose rules are used to perform the unit conversion. Optional, if the current data source is client-dependent. Default: Content of the client column of the current row

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)), [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))

error\_handling

X

Error handling.
'FAIL\_ON\_ERROR': an error raises an exception (default)
'SET\_TO\_NULL': the result is set to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry")
'KEEP\_UNCONVERTED': the source value is not changed.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 20

[Literal](javascript:call_link\('abencds_literal_v2.htm'\))

The data type of the result depends on the data type of the formal parameter quantity:

-   If quantity has data type QUAN, CURR, DEC, INT1, INT2, INT4, or FLTP, the result has data type QUAN with the length 31 and 14 decimal places.

-   If quantity has data type DECFLOAT16, the result has data type DECFLOAT16.

-   If quantity has data type DECFLOAT34, the result has data type DECFLOAT34.

Hint

The precision of the result of the unit conversion depends on the database platform. The highest precision is achieved on databases that support [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). Due to rounding, the result can be different from a unit conversion performed using ABAP methods, such as a standard function module.

Example

The following CDS view entity calls a unit conversion in the SELECT list for the column DEC3 of the DDIC database table DEMO\_EXPRESSIONS. The source unit is a literal that is cast to the required type. The target unit must be passed as a parameter. In the event of an error, for example if a conversion between the entered units is impossible, the result is set to null.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_UNIT\_CONVERSION\_VE
  with parameters
    to\_unit :abap.unit( 3 )
  as select from demo\_expressions
{
  id,
  dec3                                               as original\_value,
  cast( 'MI' as abap.unit(3) )                       as original\_unit,
  @Semantics.quantity.unitOfMeasure: 'converted\_unit'
  unit\_conversion( quantity => dec3,
                   source\_unit => cast( 'MI' as abap.unit(3) ),
                   target\_unit => $parameters.to\_unit,
                   error\_handling => 'SET\_TO\_NULL' ) as converted\_value,
  $parameters.to\_unit                                as converted\_unit
}

The program DEMO\_CDS\_UNIT\_CONVERSION\_VE accesses the view in a SELECT statement. The target unit is passed to the respective formal parameter. As a comparison, the same conversion is also performed using the function module UNIT\_CONVERSION\_SIMPLE. As prerequisite for the example, the units and their conversion rules must be available in the corresponding DDIC database tables.

Variant 2

... CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )

Effect

The function CURRENCY\_CONVERSION performs a currency conversion for the value passed to the formal parameter amount. The result has the data type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)) with the same technical attributes as the actual parameter passed to amount. The currency conversion is performed on the basis of the client-dependent rules saved in the DDIC database tables TCUR... of package SFIB. These rules can be edited using transaction OB08.

The table below shows the formal parameters p1, p2, ... and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

amount

\-

Inbound value

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), [expression](javascript:call_link\('abencds_expressions_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\))

source\_currency

\-

Source currency from column WAERS of DDIC database table TCURC

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))

target\_currency

\-

Target currency from column WAERS of DDIC database table TCURC

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))

exchange\_rate\_date

\-

Exchange rate date for column GDATU of DDIC database table TCURR

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [literal](javascript:call_link\('abencds_literal_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)),

exchange\_rate\_type

X

Exchange rate type from column KURST of DDIC database table TCURR, default value: 'M'

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 4

[Literal](javascript:call_link\('abencds_literal_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))

client

X, \-

Client whose rules are used to perform the currency conversion. Optional, if the current data source is client-dependent. Default: Content of the client column of the current row

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)), [literal](javascript:call_link\('abencds_literal_v2.htm'\)), [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)), [cast expression](javascript:call_link\('abencds_cast_expression_v2.htm'\)), [path expression](javascript:call_link\('abencds_path_expression_v2.htm'\)), [parameter](javascript:call_link\('abencds_parameter_v2.htm'\))

round

X

If 'X' (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; else it is truncated

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_literal_v2.htm'\))

decimal\_shift

X

This formal parameter can only be used with data type CURR for amount.
If 'X' (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below).

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_literal_v2.htm'\))

decimal\_shift\_back

X

This formal parameter can only be used with data type CURR for amount.
If 'X' (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below).

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_literal_v2.htm'\))

error\_handling

X

Error handling. If 'FAIL\_ON\_ERROR' (default value), an error raises an exception; if 'SET\_TO\_NULL', the result is set to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"); if 'KEEP\_UNCONVERTED', the source value is not changed.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 20

[Literal](javascript:call_link\('abencds_literal_v2.htm'\))

For the input parameters round, decimal\_shift, and decimal\_shift\_back, it is also possible to specify the literals 'true' or 'false' (not case-sensitive). Internally, these literals are handled like the values 'X' or ' '.

Handling the Decimal Places

-   The inbound value is rounded to two decimal places before it is converted.

-   Before the conversion, the value passed is multiplied by 10 to the power of the number of decimal places of the source currency.

-   If the value 'X' or 'TRUE' is passed to the parameter decimal\_shift, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.

-   If the value 'X' or 'TRUE' is passed to the parameter decimal\_shift\_back, the result is divided by 10 to the power of two minus the number of decimal places of the target currency after the conversion.

-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

Hint

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. The results might differ from the results returned when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.

-   The parameter decimal\_shift is intended to set the source value to the number of decimal places of the source currency before the conversion. This assumes that its technical type, [CURR](javascript:call_link\('abenddic_currency_field.htm'\)), has two decimal places as usual. The parameter decimal\_shift\_back is intended to perform the reverse operation.

-   If the technical type [CURR](javascript:call_link\('abenddic_currency_field.htm'\)) of the source value does not have two decimal places, the behavior of the CURRENCY\_CONVERSION function can be unexpected.

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