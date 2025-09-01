  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

Number Formats

The format of numbers is specified by the column XDEZP of the database table T005X. The options in the table below are available for displaying decimal separators and thousands separators:

XDEZP

Decimal Separator

Thousands Separator

" "

","

"."

X

"."

","

Y

","

" "

The setting for the decimal separator also affects the formatting of time stamps in [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry").

Example

Output of a number and time stamp with different separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
DATA(utcl) =  utclong\_current( ).
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{
     pack COUNTRY = 'US ' }\\n{
     utcl COUNTRY = 'DE ' }\\n{
     utcl COUNTRY = 'US ' }| ).

Executable Example

To see the display of a number in all possible formats, see the respective [example with character string templates](javascript:call_link\('abenstring_template_number_abexa.htm'\)).