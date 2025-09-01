  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Special Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_special_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Conversion Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conversion_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20Unit%20and%20Currency%20Conversion%20Functions%2C%20ABENCDS_CONV_FUNC_UNIT_CURR_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - DDIC-Based View, Unit and Currency Conversion Functions

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
  *|* DECIMAL\_SHIFT(      amount             => arg1,
                        currency           => arg2*\[*,
                        error\_handling     => arg3*\]*)

Variants:

[1\. ... UNIT\_CONVERSION( ... )](#!ABAP_VARIANT_1@1@)
[2\. ... CURRENCY\_CONVERSION( ... )](#!ABAP_VARIANT_2@2@)
[3\. ... DECIMAL\_SHIFT( ... )](#!ABAP_VARIANT_3@3@)

Effect

Functions for converting between units and between currencies [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The functions have [keyword parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry") quantity, amount, ... (some of which are optional), to which actual parameters arg1, arg2, ... can or must be assigned when called using \=>.

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

[QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

source\_unit

\-

Source currency from column MSEHI of DDIC database table T006

[UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) that returns a suitable data type, [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

target\_unit

\-

Target unit from column MSEHI of DDIC database table T006

[UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) that returns a suitable data type, [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

client

X, \-

Client whose rules are used to perform the unit conversion. Optional, if the current data source is client-dependent. Default: Content of the client column of the current row

[CLNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

error\_handling

X

Error handling. If FAIL\_ON\_ERROR (default value), an error raises an exception; if SET\_TO\_NULL, the result is set to the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"); if KEEP\_UNCONVERTED, the source value is not changed.

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length 20

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

The data type of the result depends on the data type of the formal parameter quantity:

-   If quantity does not have a decimal floating point type, the result has the data type [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with the length 31 and 14 decimal places.
-   If quantity has data type DECFLOAT16, the result has data type DECFLOAT16.
-   If quantity has data type DECFLOAT34, the result has data type DECFLOAT34.

Hint

The precision of the result of the unit conversion depends on the database platform. The highest precision is achieved on databases that support [decimal floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecfloat_glosry.htm "Glossary Entry"). Due to rounding, the result can be different from a unit conversion performed using ABAP methods, such as a standard function module.

Example

The following CDS view calls a unit conversion in the SELECT list for the column DEC3 of the DDIC database table DEMO\_EXPRESSIONS. The source unit is a literal that is cast to the required type. The target unit must be passed as a parameter. In the event of an error, e.g. if a conversion between the entered units is impossible, the result is reset to null.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_UNTCNV'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_unit\_conversion
  with parameters
    to\_unit :abap.unit( 3 )
  as select from demo\_expressions
{
  key id,
      dec3                                               as original\_value,
      cast( 'MI' as abap.unit(3) )                       as original\_unit,
      @Semantics.quantity.unitOfMeasure: 'converted\_unit'
      unit\_conversion( quantity => dec3,
                       source\_unit => cast( 'MI' as abap.unit(3) ),
                       target\_unit => :to\_unit,
                       error\_handling => 'SET\_TO\_NULL' ) as converted\_value,
      :to\_unit                                           as converted\_unit
}

The class CL\_DEMO\_CDS\_UNIT\_CONVERSION accesses the view in a SELECT statement. Here, the target unit is passed to the parameter in question. As a comparison, the same conversion is also performed using the function module UNIT\_CONVERSION\_SIMPLE. As prerequisite for the example, the units and their conversion rules must be available in the corresponding DDIC database tables.

Variant 2   

... CURRENCY\_CONVERSION( ... )

Effect

The function CURRENCY\_CONVERSION performs a currency conversion for the value passed to the keyword parameter amount. The result has the data type [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [DECFLOAT34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with the same technical properties as the actual parameter passed to amount. The currency conversion is performed on the basis of the client-dependent rules saved in the DDIC database tables TCUR... of package SFIB. These rules can be edited using transaction OB08.

The table below shows all available keyword parameters and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter arg

amount

\-

Inbound value

[CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

source\_currency

\-

Source currency from column WAERS of DDIC database table TCURC

[CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

target\_currency

\-

Target currency from column WAERS of DDIC database table TCURC

[CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

exchange\_rate\_date

\-

Exchange rate date for column GDATU of DDIC database table TCURR

[DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

exchange\_rate\_type

X

Exchange rate type from column KURST of DDIC database table TCURR, default value: M

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length 4

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

client

X, \-

Client whose rules are used to perform the currency conversion. Optional, if the current data source is client-dependent. Default: Content of the client column of the current row

[CLNT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

round

X

If X (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; else it is truncated

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

decimal\_shift

X

This formal parameter can only be used with data type CURR for amount.
If X (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below).

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

decimal\_shift\_back

X

This formal parameter can only be used with data type CURR for amount.
If X (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below).

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

error\_handling

X

Error handling. If FAIL\_ON\_ERROR (default value), an error raises an exception; if SET\_TO\_NULL, the result is reset to the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"); if KEEP\_UNCONVERTED, the source value is not changed.

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length 20

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

The input parameters round, decimal\_shift, and decimal\_shift\_back accept the literals 'true', 'false', 'X', or ' '. #cdsboolean.true and #cdsboolean.false with the domain prefix CDSBOOLEAN are also possible. Internally, these literals are handled like the values X or blank.

Caution: The literal values 'true' and 'false' (with and without domain prefix) are case-sensitive. Uppercase letters, such as #cdsboolean.TRUE and #cdsboolean.FALSE, are not valid input. No error message occurs, but these values are not considered valid input and unexpected behavior may occur.

Handling the Decimal Places

-   The value passed is rounded to two decimal places before it is converted.
-   Before the conversion, the value passed is multiplied by 10 to the power of the number of decimal places of the source currency.
-   If the value X or true is passed to the parameter decimal\_shift, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.
-   If the value X or true is passed to the parameter decimal\_shift\_back, the result is divided by 10 to the power of two minus the number of decimal places of the target currency before it is converted.
-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

Hints

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. No matter how the conversion is made, the same results cannot be expected as when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.
-   The parameter decimal\_shift is intended to set the source value to the number of decimal places of the source currency before the conversion. This assumes that its technical type, [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm), has two decimal places as usual. The parameter decimal\_shift\_back is intended to perform the reverse operation.
-   If the technical type [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm) of the source value does not have two decimal places, the behavior of the CURRENCY\_CONVERSION function can be unexpected.

Example

The following CDS view calls a currency conversion in the SELECT list for the column AMOUNT of the DDIC database table DEMO\_PRICES. The target currency must be passed as a parameter. In the event of an error, e.g. when a currency is not available, the result is reset to zero.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_CURRCO'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_curr\_conv
  with parameters
    to\_currency :abap.cuky( 5 ),
    exc\_date    :abap.dats
  as select from demo\_prices
{
  key id,
      @Semantics.amount.currencyCode: 'currency'
      currency\_conversion( amount => amount,
                           source\_currency => currency,
                           round =>  'X',
                           target\_currency => :to\_currency,
                           exchange\_rate\_date => :exc\_date,
                           error\_handling => 'SET\_TO\_NULL' ) as amount,
      :to\_currency                                           as currency
}

The class CL\_DEMO\_CDS\_CURRENCY\_CNVRSN accesses the view in a SELECT statement. The target currency is passed here. As a comparison, the same conversion is also performed using the function module CONVERT\_TO\_LOCAL\_CURRENCY. As prerequisite for the example, the currencies and conversion rules must be available in the corresponding DDIC database tables.

Example

In class CL\_DEMO\_CDS\_FUNC\_CURR\_CONV, the above CDS view is used in a subquery of an ABAP SQL MODIFY statement.

DATA currency TYPE c LENGTH 5 VALUE 'USD'.
...
MODIFY demo\_prices FROM
  ( SELECT id, amount, currency
           FROM demo\_cds\_curr\_conv(
                  to\_currency = @currency,
                  exc\_date = @( cl\_demo\_date\_time=>get\_user\_date( ) ) )
           ORDER BY id )  ##null\_values.

Variant 3   

... DECIMAL\_SHIFT( ... )

Effect

The function DECIMAL\_SHIFT sets the decimal separator of the value that is passed to the keyword parameter amount in accordance with a currency. The result has the data type [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with the length 31 and 14 decimal places. Its value is produced by multiplying the input parameter rounded to two decimal places by 10 to the power of two minus the decimal places defined by the currency passed.

Possible currencies and their decimal places are based on the database tables TCUR... of the package SFIB.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter arg

amount

\-

Inbound value

[CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

currency

\-

Currency from column WAERS of DDIC database table TCURC; the associated decimal places determined from the column CURRDEC of TCURX

[CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

Field of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm)

error\_handling

X

Error handling. If FAIL\_ON\_ERROR (default value), an error raises an exception; if SET\_TO\_NULL, the result is reset to the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"); if KEEP\_UNCONVERTED, the source value is not changed.

[CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with length 20

[Literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm)

Hint

If the type of the actual parameter passed to amount has two decimal places, its value is set to the number of decimal places of the passed currency.

Example

In the SELECT list, the following CDS view sets the decimal separator for column AMOUNT of DDIC database table DEMO\_PRICES to between 0 and 5, according to the relevant currency. The column AMOUNT has two decimal places, which means that the decimal places are determined directly by the passed currencies. In the event of an error, e.g. when a currency is not available, the result is reset to zero.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_DCSHFT'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_decimal\_shift
  as select from demo\_prices
{
  key id,
      @Semantics.amount.currencyCode:'currency'
      amount                                           as original,
      @Semantics.currencyCode
      currency,
      decimal\_shift( amount => amount,
                     currency => cast( '0 ' as abap.cuky(5) ),
                     error\_handling => 'SET\_TO\_NULL' ) as shift\_0,
      decimal\_shift( amount => amount,
                     currency => cast( '1 ' as abap.cuky(5) ),
                     error\_handling => 'SET\_TO\_NULL' ) as shift\_1,
      decimal\_shift( amount => amount,
                     currency => cast( '2 ' as abap.cuky(5) ),
                     error\_handling => 'SET\_TO\_NULL' ) as shift\_2,
      decimal\_shift( amount => amount,
                     currency => cast( '3 ' as abap.cuky(5) ),
                     error\_handling => 'SET\_TO\_NULL' ) as shift\_3,
      decimal\_shift( amount => amount,
                     currency => cast( '4 ' as abap.cuky(5) ),
                     error\_handling => 'SET\_TO\_NULL' ) as shift\_4,
      decimal\_shift( amount => amount,
                     currency => cast( '5 ' as abap.cuky(5) ),
                     error\_handling => 'SET\_TO\_NULL' ) as shift\_5
}

The class CL\_DEMO\_CDS\_DECIMAL\_SHIFT accesses the view in a SELECT statement. As prerequisite for the example, the currencies and their number of decimal places must be available in the corresponding DDIC database tables.