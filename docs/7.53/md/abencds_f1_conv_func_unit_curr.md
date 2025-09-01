  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - Special Functions](javascript:call_link\('abencds_special_functions.htm'\)) →  [ABAP CDS - Conversion Functions](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) → 

ABAP CDS - Conversion Functions for Units and Currencies

Syntax

... UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )
  *|* CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )
  *|* DECIMAL\_SHIFT( p1 => a1, p2 => a2, ... ) ...

Variants:

[1\. ... UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )](#!ABAP_VARIANT_1@1@)
[2\. ... CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )](#!ABAP_VARIANT_2@2@)
[3\. ... DECIMAL\_SHIFT( p1 => a1, p2 => a2, ... )](#!ABAP_VARIANT_3@3@)

Effect

Conversion functions for converting between units and between currencies in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The functions have keyword parameters p1, p2, ... (some of which are optional), to which the actual parameters a1, a2, ... must be assigned when called using \=>.

Variant 1

... UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )

Effect

The function UNIT\_CONVERSION performs a unit conversion for the value passed to the formal parameter quantity. The result has the data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 31 and 14 decimal places. The unit conversion is performed on the basis of the client-specific rules saved in transaction CUNI and in the database tables T006... of the package SZME.

The table below shows the actual parameters p1, p2, ... and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

quantity

\-

Initial value

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

source\_unit

\-

Source currency from column MSEHI of database table T006

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

target\_unit

\-

Target unit from column MSEHI of database table T006

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

client

X, \-

Client whose rules are used to perform the unit conversion. Optional (if the current data source is client-specific). Default: Content of the client column of the current row

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

error\_handling

X

Error handling. If "FAIL\_ON\_ERROR" (default value), an error raises an exception; if "SET\_TO\_NULL", the result is reset to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"); if "KEEP\_UNCONVERTED", the source value is not changed.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 20

[Literal](javascript:call_link\('abencds_f1_literal.htm'\))

Note

The precision of the result of the unit conversion depends on the database platform. The highest precision is achieved on databases that support [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). Due to rounding, the result can be different from a unit conversion performed using ABAP methods, such as a standard function module.

Example

The following CDS view calls a unit conversion in the SELECT list for the column DEC3 of the database table DEMO\_EXPRESSIONS. The source unit is a literal that is cast to the required type. The target unit must be passed as a parameter. In the event of an error, e.g. if a conversion between the entered units is impossible, the result is reset to zero.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_UNTCNV'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_unit\_conversion
with parameters
to\_unit :abap.unit( 3 )
as select from
demo\_expressions
{
id,
dec3 as original\_value,
cast( 'MI' as abap.unit(3) ) as original\_unit,
unit\_conversion( quantity => dec3,
source\_unit => cast( 'MI' as abap.unit(3) ),
target\_unit => :to\_unit,
error\_handling => 'SET\_TO\_NULL' ) as converted\_value,
:to\_unit as converted\_unit
}    

The program DEMO\_CDS\_UNIT\_CONVERSION accesses the view in a SELECT statement. Here, the target unit is passed to the parameter in question. As a comparison, the same conversion is also performed using the function module UNIT\_CONVERSION\_SIMPLE. As prerequisite for the example, the units and their conversion rules must be available in the corresponding database tables.

Variant 2

... CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )

Effect

The function CURRENCY\_CONVERSION performs a currency conversion for the value passed to the formal parameter amount. The result has the data type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the same technical attributes as the actual parameter passed to amount. The currency conversion is performed on the basis of the client-specific rules saved in the database tables TCUR... of package SFIB. These rules can be edited using transaction OB08.

The table below shows the actual parameters p1, p2, ... and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

amount

\-

Initial value

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

source\_currency

\-

Source currency from column WAERS of database table TCURC

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

target\_currency

\-

Target currency from column WAERS of database table TCURC

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

exchange\_rate\_date

\-

Exchange rate date for column GDATU of database table TCURR

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

exchange\_rate\_type

X

Exchange rate type from column KURST of database table TCURR, default value: "M"

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 4

[Literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

client

X, \-

Client whose rules are used to perform the currency conversion. Optional (if the current data source is client-specific). Default: Content of the client column of the current row

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

round

X

If "X" (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; else it is truncated

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_f1_literal.htm'\))

decimal\_shift

X

If "X" (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below).

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_f1_literal.htm'\))

decimal\_shift\_back

X

If "X" (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below).

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[Literal](javascript:call_link\('abencds_f1_literal.htm'\))

error\_handling

X

Error handling. If "FAIL\_ON\_ERROR" (default value), an error raises an exception; if "SET\_TO\_NULL", the result is reset to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"); if "KEEP\_UNCONVERTED", the source value is not changed.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 20

[Literal](javascript:call_link\('abencds_f1_literal.htm'\))

The [literals](javascript:call_link\('abencds_f1_literal.htm'\)) #cdsboolean.TRUE, #cdsboolean.true, #cdsboolean.FALSE, and #cdsboolean.false can also be specified for the input parameters round, decimal\_shift, and decimal\_shift\_back with the domain prefix CDSBOOLEAN (case-sensitive) or the literals 'true' or 'false' (not case-sensitive). Internally, these literals are handled like the values "X" or " ".

Handling the Decimal Places

-   The value passed is rounded to two decimal places before it is converted.

-   Before the conversion, the value passed is multiplied by 10 to the power of the number of decimal places of the source currency.

-   If the value "X" or "TRUE" is passed to the parameter decimal\_shift, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.

-   If the value "X" or "TRUE" is passed to the parameter decimal\_shift\_back, the result is divided by 10 to the power of two minus the number of decimal places of the target currency before it is converted.

-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

Note

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. No matter how the conversion is made, the same results cannot be expected as when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.

-   The parameter decimal\_shift is intended to set the source value to the number of decimal places of the source currency before the conversion. This assumes that its technical type, [CURR](javascript:call_link\('abenddic_currency_field.htm'\)), has two decimal places as usual. The parameter decimal\_shift\_back is intended to perform the reverse operation.

-   If the technical type [CURR](javascript:call_link\('abenddic_currency_field.htm'\)) of the source value does not have two decimal places, the function CURRENCY\_CONVERSION may display unexpected behavior.

Example

The following CDS view calls a currency conversion in the SELECT list for the column AMOUNT of the database table DEMO\_PRICES. The target currency must be passed as a parameter. In the event of an error, e.g. when a currency is not available, the result is reset to zero.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_CURRCO'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_curr\_conv
with parameters
to\_currency :abap.cuky( 5 ),
exc\_date :abap.dats
as select from
demo\_prices
{
id,
currency\_conversion( amount => amount,
source\_currency => currency,
round => 'X',
target\_currency => :to\_currency,
exchange\_rate\_date => :exc\_date,
error\_handling => 'SET\_TO\_NULL' ) as amount,
:to\_currency as currency
}    

The program DEMO\_CDS\_CURRENCY\_CONVERSION accesses the view in a SELECT statement. The target currency is passed here. As a comparison, the same conversion is also performed using the function module CONVERT\_TO\_LOCAL\_CURRENCY. As prerequisite for the example, the currencies and conversion rules must be available in the corresponding database tables.

Variant 3

... DECIMAL\_SHIFT( p1 => a1, p2 => a2, ... )

Effect

The function DECIMAL\_SHIFT sets the decimal separator of the value that is passed to the formal parameter amount in accordance with a currency. The result has the data type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 31 and 14 decimal places. Its value is produced by multiplying the input parameter rounded to two decimal places by 10 to the power of two minus the decimal places defined by the currency passed.

Possible currencies and their decimal places are based on the database tables TCUR... of the package SFIB.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

amount

\-

Initial value

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

currency

\-

Currency from column WAERS of database table TCURC; the associated decimal places determined from the column CURRDEC of TCURX

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

Field of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literal](javascript:call_link\('abencds_f1_literal.htm'\)), [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

error\_handling

X

Error handling. If "FAIL\_ON\_ERROR" (default value), an error raises an exception; if "SET\_TO\_NULL", the result is reset to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"); if "KEEP\_UNCONVERTED", the source value is not changed.

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 20

[Literal](javascript:call_link\('abencds_f1_literal.htm'\))

Note

If the type of the actual parameter passed to amount has two decimal places, its value is set to the number of decimal places of the passed currency.

Example

In the SELECT list, the following CDS view sets the decimal separator for the column AMOUNT of the database table DEMO\_PRICES in accordance with currencies with decimal places between 0 and 5. The column AMOUNT has two decimal places, which means that the decimal places are determined directly by the currencies passed. In the event of an error, e.g. when a currency is not available, the result is reset to zero.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_DCSHFT'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_decimal\_shift
as select from
demo\_prices
{
id,
@Semantics.amount.currencyCode:'currency'
amount as original,
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

The program DEMO\_CDS\_DECIMAL\_SHIFT accesses the view in a SELECT statement. As prerequisite for the example, the currencies and their number of decimal places must be available in the corresponding database tables.