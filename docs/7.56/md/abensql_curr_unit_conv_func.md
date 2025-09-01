---
title: "Syntax"
description: |
  ... CURRENCY_CONVERSION( p1 = a1, p2 = a2, ... ) ... Variants: 1. ... CURRENCY_CONVERSION( p1 = a1, p2 = a2, ... )(#!ABAP_VARIANT_1@1@) Effect Functions for converting between units currencies in an ABAP SQL statement. The functions have keyword parameters(https://help.sap.com/doc/abapdocu_75
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_curr_unit_conv_func.htm"
abapFile: "abensql_curr_unit_conv_func.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abensql", "curr", "unit", "conv", "func"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_special_functions.htm) →  [sql\_func - Conversion Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_conversion_functions.htm) → 

sql\_func - Unit and Currency Conversion Functions

Syntax

... CURRENCY\_CONVERSION( p1 = a1, p2 = a2, ... ) ...

Variants:

[1\. ... CURRENCY\_CONVERSION( p1 = a1, p2 = a2, ... )](#!ABAP_VARIANT_1@1@)

Effect

Functions for converting between units currencies in an ABAP SQL statement. The functions have [keyword parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry") p1, p2, ... (some of which are optional), to which actual parameters a1, a2, ... must be assigned using \= when a function is called.

Hint

Currently, only currency conversions are possible in ABAP SQL. But it is planned to implement [unit conversions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conv_func_unit_curr_v2.htm) as in ABAP CDS.

Variant 1   

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

[DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with two decimal places; [DECFLOAT34](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)

source\_currency

\-

Source currency from column WAERS of the DDIC database table TCURC

[CUKY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)

target\_currency

\-

Target currency from column WAERS of the DDIC database table TCURC

[CUKY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)

exchange\_rate\_date

\-

Exchange rate date for column GDATU of the DDIC database table TCURR

[DATS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)

exchange\_rate\_type

X

Exchange rate type from column KURST of the DDIC database table TCURR, default value: "M"

[CHAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)

client

X

Client whose rules are used to perform the currency conversion. Default: Content of the client column of the current row

[CLNT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[SQL expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm)

round

X

Not possible for amount type D34N; if X (default value), the intermediate result of the conversion is rounded to the end result using commercial rounding; otherwise it is truncated

ABAP type c of length 1

[Literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) or [host constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm)

decimal\_shift

X

Not possible for amount type D34N; if X (default value), the decimal places of the source value are moved as specified by the decimal places of the source currency (see below).

ABAP type c of length 1

[Literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) or [host constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm)

decimal\_shift\_back

X

Not possible for amount type D34N; if X (default value), the decimal places of the result are moved as specified by the decimal places of the target currency (see below).

ABAP type c of length 1

[Literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) or [host constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm)

on\_error

X

Error handling. If fail (default value), an error raises an exception; if set\_to\_null, the result is reset to the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry")

[Enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR of class SQL\_CURRENCY\_CONVERSION

Allowed [enumerated value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_value_glosry.htm "Glossary Entry")

Handling the Decimal Places

-   The value passed is rounded to two decimal places before it is converted.
-   Before the conversion, the value is multiplied by 10 to the power of the number of decimal places of the source currency.
-   If the value X is passed to the parameter decimal\_shift, the value passed is multiplied by 10 to the power of two minus the number of decimal places of the source currency before it is converted.
-   If the value X is passed to the parameter decimal\_shift\_back, the result is divided by 10 to the power of two minus the number of decimal places of the target currency before it is converted.
-   After the conversion, the result is divided by 10 to the power of the number of decimal places of the target currency.

Hint

-   The conversion is performed on the database, which means that part of the calculation takes place using different rounding rules from ABAP. No matter how the conversion is made, the same results cannot be expected as when using standard function modules for currency conversion, since these modules are generally less precise and round the intermediate results accordingly.
-   The parameter decimal\_shift is intended to set the source value to the number of decimal places of the source currency before the conversion. Because of that, its technical type, [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_currency_field.htm) must have two decimal places. The parameter decimal\_shift\_back is intended to perform the reverse operation.

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
        INTO TABLE @DATA(converted\_prices\_asql).

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