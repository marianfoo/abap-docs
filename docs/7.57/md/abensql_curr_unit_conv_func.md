  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - Special Functions](javascript:call_link\('abenabap_sql_special_functions.htm'\)) →  [sql\_func - Conversion Functions](javascript:call_link\('abenabap_sql_conversion_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - Unit and Currency Conversion Functions, ABENSQL_CURR_UNIT_CONV_FUNC, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_func - Unit and Currency Conversion Functions

Syntax

... UNIT\_CONVERSION( p1 = a1, p2 = a2, ... )
|   CURRENCY\_CONVERSION( p1 = a1, p2 = a2, ... ) ...

Variants:

[1\. ... UNIT\_CONVERSION( p1 = a1, p2 = a2, ... )](#!ABAP_VARIANT_1@1@)
[2\. ... CURRENCY\_CONVERSION( p1 = a1, p2 = a2, ... )](#!ABAP_VARIANT_2@2@)

Effect

Functions for converting between units and between currencies in an ABAP SQL statement. The functions have [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry") p1, p2, ... (some of which are optional), to which actual parameters a1, a2, ... must be assigned using \= when a function is called.

Variant 1   

... UNIT\_CONVERSION( p1 = a1, p2 = a2, ... )

Effect

The function UNIT\_CONVERSION performs a unit conversion for the value passed to the formal parameter quantity. The result has the same data type as the formal parameter passed to quantity. The unit conversion is performed on the basis of the client-dependent rules saved in the DDIC database tables T006... of package SZME. These rules can be edited using transaction CUNI.

The table below shows the actual parameters p1, p2, ... and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

quantity

\-

Inbound value

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)); [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\))

source\_unit

\-

Source unit from column MSEHI of the DDIC database table T006

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

target\_unit

\-

Target unit from column MSEHI of the DDIC database table T006

[UNIT](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

client

X

Client whose rules are used to perform the unit conversion. Default: Content of the client column of the current row

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

on\_error

X

Error handling. If fail (default value), an error raises an exception; if set\_to\_null, the result is reset to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"); if keep\_unconverted, the result is reset to the input value

[Enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR of class SQL\_CURRENCY\_CONVERSION

Allowed [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry")

Example

The SELECT statement calls a unit conversion in its SELECT list for the column DEC3 of the DDIC database table DEMO\_EXPRESSIONS. In the event of an error, for example when a unit is not available, the result is reset to the null value.

DELETE FROM demo\_expressions.
DATA wa TYPE demo\_expressions.
wa = VALUE #( dec3 = \`2.213\` ).
INSERT INTO demo\_expressions VALUES @wa.
SELECT FROM demo\_expressions
  FIELDS dec3,
         unit\_conversion(
          quantity = dec3,
          source\_unit = unit\`MI\`,
          target\_unit = unit\`KM\`,
          on\_error = @sql\_unit\_conversion=>c\_on\_error-set\_to\_null )
         AS actual\_target\_quantity
  INTO TABLE @DATA(actual\_target\_unit).
cl\_demo\_output=>display( actual\_target\_unit ).

Variant 2   

... CURRENCY\_CONVERSION( p1 = a1, p2 = a2, ... )

Effect

The function CURRENCY\_CONVERSION performs a currency conversion for the value passed to the formal parameter amount. The result has the same data type as the formal parameter passed to amount. The currency conversion is performed on the basis of the client-dependent rules saved in the DDIC database tables TCUR... of package SFIB. These rules can be edited using transaction OB08.

The table below shows the actual parameters p1, p2, ... and their meaning.

Formal Parameter

Optional

Meaning

Data Type

Actual Parameter

amount

\-

Inbound value

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with two decimal places; [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\))

source\_currency

\-

Source currency from column WAERS of the DDIC database table TCURC

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

target\_currency

\-

Target currency from column WAERS of the DDIC database table TCURC

[CUKY](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

exchange\_rate\_date

\-

Exchange rate date for column GDATU of the DDIC database table TCURR

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

exchange\_rate\_type

X

Exchange rate type from column KURST of the DDIC database table TCURR, default value: M

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\))

client

X

Client whose rules are used to perform the currency conversion. Default: Content of the client column of the current row

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

[SQL expression](javascript:call_link\('abapsql_expr.htm'\)) except for the [null expression](javascript:call_link\('abensql_null.htm'\))

round

X

Not possible for amount type D34N; if X (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; otherwise it is truncated

ABAP type c of length 1

[Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\))

decimal\_shift

X

Not possible for amount type D34N; if X (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below).

ABAP type c of length 1

[Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\))

decimal\_shift\_back

X

Not possible for amount type D34N; if X (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below).

ABAP type c of length 1

[Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\))

on\_error

X

Error handling. If fail (default value), an error raises an exception; if set\_to\_null, the result is reset to the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry")

[Enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR of class SQL\_CURRENCY\_CONVERSION

Allowed [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry")

Handling the Decimal Places

-   The value passed is rounded to two decimal places before it is converted.
-   Before the conversion, the value is multiplied by 10 to the power of the number of decimal places of the source currency.
-   If the value X is passed to the parameter decimal\_shift, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.
-   If the value X is passed to the parameter decimal\_shift\_back, the result is divided by 10 to the power of two minus the number of decimal places of the target currency before it is converted.
-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

Hints

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. No matter how the conversion is made, the same results cannot be expected as when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.
-   The parameter decimal\_shift is intended to set the source value to the number of decimal places of the source currency before the conversion. Because of that, its technical type, [CURR](javascript:call_link\('abenddic_currency_field.htm'\)) must have two decimal places. The parameter decimal\_shift\_back is intended to perform the reverse operation.

Example

The following is an excerpt of the program DEMO\_ASQL\_CURRENCY\_CONVERSION. The SELECT statement calls a currency conversion in its SELECT list for the column AMOUNT of the DDIC database table DEMO\_PRICES. The target currency is passed as a host variable. In the event of an error, for example when a currency is not available, an exception is raised. As a comparison, the same conversion is also performed using the function module CONVERT\_TO\_LOCAL\_CURRENCY. As a prerequisite for the example, the currencies and conversion rules must be available in the corresponding DDIC database tables.

DATA currency TYPE c LENGTH 5 VALUE 'USD'.
...
SELECT FROM demo\_prices
       FIELDS id,
              currency\_conversion(
                amount = amount,
                source\_currency = currency,
                target\_currency = @currency,
                exchange\_rate\_date = @sy-datlo,
                round = 'X',
                on\_error =
                  @sql\_currency\_conversion=>c\_on\_error-fail )
                    AS amount,
                @currency AS currency
        INTO TABLE @FINAL(converted\_prices\_asql).

Example

In the program DEMO\_ASQL\_FUNC\_CURR\_CONV, the SQL function CURRENCY\_CONVERSION is used in a subquery of a MODIFY statement.

DATA currency TYPE c LENGTH 5 VALUE 'USD'.
...
MODIFY demo\_prices FROM
  ( SELECT FROM demo\_prices
           FIELDS id,
                  currency\_conversion(
                    amount = amount,
                    source\_currency = currency,
                    target\_currency = @currency,
                    exchange\_rate\_date = @sy-datlo,
                    on\_error =
                    @sql\_currency\_conversion=>c\_on\_error-fail )
                      AS amount,
                    @currency  AS currency
            ORDER BY id ).